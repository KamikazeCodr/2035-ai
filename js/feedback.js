/**
 * AI 2035: Native Feedback Form Controller
 * 
 * Manages form state, conditional arXiv paper review toggles, contact field visibility,
 * client-side validation, Cloudflare Turnstile security token acquisition,
 * and Cloudflare Worker submission.
 */

const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
const isTestMode = urlParams && (urlParams.get('test_mode') === '1' || urlParams.get('test_turnstile') === '1');

const FEEDBACK_CONFIG = {
  // Public Cloudflare Worker Endpoint (switches to local dev server if ?test_mode=1)
  workerUrl: isTestMode
    ? (urlParams.get('worker_url') || 'http://127.0.0.1:8787/')
    : 'https://ai2035-feedback-api.mlhevent.workers.dev/',
  // Public Cloudflare Turnstile Site Key (switches to official Always-Pass 1x000...AA if ?test_mode=1)
  turnstileSiteKey: isTestMode
    ? '1x00000000000000000000AA'
    : '0x4AAAAAAFk_5j7OY6GctyN2'
};

export class FeedbackController {
  constructor() {
    this.form = document.getElementById('native-feedback-form');
    if (!this.form) return;

    // Elements
    this.nameInput = document.getElementById('feedback-name');
    this.messageInput = document.getElementById('feedback-message');
    this.nameError = document.getElementById('feedback-name-error');
    this.messageError = document.getElementById('feedback-message-error');

    this.paperYesBtn = document.getElementById('feedback-paper-yes');
    this.paperNoBtn = document.getElementById('feedback-paper-no');
    this.paperReviewVal = document.getElementById('feedback-paper-review-val');

    this.toggleWrapper = document.getElementById('feedback-contact-toggle-wrapper');
    this.contactToggle = document.getElementById('feedback-contact-toggle');
    this.toggleVal = document.getElementById('feedback-contact-toggle-val');

    this.contactFields = document.getElementById('feedback-contact-fields');
    this.emailInput = document.getElementById('feedback-email');
    this.socialInput = document.getElementById('feedback-social');
    this.contactError = document.getElementById('feedback-contact-error');

    this.turnstileContainer = document.getElementById('feedback-turnstile-container');
    this.submitBtn = document.getElementById('feedback-submit-btn');
    this.statusMsg = document.getElementById('feedback-status-msg');

    // State
    this.state = {
      paperReview: null, // 'yes' | 'no' | null
      contactToggleOn: true,
      submitting: false
    };

    // Turnstile State
    this.turnstileWidgetId = null;
    this.turnstileToken = null;
    this.turnstilePendingResolve = null;
    this.turnstilePendingReject = null;

    this.init();
    this.initTurnstile();
  }

  init() {
    // Paper review buttons (Yes / No)
    this.paperYesBtn.addEventListener('click', () => this.handlePaperReviewSelect('yes'));
    this.paperNoBtn.addEventListener('click', () => this.handlePaperReviewSelect('no'));

    // Contact details toggle switch
    this.contactToggle.addEventListener('click', () => this.handleToggleSwitch());
    this.contactToggle.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.handleToggleSwitch();
      }
    });

    // Clear validation errors upon user input
    this.nameInput.addEventListener('input', () => this.clearError(this.nameError, this.nameInput));
    this.messageInput.addEventListener('input', () => this.clearError(this.messageError, this.messageInput));
    this.emailInput.addEventListener('input', () => this.clearContactErrors());
    this.socialInput.addEventListener('input', () => this.clearContactErrors());

    // Form submission
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  /**
   * Initializes Cloudflare Invisible Turnstile widget
   */
  initTurnstile() {
    if (!this.turnstileContainer) return;

    const mountTurnstile = () => {
      if (!window.turnstile || this.turnstileWidgetId !== null) return;

      try {
        this.turnstileWidgetId = window.turnstile.render(this.turnstileContainer, {
          sitekey: FEEDBACK_CONFIG.turnstileSiteKey,
          action: 'feedback_submission',
          execution: 'execute',
          appearance: 'interaction-only',
          callback: (token) => {
            this.turnstileToken = token;
            if (this.turnstilePendingResolve) {
              const resolve = this.turnstilePendingResolve;
              this.turnstilePendingResolve = null;
              this.turnstilePendingReject = null;
              resolve(token);
            }
          },
          'error-callback': (errorCode) => {
            this.turnstileToken = null;
            if (this.turnstilePendingReject) {
              const reject = this.turnstilePendingReject;
              this.turnstilePendingResolve = null;
              this.turnstilePendingReject = null;
              reject(new Error(`Turnstile security verification failed (${errorCode || 'error'})`));
            }
          },
          'expired-callback': () => {
            this.turnstileToken = null;
          },
          'timeout-callback': () => {
            this.turnstileToken = null;
            if (this.turnstilePendingReject) {
              const reject = this.turnstilePendingReject;
              this.turnstilePendingResolve = null;
              this.turnstilePendingReject = null;
              reject(new Error('Turnstile security verification timed out. Please try submitting again.'));
            }
          }
        });
      } catch (err) {
        console.warn('[Feedback] Turnstile render initialization:', err);
      }
    };

    if (window.turnstile && typeof window.turnstile.ready === 'function') {
      window.turnstile.ready(mountTurnstile);
    } else {
      let attempts = 0;
      const poll = setInterval(() => {
        attempts++;
        if (window.turnstile && typeof window.turnstile.ready === 'function') {
          clearInterval(poll);
          window.turnstile.ready(mountTurnstile);
        } else if (attempts > 50) {
          clearInterval(poll);
        }
      }, 100);
    }
  }

  /**
   * Obtains a fresh Turnstile token on-demand when submitting
   */
  async obtainTurnstileToken() {
    if (window.__TURNSTILE_TOKEN_OVERRIDE__) {
      return window.__TURNSTILE_TOKEN_OVERRIDE__;
    }
    if (this.turnstileToken) {
      return this.turnstileToken;
    }

    if (!window.turnstile) {
      throw new Error('Security verification service could not be loaded. Please check your network connection.');
    }

    if (this.turnstileWidgetId === null && this.turnstileContainer) {
      this.initTurnstile();
    }

    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.turnstilePendingResolve = null;
        this.turnstilePendingReject = null;
        reject(new Error('Security verification timed out. Please try again.'));
      }, 15000);

      this.turnstilePendingResolve = (token) => {
        clearTimeout(timer);
        resolve(token);
      };

      this.turnstilePendingReject = (err) => {
        clearTimeout(timer);
        reject(err);
      };

      try {
        if (this.turnstileWidgetId !== null) {
          window.turnstile.execute(this.turnstileWidgetId);
        } else if (this.turnstileContainer) {
          window.turnstile.execute(this.turnstileContainer);
        } else {
          clearTimeout(timer);
          reject(new Error('Security widget container not found.'));
        }
      } catch (e) {
        clearTimeout(timer);
        reject(new Error('Failed to initiate security check: ' + (e.message || 'unknown error')));
      }
    });
  }

  /**
   * Resets the Turnstile widget after a submission attempt
   */
  resetTurnstile() {
    this.turnstileToken = null;
    this.turnstilePendingResolve = null;
    this.turnstilePendingReject = null;

    if (window.turnstile && this.turnstileWidgetId !== null) {
      try {
        window.turnstile.reset(this.turnstileWidgetId);
      } catch (err) {
        console.warn('[Feedback] Turnstile reset:', err);
      }
    }
  }

  handlePaperReviewSelect(choice) {
    if (choice === 'yes') {
      this.state.paperReview = 'yes';
      this.paperReviewVal.value = 'yes';
      this.paperYesBtn.classList.add('active');
      this.paperYesBtn.setAttribute('aria-checked', 'true');
      this.paperNoBtn.classList.remove('active');
      this.paperNoBtn.setAttribute('aria-checked', 'false');

      // Reveal toggle (defaults to ON)
      this.state.contactToggleOn = true;
      this.toggleVal.value = 'true';
      this.contactToggle.setAttribute('aria-checked', 'true');
      this.toggleWrapper.style.display = 'block';

      // Reveal contact fields
      this.contactFields.style.display = 'block';
    } else {
      this.state.paperReview = 'no';
      this.paperReviewVal.value = 'no';
      this.paperNoBtn.classList.add('active');
      this.paperNoBtn.setAttribute('aria-checked', 'true');
      this.paperYesBtn.classList.remove('active');
      this.paperYesBtn.setAttribute('aria-checked', 'false');

      // Hide toggle and contact fields
      this.toggleWrapper.style.display = 'none';
      this.contactFields.style.display = 'none';

      // Clear all contact values and errors
      this.clearContactData();
    }
    this.clearStatus();
  }

  handleToggleSwitch() {
    this.state.contactToggleOn = !this.state.contactToggleOn;
    const isOn = this.state.contactToggleOn;

    this.contactToggle.setAttribute('aria-checked', isOn ? 'true' : 'false');
    this.toggleVal.value = isOn ? 'true' : 'false';

    if (isOn) {
      this.contactFields.style.display = 'block';
    } else {
      this.contactFields.style.display = 'none';
      this.clearContactData();
    }
    this.clearStatus();
  }

  clearContactData() {
    this.emailInput.value = '';
    this.socialInput.value = '';
    this.clearContactErrors();
  }

  clearError(errorEl, inputEl) {
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('is-visible');
    }
    if (inputEl) {
      inputEl.classList.remove('input-invalid');
    }
  }

  clearContactErrors() {
    this.clearError(this.contactError);
    this.emailInput.classList.remove('input-invalid');
    this.socialInput.classList.remove('input-invalid');
  }

  clearStatus() {
    if (this.statusMsg) {
      this.statusMsg.textContent = '';
      this.statusMsg.className = 'feedback-status-msg';
    }
  }

  showStatus(message, type = 'info') {
    if (!this.statusMsg) return;
    this.statusMsg.textContent = message;
    this.statusMsg.className = `feedback-status-msg feedback-status-${type}`;
  }

  showError(errorEl, message, inputEl = null) {
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('is-visible');
    }
    if (inputEl) {
      inputEl.classList.add('input-invalid');
      inputEl.focus();
    }
  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  validateUrlOrSocial(input) {
    const trimmed = input.trim();
    if (!trimmed) return false;
    return /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i.test(trimmed);
  }

  validate() {
    let isValid = true;
    this.clearStatus();

    // 1. Name validation (required)
    const nameVal = this.nameInput.value.trim();
    if (!nameVal) {
      this.showError(this.nameError, 'Please enter your name or an alias.', this.nameInput);
      isValid = false;
    } else {
      this.clearError(this.nameError, this.nameInput);
    }

    // 2. Feedback message validation (required, min 5 chars)
    const msgVal = this.messageInput.value.trim();
    if (!msgVal) {
      this.showError(this.messageError, 'Please enter your feedback or comments.', this.messageInput);
      isValid = false;
    } else if (msgVal.length < 5) {
      this.showError(this.messageError, 'Please provide slightly more detail (minimum 5 characters).', this.messageInput);
      isValid = false;
    } else {
      this.clearError(this.messageError, this.messageInput);
    }

    // 3. Conditional contact details validation
    if (this.state.paperReview === 'yes' && this.state.contactToggleOn) {
      const emailVal = this.emailInput.value.trim();
      const socialVal = this.socialInput.value.trim();

      if (!emailVal && !socialVal) {
        this.showError(this.contactError, 'Please provide at least one contact method (email or social profile), or toggle off contact details.');
        isValid = false;
      } else {
        let hasFormatError = false;
        if (emailVal && !this.validateEmail(emailVal)) {
          this.showError(this.contactError, 'Please enter a valid email address.', this.emailInput);
          hasFormatError = true;
          isValid = false;
        }
        if (socialVal && !this.validateUrlOrSocial(socialVal)) {
          this.showError(this.contactError, 'Please enter a valid URL or profile handle.', this.socialInput);
          hasFormatError = true;
          isValid = false;
        }
        if (!hasFormatError) {
          this.clearContactErrors();
        }
      }
    } else {
      this.clearContactErrors();
    }

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Prevent duplicate submissions
    if (this.state.submitting) {
      return;
    }

    if (!this.validate()) {
      return;
    }

    this.clearStatus();
    this.setSubmitting(true, 'Verifying...');

    // Obtain Turnstile Token
    let turnstileToken = null;
    try {
      turnstileToken = await this.obtainTurnstileToken();
    } catch (err) {
      this.showStatus(err.message || 'Security verification failed. Please try again.', 'error');
      this.setSubmitting(false);
      this.resetTurnstile();
      return;
    }

    this.submitBtn.textContent = 'Submitting...';

    // Assemble payload
    const shareContact = (this.state.paperReview === 'yes') && this.state.contactToggleOn;
    const payload = {
      name: this.nameInput.value.trim(),
      feedback: this.messageInput.value.trim(),
      arxivReview: this.state.paperReview || 'no',
      shareContact: shareContact,
      email: shareContact ? (this.emailInput.value.trim() || null) : null,
      socialProfile: shareContact ? (this.socialInput.value.trim() || null) : null,
      turnstileToken: turnstileToken
    };

    try {
      const response = await fetch(FEEDBACK_CONFIG.workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      let data = null;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        data = await response.json().catch(() => null);
      } else {
        const rawText = await response.text().catch(() => '');
        data = { rawText };
      }

      if (response.ok && data && data.success) {
        this.showStatus('Thank you! Your feedback has been received.', 'success');
        this.resetForm();
      } else {
        let errMsg = 'Unable to submit feedback. Please try again.';
        if (data && data.error) {
          errMsg = data.error;
        } else if (data && data.rawText === 'Hello World!') {
          errMsg = 'Backend worker is awaiting production deployment. Please deploy src/index.js to Cloudflare.';
        } else if (response.status === 403) {
          errMsg = 'Security verification failed on server. Please refresh and try again.';
        } else if (response.status >= 500) {
          errMsg = 'Feedback notification service is temporarily unavailable. Please try again later.';
        }
        this.showStatus(errMsg, 'error');
      }
    } catch (err) {
      this.showStatus('Network error: unable to reach feedback server. Please check your connection.', 'error');
    } finally {
      this.setSubmitting(false);
      this.resetTurnstile();
    }
  }

  setSubmitting(isSubmitting, label = 'Submitting...') {
    this.state.submitting = isSubmitting;
    if (isSubmitting) {
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = label;
      this.submitBtn.classList.add('is-loading');
    } else {
      this.submitBtn.disabled = false;
      this.submitBtn.textContent = 'Submit';
      this.submitBtn.classList.remove('is-loading');
    }
  }

  resetForm() {
    this.nameInput.value = '';
    this.messageInput.value = '';
    this.emailInput.value = '';
    this.socialInput.value = '';
    this.clearContactErrors();
    this.clearError(this.nameError, this.nameInput);
    this.clearError(this.messageError, this.messageInput);

    // Reset paper review buttons
    this.state.paperReview = null;
    this.paperReviewVal.value = '';
    this.paperYesBtn.classList.remove('active');
    this.paperYesBtn.setAttribute('aria-checked', 'false');
    this.paperNoBtn.classList.remove('active');
    this.paperNoBtn.setAttribute('aria-checked', 'false');

    // Reset toggle and hide contact fields
    this.state.contactToggleOn = true;
    this.toggleVal.value = 'true';
    this.contactToggle.setAttribute('aria-checked', 'true');
    this.toggleWrapper.style.display = 'none';
    this.contactFields.style.display = 'none';
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new FeedbackController());
} else {
  new FeedbackController();
}
