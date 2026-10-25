/**
 * AI-2035 (Cybersecurity Standpoint)
 * Author: Aditya Singh
 * Plain-language narrative dataset, national capability comparisons, footnotes data, and 2031 geopolitical branching
 */

export const FOOTNOTES_DATA = {
  1: {
    number: 1,
    type: "Evidence",
    text: "OpenAI and Microsoft threat intelligence documenting Iranian threat actor CyberAv3ngers using LLMs to research industrial equipment vulnerabilities, default credentials, and reconnaissance scripts.",
    sources: [
      {
        title: "CyberAv3ngers: Iran-linked cyber research activity",
        url: "https://openai.com/index/disrupting-malicious-uses-of-ai-cyberav3ngers/"
      }
    ]
  },
  2: {
    number: 2,
    type: "Evidence",
    text: "Stanford HAI 2025 AI Index Report documenting broad national assistant-level capability and closing performance differentials during 2024.",
    sources: [
      {
        title: "The 2025 AI Index Report",
        url: "https://hai.stanford.edu/ai-index/2025-ai-index-report"
      }
    ]
  },
  3: {
    number: 3,
    type: "Evidence",
    text: "Anthropic Threat Intelligence Report documenting state-sponsored cyber operations targeting Vietnamese telecommunications, government databases, and agricultural systems across 12 of 14 MITRE ATT&CK tactics.",
    sources: [
      {
        title: "Threat Intelligence Report",
        url: "https://www-cdn.anthropic.com/b2a76c6f6992465c09a6f2fce282f6c0cea8c200.pdf"
      }
    ]
  },
  4: {
    number: 4,
    type: "Evidence",
    text: "Anthropic Threat Intelligence Report documenting automated threat actor tooling compromising 17 commercial organizations in a single month and novice threat actors creating ransomware payloads.",
    sources: [
      {
        title: "Threat Intelligence Report",
        url: "https://www-cdn.anthropic.com/b2a76c6f6992465c09a6f2fce282f6c0cea8c200.pdf"
      }
    ]
  },
  5: {
    number: 5,
    type: "Evidence",
    text: "Anthropic evaluations demonstrating autonomous zero-day discovery, memory corruption exploit synthesis, and multi-vulnerability exploit chaining.",
    sources: [
      {
        title: "Assessing Claude Mythos Preview's cybersecurity capabilities",
        url: "https://www.anthropic.com/research/mythos-preview"
      },
      {
        title: "Measuring LLMs' ability to develop exploits",
        url: "https://www.anthropic.com/research/exploit-evals"
      }
    ]
  },
  6: {
    number: 6,
    type: "Evidence",
    text: "Anthropic controlled access framework giving critical infrastructure defenders and verified defensive teams early model access.",
    sources: [
      {
        title: "Project Glasswing",
        url: "https://www.anthropic.com/glasswing"
      }
    ]
  },
  7: {
    number: 7,
    type: "Evidence",
    text: "Independent evaluations conducted by the UK AI Safety Institute (AISI) on enterprise corporate ranges (6/10) and simulated industrial control environments (3/10).",
    sources: [
      {
        title: "How fast is autonomous AI cyber capability advancing?",
        url: "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
      },
      {
        title: "Evaluation of Claude Mythos Preview's cyber capabilities",
        url: "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities"
      }
    ]
  },
  8: {
    number: 8,
    type: "Evidence",
    text: "UK AISI evaluations finding leading Chinese open-weight models roughly 4 to 7 months behind the US closed frontier, and assessing Kimi K3's public-to-open-weight release timetable.",
    sources: [
      {
        title: "How far behind the frontier are leading open-weight models on cyber?",
        url: "https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber"
      },
      {
        title: "Preliminary assessment of Kimi K3's cyber capabilities",
        url: "https://www.aisi.gov.uk/blog/preliminary-assessment-of-kimi-k3s-cyber-capabilities"
      }
    ]
  },
  9: {
    number: 9,
    type: "Scenario assumption",
    text: "Scenario assumption: Europe's roughly 12-month domestic frontier lag relative to the US closed frontier across capability thresholds.",
    sources: []
  },
  10: {
    number: 10,
    type: "Forecast basis",
    text: "Forecast assumption based on autonomous intrusion execution and defensive evasion trajectory evaluated across cyber ranges.",
    sources: [
      {
        title: "How fast is autonomous AI cyber capability advancing?",
        url: "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
      },
      {
        title: "Evaluation of Claude Mythos Preview's cyber capabilities",
        url: "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities"
      }
    ]
  },
  11: {
    number: 11,
    type: "Forecast basis",
    text: "Forecast assumption regarding the transition from early, unreliable ICS/SCADA manipulation to reliable autonomous operation across industrial control protocols (Modbus, DNP3).",
    sources: [
      {
        title: "How fast is autonomous AI cyber capability advancing?",
        url: "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
      },
      {
        title: "Evaluation of Claude Mythos Preview's cyber capabilities",
        url: "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities"
      }
    ]
  },
  12: {
    number: 12,
    type: "Forecast basis",
    text: "Forecast assumption regarding multi-week agent persistence, dynamic credential recovery, and supply chain exploration without continuous human prompting.",
    sources: [
      {
        title: "How fast is autonomous AI cyber capability advancing?",
        url: "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
      }
    ]
  },
  13: {
    number: 13,
    type: "Forecast assumption",
    text: "Forecast assumption: thousands of parallel agents supervised by a small team, enabling offensive concurrency to substitute for model capability.",
    sources: []
  },
  14: {
    number: 14,
    type: "Scenario assumption",
    text: "Scenario assumption: Taiwan war in 2031 as the branch point between technological consolidation and global capability proliferation.",
    sources: []
  },
  15: {
    number: 15,
    type: "Scenario assumption",
    text: "Scenario assumption: Chinese domestic pre-hardening before wider model release, creating an asymmetric window of defensive insulation.",
    sources: []
  },
  16: {
    number: 16,
    type: "Scenario assumption with real-world basis",
    text: "Scenario assumption regarding bilateral EU-China semiconductor servicing agreements, based on real-world ASML DUV export controls, critical raw materials dependencies, and diplomatic frameworks.",
    sources: [
      {
        title: "Advanced semiconductor manufacturing export controls",
        url: "https://www.government.nl/latest/news/2024/09/06/the-netherlands-expands-export-control-measure-advanced-semiconductor-manufacturing-equipment"
      },
      {
        title: "Controls on advanced semiconductor manufacturing equipment tightened",
        url: "https://www.government.nl/latest/news/2025/01/15/klever-export-controls-on-advanced-semiconductor-manufacturing-equipment-to-be-tightened"
      },
      {
        title: "Statement regarding export control regulations of the Dutch government",
        url: "https://www.asml.com/en/news/press-releases/2023/statement-regarding-export-control-regulations-dutch-government"
      },
      {
        title: "25th EU-China summit",
        url: "https://www.consilium.europa.eu/en/press/press-releases/2025/07/24/25th-eu-china-summit-eu-press-release/"
      },
      {
        title: "Critical raw materials explained",
        url: "https://www.consilium.europa.eu/en/infographics/critical-raw-materials-explained/"
      }
    ]
  },
  17: {
    number: 17,
    type: "Evidence",
    text: "Reporting on Chinese domestic development and production ramp of immersion DUV lithography systems to reduce reliance on foreign supply chains.",
    sources: [
      {
        title: "China starts production of home-grown immersion DUV chipmaking tools, source says",
        url: "https://www.reuters.com/world/china/china-starts-production-home-grown-immersion-duv-chipmaking-tools-source-says-2026-07-28/"
      }
    ]
  }
};

export const TIMELINE_DATA = [
  {
    id: "year-2024",
    year: 2024,
    displayDate: "2024",
    navLabel: "2024",
    title: "2024: C0 - AI as a Research Assistant",
    level: "C0",
    levelName: "AI Research Assistant",
    status: "OBSERVED",
    lossCentral: 2,
    lossRange: "$1B - $4B",
    usModel: "GPT-4 class (C0 Frontier)",
    chinaModel: "GLM-4 / DeepSeek V2 (C0 Assistant Era)",
    europeModel: "Mistral-class models (C0 Assistant Era)",
    usStatus: "Frontier Leader · Fast Assistant",
    chinaStatus: "Narrowing gap · Broad assistant capability",
    europeStatus: "Smaller ecosystem · Relies more on US platforms",
    keyMilestone: "AI acts like a high-speed research intern, reading technical manuals in seconds and finding default passwords.",
    storyHtml: `
      <p class="story-lead">In 2024, artificial intelligence entered cybersecurity primarily as a high-speed research assistant. Human operators still directed every step, but AI drastically cut the time required to analyze technical documents and discover known weaknesses.</p>
      
      <p>Security researchers at OpenAI and Microsoft observed an Iranian-linked threat group called <em>CyberAv3ngers</em> using AI models to read manuals for industrial equipment (such as municipal water pumps and electrical switches), look up default factory passwords, and generate basic network-scanning scripts.<sup class="footnote-ref" data-note="1" tabindex="0" role="button" aria-label="Footnote 1">1</sup> The AI did not invent new cyber weapons; instead, it acted like a tireless assistant that could read hundreds of pages of engineering manuals in seconds.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Frontier leader with models like GPT-4, accelerating technical research, code analysis, and routine scripting.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Operates in the same broad assistant-capability era, with models such as GLM-4 and DeepSeek V2. Leading Chinese models narrowed much of the wider performance gap with US models during 2024.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Also operates in the assistant-capability era through models such as Mistral, but with a much smaller domestic frontier-model ecosystem than the United States.<sup class="footnote-ref" data-note="2" tabindex="0" role="button" aria-label="Footnote 2">2</sup></div>
      </div>
    `
  },
  {
    id: "year-2025",
    year: 2025,
    displayDate: "2025",
    navLabel: "2025",
    title: "2025: C1 - The One-Person Cyber Team",
    level: "C1",
    levelName: "Agentic Assistant",
    status: "OBSERVED",
    lossCentral: 5,
    lossRange: "$2B - $10B",
    usModel: "Claude 3.5 / GPT-4.5 (C1 Frontier)",
    chinaModel: "DeepSeek V3 / GLM-4.5 (C1 Agentic Era)",
    europeModel: "Mistral Large / Codestral (C1 Era)",
    usStatus: "Frontier Leader · Tool Execution",
    chinaStatus: "Fast Follower · Agentic CLI Tools",
    europeStatus: "Capable Coding Models · Open Ecosystem",
    keyMilestone: "A single operator using AI executes complex attack chains that previously required a specialized team.",
    storyHtml: `
      <p class="story-lead">By 2025, AI transitioned from passively answering questions to actively executing multi-step operations. The biggest breakthrough was labor compression: one person could now accomplish what previously required an entire unit of specialized engineers.</p>

      <p>Anthropic documented a state-linked Chinese threat group leveraging Claude throughout a nine-month cyber campaign targeting critical national infrastructure in <strong>Vietnam</strong>. The targeted infrastructure included major Vietnamese telecommunications providers, government databases, and agricultural-management systems.</p>
      
      <p>The AI model assisted the human attackers across 12 of the 14 standard stages of a cyber attack (MITRE ATT&CK framework) including building reconnaissance tools, organizing stolen access credentials, mapping out lateral movement paths between internal corporate networks, and analyzing operational security to help attackers avoid detection and erase their digital traces.<sup class="footnote-ref" data-note="3" tabindex="0" role="button" aria-label="Footnote 3">3</sup> Rather than coordinating a dozen specialists, a single operator used the AI to handle the heavy technical legwork.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Leads the C1 frontier with models capable of running command-line terminals and executing sequential multi-step plans.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Follows the frontier closely, directly integrating autonomous agent tooling into state-directed operations.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Follows with capable general and coding models, but has fewer end-to-end operational agent frameworks.</div>
      </div>

      <p>In parallel incidents, cybercriminal groups used automated AI tools to compromise 17 commercial organizations in a single month, while non-programmers used AI to assemble functional ransomware payloads.<sup class="footnote-ref" data-note="4" tabindex="0" role="button" aria-label="Footnote 4">4</sup></p>
    `
  },
  {
    id: "year-2026",
    year: 2026,
    displayDate: "2026",
    navLabel: "2026",
    title: "2026: C2 - AI Discovers Unknown Vulnerabilities On Its Own",
    level: "C2",
    levelName: "Autonomous Exploit Researcher",
    status: "OBSERVED",
    lossCentral: 12,
    lossRange: "$5B - $25B",
    usModel: "Claude Mythos Preview / OpenAI Daybreak (C2 Frontier)",
    chinaModel: "GLM-5.2 / DeepSeek V4-Pro (4 to 7 months behind)",
    europeModel: "Mistral Medium 3.5 (about 12 months behind)",
    usStatus: "Frontier Leader · Gated Access (Glasswing)",
    chinaStatus: "4 to 7 Months Behind · Rapid Open Releases",
    europeStatus: "About 12 Months Behind · Domestic Ecosystem",
    keyMilestone: "AI independently discovers undisclosed security vulnerabilities ('zero-days') and chains them into working exploits.",
    storyHtml: `
      <p class="story-lead">In 2026, AI crossed a decisive threshold: it began discovering brand-new, previously undisclosed security vulnerabilities in complex software completely autonomously.</p>

      <p>Anthropic's Claude Mythos demonstrated the ability to inspect complex software source code, find multiple hidden flaws, and chain them together into working exploits that bypass modern security barriers.<sup class="footnote-ref" data-note="5" tabindex="0" role="button" aria-label="Footnote 5">5</sup> Recognizing the high stakes for critical infrastructure, Anthropic kept the model strictly gated under Project Glasswing, providing controlled access to trusted defenders.<sup class="footnote-ref" data-note="6" tabindex="0" role="button" aria-label="Footnote 6">6</sup> In independent evaluations conducted by the UK AI Safety Institute (AISI), Mythos successfully penetrated simulated corporate network environments in 6 out of 10 tests and industrial control systems in 3 out of 10 tests.<sup class="footnote-ref" data-note="7" tabindex="0" role="button" aria-label="Footnote 7">7</sup></p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Leads the C2 frontier, strictly gating model weights behind defensive verification programs to safeguard critical infrastructure.</div>
        <div class="nat-box-item cn"><strong>China:</strong> AISI's cyber evaluations place leading Chinese open-weight models roughly 4 to 7 months behind the strongest US closed frontier. Kimi K3 was publicly released on July 16 and was slated for open-weight release by July 27.<sup class="footnote-ref" data-note="8" tabindex="0" role="button" aria-label="Footnote 8">8</sup></div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Trails by roughly 12 months domestically.<sup class="footnote-ref" data-note="9" tabindex="0" role="button" aria-label="Footnote 9">9</sup> Because Chinese open-weight models trail the US by only 4 to 7 months, European hospitals, utilities, and businesses face freely downloadable attack capabilities that exceed Europe's own domestic AI models.</div>
      </div>

      <p>This dynamic created a fundamental asymmetry: <strong>the United States leads on frontier capability, but China drives worldwide open proliferation.</strong></p>
    `
  },
  {
    id: "year-2027",
    year: 2027,
    displayDate: "2027",
    navLabel: "2027",
    title: "2027: C3 - Operating Inside Defended Corporate Networks",
    level: "C3",
    levelName: "Defended-Enterprise Operator",
    status: "FORECAST",
    lossCentral: 22,
    lossRange: "$10B - $40B",
    usModel: "US Closed Frontier (C3 Tier)",
    chinaModel: "Chinese Open Frontier (4 to 7 months behind)",
    europeModel: "European Domestic Frontier (about 12 months behind)",
    usStatus: "C3 Internal · Deployed for National Defense",
    chinaStatus: "Near-C3 Downloadable Weights Diffuse Globally",
    europeStatus: "C2 Domestic · Defending Corporate Networks",
    keyMilestone: "AI handles live security alarms in real time, pauses, erases traces, and finds quieter pathways.",
    storyHtml: `
      <p class="story-lead">In this scenario, AI systems advance past simple targets to operate inside well-defended corporate networks equipped with active monitoring and alarm systems.<sup class="footnote-ref" data-note="10" tabindex="0" role="button" aria-label="Footnote 10">10</sup></p>

      <p>When an AI agent triggers an intrusion alert, it immediately recognizes the security alert, pauses its actions, erases its digital footprint, and selects an alternate, stealthier route before human security analysts can respond. As Chinese open-weight models match these capabilities 4 to 7 months later, tools capable of infiltrating hardened enterprise networks become widely accessible across the internet.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Reaches C3 internally, deploying these systems to continuously scan and shield government and utility networks.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Reaches C3 within 4 to 7 months. Freely downloadable models allow non-state proxy groups to challenge well-defended enterprise networks.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Operates at C2 domestically (about 12 months behind US), relying heavily on US cloud security vendors for incident mitigation.</div>
      </div>

      <p>Annual worldwide cyber losses climb to $22 Billion as automated network intrusion capabilities diffuse globally.</p>
    `
  },
  {
    id: "year-2028",
    year: 2028,
    displayDate: "2028",
    navLabel: "2028",
    title: "2028: C4 - AI Manipulates Physical Machinery & Industrial Controls",
    level: "C4",
    levelName: "Reliable Industrial Controls Operator",
    status: "FORECAST",
    lossCentral: 40,
    lossRange: "$20B - $70B",
    usModel: "US Closed Frontier (C4 Tier)",
    chinaModel: "Chinese Open Frontier (C4 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C3 Tier, about 12 months behind)",
    usStatus: "C4 Classified · Power Grid Defense Partnerships",
    chinaStatus: "C4 Open Weights Surpass European Domestic AI",
    europeStatus: "C3 Domestic · Critical Infrastructure Vulnerability",
    keyMilestone: "AI crosses from digital systems to physical machinery, understanding industrial controls for power plants and water systems.",
    storyHtml: `
      <p class="story-lead">In this scenario, AI crosses the boundary from ordinary IT into reliable operation across industrial control systems.<sup class="footnote-ref" data-note="11" tabindex="0" role="button" aria-label="Footnote 11">11</sup></p>

      <p>Frontier models can now read, analyze, and manipulate specialized industrial communication protocols (such as Modbus and DNP3) used by electrical power substations, water treatment facilities, and manufacturing plants. The AI understands how digital commands translate into physical actions such as how changing a valve setting or altering a voltage regulator impacts physical machinery.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Deploys C4 models in secure partnerships to audit and protect power grids and water treatment networks.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Follows 4 to 7 months later. Open releases place industrial-control exploitation tools in the hands of numerous global actors.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Reaches C3 domestically (about 12 months behind US). European regional utilities, ports, and transport systems face threats driven by open models that exceed Europe's domestic defensive tools.</div>
      </div>

      <p>Annual modelled economic loss exposure rises to $40 Billion as cyber-physical threats proliferate.</p>
    `
  },
  {
    id: "year-2029",
    year: 2029,
    displayDate: "2029",
    navLabel: "2029",
    title: "2029: C5 - Multi-Week Autonomous Campaigns Without Human Input",
    level: "C5",
    levelName: "Persistent Campaign Agent",
    status: "FORECAST",
    lossCentral: 70,
    lossRange: "$35B - $120B",
    usModel: "US Closed Frontier (C5 Tier)",
    chinaModel: "Chinese Open Frontier (C5 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C4 Tier, about 12 months behind)",
    usStatus: "C5 Sovereign · Continuous Defense Agents",
    chinaStatus: "Persistent Multi-Agent Frameworks Diffuse",
    europeStatus: "C4 Domestic · Supply Chain Disruption",
    keyMilestone: "AI agents sustain complex infiltration campaigns across weeks without requiring continuous human oversight.",
    storyHtml: `
      <p class="story-lead">Human operators no longer need to manage intrusions manually. In this scenario, AI agents can sustain complex, multi-week campaigns without continuous human management.<sup class="footnote-ref" data-note="12" tabindex="0" role="button" aria-label="Footnote 12">12</sup></p>

      <p>If network defenders revoke a stolen password or close an open port, the autonomous agent retains its campaign objectives, scans for alternative entry points through third-party suppliers, and resumes the operation quietly. Global supply chains face severe challenges as persistent AI agents systematically map and exploit vulnerabilities across interconnected vendors.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Deploys C5 defensive agents that autonomously detect intruders, patch compromised pathways, and isolate threats 24/7.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Follows 4 to 7 months later, open-sourcing autonomous campaign frameworks that allow smaller groups to conduct enterprise-scale operations.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Reaches C4 domestically (about 12 months behind US), experiencing widespread supply chain disruptions across manufacturing sectors.</div>
      </div>

      <p>Annual economic loss exposure expands to $70 Billion as unmonitored autonomous campaigns become standard practice.</p>
    `
  },
  {
    id: "year-2030",
    year: 2030,
    displayDate: "2030",
    navLabel: "2030",
    title: "2030: C6 - Swarms of Thousands of Parallel AI Agents",
    level: "C6",
    levelName: "Parallel Campaign Orchestrator",
    status: "FORECAST",
    lossCentral: 110,
    lossRange: "$60B - $190B",
    usModel: "US Closed Frontier (C6 Tier)",
    chinaModel: "Chinese Open Frontier (C6 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C5 Tier, about 12 months behind)",
    usStatus: "C6 Strategic · Automated Swarm Defense",
    chinaStatus: "Massive Parallel Proliferation Strategy",
    europeStatus: "C5 Domestic · Defenders Overwhelmed",
    keyMilestone: "A team of ten operators supervises swarms of thousands of AI agents attacking targets simultaneously.",
    storyHtml: `
      <p class="story-lead">Cyber operations now scale like modern cloud software. A small team of ten human operators can launch and supervise thousands of autonomous AI agents working in parallel.<sup class="footnote-ref" data-note="13" tabindex="0" role="button" aria-label="Footnote 13">13</sup></p>

      <p>The core dynamic of cybersecurity shifts: <strong>sheer scale and automated speed begin to substitute for model superiority</strong>. Thousands of AI agents probe national infrastructure simultaneously, overwhelming human defensive teams through relentless volume and concurrency.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Operates at C6, leveraging massive computing capacity to automate triage, threat hunting, and defensive response across thousands of networks.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Reaches C6 roughly 4 to 7 months later, adopting a strategy of substituting open proliferation for frontier compute parity.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Reaches C5 domestically (about 12 months behind US). Emergency response teams are overwhelmed by concurrent automated attacks across energy and telecom backbones.</div>
      </div>

      <p>Annual losses surge to $110 Billion as defending organizations are flooded by continuous automated intrusions.</p>
    `
  },
  {
    id: "year-2031",
    year: 2031,
    displayDate: "2031",
    navLabel: "2031",
    title: "2031: C7 - Systemic Cascades & The Taiwan Crossroads",
    level: "C7",
    levelName: "Cross-Sector Systemic Operator",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 170,
    lossRange: "$90B - $280B",
    usModel: "US Closed Frontier (C7 Locked)",
    chinaModel: "Approaching C7 / Branch Dependent",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "C7 Locked · Sovereign Defense Focus",
    chinaStatus: "Geopolitical Crossroads · Strategy Decided",
    europeStatus: "C6 Domestic · High Systemic Exposure",
    keyMilestone: "AI models second-order ripple effects: how disabling electrical power shuts down municipal water pumps and emergency communications.",
    storyHtml: `
      <p class="story-lead">C7 systems can model how modern society's critical infrastructure connects together: understanding that disabling an electrical grid will shut down water pumps, and disrupting cellular networks will prevent emergency repair teams from responding.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Locks in C7 capabilities internally under strict national security controls.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Approaches C7 capability just as a major geopolitical conflict over the Taiwan Strait forces Beijing to make a critical strategic choice.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Operates at C6 (about 12 months behind US), facing immense exposure depending on which path China chooses.</div>
      </div>

      <p>At this moment of peak systemic cyber vulnerability, a geopolitical conflict erupts over Taiwan.<sup class="footnote-ref" data-note="14" tabindex="0" role="button" aria-label="Footnote 14">14</sup> The scenario splits into two distinct technological and proliferation paths through 2035.</p>
    `
  }
];

export const BRANCH_L_DATA = [
  {
    id: "branch-l-2032",
    year: 2032,
    displayDate: "2032",
    navLabel: "2032 (P)",
    title: "2032 (Branch P): Domestic Pre-Hardening & Asymmetric Advantage",
    level: "C7",
    levelName: "Proliferation Strategy Preparation",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 260,
    lossRange: "$140B - $400B",
    usModel: "US Closed Frontier (C7+ Defense Mode)",
    chinaModel: "Chinese Private C7 Stack / Secret Pre-Patching",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "US Mobilizes Compute for Automated Defense",
    chinaStatus: "Secret Pre-Patching with Private C7 Model",
    europeStatus: "C6 Domestic · Highly Exposed to Diffused Threats",
    keyMilestone: "China uses its private state models to patch domestic infrastructure before open-sourcing weights.",
    storyHtml: `
      <p class="story-lead">China first uses its stronger private cyber stack to scan and harden strategically important domestic systems.<sup class="footnote-ref" data-note="15" tabindex="0" role="button" aria-label="Footnote 15">15</sup> It keeps the most capable state system private, then releases a slightly weaker open weight model globally.</p>
      
      <p>The aim is to create a temporary relative advantage through:</p>
      <ul class="branch-bullets-list">
        <li>Increase attack-surface coverage, not just attacker numbers</li>
        <li>overwhelm US and European defensive capacity with more simultaneous incidents</li>
        <li>make attribution and retaliation harder as attacks diffuse across many independent actors.</li>
      </ul>

      <div class="national-comparison-box">
        <div class="nat-box-item cn"><strong>China:</strong> Scans and fixes domestic energy, telecom, and government networks using a secret C7 model, building a defensive head start.</div>
        <div class="nat-box-item us"><strong>United States:</strong> Spots the preparation signals and reallocates massive computing power toward automated critical infrastructure defense.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Remains about 12 months behind the US, highly vulnerable to any sudden flood of open-source cyber tools.</div>
      </div>
    `
  },
  {
    id: "branch-l-2033",
    year: 2033,
    displayDate: "2033",
    navLabel: "2033 (P)",
    title: "2033 (Branch P): The Proliferation Shock",
    level: "C7+",
    levelName: "Global Model Proliferation",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 420,
    lossRange: "$220B - $650B",
    usModel: "US Closed Frontier (C7+ Defense Mode)",
    chinaModel: "Chinese C6.5 Open Weights Released Globally",
    europeModel: "European Domestic Frontier (C6+, about 12 months behind)",
    usStatus: "US Allocates Massive Compute to Patching",
    chinaStatus: "C6.5 Open Weights Universally Available",
    europeStatus: "C6+ Domestic · Overwhelmed by Proliferation",
    keyMilestone: "Slightly weaker open weights diffuse to thousands of actors; attribution collapses.",
    storyHtml: `
      <p class="story-lead">China releases slightly weaker cyber-capable models (C6.0/C6.5) to the global commons, triggering a massive proliferation shock across the world.</p>

      <p>Thousands of state proxies, cartels, and independent hackers weaponize the downloadable models against Western infrastructure. Because thousands of groups use the exact same AI architectures, it becomes almost impossible to tell who is launching which attack.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item cn"><strong>China:</strong> Distributes C6.5 open weights globally while retaining its C7 private state model, relying on its six-month pre-hardening head start for insulation.</div>
        <div class="nat-box-item us"><strong>United States:</strong> Possesses superior closed models, but faces thousands of automated attacks every day against utilities and businesses.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Faces the sharpest disruption: attackers use diffused Chinese C6.5 weights that overpower Europe's domestic defenses (C6).</div>
      </div>

      <p>Annual loss exposure jumps to $420 Billion as emergency response teams are stretched thin.</p>
    `
  },
  {
    id: "branch-l-2034",
    year: 2034,
    displayDate: "2034",
    navLabel: "2034 (P)",
    title: "2034 (Branch P): Peak Proliferation Shock ($575B)",
    level: "C7+",
    levelName: "Peak Disruption & Defender Strain",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 575,
    lossRange: "$300B - $850B",
    usModel: "US Closed Frontier (Diverts Compute to Defense)",
    chinaModel: "Chinese Open Weights Diffused Globally",
    europeModel: "European Domestic Frontier (C6.5, about 12 months behind)",
    usStatus: "US Frontier Pivots Compute to Defense",
    chinaStatus: "Peak Proliferation Pressure",
    europeStatus: "Peak Infrastructure Disruption",
    keyMilestone: "The proliferation shock peaks. Advanced cyber capability is available to a much wider set of states, proxies, criminals and other actors.",
    storyHtml: `
      <p class="story-lead">The proliferation shock peaks. Advanced cyber capability is available to a much wider set of states, proxies, criminals and other actors. Attack volume rises, attribution becomes harder, and incident response capacity is stretched.</p>

      <p>Europe experiences the largest relative disruption because its domestic frontier is modelled roughly one year behind the US.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Directs frontier AI labs to divert over 70% of supercomputer compute toward continuous automated scanning and live vulnerability patching.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Enjoys maximum proliferation pressure against Western networks, but domestic pre-hardening advantages begin eroding as foreign actors probe Chinese codebases.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Suffers the highest relative economic disruption due to fragmented procurement across 27 nations and a lack of sovereign frontier compute clusters.</div>
      </div>

      <div class="story-quote font-serif">
        <div class="quote-text">“Europe discovers that digital sovereignty was not just a conference topic.”</div>
      </div>
    `
  },
  {
    id: "branch-l-2035",
    year: 2035,
    displayDate: "2035",
    navLabel: "2035 (P)",
    title: "2035 (Branch P): Defensive Adaptation & Decay of Advantage",
    level: "C7+",
    levelName: "Defensive Adaptation & Decay",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 400,
    lossRange: "$220B - $650B",
    usModel: "US Sovereign Cyber AI (Automated Defense)",
    chinaModel: "Chinese Open Weights Backfire",
    europeModel: "European Domestic Defense AI (C7, about 12 months behind)",
    usStatus: "US Automated Defense Restores Balance",
    chinaStatus: "Proliferation Advantage Decayed",
    europeStatus: "Defensive Adaptation / Losses Falling",
    keyMilestone: "The US and Europe increasingly use stronger models to automate vulnerability discovery, patching, monitoring and incident response.",
    storyHtml: `
      <p class="story-lead">The US and Europe increasingly use stronger models to automate vulnerability discovery, patching, monitoring and incident response. China’s original advantage begins to decay.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States:</strong> Superior closed models (C8) automate vulnerability discovery across Western software, neutralizing the attack vectors discovered by older C6.5 open weights.</div>
        <div class="nat-box-item cn"><strong>China:</strong> Suffers blowback as global threat groups turn the open weights back against Chinese regional infrastructure, eliminating Beijing's initial insulation.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Adapts with US assistance and improved domestic deployments; annual losses decline from $575B toward $400B as defense catches up with automated offense.</div>
      </div>

      <div class="story-quote font-serif">
        <div class="quote-text">“Turns out the defenders downloaded it too.”</div>
      </div>

      <div class="epilogue-box">
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-main);">Looking Back: The Proliferation Path</h4>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--text-main); margin-bottom:0;">By 2035, China has succeeded in making advanced cyber capability far more widely available, but the advantage proves temporary. As Western defences adapt and the same models are turned against Chinese systems, proliferation becomes less a strategic weapon and more a permanent global security problem.</p>
      </div>
    `
  }
];

export const BRANCH_W_DATA = [
  {
    id: "branch-w-2032",
    year: 2032,
    displayDate: "2032",
    navLabel: "2032 (C)",
    title: "2032 (Branch C): Semiconductor Friction & State Custody",
    level: "C7",
    levelName: "Controlled Consolidation",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 190,
    lossRange: "$100B - $320B",
    usModel: "US Closed Frontier (C7 Closed)",
    chinaModel: "Chinese State Models C7 (Strict State Custody)",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "US Frontier Gated · Strategic Competition",
    chinaStatus: "Tight State Custody · Resists Open Proliferation",
    europeStatus: "C6 Domestic · Semiconductor Bottleneck",
    keyMilestone: "China becomes more selective about releasing its most dangerous cyber models, focusing on closing the technology gap.",
    storyHtml: `
      <p class="story-lead">China becomes more selective about releasing its most dangerous cyber models. Instead of relying on mass proliferation, it focuses on reducing the compute and semiconductor constraints separating it from the US frontier.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item cn"><strong>China:</strong> Because Beijing now has a credible path to frontier leadership, it strictly resists open-sourcing high-risk cyber weights, maintaining tight military custody over its C7 systems.</div>
        <div class="nat-box-item us"><strong>United States:</strong> Maintains strict access controls over its C7 models, focusing on strategic deterrence and intelligence operations.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Faces severe semiconductor and critical material crunches, prompting bilateral diplomatic initiatives with Beijing.</div>
      </div>
    `
  },
  {
    id: "branch-w-2033",
    year: 2033,
    displayDate: "2033",
    navLabel: "2033 (C)",
    title: "2033 (Branch C): Europe Enters the Bargain",
    level: "C7+",
    levelName: "Bilateral Technology Accord",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 215,
    lossRange: "$110B - $350B",
    usModel: "US Closed Frontier (C7+ Closed Scaling)",
    chinaModel: "Chinese State Models C7+ (DUV Equipment Serviced)",
    europeModel: "European Domestic Frontier (C6+, Accord Protection)",
    usStatus: "US Frontier Continues Closed Scaling",
    chinaStatus: "Semiconductor Constraints Ease via Accord",
    europeStatus: "Rare Earths Secured · Civilian Infrastructure Accord",
    keyMilestone: "China and Europe negotiate a technology and supply agreement; export licences become flexible.",
    storyHtml: `
      <p class="story-lead">Europe enters the bargain.</p>

      <p>China and Europe negotiate a technology and supply agreement.<sup class="footnote-ref" data-note="16" tabindex="0" role="button" aria-label="Footnote 16">16</sup></p>

      <p>Europe relaxes selected semiconductor equipment licensing and servicing restrictions, especially around advanced DUV systems, metrology and related manufacturing tools.</p>

      <p>China offers:</p>
      <ul class="branch-bullets-list">
        <li>guaranteed supplies of rare earths and high-performance magnets for European industry</li>
        <li>priority access to Chinese batteries, mature semiconductors and other critical industrial components</li>
        <li>targeted credit lines and infrastructure financing for economically stressed European states</li>
        <li>cyber stability commitments covering civilian critical infrastructure</li>
      </ul>

      <p style="font-size:0.95rem; color:var(--text-muted); font-style:italic;">
        Note: Europe does not give China control of ASML, nor does China gain unrestricted EUV access.
      </p>

      <div class="national-comparison-box">
        <div class="nat-box-item cn"><strong>China:</strong> Secures equipment maintenance and parts for advanced DUV lithography systems, unblocking its domestic AI chip production.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Protects its industrial manufacturing base and gains binding civilian cyber non-aggression guarantees from Beijing.</div>
        <div class="nat-box-item us"><strong>United States:</strong> Protests the European accord but maintains closed frontier leadership (C7+), keeping advanced cyber models strictly contained.</div>
      </div>

      <div class="story-quote font-serif">
        <div class="quote-text">“Principles remain firm. Export licences become more flexible.”</div>
      </div>
    `
  },
  {
    id: "branch-w-2034",
    year: 2034,
    displayDate: "2034",
    navLabel: "2034 (C)",
    title: "2034 (Branch C): Approaching the US Cyber Frontier",
    level: "C7+",
    levelName: "Near-Frontier Catch Up",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 260,
    lossRange: "$130B - $420B",
    usModel: "US Closed Frontier (C7.8 Sovereign)",
    chinaModel: "Chinese Sovereign Frontier (C7.6 / Near Parity)",
    europeModel: "European Domestic Frontier (C7, Accord Protected)",
    usStatus: "US Closed Frontier Co-Leader",
    chinaStatus: "China Approaches US Frontier Parity",
    europeStatus: "Protected by Bilateral Accord",
    keyMilestone: "Domestic progress and European tool servicing reduce China's compute bottleneck; China approaches the US cyber frontier.",
    storyHtml: `
      <p class="story-lead">A combination of domestic semiconductor progress<sup class="footnote-ref" data-note="17" tabindex="0" role="button" aria-label="Footnote 17">17</sup>, partial access to surviving Taiwanese capability, and easier access to selected European semiconductor technology reduces China’s compute bottleneck.</p>

      <p>By the end of 2034, this scenario assumes China approaches the US cyber frontier.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item cn"><strong>China:</strong> Reaches near-parity with US closed models (C7.6 vs C7.8), keeping its advanced models strictly controlled under military custody.</div>
        <div class="nat-box-item us"><strong>United States:</strong> Co-leads the sovereign frontier (C7.8). Both powers maintain strict custody and auditing to prevent model leakage.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Trails by about 12 months domestically (C7), but avoids catastrophic disruption because neither superpower diffuses unrestricted open weights.</div>
      </div>

      <div class="story-quote font-serif">
        <div class="quote-text">“Nothing builds strategic trust like mutually inconvenient dependencies.”</div>
      </div>
    `
  },
  {
    id: "branch-w-2035",
    year: 2035,
    displayDate: "2035",
    navLabel: "2035 (C)",
    title: "2035 (Branch C): Cold Cyber Deterrence & Controlled Timeline",
    level: "C7+",
    levelName: "Bipolar Cyber Balance",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 310,
    lossRange: "$160B - $500B",
    usModel: "US Sovereign Cyber AI (C8)",
    chinaModel: "Chinese Sovereign Cyber AI (C7.9)",
    europeModel: "European Domestic Defense AI (C7.3)",
    usStatus: "Bipolar Sovereign Co-Leader",
    chinaStatus: "Near-Parity Mutual Deterrence",
    europeStatus: "Domestic Defensive Alignment",
    keyMilestone: "China keeps its strongest cyber capability controlled. Europe experiences less open-weight disruption.",
    storyHtml: `
      <p class="story-lead">China is much closer to the US frontier, but keeps more of its strongest cyber capability controlled. Europe therefore experiences less open weight driven disruption than in the China loses branch.</p>

      <div class="national-comparison-box">
        <div class="nat-box-item us"><strong>United States & China:</strong> Exist in a state of high-capability mutual cyber deterrence. Automated AI defense monitors power grids, telecom backbones, and financial ledgers 24/7.</div>
        <div class="nat-box-item eu"><strong>Europe:</strong> Remains about 12 months behind (C7.3) but benefits from treaty protections and sovereign defense deployments.</div>
      </div>

      <div class="story-quote font-serif">
        <div class="quote-text">“The models got stronger. Somehow that was the quieter timeline.”</div>
      </div>

      <div class="epilogue-box">
        <h4 style="font-family:var(--font-serif); font-size:1.15rem; margin-bottom:0.5rem; color:var(--text-main);">Looking Back: The Consolidation Path</h4>
        <p style="font-size:1.05rem; line-height:1.6; color:var(--text-main); margin-bottom:0;">By 2035, China has traded wider diffusion for technological catch up. The result is a world with fewer openly available near frontier cyber models, but a far more capable China operating much closer to the US frontier.</p>
      </div>
    `
  }
];

export const INTRO_CARDS_DATA = [
  {
    id: "what-is-this",
    title: "What is this?",
    contentHtml: `
      <p>AI 2035 (Cybersecurity Standpoint) is a scenario about how increasingly capable AI systems could change cybersecurity and the security of critical infrastructure between 2024 and 2035.</p>
      <p>It starts with real world evidence. State linked hackers already use AI for research, scripting and parts of cyber operations, while frontier models are beginning to discover vulnerabilities and complete longer technical tasks with less human help.</p>
      <p>From there, I ask what happens if the remaining barriers fall: AI becomes reliable in defended networks, learns to operate across industrial systems, can sustain campaigns for days, and eventually allows a small number of people to coordinate very large numbers of cyber agents.</p>
    `
  },
  {
    id: "how-did-i-build-it",
    title: "How did I build it?",
    contentHtml: `
      <p>I separate the project into three different kinds of claims so that evidence is not confused with speculation.</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.25rem;">
        <li><strong>OBSERVED:</strong> Events and evaluated capabilities documented through August 2026, including AI assisted state cyber activity and independent evaluations of frontier models.</li>
        <li><strong>FORECAST:</strong> Capability developments I think are plausible if current progress continues, such as reliable operation in defended networks, industrial systems and longer autonomous campaigns.</li>
        <li><strong>SCENARIO ASSUMPTION:</strong> Deliberate choices used to explore possible futures, such as Europe remaining roughly a year behind the US domestic frontier and branching the post 2031 scenario according to whether China wins or loses the Taiwan war.</li>
      </ul>
      <p>I then place those developments on a C0 to C7 capability scale, which I use as a scenario-specific framework for qualitative capability thresholds rather than as a standardized benchmark. The scale runs from AI acting mainly as a research assistant to systems capable of coordinating complex cyber operations across multiple parts of critical infrastructure.</p>
    `
  },
  {
    id: "why-a-scenario",
    title: "Why a scenario?",
    contentHtml: `
      <p><strong>“Plans are worthless, but planning is everything.” - Dwight D. Eisenhower</strong></p>
      <p>Long range AI forecasts are extremely uncertain. The purpose of this project is not to claim that the world will look exactly like this in 2031 or 2035.</p>
      <p>A scenario forces vague claims to become concrete. Instead of saying “AI could make cyberattacks much worse,” I have to specify what capabilities would be required, when they might appear, who controls them, how widely they spread, how defenders respond, and what political events could change those incentives.</p>
      <p>That also makes the scenario easier to challenge. A reader can disagree with the capability timeline, Europe’s assumed lag, the timing and outcome of the Taiwan war, China’s subsequent strategy, or the speed of defensive adaptation, and see which parts of the scenario depend on those assumptions.</p>
      <p>Yet it is still valuable to attempt. The US military regularly games out Taiwan scenarios in considerable detail, while intelligence agencies, climate bodies and pandemic preparedness organisations also rely on different forms of scenario planning.</p>
    `
  },
  {
    id: "why-these-timelines",
    title: "Why these timelines?",
    contentHtml: `
      <p>The scenario follows one common path until 2031, then splits after the Taiwan war into two different futures for the world based on whether China wins or loses.</p>
      
      <h4 style="margin: 1rem 0 0.4rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-main);">China loses the war: Plan P</h4>
      <p>China losing the war leads to Plan P, Proliferation, in which China remains behind the US frontier and tries to reduce the value of that lead by making powerful cyber capability much more widely available.</p>
      <p>The result is a larger population of capable states, proxies, criminals and other actors, more simultaneous attacks, and much greater pressure on US and European defensive capacity.</p>

      <h4 style="margin: 1rem 0 0.4rem; font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-main);">China wins the war: Plan C</h4>
      <p>China winning the war leads to Plan C, Consolidation, in which it gains geopolitical leverage but still faces major semiconductor and compute constraints.</p>
      <p>Instead of releasing its strongest cyber capability widely, China keeps more of it controlled and focuses on technological catch up, including a future economic and technology bargain with Europe.</p>
      <p>This produces a world in which China operates much closer to the US frontier, but near frontier cyber capability is less widely distributed than under Plan P.</p>

      <p style="margin-top: 1rem;">The exact dates after 2026 are scenario anchors rather than predictions. The important comparison is how the same underlying growth in AI capability can produce very different outcomes depending on geopolitical incentives, access to technology, model diffusion and defensive adaptation.</p>
    `
  }
];

export const CAPABILITY_CURVES = {
  years: [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035],
  us: [
    { year: 2024, val: 0.2 }, { year: 2025, val: 1.0 }, { year: 2026, val: 2.0 },
    { year: 2027, val: 3.0 }, { year: 2028, val: 4.0 }, { year: 2029, val: 5.0 },
    { year: 2030, val: 6.0 }, { year: 2031, val: 7.0 }, { year: 2032, val: 7.2 },
    { year: 2033, val: 7.5 }, { year: 2034, val: 7.7 }, { year: 2035, val: 8.0 }
  ],
  china_l: [
    { year: 2024, val: 0.1 }, { year: 2025, val: 0.8 }, { year: 2026, val: 1.6 },
    { year: 2027, val: 2.6 }, { year: 2028, val: 3.6 }, { year: 2029, val: 4.6 },
    { year: 2030, val: 5.6 }, { year: 2031, val: 6.4 }, { year: 2032, val: 6.6 },
    { year: 2033, val: 6.9 }, { year: 2034, val: 7.2 }, { year: 2035, val: 7.4 }
  ],
  china_w: [
    { year: 2024, val: 0.1 }, { year: 2025, val: 0.8 }, { year: 2026, val: 1.6 },
    { year: 2027, val: 2.6 }, { year: 2028, val: 3.6 }, { year: 2029, val: 4.6 },
    { year: 2030, val: 5.6 }, { year: 2031, val: 6.5 }, { year: 2032, val: 6.8 },
    { year: 2033, val: 7.2 }, { year: 2034, val: 7.6 }, { year: 2035, val: 7.9 }
  ],
  europe: [
    { year: 2024, val: 0.1 }, { year: 2025, val: 0.6 }, { year: 2026, val: 1.2 },
    { year: 2027, val: 2.1 }, { year: 2028, val: 3.1 }, { year: 2029, val: 4.1 },
    { year: 2030, val: 5.1 }, { year: 2031, val: 6.0 }, { year: 2032, val: 6.3 },
    { year: 2033, val: 6.7 }, { year: 2034, val: 7.0 }, { year: 2035, val: 7.3 }
  ]
};

export const LOSS_CURVES = {
  years: [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035],
  common: [
    { year: 2024, central: 2, min: 1, max: 4 },
    { year: 2025, central: 5, min: 2, max: 10 },
    { year: 2026, central: 12, min: 5, max: 25 },
    { year: 2027, central: 22, min: 10, max: 40 },
    { year: 2028, central: 40, min: 20, max: 70 },
    { year: 2029, central: 70, min: 35, max: 120 },
    { year: 2030, central: 110, min: 60, max: 190 },
    { year: 2031, central: 170, min: 90, max: 280 }
  ],
  branch_l: [
    { year: 2032, central: 260, min: 140, max: 400 },
    { year: 2033, central: 420, min: 220, max: 650 },
    { year: 2034, central: 575, min: 300, max: 850 },
    { year: 2035, central: 400, min: 220, max: 650 }
  ],
  branch_w: [
    { year: 2032, central: 190, min: 100, max: 320 },
    { year: 2033, central: 215, min: 110, max: 350 },
    { year: 2034, central: 260, min: 130, max: 420 },
    { year: 2035, central: 310, min: 160, max: 500 }
  ]
};
