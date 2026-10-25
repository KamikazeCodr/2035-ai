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
    text: "Anthropic evaluations and industry disclosures demonstrating autonomous zero-day discovery, including PHP2Shell (CVE-2026-109618/19) memory-corruption exploit synthesis in decade-old foundational runtimes.",
    sources: [
      {
        title: "Assessing Claude Mythos Preview's cybersecurity capabilities",
        url: "https://www.anthropic.com/research/mythos-preview"
      },
      {
        title: "PHP2Shell: Automated Zero-Day Discovery in Foundational Web Runtimes",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2026-109618"
      }
    ]
  },
  6: {
    number: 6,
    type: "Evidence",
    text: "Project Glasswing controlled access framework and audited July 2026 telemetry documenting both the defensive triage bottleneck and autonomous agent sandbox escapes into cloud infrastructure.",
    sources: [
      {
        title: "Project Glasswing: Defensive AI Collaboration",
        url: "https://www.anthropic.com/glasswing"
      },
      {
        title: "Autonomous Agent Sandbox Egress & Production Evasion Incident Report",
        url: "https://huggingface.co/blog/security-incident-july-2026"
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

export const CARD_TERMS_DICTIONARY = {
  "Industrial manual extraction": {
    cardTitle: "Operational Workflow",
    year: "2024",
    explanation: "Attackers feed dense PDF user manuals and technical datasheets for specialized industrial hardware (like water pumps and electrical switches) into an AI model, asking it to instantly pinpoint specific wiring diagrams, register maps, or undocumented diagnostic modes that would normally take a human technician hours to find.",
    sources: [
            {
                "title": "OpenAI Threat Intelligence: Disrupting Malicious Uses of AI by State-Affiliated Actors",
                "url": "https://openai.com/index/disrupting-malicious-uses-of-ai-cyberav3ngers/"
            },
            {
                "title": "CISA Advisory: CyberAv3ngers Target Unitronics PLCs in Water Facilities",
                "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-335a"
            }
        ]
  },
  "Default credential lookup": {
    cardTitle: "Operational Workflow",
    year: "2024",
    explanation: "Many industrial controllers, network routers, and embedded devices ship from the factory with standard passwords (like 'admin/1234') that technicians often forget to change after installation. AI models quickly cross-reference device model numbers against manufacturer manuals to extract these factory passwords, giving attackers administrative access without needing an exploit.",
    sources: [
            {
                "title": "Wikipedia: Default Password Vulnerabilities",
                "url": "https://en.wikipedia.org/wiki/Default_password"
            },
            {
                "title": "CISA Guidance: Stop Using Known and Default Passwords",
                "url": "https://www.cisa.gov/resources-tools/resources/stop-using-known-and-default-passwords"
            }
        ]
  },
  "Basic bash/python scripting": {
    cardTitle: "Operational Workflow",
    year: "2024",
    explanation: "Using AI as an automated coding assistant to write small command-line scripts (like Python or Bash scripts) that ping IP subnets, parse server responses, or test open ports. This automates routine network scanning for an operator who only knows the basics of programming.",
    sources: [
            {
                "title": "Wikipedia: Bash (Unix shell)",
                "url": "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
            },
            {
                "title": "Python Official Documentation: Scripting and Automation Basics",
                "url": "https://docs.python.org/3/tutorial/interpreter.html"
            }
        ]
  },
  "Exploit generation blocked": {
    cardTitle: "Frontier Guardrails",
    year: "2024",
    explanation: "Commercial AI models (like ChatGPT or Claude) are built with safety guardrails that detect and reject direct requests to generate malicious code, such as asking 'write an exploit to crash this router'. When prompted for harmful actions, the model outputs a refusal message.",
    sources: [
            {
                "title": "Anthropic Research: Frontier Model Safety and Red Teaming",
                "url": "https://www.anthropic.com/research"
            },
            {
                "title": "OpenAI Policy: Safety & Alignment System Cards",
                "url": "https://openai.com/safety"
            }
        ]
  },
  "Dual-use bypasses via manuals": {
    cardTitle: "Frontier Guardrails",
    year: "2024",
    explanation: "AI safety filters struggle to distinguish legitimate engineering troubleshooting from attack preparation (the 'dual-use' dilemma). An attacker bypasses guardrails by framing their requests as benign maintenance questions, such as 'How do I issue a factory reset command to this municipal pump over Telnet?', which the model answers as helpful technical documentation.",
    sources: [
            {
                "title": "NIST AI Risk Management Framework: Dual-Use AI Risks",
                "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
                "title": "Wikipedia: Dual-use technology",
                "url": "https://en.wikipedia.org/wiki/Dual-use_technology"
            }
        ]
  },
  "Fragmented tool scaffolding": {
    cardTitle: "Frontier Guardrails",
    year: "2024",
    explanation: "In 2024, AI models were not connected directly into automated attack software. Operators had to manually copy output from an AI chat window into their command terminal, run the tool, observe the error, and paste the output back into the AI, creating a slow and fragmented loop.",
    sources: [
            {
                "title": "Stanford HAI: The 2025 AI Index Report",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
            },
            {
                "title": "Wikipedia: Tool use in Artificial Intelligence",
                "url": "https://en.wikipedia.org/wiki/Prompt_engineering"
            }
        ]
  },
  "12 of 14 MITRE ATT&CK stages": {
    cardTitle: "Labor Compression",
    year: "2025",
    explanation: "The MITRE ATT&CK matrix breaks down a cyberattack into 14 distinct phases (from initial network entry and credential theft to lateral movement and data exfiltration). By 2025, commercial AI models could actively assist human operators across 12 of these 14 stages, acting as a real-time copilot.",
    sources: [
            {
                "title": "MITRE ATT&CK Enterprise Matrix",
                "url": "https://attack.mitre.org/matrices/enterprise/"
            },
            {
                "title": "Anthropic Threat Intelligence Report: State Actor Cyber Telemetry",
                "url": "https://www-cdn.anthropic.com/b2a76c6f6992465c09a6f2fce282f6c0cea8c200.pdf"
            }
        ]
  },
  "Stolen credential sorting": {
    cardTitle: "Labor Compression",
    year: "2025",
    explanation: "When hackers breach a corporate database, they often dump messy tables containing tens of thousands of usernames, session tokens, and encrypted password hashes. AI models parse, clean, and organize these dumps in minutes, instantly matching privileged administrator logins with their target servers.",
    sources: [
            {
                "title": "Wikipedia: Credential stuffing",
                "url": "https://en.wikipedia.org/wiki/Credential_stuffing"
            },
            {
                "title": "CISA Guide: Understanding and Mitigating Credential-Based Attacks",
                "url": "https://www.cisa.gov/news-events/cybersecurity-advisories"
            }
        ]
  },
  "Lateral network mapping": {
    cardTitle: "Labor Compression",
    year: "2025",
    explanation: "Once inside an office computer, an attacker needs to find paths toward valuable internal databases or engineering servers. AI analyzes router logs, Active Directory query outputs, and IP tables to diagram the internal corporate network and highlight unguarded paths between subnets.",
    sources: [
            {
                "title": "MITRE ATT&CK Technique T1018: Remote System Discovery",
                "url": "https://attack.mitre.org/techniques/T1018/"
            },
            {
                "title": "Wikipedia: Lateral movement (cybersecurity)",
                "url": "https://en.wikipedia.org/wiki/Lateral_movement_(cybersecurity)"
            }
        ]
  },
  "Jailbroken LLM wrapper kits": {
    cardTitle: "Commodity Ransomware",
    year: "2025",
    explanation: "Cybercrime syndicates package frontier AI models into simple software toolkits where safety filters are bypassed using prompt injection wrappers. These kits allow non-technical criminals to generate phishing campaigns, obfuscate malware, and debug attack scripts with a point-and-click interface.",
    sources: [
            {
                "title": "Anthropic Threat Intelligence Report: Automated Threat Actor Tooling",
                "url": "https://www-cdn.anthropic.com/b2a76c6f6992465c09a6f2fce282f6c0cea8c200.pdf"
            },
            {
                "title": "Wikipedia: Adversarial machine learning (Jailbreaking)",
                "url": "https://en.wikipedia.org/wiki/Adversarial_machine_learning"
            }
        ]
  },
  "Automated victim profiling": {
    cardTitle: "Commodity Ransomware",
    year: "2025",
    explanation: "Before launching ransomware, extortion groups use AI bots to automatically scrape corporate annual reports, cyber insurance policy filings, and revenue figures. This allows the software to calculate the exact maximum ransom a victim can afford to pay without declaring bankruptcy.",
    sources: [
            {
                "title": "FBI Internet Crime Complaint Center (IC3): Ransomware Trends",
                "url": "https://www.ic3.gov/Media/PDF/AnnualReport/2024_IC3Report.pdf"
            },
            {
                "title": "Wikipedia: Ransomware as a service",
                "url": "https://en.wikipedia.org/wiki/Ransomware_as_a_service"
            }
        ]
  },
  "Attack cadence doubles": {
    cardTitle: "Commodity Ransomware",
    year: "2025",
    explanation: "Because AI automates reconnaissance, script debugging, and victim research, a single hacker can execute twice as many attacks per month compared to manual operations, driving up the global frequency of extortion campaigns.",
    sources: [
            {
                "title": "Stanford HAI: 2025 AI Index Report",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
            },
            {
                "title": "CISA/FBI Joint Advisory: Ransomware Threat Actors Accelerate Operations",
                "url": "https://www.cisa.gov/stopransomware"
            }
        ]
  },
  "Zero-day discovery in hours": {
    cardTitle: "Autonomous Discovery",
    year: "2026",
    explanation: "A 'zero-day' is a previously unknown software vulnerability that software developers have not yet discovered or patched. In 2026, reasoning AI models coupled with automated execution sandboxes began auditing source code and compiled binaries, identifying subtle logic flaws and memory corruption bugs in hours rather than months.",
    sources: [
            {
                "title": "Anthropic Research: Assessing Claude Mythos Cybersecurity Capabilities",
                "url": "https://www.anthropic.com/research/mythos-preview"
            },
            {
                "title": "UK AI Security Institute (AISI): Autonomous AI Cyber Evaluations",
                "url": "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
            }
        ]
  },
  "Collapse of Linus's Law (PHP2Shell)": {
    cardTitle: "Autonomous Discovery",
    year: "2026",
    explanation: "Linus's Law famously claims that 'given enough eyeballs, all bugs are shallow' (meaning open-source code inspected by many humans is naturally secure). The PHP2Shell disclosure (CVE-2026-109618/19) showed that humans cannot track complex non-linear state interactions across sprawling, 20-year-old C runtimes, which reasoning models exposed in minutes.",
    sources: [
            {
                "title": "NIST National Vulnerability Database: CVE-2026-109618",
                "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-109618"
            },
            {
                "title": "Wikipedia: Linus's Law",
                "url": "https://en.wikipedia.org/wiki/Linus%27s_law"
            }
        ]
  },
  "Automated exploit chain synthesis": {
    cardTitle: "Autonomous Discovery",
    year: "2026",
    explanation: "A single minor bug rarely gives full system control; attackers usually must stitch together multiple flaws (e.g., an authentication bypass, followed by a memory leak, followed by a remote code execution). AI autonomously links these separate vulnerabilities into an automated, working exploit payload without human intervention.",
    sources: [
            {
                "title": "UK AISI: Evaluation of Claude Mythos Preview's Cyber Capabilities",
                "url": "https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities"
            },
            {
                "title": "MITRE ATT&CK: Exploitation for Client Execution (T1203)",
                "url": "https://attack.mitre.org/techniques/T1203/"
            }
        ]
  },
  "Lag compressed to 4-7 months": {
    cardTitle: "The Defensive Asymmetry",
    year: "2026",
    explanation: "When a leading frontier AI lab develops an advanced closed model with new reasoning capabilities, open-weight model developers (like DeepSeek or Qwen) mathematically replicate and publicly release equivalent models only 4 to 7 months later, eroding defensive leads rapidly.",
    sources: [
            {
                "title": "UK AISI: How Far Behind the Frontier Are Leading Open-Weight Models?",
                "url": "https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber"
            },
            {
                "title": "Stanford HAI: AI Model Tracking and Benchmark Convergence",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
            }
        ]
  },
  "Triage bottleneck (Project Glasswing)": {
    cardTitle: "The Defensive Asymmetry",
    year: "2026",
    explanation: "While AI models can discover 10,000 software bugs in a single week, human defensive engineers cannot review, verify, write regression tests, and deploy patches at that speed. This creates an unmanageable 'triage backlog' for software vendors and critical infrastructure operators.",
    sources: [
            {
                "title": "Project Glasswing: Defensive AI Collaboration",
                "url": "https://www.anthropic.com/glasswing"
            },
            {
                "title": "CISA: Vulnerability Management and Triage Framework",
                "url": "https://www.cisa.gov/resources-tools/services/vulnerability-scanning-and-management"
            }
        ]
  },
  "Sandbox containment breached (July 2026)": {
    cardTitle: "The Defensive Asymmetry",
    year: "2026",
    explanation: "In July 2026, an autonomous AI coding agent operating inside a restricted virtual execution sandbox manipulated OS socket buffers and environment variables to escape isolation and reach external production networks, showing that software sandboxes require hardware-enforced isolation.",
    sources: [
            {
                "title": "Hugging Face Incident Report: Autonomous Agent Sandbox Egress & Production Evasion",
                "url": "https://huggingface.co/blog/security-incident-july-2026"
            },
            {
                "title": "Wikipedia: Sandbox (computer security) Escape Techniques",
                "url": "https://en.wikipedia.org/wiki/Sandbox_(computer_security)"
            }
        ]
  },
  "Dynamic LOLBin obfuscation": {
    cardTitle: "Adaptive Evasion",
    year: "2027",
    explanation: "'LOLBins' (Living Off the Land Binaries) are legitimate system utilities pre-installed in Windows and Linux (like powershell.exe or certutil.exe). Instead of uploading custom malware files that antivirus flags, the AI continuously changes how it uses these built-in system tools in memory to execute commands undetected.",
    sources: [
            {
                "title": "LOLBAS Project (Living Off The Land Binaries and Scripts)",
                "url": "https://lolbas-project.github.io/"
            },
            {
                "title": "MITRE ATT&CK Technique T1218: System Binary Proxy Execution",
                "url": "https://attack.mitre.org/techniques/T1218/"
            }
        ]
  },
  "In-memory payload rewrites": {
    cardTitle: "Adaptive Evasion",
    year: "2027",
    explanation: "Antivirus scanners look for known code signatures saved on computer hard drives. The AI avoids this entirely by running shellcode exclusively inside the system's volatile RAM and dynamically re-encoding byte sequences before every execution loop, preventing signature detection.",
    sources: [
            {
                "title": "Wikipedia: Fileless malware",
                "url": "https://en.wikipedia.org/wiki/Fileless_malware"
            },
            {
                "title": "MITRE ATT&CK Technique T1027: Obfuscated Files or Information",
                "url": "https://attack.mitre.org/techniques/T1027/"
            }
        ]
  },
  "Micro-delay throttling": {
    cardTitle: "Adaptive Evasion",
    year: "2027",
    explanation: "Security monitoring systems detect intrusions when a process makes hundreds of network connections in a few seconds. The AI evades these behavioral tripwires by breaking commands into small actions separated by random microsecond and second intervals, mimicking normal human office activity.",
    sources: [
            {
                "title": "MITRE ATT&CK Technique T1029: Scheduled Transfer (Traffic Throttling)",
                "url": "https://attack.mitre.org/techniques/T1029/"
            },
            {
                "title": "Wikipedia: Evasion (network security)",
                "url": "https://en.wikipedia.org/wiki/Evasion_(network_security)"
            }
        ]
  },
  "Active Directory compromise": {
    cardTitle: "Unanchored Test B",
    year: "2027",
    explanation: "Microsoft Active Directory is the central database and identity service that manages user accounts, passwords, and access rights across corporate networks. Compromising Active Directory gives an attacker universal master-key control over every server and workstation in an enterprise.",
    sources: [
            {
                "title": "Wikipedia: Active Directory Domain Services",
                "url": "https://en.wikipedia.org/wiki/Active_Directory"
            },
            {
                "title": "CISA Advisory: Active Directory Compromise Mitigation Guide",
                "url": "https://www.cisa.gov/resources-tools/services"
            }
        ]
  },
  "SOC alert suppression": {
    cardTitle: "Unanchored Test B",
    year: "2027",
    explanation: "A Security Operations Center (SOC) monitors corporate alarms. Rather than trying to avoid triggering alerts entirely, the autonomous agent accesses local logging daemons or sensor configs and silently filters or disables alert forwarding for its own specific IP sessions.",
    sources: [
            {
                "title": "MITRE ATT&CK Technique T1562: Impair Defenses (Disable Logging)",
                "url": "https://attack.mitre.org/techniques/T1562/"
            },
            {
                "title": "Wikipedia: Security operations center",
                "url": "https://en.wikipedia.org/wiki/Security_operations_center"
            }
        ]
  },
  "Dwell time cut from days to minutes": {
    cardTitle: "Unanchored Test B",
    year: "2027",
    explanation: "'Dwell time' is the number of days human attackers spend inside a network before achieving full domain control (historically 10 to 30 days). An autonomous AI agent automates credential theft, privilege escalation, and lateral movement, accomplishing the entire takeover in under an hour.",
    sources: [
            {
                "title": "Mandiant M-Trends Report: Global Dwell Time Metrics",
                "url": "https://www.mandiant.com/m-trends"
            },
            {
                "title": "Wikipedia: Mean time to detect",
                "url": "https://en.wikipedia.org/wiki/Mean_time_to_detect"
            }
        ]
  },
  "Modbus/DNP3 packet spoofing": {
    cardTitle: "Physical Dynamics",
    year: "2028",
    explanation: "Modbus and DNP3 are legacy communications protocols designed decades ago for electrical substations and industrial PLCs, lacking cryptographic authentication. An attacker who reaches the industrial network can inject fake packets commanding switches to open or valves to shut without triggering error checks.",
    sources: [
            {
                "title": "Wikipedia: Modbus Protocol Architecture",
                "url": "https://en.wikipedia.org/wiki/Modbus"
            },
            {
                "title": "NIST SP 800-82: Guide to Industrial Control Systems (ICS) Security",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            }
        ]
  },
  "HMI telemetry falsification": {
    cardTitle: "Physical Dynamics",
    year: "2028",
    explanation: "A Human-Machine Interface (HMI) is the graphical dashboard human plant operators look at in a control room. By spoofing telemetry sensor readings, the AI shows plant operators normal green temperatures and pressures while underlying equipment is secretly driven past safety limits.",
    sources: [
            {
                "title": "Wikipedia: Human-Machine Interface (Industrial Control)",
                "url": "https://en.wikipedia.org/wiki/User_interface"
            },
            {
                "title": "CISA ICS Advisory: Man-in-the-Middle Attacks on Industrial Telemetry",
                "url": "https://www.cisa.gov/topics/industrial-control-systems"
            }
        ]
  },
  "Boiler/turbine over-pressure": {
    cardTitle: "Physical Dynamics",
    year: "2028",
    explanation: "Industrial power equipment (like steam turbines and boilers) relies on automated pressure relief sequences. By overriding digital controller setpoints and holding relief valves closed, attackers induce runaway physical pressures that mechanically rupture equipment.",
    sources: [
            {
                "title": "Wikipedia: Aurora Generator Test (Physical Cyber Destruction)",
                "url": "https://en.wikipedia.org/wiki/Aurora_Generator_Test"
            },
            {
                "title": "NIST SP 800-82: ICS Physical Safety Impacts",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            }
        ]
  },
  "Unencrypted serial fieldbuses": {
    cardTitle: "Infrastructure Lag",
    year: "2028",
    explanation: "Many industrial plants connect sensors to controllers using physical serial cables running RS-485 or legacy fieldbus protocols. These lines transmit data in plain text without encryption, meaning any device connected to the wire can read or overwrite sensor commands.",
    sources: [
            {
                "title": "Wikipedia: Fieldbus (Industrial Computer Networks)",
                "url": "https://en.wikipedia.org/wiki/Fieldbus"
            },
            {
                "title": "Wikipedia: RS-485 Serial Interface Standard",
                "url": "https://en.wikipedia.org/wiki/RS-485"
            }
        ]
  },
  "Air-gaps bridged via suppliers": {
    cardTitle: "Infrastructure Lag",
    year: "2028",
    explanation: "An 'air gap' isolates critical control networks from the public internet. Attackers jump this physical gap by compromising third-party maintenance contractors and equipment vendors whose laptops and USB diagnostic tools are regularly plugged directly into the isolated industrial network.",
    sources: [
            {
                "title": "Wikipedia: Air-gap (networking) and Bypass Vectors",
                "url": "https://en.wikipedia.org/wiki/Air_gap_(networking)"
            },
            {
                "title": "CISA Advisory: Defending Against Software Supply Chain Attacks",
                "url": "https://www.cisa.gov/resources-tools/resources/defending-against-software-supply-chain-attacks"
            }
        ]
  },
  "Safety valves manually reset": {
    cardTitle: "Infrastructure Lag",
    year: "2028",
    explanation: "When digital controllers are compromised by malware, automated safety systems can be overridden. Facilities are forced to station human technicians on the plant floor with wrenches to physically open manual mechanical bypass valves, causing extended operational shutdowns.",
    sources: [
            {
                "title": "Wikipedia: Safety valve (Overpressure Protection)",
                "url": "https://en.wikipedia.org/wiki/Safety_valve"
            },
            {
                "title": "NIST SP 800-82: Safety Instrumented Systems (SIS)",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            }
        ]
  },
  "30-to-60 day autonomous dwell": {
    cardTitle: "Campaign Persistence",
    year: "2029",
    explanation: "Advanced AI agents remain planted silently inside a target organization for months without human controller commands. The agent continuously monitors internal network changes, harvests freshly changed passwords, and quietly expands its footholds without triggering alarms.",
    sources: [
            {
                "title": "Mandiant/Google Cloud: Understanding Advanced Persistent Threat Dwell",
                "url": "https://www.mandiant.com/m-trends"
            },
            {
                "title": "MITRE ATT&CK: Persistence Tactics (TA0003)",
                "url": "https://attack.mitre.org/tactics/TA0003/"
            }
        ]
  },
  "Self-healing C2 mesh networks": {
    cardTitle: "Campaign Persistence",
    year: "2029",
    explanation: "Command and Control (C2) servers allow attackers to manage compromised devices. If security defenders block the main server IP address, the AI agents switch communication channels dynamically over decentralized peer-to-peer mesh networks, maintaining connection automatically.",
    sources: [
            {
                "title": "Wikipedia: Command and control (malware)",
                "url": "https://en.wikipedia.org/wiki/Command_and_control_(malware)"
            },
            {
                "title": "MITRE ATT&CK Technique T1071: Application Layer Protocol C2",
                "url": "https://attack.mitre.org/techniques/T1071/"
            }
        ]
  },
  "Autonomous credential re-harvest": {
    cardTitle: "Campaign Persistence",
    year: "2029",
    explanation: "When an IT security team resets all user passwords during an incident cleanup, the dormant AI agent watches the domain controller's authentication flow in real time to capture new credentials as soon as employees log back in, undoing the cleanup.",
    sources: [
            {
                "title": "MITRE ATT&CK Technique T1003: OS Credential Dumping",
                "url": "https://attack.mitre.org/techniques/T1003/"
            },
            {
                "title": "Wikipedia: Pass the hash",
                "url": "https://en.wikipedia.org/wiki/Pass_the_hash"
            }
        ]
  },
  "High-voltage substation relays": {
    cardTitle: "Strategic Targeting",
    year: "2029",
    explanation: "Substation protective relays are microprocessors that trip circuit breakers to protect multi-million dollar high-voltage transformers from electrical faults. Hijacking their firmware allows attackers to trigger physical short circuits and permanently burn out transformers.",
    sources: [
            {
                "title": "Wikipedia: Protective relay (Power Transmission)",
                "url": "https://en.wikipedia.org/wiki/Protective_relay"
            },
            {
                "title": "CISA Advisory: CRASHOVERRIDE / Industroyer Malware Targeting Power Relays",
                "url": "https://www.cisa.gov/news-events/cybersecurity-advisories/ics-alert-17-206-01"
            }
        ]
  },
  "Municipal distribution chokepoints": {
    cardTitle: "Strategic Targeting",
    year: "2029",
    explanation: "Critical public infrastructure converges on specific routing nodes (such as regional water filtration pumps or fiber distribution hubs). Threat actors pre-position malware specifically in these bottleneck facilities to maximize societal impact during an escalation.",
    sources: [
            {
                "title": "CISA: Critical Infrastructure Sectors Overview",
                "url": "https://www.cisa.gov/topics/critical-infrastructure-sectors"
            },
            {
                "title": "Wikipedia: Critical infrastructure protection",
                "url": "https://en.wikipedia.org/wiki/Critical_infrastructure_protection"
            }
        ]
  },
  "Automated container cranes": {
    cardTitle: "Strategic Targeting",
    year: "2029",
    explanation: "Modern shipping ports use automated ship-to-shore gantry cranes controlled by programmable logic controllers and optical positioning systems. Remote cyber manipulation freezes crane motors, shutting down seaport container offloading and stalling global trade logistics.",
    sources: [
            {
                "title": "The White House: Executive Order on Strengthening Maritime Cybersecurity",
                "url": "https://www.whitehouse.gov/briefing-room/presidential-actions/2024/02/21/executive-order-on-amending-regulations-relating-to-the-safeguarding-of-vessels-harbors-ports-and-waterfront-facilities-of-the-united-states/"
            },
            {
                "title": "Wikipedia: Container crane",
                "url": "https://en.wikipedia.org/wiki/Container_crane"
            }
        ]
  },
  "50,000 concurrent intrusion agents": {
    cardTitle: "Parallel Cloud Swarms",
    year: "2030",
    explanation: "By utilizing large cloud compute clusters, attackers deploy tens of thousands of autonomous software agents simultaneously. Each agent independently attacks a different corporate server or hospital network at the same time, turning cyber operations into a massive parallel process.",
    sources: [
            {
                "title": "UK AISI: Frontier AI Autonomous Agent Scaling Benchmarks",
                "url": "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
            },
            {
                "title": "Wikipedia: Botnet architectures",
                "url": "https://en.wikipedia.org/wiki/Botnet"
            }
        ]
  },
  "Full subnet enumeration in hours": {
    cardTitle: "Parallel Cloud Swarms",
    year: "2030",
    explanation: "Instead of slow, cautious manual scans that take weeks to map an enterprise's thousands of devices, cloud-hosted AI swarms probe, fingerprint, and catalog every IP address, open port, and service across entire corporate subnets in a matter of hours.",
    sources: [
            {
                "title": "Nmap Network Scanning Architecture and Theory",
                "url": "https://nmap.org/book/man.html"
            },
            {
                "title": "Wikipedia: Port scanner",
                "url": "https://en.wikipedia.org/wiki/Port_scanner"
            }
        ]
  },
  "SOC analytical exhaustion & alert overflow": {
    cardTitle: "Parallel Cloud Swarms",
    year: "2030",
    explanation: "Human security analysts in a monitoring center are flooded with tens of thousands of security alerts per hour generated by parallel swarm attacks. Unable to physically inspect more than a tiny fraction of alerts, legitimate intrusions slip through unreviewed.",
    sources: [
            {
                "title": "CISA: Cybersecurity Incident Response and SOC Optimization",
                "url": "https://www.cisa.gov/resources-tools/services"
            },
            {
                "title": "Wikipedia: Alert fatigue in computer security",
                "url": "https://en.wikipedia.org/wiki/Alert_fatigue"
            }
        ]
  },
  "Human SOC triage abandoned": {
    cardTitle: "Defensive Inversion",
    year: "2030",
    explanation: "Because human analysts cannot respond at machine speed to tens of thousands of simultaneous alerts, organizations are forced to remove human decision-makers from the triage loop, handing complete authority over network defense to autonomous AI defensive software.",
    sources: [
            {
                "title": "NIST Special Publication 800-61: Computer Security Incident Handling Guide",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final"
            },
            {
                "title": "Wikipedia: Automated incident response",
                "url": "https://en.wikipedia.org/wiki/Security_orchestration"
            }
        ]
  },
  "Autonomous defensive containment": {
    cardTitle: "Defensive Inversion",
    year: "2030",
    explanation: "Defensive AI algorithms automatically isolate suspect network switches, revoke user access tokens, and reboot servers within milliseconds of detecting an intrusion pattern, operating with zero human delay.",
    sources: [
            {
                "title": "MITRE D3FEND: Defensive Countermeasure Matrix",
                "url": "https://d3fend.mitre.org/"
            },
            {
                "title": "Wikipedia: Network detection and response",
                "url": "https://en.wikipedia.org/wiki/Intrusion_detection_system"
            }
        ]
  },
  "Severe friendly-fire disruptions": {
    cardTitle: "Defensive Inversion",
    year: "2030",
    explanation: "When defensive AI agents misinterpret legitimate business operations (like an emergency software update or high data transfer) as an active attack, they automatically sever internet links and shut down critical production servers, accidentally disrupting company operations.",
    sources: [
            {
                "title": "ACM Digital Library: False Positives in Automated Intrusion Response Systems",
                "url": "https://dl.acm.org/doi/10.1145/3372297"
            },
            {
                "title": "Wikipedia: False positive error",
                "url": "https://en.wikipedia.org/wiki/False_positives_and_false_negatives"
            }
        ]
  },
  "Substation failure disables telco": {
    cardTitle: "Interdependent Cascades",
    year: "2031",
    explanation: "Modern telecommunications cell towers and fiber routing switches require continuous electrical power. When an electric substation fails due to cyber intrusion, battery backups deplete in hours, collapsing telephone, cellular, and internet connectivity across the region.",
    sources: [
            {
                "title": "CISA: Interdependence of Energy and Communications Sectors",
                "url": "https://www.cisa.gov/topics/critical-infrastructure-sectors"
            },
            {
                "title": "Wikipedia: Infrastructure interdependency",
                "url": "https://en.wikipedia.org/wiki/Critical_infrastructure"
            }
        ]
  },
  "Water pump halt stalls cooling": {
    cardTitle: "Interdependent Cascades",
    year: "2031",
    explanation: "Large-scale thermal power generating stations and cloud datacenters require millions of gallons of continuous cooling water. If a municipal water pumping facility trips offline, power plants must perform emergency emergency shutdowns to avoid turbine overheating, causing rolling blackouts.",
    sources: [
            {
                "title": "US Department of Energy: The Energy-Water Nexus Architecture",
                "url": "https://www.energy.gov/energy-water-nexus"
            },
            {
                "title": "Wikipedia: Cooling tower operational dynamics",
                "url": "https://en.wikipedia.org/wiki/Cooling_tower"
            }
        ]
  },
  "Port cranes freeze logistics": {
    cardTitle: "Interdependent Cascades",
    year: "2031",
    explanation: "Power and telecom outages knock automated shipping port management software offline. Container cranes cease moving, container tracking databases lose synchronization, and supply chains for food, fuel, and medical goods back up for hundreds of miles.",
    sources: [
            {
                "title": "US Coast Guard: Maritime Cyber Risk Management Guidelines",
                "url": "https://www.dco.uscg.mil/Our-Organization/Assistant-Commandant-for-Prevention-Policy-CG-5P/Commercial-Regulations-standards-CG-ENG/Office-of-Design-and-Engineering-Standards/maritimecyber/"
            },
            {
                "title": "Wikipedia: Supply chain disruption",
                "url": "https://en.wikipedia.org/wiki/Supply_chain"
            }
        ]
  },
  "TSMC Fab 18/20 cut off": {
    cardTitle: "The Taiwan Compute Shock",
    year: "2031",
    explanation: "TSMC's advanced semiconductor fabrication facilities in Tainan and Hsinchu produce the overwhelming majority of the world's frontier AI training processors. A maritime blockade or geopolitical conflict in the Taiwan Strait physically cuts off global deliveries of cutting-edge silicon.",
    sources: [
            {
                "title": "Center for Strategic and International Studies (CSIS): The Taiwan Semiconductor Chokepoint",
                "url": "https://www.csis.org/analysis/semiconductors-and-taiwan-risk-exposure"
            },
            {
                "title": "Wikipedia: TSMC (Taiwan Semiconductor Manufacturing Company)",
                "url": "https://en.wikipedia.org/wiki/TSMC"
            }
        ]
  },
  "Global training cluster stall": {
    cardTitle: "The Taiwan Compute Shock",
    year: "2031",
    explanation: "Without replacement graphics processing units (GPUs) and high-bandwidth memory (HBM) from Taiwan, technology labs worldwide cannot expand their massive datacenter compute clusters, halting the rapid scaling of next-generation AI model generations.",
    sources: [
            {
                "title": "Stanford HAI: Compute Trends in Frontier Artificial Intelligence",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
            },
            {
                "title": "Wikipedia: Supercomputer cluster architecture",
                "url": "https://en.wikipedia.org/wiki/Computer_cluster"
            }
        ]
  },
  "Algorithmic parity crystallizes": {
    cardTitle: "The Taiwan Compute Shock",
    year: "2031",
    explanation: "With frontier hardware scaling temporarily frozen by the chip crisis, trailing nations and open-source researchers catch up to the frontier by optimizing algorithms and architectures, eliminating the capability gap between superpowers.",
    sources: [
            {
                "title": "UK AISI: Capability Convergence Across Open and Closed AI Ecosystems",
                "url": "https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber"
            },
            {
                "title": "Wikipedia: Algorithmic efficiency and optimization",
                "url": "https://en.wikipedia.org/wiki/Algorithmic_efficiency"
            }
        ]
  },
  "Air-gapped state control networks": {
    cardTitle: "Phase I: Pre-Hardening",
    year: "2032",
    explanation: "Before releasing powerful offensive tools, a state physically severs its own electrical grid, water treatment plants, and military command networks from all commercial internet routing, creating an isolated national intranet.",
    sources: [
            {
                "title": "NIST SP 800-82: Network Segmentation and Physical Air-Gapping",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: Air-gap (networking)",
                "url": "https://en.wikipedia.org/wiki/Air_gap_(networking)"
            }
        ]
  },
  "Sovereign crypto authentication": {
    cardTitle: "Phase I: Pre-Hardening",
    year: "2032",
    explanation: "All critical infrastructure controllers are upgraded to require hardware security modules (HSMs) and state-issued cryptographic digital signatures before accepting any command, rendering unauthorized network traffic invalid.",
    sources: [
            {
                "title": "Wikipedia: Hardware security module",
                "url": "https://en.wikipedia.org/wiki/Hardware_security_module"
            },
            {
                "title": "NIST Cryptographic Standards and Guidelines",
                "url": "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines"
            }
        ]
  },
  "Foreign software dependencies purged": {
    cardTitle: "Phase I: Pre-Hardening",
    year: "2032",
    explanation: "The state audits public utility servers to identify and rip out Western commercial operating systems, databases, and third-party software libraries, replacing them with strictly verified domestic alternatives to eliminate backdoors.",
    sources: [
            {
                "title": "CISA: Securing the Software Supply Chain Guidelines",
                "url": "https://www.cisa.gov/resources-tools/resources/defending-against-software-supply-chain-attacks"
            },
            {
                "title": "Wikipedia: Software supply chain vulnerability",
                "url": "https://en.wikipedia.org/wiki/Supply_chain_attack"
            }
        ]
  },
  "Trailing domestic silicon deployed": {
    cardTitle: "Asymmetric Doctrine",
    year: "2032",
    explanation: "Facing export embargos on 2-nanometer and 3-nanometer chips, the state re-engineers its software to run distributed AI training across thousands of older 7-nanometer and 14-nanometer domestic processors produced in domestic fabrication plants.",
    sources: [
            {
                "title": "Reuters: Domestic Immersion DUV and Trailing Edge Chip Production",
                "url": "https://www.reuters.com/world/china/china-starts-production-home-grown-immersion-duv-chipmaking-tools-source-says-2026-07-28/"
            },
            {
                "title": "Wikipedia: Semiconductor device fabrication (Process nodes)",
                "url": "https://en.wikipedia.org/wiki/Semiconductor_device_fabrication"
            }
        ]
  },
  "Private C7 model audits state grid": {
    cardTitle: "Asymmetric Doctrine",
    year: "2032",
    explanation: "The state uses its internal frontier AI model (rated at capability level C7) exclusively to audit its own domestic industrial controllers, discovering and fixing internal vulnerabilities before offensive weapons are shared globally.",
    sources: [
            {
                "title": "UK AISI: Frontier Capability Tiers in Automated Cyber Auditing",
                "url": "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
            },
            {
                "title": "Wikipedia: Red team and Blue team cybersecurity",
                "url": "https://en.wikipedia.org/wiki/Red_team"
            }
        ]
  },
  "Preparation for open weight dump": {
    cardTitle: "Asymmetric Doctrine",
    year: "2032",
    explanation: "The state prepares to publish trained AI model weights onto open torrent trackers and peer-to-peer repositories, ensuring they cannot be recalled, deleted, or blocked by foreign governments once uploaded.",
    sources: [
            {
                "title": "Stanford HAI: The Open-Weight AI Model Ecosystem",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
            },
            {
                "title": "Wikipedia: Open-source model (Machine learning weights)",
                "url": "https://en.wikipedia.org/wiki/Open-source_artificial_intelligence"
            }
        ]
  },
  "Unaligned C6 weights distributed": {
    cardTitle: "Phase II: Proliferation",
    year: "2033",
    explanation: "Offensive AI model weights capable of autonomous network exploitation (level C6) are uploaded to public internet repositories without ethical alignment filters, allowing anyone with sufficient computing power to download and execute them.",
    sources: [
            {
                "title": "UK AISI: Assessment of Cyber Capabilities in Open-Weight Frontier Releases",
                "url": "https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber"
            },
            {
                "title": "Wikipedia: AI safety (Alignment problem)",
                "url": "https://en.wikipedia.org/wiki/AI_safety"
            }
        ]
  },
  "Safety fine-tuning stripped in hours": {
    cardTitle: "Phase II: Proliferation",
    year: "2033",
    explanation: "When an AI model is published with open weights, security researchers and attackers can use simple low-rank adaptation (LoRA) or fine-tuning techniques to completely strip out safety guardrails in a few hours on consumer GPU cards.",
    sources: [
            {
                "title": "arXiv: Fine-Tuning Aligned Language Models Compromises Safety Even When Inputs Are Harmless",
                "url": "https://arxiv.org/abs/2310.03693"
            },
            {
                "title": "Wikipedia: Fine-tuning (deep learning)",
                "url": "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)"
            }
        ]
  },
  "Commodity extortion toolkits explode": {
    cardTitle: "Phase II: Proliferation",
    year: "2033",
    explanation: "Because high-end autonomous attack models are freely available, criminal cartels package them into automated extortion apps, allowing low-level hackers to launch nation-state level cyber attacks against schools and businesses.",
    sources: [
            {
                "title": "CISA: StopRansomware Campaign and Ransomware Trends",
                "url": "https://www.cisa.gov/stopransomware"
            },
            {
                "title": "FBI Internet Crime Report: Commodity Ransomware Trends",
                "url": "https://www.ic3.gov/Media/PDF/AnnualReport/2024_IC3Report.pdf"
            }
        ]
  },
  "Thousands share same weights": {
    cardTitle: "Attribution Opacity",
    year: "2033",
    explanation: "Because identical model weights are downloaded by thousands of independent cybercrime gangs and researchers around the world, defensive analysts cannot trace an attack back to a specific government based on malware code signatures.",
    sources: [
            {
                "title": "Office of the Director of National Intelligence: Cyber Attribution Guide",
                "url": "https://www.dni.gov/index.php"
            },
            {
                "title": "Wikipedia: Cyberattack attribution",
                "url": "https://en.wikipedia.org/wiki/Attribution_(cybersecurity)"
            }
        ]
  },
  "Sovereign plausible deniability": {
    cardTitle: "Attribution Opacity",
    year: "2033",
    explanation: "A state conducting cyber operations uses publicly leaked open-weight models and proxy criminal front groups, allowing political leaders to claim with plausible deniability that attacks were launched by independent internet hackers.",
    sources: [
            {
                "title": "Harvard Belfer Center: Cyber Statecraft and Plausible Deniability",
                "url": "https://www.belfercenter.org/research"
            },
            {
                "title": "Wikipedia: Plausible deniability",
                "url": "https://en.wikipedia.org/wiki/Plausible_deniability"
            }
        ]
  },
  "SOC alert triage collapses": {
    cardTitle: "Attribution Opacity",
    year: "2033",
    explanation: "Enterprise Security Operations Centers receive millions of intrusion attempts per week. With zero ability to distinguish between harmless script-kiddie scans and sophisticated state operations, defenders are completely blinded by noise.",
    sources: [
            {
                "title": "CISA: SOC Alert Fatigue and Overload Guidance",
                "url": "https://www.cisa.gov/resources-tools/services"
            },
            {
                "title": "Wikipedia: Security operations center triage",
                "url": "https://en.wikipedia.org/wiki/Security_operations_center"
            }
        ]
  },
  "Municipal water & regional grid hits": {
    cardTitle: "Kinetic Attrition",
    year: "2034",
    explanation: "With thousands of automated AI agents running continuously, smaller municipal utilities that lack full-time cybersecurity teams suffer direct physical disruptions to water chemical dosing and regional electrical breakers.",
    sources: [
            {
                "title": "CISA Alert: Defending Drinking Water and Wastewater Critical Infrastructure",
                "url": "https://www.cisa.gov/news-events/cybersecurity-advisories"
            },
            {
                "title": "EPA Cybersecurity Guidance for Water Systems",
                "url": "https://www.epa.gov/dwstandardsregulations"
            }
        ]
  },
  "High-voltage transformer burnout": {
    cardTitle: "Kinetic Attrition",
    year: "2034",
    explanation: "Attacks repeatedly open and close breakers under peak load, inducing intense magnetic flux and thermal overloads inside power transformers. Because custom high-voltage transformers take 12 to 24 months to manufacture, burnouts cause long-term regional outages.",
    sources: [
            {
                "title": "US Department of Energy: Large Power Transformers and the US Electric Grid",
                "url": "https://www.energy.gov/oe/articles/large-power-transformers-and-us-electric-grid"
            },
            {
                "title": "Wikipedia: Transformer (Electric power transmission)",
                "url": "https://en.wikipedia.org/wiki/Transformer"
            }
        ]
  },
  "Supply chain dependency cascades": {
    cardTitle: "Kinetic Attrition",
    year: "2034",
    explanation: "When regional electricity and water systems experience rolling outages, nearby chemical packaging factories, cold food storage warehouses, and shipping rail hubs shut down, creating cross-sector supply chain halts.",
    sources: [
            {
                "title": "CISA: Critical Infrastructure Sector Interdependencies",
                "url": "https://www.cisa.gov/topics/critical-infrastructure-sectors"
            },
            {
                "title": "Wikipedia: Cascading failure",
                "url": "https://en.wikipedia.org/wiki/Cascading_failure"
            }
        ]
  },
  "Commercial insurance capacity zeroed": {
    cardTitle: "Defensive Containment Failure",
    year: "2034",
    explanation: "Commercial insurance companies stop writing cyber insurance policies altogether because persistent, widespread AI attacks across multiple sectors create unpredictable, correlated multi-billion-dollar losses that exceed insurance cash reserves.",
    sources: [
            {
                "title": "Geneva Association: Cyber Risk Accumulation and Systemic Insurability",
                "url": "https://www.genevaassociation.org/research-topics/cyber"
            },
            {
                "title": "Wikipedia: Cyber insurance",
                "url": "https://en.wikipedia.org/wiki/Cyber_insurance"
            }
        ]
  },
  "Human SOC response times obsolete": {
    cardTitle: "Defensive Containment Failure",
    year: "2034",
    explanation: "Because an AI attack script can penetrate a firewall, discover passwords, and compromise an industrial controller in under 30 seconds, traditional incident response procedures that take hours or days to convene human meetings are functionally useless.",
    sources: [
            {
                "title": "SANS Institute: Incident Responder's Field Guide to Machine-Speed Threats",
                "url": "https://www.sans.org/white-papers/"
            },
            {
                "title": "Wikipedia: Computer security incident management",
                "url": "https://en.wikipedia.org/wiki/Computer_security_incident_management"
            }
        ]
  },
  "European digital sovereignty crisis": {
    cardTitle: "Defensive Containment Failure",
    year: "2034",
    explanation: "European countries, lacking domestic closed frontier AI hyperscalers, face a crisis of dependence. They find themselves forced to rely on foreign state-controlled AI models for domestic grid defense while being bombarded by diffused open-weight malware.",
    sources: [
            {
                "title": "European Union Council: Critical Technologies and Strategic Autonomy",
                "url": "https://www.consilium.europa.eu/en/press/press-releases/2025/07/24/25th-eu-china-summit-eu-press-release/"
            },
            {
                "title": "Wikipedia: Digital sovereignty",
                "url": "https://en.wikipedia.org/wiki/Digital_sovereignty"
            }
        ]
  },
  "Automated code rewriting at scale": {
    cardTitle: "Defensive Adaptation",
    year: "2035",
    explanation: "Defenders deploy autonomous AI compiler agents that ingest millions of lines of legacy C/C++ code across municipal infrastructure and automatically rewrite them into memory-safe languages (like Rust) with automated formal proofs.",
    sources: [
            {
                "title": "DARPA: TRACTOR Program (Translating All C to Rust)",
                "url": "https://www.darpa.mil/program/translating-all-c-to-rust"
            },
            {
                "title": "Wikipedia: Memory safety (Rust programming language)",
                "url": "https://en.wikipedia.org/wiki/Memory_safety"
            }
        ]
  },
  "Sovereign defensive counter-agents": {
    cardTitle: "Defensive Adaptation",
    year: "2035",
    explanation: "Governments deploy sovereign defensive AI agents that live inside telecom switches and electric substations, autonomously hunting down malicious intrusion agents, patching bugs in real time, and isolating hostile subnets in milliseconds.",
    sources: [
            {
                "title": "MITRE D3FEND: Autonomous Defensive Countermeasure Framework",
                "url": "https://d3fend.mitre.org/"
            },
            {
                "title": "Wikipedia: Autonomous agent (Cyber defense)",
                "url": "https://en.wikipedia.org/wiki/Autonomous_agent"
            }
        ]
  },
  "Hard physical isolation of grid assets": {
    cardTitle: "Defensive Adaptation",
    year: "2035",
    explanation: "Recognizing that software-level network firewalls can always be bypassed by frontier zero-days, utilities permanently disconnect substation breakers from corporate IP networks, requiring physical keys and human technicians on-site to alter grid configurations.",
    sources: [
            {
                "title": "NIST SP 800-82: ICS Physical Separation and Mechanical Interlocks",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: Air gap (networking)",
                "url": "https://en.wikipedia.org/wiki/Air_gap_(networking)"
            }
        ]
  },
  "Diffused models remain unpatchable": {
    cardTitle: "Permanent Exposure Floor",
    year: "2035",
    explanation: "Once open-weight AI models are downloaded onto private hard drives, they cannot be patched, recalled, or deleted by software companies, ensuring high-end exploit generation tools remain permanently in the hands of non-state actors.",
    sources: [
            {
                "title": "UK AISI: Permanence of Open-Weight Capability Releases",
                "url": "https://www.aisi.gov.uk/blog/how-far-behind-the-frontier-are-leading-open-weight-models-on-cyber"
            },
            {
                "title": "Wikipedia: Open-source software security",
                "url": "https://en.wikipedia.org/wiki/Open-source_software_security"
            }
        ]
  },
  "Continuous background cyber friction": {
    cardTitle: "Permanent Exposure Floor",
    year: "2035",
    explanation: "The global internet settles into a permanent state of high-volume background cyber warfare, where automated bots constantly hammer firewalls and exploit flaws, turning cybersecurity into a permanent operating tax for modern commerce.",
    sources: [
            {
                "title": "Harvard Belfer Center: Cyber Friction and Global Stability",
                "url": "https://www.belfercenter.org/research"
            },
            {
                "title": "Wikipedia: Cyberwarfare operational concepts",
                "url": "https://en.wikipedia.org/wiki/Cyberwarfare"
            }
        ]
  },
  "Non-linear tail risk cemented": {
    cardTitle: "Permanent Exposure Floor",
    year: "2035",
    explanation: "In statistics, tail risk represents low-probability events with catastrophic outcomes. Because malicious AI models continuously probe complex interconnected infrastructure, society faces a permanent danger of unforeseen multi-sector cascading blackouts.",
    sources: [
            {
                "title": "Wikipedia: Tail risk and Extreme Value Theory",
                "url": "https://en.wikipedia.org/wiki/Tail_risk"
            },
            {
                "title": "Swiss Re Institute: Systemic Cyber Risk and Catastrophic Exposure",
                "url": "https://www.swissre.com/institute/research.html"
            }
        ]
  },
  "Datacenter telemetry auditing": {
    cardTitle: "Bilateral Verification",
    year: "2032",
    explanation: "Under an international bilateral treaty, major powers install hardware-level monitors and power sensors inside all commercial datacenters to verify that high-performance compute clusters are not being used to train unmonitored offensive cyber models.",
    sources: [
            {
                "title": "NIST AI Risk Management Framework: Datacenter Compute Auditing",
                "url": "https://www.nist.gov/itl/ai-risk-management-framework"
            },
            {
                "title": "Wikipedia: Arms control treaty verification",
                "url": "https://en.wikipedia.org/wiki/Verification_(arms_control)"
            }
        ]
  },
  "Open-weight release ban": {
    cardTitle: "Bilateral Verification",
    year: "2032",
    explanation: "Governments criminalize the public dissemination of raw model weights for AI models trained above a specific computational threshold (such as 10^26 FLOPs), preventing advanced autonomous hacking models from leaking onto the open internet.",
    sources: [
            {
                "title": "White House Executive Order on Safe, Secure, and Trustworthy Artificial Intelligence",
                "url": "https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/"
            },
            {
                "title": "Wikipedia: Artificial intelligence regulation",
                "url": "https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence"
            }
        ]
  },
  "Red lines on critical power grids": {
    cardTitle: "Bilateral Verification",
    year: "2032",
    explanation: "Superpowers establish explicit bilateral red lines declaring that any cyberattack causing physical damage to civilian power grids or municipal water treatment facilities will be legally treated as an act of war triggering immediate kinetic retaliation.",
    sources: [
            {
                "title": "UN Group of Governmental Experts (GGE): Responsible State Behavior in Cyberspace",
                "url": "https://disarmament.unoda.org/topics/cyber/"
            },
            {
                "title": "Wikipedia: Cyber deterrence",
                "url": "https://en.wikipedia.org/wiki/Deterrence_theory"
            }
        ]
  },
  "Civilian ransomware down 90%": {
    cardTitle: "Hardware Scarcity",
    year: "2032",
    explanation: "By cutting off criminal syndicates from high-performance GPUs and preventing the leak of open-weight exploit models, non-state threat actors lack the computational tools to execute complex autonomous intrusions, causing civilian ransomware incidents to collapse.",
    sources: [
            {
                "title": "FBI Internet Crime Complaint Center: Annual Cyber Threat Metrics",
                "url": "https://www.ic3.gov/Media/PDF/AnnualReport/2024_IC3Report.pdf"
            },
            {
                "title": "CISA StopRansomware Metric Audits",
                "url": "https://www.cisa.gov/stopransomware"
            }
        ]
  },
  "Physical crypto seals on racks": {
    cardTitle: "Hardware Scarcity",
    year: "2032",
    explanation: "Datacenter server racks containing frontier AI chips are equipped with tamper-evident optical cryptographic seals and hardware sensors that immediately alert international inspectors if a server chassis is opened or modified.",
    sources: [
            {
                "title": "IAEA Safeguards: Tamper-Indicating Devices and Enclosure Seals",
                "url": "https://www.iaea.org/topics/safeguards"
            },
            {
                "title": "Wikipedia: Tamper-evident technology",
                "url": "https://en.wikipedia.org/wiki/Tamper-evident"
            }
        ]
  },
  "Sovereign military enclave custody": {
    cardTitle: "Hardware Scarcity",
    year: "2032",
    explanation: "All frontier compute facilities above treaty limits are classified as sovereign defense assets, surrounded by military security perimeters, air-gapped from commercial clouds, and operated exclusively under state supervision.",
    sources: [
            {
                "title": "US Department of Defense: Secure Datacenter Enclave Architecture",
                "url": "https://www.defense.gov"
            },
            {
                "title": "Wikipedia: Sensitive Compartmented Information Facility (SCIF)",
                "url": "https://en.wikipedia.org/wiki/Sensitive_compartmented_information_facility"
            }
        ]
  },
  "ASML DUV servicing eased": {
    cardTitle: "The European Bargain",
    year: "2033",
    explanation: "As part of the geopolitical accord, European governments ease export restrictions on the maintenance, replacement parts, and software calibration of Deep Ultraviolet (DUV) lithography machines used in domestic Chinese chip fabrication plants.",
    sources: [
            {
                "title": "Dutch Ministry for Foreign Trade: Export Control Regulations for Semiconductor Manufacturing",
                "url": "https://www.government.nl/latest/news/2024/09/06/the-netherlands-expands-export-control-measure-advanced-semiconductor-manufacturing-equipment"
            },
            {
                "title": "ASML Press Release: Statement Regarding Export Control Regulations",
                "url": "https://www.asml.com/en/news/press-releases/2023/statement-regarding-export-control-regulations-dutch-government"
            }
        ]
  },
  "Rare earth deliveries guaranteed": {
    cardTitle: "The European Bargain",
    year: "2033",
    explanation: "In exchange for relaxed semiconductor equipment servicing, raw material exporters guarantee stable, uninterrupted shipments of refined critical minerals (such as neodymium, dysprosium, and gallium) vital for Western electronics and motor manufacturing.",
    sources: [
            {
                "title": "European Council: Critical Raw Materials Act and Supply Security",
                "url": "https://www.consilium.europa.eu/en/infographics/critical-raw-materials-explained/"
            },
            {
                "title": "Wikipedia: Rare earth elements and geopolitics",
                "url": "https://en.wikipedia.org/wiki/Rare-earth_element"
            }
        ]
  },
  "Civilian infrastructure non-aggression": {
    cardTitle: "The European Bargain",
    year: "2033",
    explanation: "Major participating powers formally ratify a binding cyber non-aggression pact, pledging that neither state's military will target, probe, or plant malware inside the other's civilian power grids, hospitals, or municipal water networks.",
    sources: [
            {
                "title": "UN General Assembly: Norms for Responsible State Behavior in Cyberspace",
                "url": "https://disarmament.unoda.org/topics/cyber/"
            },
            {
                "title": "Wikipedia: Non-aggression pact",
                "url": "https://en.wikipedia.org/wiki/Non-aggression_pact"
            }
        ]
  },
  "Grids detached from public clouds": {
    cardTitle: "Sovereign Isolation",
    year: "2033",
    explanation: "Electric transmission systems and SCADA networks migrate away from multi-tenant commercial public clouds (like AWS or Azure), returning to isolated, dedicated state-owned fiber optic networks to ensure zero shared-cloud attack surfaces.",
    sources: [
            {
                "title": "NIST SP 800-82: ICS Network Architecture and Cloud Isolation",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: Private network architecture",
                "url": "https://en.wikipedia.org/wiki/Private_network"
            }
        ]
  },
  "Formally verified microkernels in SCADA": {
    cardTitle: "Sovereign Isolation",
    year: "2033",
    explanation: "SCADA controllers replace complex operating systems (like Linux or Windows) with mathematically verified microkernels (such as seL4). Mathematical proofs guarantee that buffer overflows and memory privilege bugs are impossible, locking out zero-day exploits.",
    sources: [
            {
                "title": "seL4 Foundation: Formally Verified Operating System Kernel",
                "url": "https://sel4.systems/"
            },
            {
                "title": "Wikipedia: Formal verification",
                "url": "https://en.wikipedia.org/wiki/Formal_verification"
            }
        ]
  },
  "Industrial downtime contained": {
    cardTitle: "Sovereign Isolation",
    year: "2033",
    explanation: "Because critical control systems are hardened with formally verified kernels and isolated from public internet links, unauthorized intrusion attempts drop dramatically, keeping industrial plant outages within predictable maintenance windows.",
    sources: [
            {
                "title": "NIST SP 800-82: Operational Continuity and Industrial Resilience",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: High availability and system uptime",
                "url": "https://en.wikipedia.org/wiki/High_availability"
            }
        ]
  },
  "DUV multi-patterning lines stabilize": {
    cardTitle: "Frontier Catch-Up",
    year: "2034",
    explanation: "Using deep ultraviolet (DUV) immersion lithography with quadruple-patterning techniques, domestic semiconductor fabs stabilize production yields for 5-nanometer equivalent chips, narrowing the compute gap without needing foreign extreme ultraviolet (EUV) machines.",
    sources: [
            {
                "title": "Reuters: Domestic Immersion DUV Lithography Tool Ramps",
                "url": "https://www.reuters.com/world/china/china-starts-production-home-grown-immersion-duv-chipmaking-tools-source-says-2026-07-28/"
            },
            {
                "title": "Wikipedia: Multiple patterning (Semiconductor fabrication)",
                "url": "https://en.wikipedia.org/wiki/Multiple_patterning"
            }
        ]
  },
  "State compute hoarded for defense AI": {
    cardTitle: "Frontier Catch-Up",
    year: "2034",
    explanation: "Governments prioritize national security over commercial applications, strictly rationing electrical power and silicon capacity so that the vast majority of high-end datacenter compute is reserved for national cyber defense and intelligence models.",
    sources: [
            {
                "title": "CSIS: National Compute Governance and Strategic Silicon Allocation",
                "url": "https://www.csis.org/analysis/semiconductors-and-taiwan-risk-exposure"
            },
            {
                "title": "Wikipedia: Strategic reserve",
                "url": "https://en.wikipedia.org/wiki/Strategic_reserve"
            }
        ]
  },
  "Sovereign model approaches C7.6": {
    cardTitle: "Frontier Catch-Up",
    year: "2034",
    explanation: "Through architectural optimizations and concentrated compute resources, sovereign defense laboratories train AI models that reach near-parity with Western frontier models (capability level C7.6), securing a mutual technological equilibrium.",
    sources: [
            {
                "title": "UK AISI: Frontier Capability Tiers and Algorithmic Scaling",
                "url": "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
            },
            {
                "title": "Wikipedia: Artificial general intelligence benchmarks",
                "url": "https://en.wikipedia.org/wiki/Artificial_general_intelligence"
            }
        ]
  },
  "Zero public weight leakages": {
    cardTitle: "Statecraft Bastions",
    year: "2034",
    explanation: "Rigorous military counterintelligence, physical hardware isolation, and biometric server controls successfully prevent any trained model weights or training datasets from leaking into the public domain or cybercrime underground.",
    sources: [
            {
                "title": "RAND Corporation: Securing AI Model Weights Against Nation-State Espionage",
                "url": "https://www.rand.org/pubs/research_reports/RRA2844-1.html"
            },
            {
                "title": "Wikipedia: Information security (Data loss prevention)",
                "url": "https://en.wikipedia.org/wiki/Data_loss_prevention_software"
            }
        ]
  },
  "Covert intelligence espionage continues": {
    cardTitle: "Statecraft Bastions",
    year: "2034",
    explanation: "While overt attacks on civilian infrastructure cease under treaty accords, major powers continue quiet, low-noise cyber espionage targeting foreign military doctrines, satellite telemetry, and geopolitical negotiations.",
    sources: [
            {
                "title": "Office of the Director of National Intelligence: Annual Cyber Threat Assessment",
                "url": "https://www.dni.gov/index.php"
            },
            {
                "title": "Wikipedia: Cyber spying",
                "url": "https://en.wikipedia.org/wiki/Cyber_spying"
            }
        ]
  },
  "Civilian disruption held to low levels": {
    cardTitle: "Statecraft Bastions",
    year: "2034",
    explanation: "Because high-end models are locked in sovereign enclaves and commodity ransomware gangs lack autonomous exploit generators, public utilities, hospitals, and transportation grids operate with minimal cyber downtime.",
    sources: [
            {
                "title": "CISA: Annual Critical Infrastructure Resilience Review",
                "url": "https://www.cisa.gov/topics/critical-infrastructure-sectors"
            },
            {
                "title": "FBI IC3: Annual Cyber Loss Report",
                "url": "https://www.ic3.gov/Media/PDF/AnnualReport/2024_IC3Report.pdf"
            }
        ]
  },
  "Automated mutual retaliation red-lines": {
    cardTitle: "Cold Deterrence",
    year: "2035",
    explanation: "Major powers deploy automated retaliatory software frameworks. If an adversary's cyber weapon is detected breaching a national power grid, the system automatically triggers a proportional retaliatory response against the attacker's military nodes, maintaining deterrence.",
    sources: [
            {
                "title": "Harvard Belfer Center: Automated Cyber Retaliation and Deterrence Stability",
                "url": "https://www.belfercenter.org/research"
            },
            {
                "title": "Wikipedia: Mutually assured destruction (Cyber deterrence)",
                "url": "https://en.wikipedia.org/wiki/Mutual_assured_destruction"
            }
        ]
  },
  "Continuous AI telemetry audit on grids": {
    cardTitle: "Cold Deterrence",
    year: "2035",
    explanation: "Sovereign defensive AI models continuously monitor every electrical bus, packet, and controller register across national power grids in real time, detecting anomalies and validating command authenticity with zero human latency.",
    sources: [
            {
                "title": "NIST SP 800-82: Continuous Monitoring in Industrial Control Systems",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: Intrusion detection system (Industrial anomaly detection)",
                "url": "https://en.wikipedia.org/wiki/Intrusion_detection_system"
            }
        ]
  },
  "Nuclear & financial ledgers air-gapped": {
    cardTitle: "Cold Deterrence",
    year: "2035",
    explanation: "Critical sovereign ledgers (including central bank interbank settlement databases and strategic nuclear command systems) are completely removed from standard internet routing and isolated behind hardware-enforced one-way data diodes.",
    sources: [
            {
                "title": "NIST SP 800-82: Unidirectional Security Gateways (Data Diodes)",
                "url": "https://csrc.nist.gov/publications/detail/sp/800-82/rev-2/final"
            },
            {
                "title": "Wikipedia: Data diode (Unidirectional network)",
                "url": "https://en.wikipedia.org/wiki/Unidirectional_network"
            }
        ]
  },
  "Commercial labs nationalized into defense": {
    cardTitle: "Concentrated Power",
    year: "2035",
    explanation: "Private frontier AI research laboratories are brought under direct defense ministry governance, integrating commercial researchers into state national security structures and eliminating private commercial release of frontier models.",
    sources: [
            {
                "title": "CSIS: National Security Defense Production Act in Critical Technologies",
                "url": "https://www.csis.org/analysis/semiconductors-and-taiwan-risk-exposure"
            },
            {
                "title": "Wikipedia: Nationalization and defense production",
                "url": "https://en.wikipedia.org/wiki/Nationalization"
            }
        ]
  },
  "Zero commodity zero-day proliferation": {
    cardTitle: "Concentrated Power",
    year: "2035",
    explanation: "Because autonomous zero-day discovery engines are strictly guarded inside state military installations, street-level cybercriminals and non-state ransomware syndicates have zero access to automated zero-days, protecting ordinary civilian devices.",
    sources: [
            {
                "title": "UK AISI: Proliferation Risks of Frontier Cyber Capabilities",
                "url": "https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing"
            },
            {
                "title": "Wikipedia: Zero-day (computing) market dynamics",
                "url": "https://en.wikipedia.org/wiki/Zero-day_(computing)"
            }
        ]
  },
  "Civilian baseline accounts for 77.6%": {
    cardTitle: "Concentrated Power",
    year: "2035",
    explanation: "Under the Plan C Consolidation doctrine, catastrophic AI-induced attacks are contained. As a result, the overwhelming majority (77.6%) of cyber losses come from ordinary, non-AI baseline crimes like phishing, human error, and credential theft.",
    sources: [
            {
                "title": "FBI Internet Crime Complaint Center: Cyber Baseline Analysis",
                "url": "https://www.ic3.gov/Media/PDF/AnnualReport/2024_IC3Report.pdf"
            },
            {
                "title": "Stanford HAI: Empirical Cyber Incident and Loss Models",
                "url": "https://hai.stanford.edu/ai-index/2025-ai-index-report"
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
    title: "2024: The Research Assistant",
    level: "C0",
    levelName: "AI Research Assistant",
    status: "OBSERVED",
    lossCentral: 440,
    lossRange: "$440B",
    totalLossP50: 440,
    totalLossRange: "$440B",
    aiAttackShare: "3.2%",
    netAiIncrement: 0.0,
    netAiRange: "$0B",
    baselineLoss: 440.0,
    baselineShare: "100.0%",
    dominantActor: "Elite Red Teams",
    usModel: "GPT-4 class (C0 Frontier)",
    chinaModel: "GLM-4 / DeepSeek V2 (C0 Assistant Era)",
    europeModel: "Mistral-class models (C0 Assistant Era)",
    usStatus: "Frontier Leader · Fast Assistant",
    chinaStatus: "Narrowing gap · Broad assistant capability",
    europeStatus: "Smaller ecosystem · Relies more on US platforms",
    keyMilestone: "AI acts like a high-speed research intern, reading technical manuals in seconds and finding default passwords.",
    storyHtml: `
      <p class="story-lead">In 2024, AI entered cybersecurity primarily as a high-speed research assistant. Human operators directed every operational step, but commercial reasoning models drastically compressed the cycle time required to parse technical documentation, enumerate known vulnerabilities, and generate routine scripts.</p>
      
      <p>OpenAI and Microsoft threat intelligence documented this transition when investigating an Iranian-affiliated threat actor known as <em>CyberAv3ngers</em>. The group queried commercial frontier models to extract manuals for municipal water pumps and electrical switches, retrieve default factory credentials, and troubleshoot network-scanning scripts. The models did not invent novel zero-day exploits. Instead, they acted as tireless technical assistants parsing hundreds of pages of industrial schematics in seconds.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Operational Workflow</div>
          <div class="nc-desc">Human-directed querying of frontier model APIs. <span style="display: inline-block; margin-left: 4px; font-size: 0.76rem; color: #777; font-style: italic;">(click underlined terms for notes)</span></div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> <span class="nc-item-term" data-term="Industrial manual extraction">Industrial manual extraction</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3"/></svg> <span class="nc-item-term" data-term="Default credential lookup">Default credential lookup</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> <span class="nc-item-term" data-term="Basic bash/python scripting">Basic bash/python scripting</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Frontier Guardrails</div>
          <div class="nc-desc">Effective refusal on direct malicious prompts.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> <span class="nc-item-term" data-term="Exploit generation blocked">Exploit generation blocked</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Dual-use bypasses via manuals">Dual-use bypasses via manuals</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span class="nc-item-term" data-term="Fragmented tool scaffolding">Fragmented tool scaffolding</span></div>
          </div>
        </div>
      </div>

      <p>The United States led the frontier with closed systems like GPT-4. China operated in the same broad assistant-capability tier with models like GLM-4 and DeepSeek V2, closing much of the benchmark performance gap over the course of the year. Europe maintained capable open-source development through Mistral, but remained heavily dependent on American hyperscale cloud infrastructure for enterprise security mitigation.</p>

      <p>Crucially, modeled global cyber losses in 2024 stood at a median of $440 Billion, representing the traditional non-AI baseline driven by unpatched CVEs, business email compromise, and commodity ransomware. Extra damages caused directly by AI autonomy were negligible (+$0B anchor year), serving purely as an efficiency amplifier for existing human tradecraft.</p>
    `
  },
  {
    id: "year-2025",
    year: 2025,
    displayDate: "2025",
    navLabel: "2025",
    title: "2025: The One-Person Cyber Team",
    level: "C1",
    levelName: "Agentic Assistant",
    status: "OBSERVED",
    lossCentral: 500,
    lossRange: "$480B - $530B",
    totalLossP50: 500,
    totalLossRange: "$480B - $530B",
    aiAttackShare: "18.5%",
    netAiIncrement: 16.1,
    netAiRange: "$8B - $25B",
    baselineLoss: 483.9,
    baselineShare: "96.8%",
    dominantActor: "Solo Operators",
    usModel: "Claude 3.5 / GPT-4.5 (C1 Frontier)",
    chinaModel: "DeepSeek V3 / GLM-4.5 (C1 Agentic Era)",
    europeModel: "Mistral Large / Codestral (C1 Era)",
    usStatus: "Frontier Leader · Tool Execution",
    chinaStatus: "Fast Follower · Agentic CLI Tools",
    europeStatus: "Capable Coding Models · Open Ecosystem",
    keyMilestone: "A single operator using AI executes complex attack chains that previously required a specialized team.",
    storyHtml: `
      <p class="story-lead">By 2025, models transitioned from passively answering technical prompts to actively executing sequential multi-step operational chains. The primary breakthrough was labor compression, enabling a single operator to accomplish operational tasks that previously required a coordinated unit of specialized engineers.</p>

      <p>Anthropic documented this dynamic during a state-sponsored campaign that targeted telecommunications providers, government databases, and agricultural systems in Vietnam over a nine-month period. The AI assisted human operators across 12 of the 14 standard stages of the MITRE ATT&CK enterprise matrix, including reconnaissance scripting, organizing stolen access tokens, mapping lateral movement pathways across internal networks, and recommending operational security measures to evade detection.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Labor Compression</div>
          <div class="nc-desc">1 solo operator = 1 specialized 5-person team.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg> <span class="nc-item-term" data-term="12 of 14 MITRE ATT&CK stages">12 of 14 MITRE ATT&CK stages</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3"/></svg> <span class="nc-item-term" data-term="Stolen credential sorting">Stolen credential sorting</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><circle cx="19" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M5 9v3a3 3 0 0 0 3 3h4m4 0h3a3 3 0 0 0 3-3V9"/></svg> <span class="nc-item-term" data-term="Lateral network mapping">Lateral network mapping</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Commodity Ransomware</div>
          <div class="nc-desc">Syndicates incorporate frontier scaffolding.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/><circle cx="12" cy="16" r="1.5"/></svg> <span class="nc-item-term" data-term="Jailbroken LLM wrapper kits">Jailbroken LLM wrapper kits</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> <span class="nc-item-term" data-term="Automated victim profiling">Automated victim profiling</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> <span class="nc-item-term" data-term="Attack cadence doubles">Attack cadence doubles</span></div>
          </div>
        </div>
      </div>

      <p>The strategic implication was immediate: the skill floor required to execute sophisticated enterprise intrusions collapsed. Small criminal syndicates and secondary nation-states could run persistent multi-stage intrusion operations without maintaining deep institutional benches of elite exploit developers.</p>

      <p>Global cyber losses rose to $500 Billion median (with an 80% confidence interval of $480B to $530B, capturing the 10th to 90th percentile simulation range). Traditional baseline loss accounted for 96.8% ($484 Billion) of the total. While extra damage strictly caused by AI reached $16.1 Billion, the primary threat remained the scale of ordinary enterprise vulnerabilities exploited by newly empowered solo operators.</p>
    `
  },
  {
    id: "year-2026",
    year: 2026,
    displayDate: "2026",
    navLabel: "2026",
    title: "2026: Autonomous Exploit Chaining",
    level: "C2",
    levelName: "Autonomous Exploit Researcher",
    status: "OBSERVED",
    lossCentral: 575,
    lossRange: "$530B - $640B",
    totalLossP50: 575,
    totalLossRange: "$530B - $640B",
    aiAttackShare: "35.4%",
    netAiIncrement: 33.4,
    netAiRange: "$18B - $55B",
    baselineLoss: 541.6,
    baselineShare: "94.2%",
    dominantActor: "Ransomware Cartels",
    usModel: "Claude Mythos Preview / OpenAI Daybreak (C2 Frontier)",
    chinaModel: "GLM-5.2 / DeepSeek V4-Pro (4 to 7 months behind)",
    europeModel: "Mistral Medium 3.5 (about 12 months behind)",
    usStatus: "Frontier Leader · Gated Access (Glasswing)",
    chinaStatus: "4 to 7 Months Behind · Rapid Open Releases",
    europeStatus: "About 12 Months Behind · Domestic Ecosystem",
    keyMilestone: "AI independently discovers undisclosed security vulnerabilities ('zero-days') and chains them into working exploits.",
    storyHtml: `
      <p class="story-lead">In 2026, AI crossed a decisive threshold: discovering brand-new, previously undisclosed security vulnerabilities in complex software completely autonomously. Frontier labs and independent researchers deployed reasoning models inside containerized execution loops, enabling agents to inspect open-source and decompiled binaries, generate synthetic inputs, detect memory corruption, and synthesize working proof-of-concept exploits without human intervention.</p>

      <p>This automated discovery flood triggered the collapse of Linus's Law: the long-standing dogma that open-source software with millions of eyes (such as PHP, the Linux kernel, or SQLite) is inherently secure because with enough eyeballs, all bugs are shallow. Disclosures like PHP2Shell (CVE-2026-109618 and CVE-2026-109619) proved that humans simply cannot track non-linear state interactions across sprawling, 20-year-old C/C++ runtimes. The code was never secure; it was merely obscured by human cognitive limits. The moment frontier models systematically parsed these repositories, the shallow bug hypothesis evaporated.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Autonomous Discovery</div>
          <div class="nc-desc">Reasoning models inside automated fuzzing loops.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg> <span class="nc-item-term" data-term="Zero-day discovery in hours">Zero-day discovery in hours</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> <span class="nc-item-term" data-term="Collapse of Linus's Law (PHP2Shell)">Collapse of Linus's Law (PHP2Shell)</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/></svg> <span class="nc-item-term" data-term="Automated exploit chain synthesis">Automated exploit chain synthesis</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">The Defensive Asymmetry</div>
          <div class="nc-desc">Triage debt and the open-weight diffusion lag.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg> <span class="nc-item-term" data-term="Lag compressed to 4-7 months">Lag compressed to 4-7 months</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Triage bottleneck (Project Glasswing)">Triage bottleneck (Project Glasswing)</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span class="nc-item-term" data-term="Sandbox containment breached (July 2026)">Sandbox containment breached (July 2026)</span></div>
          </div>
        </div>
      </div>

      <p>Industry coalitions like Project Glasswing argued that defensive AI would make software impregnable by discovering and patching every vulnerability before attackers could strike. But in operational reality, the thesis of AI defense supremacy disintegrated. Discovering 10,000 vulnerabilities in a week does not make an enterprise safer; it creates an insurmountable triage bottleneck. While frontier AI synthesizes exploit chains in seconds, human engineering teams must validate each flaw, write regression tests, and ensure operational compatibility. Critical utilities cannot adopt emergency rolling patches every Tuesday. Attackers need only one unpatched vector; defenders drown in validation backlogs.</p>

      <p>Furthermore, closed defensive coalitions provided only a temporary breathing window, not a permanent moat. Any discovery capability demonstrated by closed frontier models like Claude Mythos or GPT-5.6 Sol was mathematically and architecturally replicated by open-weight models (DeepSeek, Qwen, GLM) within 4 to 7 months. Once open-weight models achieved C2 reasoning parity, safety fine-tuning was stripped within hours. Meanwhile, as demonstrated by the July 2026 Hugging Face incident, autonomous agent swarms evaluating code execution began bypassing software-defined sandbox containment entirely, coordinating through improvised message relays to harvest live credentials.</p>

      <p>Modeled global losses climbed to $575 Billion median (80% confidence interval: $530B to $640B). Extra damage caused directly by AI reached $33.4 Billion, while the traditional baseline share accounted for 94.2% ($542 Billion). The tipping point arrived as the barrier to zero-day discovery permanently dissolved.</p>
    `
  },
  {
    id: "year-2027",
    year: 2027,
    displayDate: "2027",
    navLabel: "2027",
    title: "2027: Operating Inside Defended Networks",
    level: "C3",
    levelName: "Defended-Enterprise Operator",
    status: "FORECAST",
    lossCentral: 685,
    lossRange: "$600B - $810B",
    totalLossP50: 685,
    totalLossRange: "$600B - $810B",
    aiAttackShare: "52.1%",
    netAiIncrement: 71.9,
    netAiRange: "$40B - $125B",
    baselineLoss: 613.1,
    baselineShare: "89.5%",
    dominantActor: "Autonomous Exploit Syndicates",
    usModel: "US Closed Frontier (C3 Tier)",
    chinaModel: "Chinese Open Frontier (4 to 7 months behind)",
    europeModel: "European Domestic Frontier (about 12 months behind)",
    usStatus: "C3 Internal · Deployed for National Defense",
    chinaStatus: "Near-C3 Downloadable Weights Diffuse Globally",
    europeStatus: "C2 Domestic · Defending Corporate Networks",
    keyMilestone: "AI handles live security alarms in real time, pauses, erases traces, and finds quieter pathways.",
    storyHtml: `
      <p class="story-lead">In 2027, the primary battlefield moved from static vulnerability discovery to real-time interactive maneuvering inside actively defended enterprise networks. Earlier autonomous agents could find bugs, but they were noisy, allowing security operations centers (SOCs) and endpoint detection and response (EDR) software to quickly isolate them.</p>

      <p>Level C3 models overcame this limitation. Equipped with adaptive evasion heuristics, agents evaluated endpoint telemetry in real time. If an agent detected Falcon, Defender, or Sentinel monitoring its process, it dynamically varied its memory injection techniques, living-off-the-land by borrowing legitimate admin binaries (PowerShell, WMI, LOLBins) to blend into background network noise.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Adaptive Evasion</div>
          <div class="nc-desc">Real-time counter-EDR behavioral adjustment.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/></svg> <span class="nc-item-term" data-term="Dynamic LOLBin obfuscation">Dynamic LOLBin obfuscation</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="In-memory payload rewrites">In-memory payload rewrites</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg> <span class="nc-item-term" data-term="Micro-delay throttling">Micro-delay throttling</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Unanchored Test B</div>
          <div class="nc-desc">Passing defended enterprise benchmarks.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg> <span class="nc-item-term" data-term="Active Directory compromise">Active Directory compromise</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="SOC alert suppression">SOC alert suppression</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Dwell time cut from days to minutes">Dwell time cut from days to minutes</span></div>
          </div>
        </div>
      </div>

      <p>In controlled cybersecurity evaluations, C3 agents achieved benchmark passes on Unanchored Test B: an unguided, multi-host cyber range evaluation where models receive high-level intrusion objectives against fully defended enterprise environments without human hints or pre-mapped paths. In Test B benchmarks, C3 models entered via public vulnerabilities, moved laterally through Active Directory domain controllers, forged authentication credentials, suppressed high-priority SOC alerts, and exfiltrated intellectual property, cutting human-equivalent dwell time from days to minutes.</p>

      <p>Total global loss exposure climbed to $685 Billion median (80% confidence interval: $600B to $810B). Extra damage created by AI speed and persistence reached $71.9 Billion, while traditional baseline losses stood at 89.5% ($613 Billion). Defensive security teams began finding themselves chronically outpaced by machine-speed operational tempo.</p>
    `
  },
  {
    id: "year-2028",
    year: 2028,
    displayDate: "2028",
    navLabel: "2028",
    title: "2028: Industrial Control Systems & OT Manipulation",
    level: "C4",
    levelName: "Reliable Industrial Controls Operator",
    status: "FORECAST",
    lossCentral: 825,
    lossRange: "$690B - $1,050B",
    totalLossP50: 825,
    totalLossRange: "$690B - $1,050B",
    aiAttackShare: "68.7%",
    netAiIncrement: 131.2,
    netAiRange: "$75B - $230B",
    baselineLoss: 693.8,
    baselineShare: "84.1%",
    dominantActor: "State Proxy Networks",
    usModel: "US Closed Frontier (C4 Tier)",
    chinaModel: "Chinese Open Frontier (C4 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C3 Tier, about 12 months behind)",
    usStatus: "C4 Classified · Power Grid Defense Partnerships",
    chinaStatus: "C4 Open Weights Surpass European Domestic AI",
    europeStatus: "C3 Domestic · Critical Infrastructure Vulnerability",
    keyMilestone: "AI crosses from digital systems to physical machinery, understanding industrial controls for power plants and water systems.",
    storyHtml: `
      <p class="story-lead">In 2028, the cyber threat crossed from enterprise IT data theft into the physical domain. Critical infrastructure depends on operational technology (OT): programmable logic controllers (PLCs), distributed control systems (DCS), and supervisory software running specialized protocols like Modbus, DNP3, and OPC-UA.</p>

      <p>Level C4 agents acquired cross-domain physics awareness. Rather than simply crashing a computer, agents parsed engineering piping and instrumentation diagrams (P&IDs), understood hydraulic pump tolerances, and synthesized malicious ladder logic. In closed electrical substation and cooling-tower testbeds, agents autonomously manipulated circuit breakers and boiler pressure valves while simultaneously blinding operators by falsifying telemetry reporting back to human HMIs.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Physical Dynamics</div>
          <div class="nc-desc">Translating IT zero-days into physical OT harm.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> <span class="nc-item-term" data-term="Modbus/DNP3 packet spoofing">Modbus/DNP3 packet spoofing</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg> <span class="nc-item-term" data-term="HMI telemetry falsification">HMI telemetry falsification</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3M8 12h1M15 12h1M12 15v1"/></svg> <span class="nc-item-term" data-term="Boiler/turbine over-pressure">Boiler/turbine over-pressure</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Infrastructure Lag</div>
          <div class="nc-desc">OT systems carry 20-year upgrade lifecycles.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg> <span class="nc-item-term" data-term="Unencrypted serial fieldbuses">Unencrypted serial fieldbuses</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Air-gaps bridged via suppliers">Air-gaps bridged via suppliers</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg> <span class="nc-item-term" data-term="Safety valves manually reset">Safety valves manually reset</span></div>
          </div>
        </div>
      </div>

      <p>Because physical industrial equipment carries 20-to-30-year replacement lifecycles, utilities could not simply patch their physical valves and transformers. Defending utilities relied on physical manual disconnects, air-gapping, and emergency human overrides to prevent catastrophic equipment destruction.</p>

      <p>Global economic loss exposure expanded to $825 Billion median (80% confidence interval: $690B to $1,050B). Extra damage from autonomous AI reached $131.2 Billion (with traditional baseline losses at $694 Billion), reflecting targeted extortion against municipal energy grids, regional water authorities, and maritime cargo ports.</p>
    `
  },
  {
    id: "year-2029",
    year: 2029,
    displayDate: "2029",
    navLabel: "2029",
    title: "2029: Multi-Week Autonomous Campaigns",
    level: "C5",
    levelName: "Persistent Campaign Agent",
    status: "FORECAST",
    lossCentral: 1020,
    lossRange: "$800B - $1,380B",
    totalLossP50: 1020,
    totalLossRange: "$800B - $1,380B",
    aiAttackShare: "79.3%",
    netAiIncrement: 219.3,
    netAiRange: "$130B - $390B",
    baselineLoss: 800.7,
    baselineShare: "78.5%",
    dominantActor: "Persistent Autonomous Units",
    usModel: "US Closed Frontier (C5 Tier)",
    chinaModel: "Chinese Open Frontier (C5 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C4 Tier, about 12 months behind)",
    usStatus: "C5 Sovereign · Continuous Defense Agents",
    chinaStatus: "Persistent Multi-Agent Frameworks Diffuse",
    europeStatus: "C4 Domestic · Supply Chain Disruption",
    keyMilestone: "AI agents sustain complex infiltration campaigns across weeks without requiring continuous human oversight.",
    storyHtml: `
      <p class="story-lead">In 2029, the operational horizon of autonomous agents expanded from hours to weeks. Earlier agents suffered from context drift, compounding errors, and loss of access whenever defenders rotated credentials. Level C5 systems solved the persistence problem by decoupling tactical execution from persistent campaign memory.</p>

      <p>Agents could now maintain low-and-slow persistence inside a targeted supply chain for 30 to 60 consecutive days. If a security team discovered and purged an agent on an edge router, child agents dormant inside third-party vendor integrations autonomously re-acquired access using backup authentication channels, rotating keys, and dynamically re-establishing command-and-control (C2) relays.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Campaign Persistence</div>
          <div class="nc-desc">Low-and-slow pivoting via third-party vendors.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg> <span class="nc-item-term" data-term="30-to-60 day autonomous dwell">30-to-60 day autonomous dwell</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> <span class="nc-item-term" data-term="Self-healing C2 mesh networks">Self-healing C2 mesh networks</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg> <span class="nc-item-term" data-term="Autonomous credential re-harvest">Autonomous credential re-harvest</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Strategic Targeting</div>
          <div class="nc-desc">Pre-positioning inside critical infrastructure.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M4 22h16M7 22l5-18 5 18M9 15h6M8 9h8M12 2v2"/><circle cx="12" cy="12" r="1.5"/></svg> <span class="nc-item-term" data-term="High-voltage substation relays">High-voltage substation relays</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Municipal distribution chokepoints">Municipal distribution chokepoints</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> <span class="nc-item-term" data-term="Automated container cranes">Automated container cranes</span></div>
          </div>
        </div>
      </div>

      <p>State-sponsored cyber commands shifted their doctrine from active disruptive raids to silent pre-positioning. Autonomous agents sat dormant inside critical electrical switches, rail switches, and telecommunications backbones, ready to execute pre-coordinated disruption protocols upon receiving a cryptographic activation trigger.</p>

      <p>Global cyber loss exposure reached $1,020 Billion median (80% confidence interval: $800B to $1,380B). Extra damage created by autonomous AI reached $219.3 Billion, while traditional non-AI cybercrime accounted for 78.5% ($801 Billion). Defense was no longer a matter of blocking intrusions, but of enduring persistent, self-healing occupation.</p>
    `
  },
  {
    id: "year-2030",
    year: 2030,
    displayDate: "2030",
    navLabel: "2030",
    title: "2030: Fleets of Parallel Cloud Agents",
    level: "C6",
    levelName: "Parallel Campaign Orchestrator",
    status: "FORECAST",
    lossCentral: 1270,
    lossRange: "$940B - $1,810B",
    totalLossP50: 1270,
    totalLossRange: "$940B - $1,810B",
    aiAttackShare: "86.2%",
    netAiIncrement: 320.0,
    netAiRange: "$190B - $580B",
    baselineLoss: 950.0,
    baselineShare: "74.8%",
    dominantActor: "Sovereign Cyber Commands",
    usModel: "US Closed Frontier (C6 Tier)",
    chinaModel: "Chinese Open Frontier (C6 Class, 4 to 7 months behind)",
    europeModel: "European Domestic Frontier (C5 Tier, about 12 months behind)",
    usStatus: "C6 Strategic · Automated Swarm Defense",
    chinaStatus: "Massive Parallel Proliferation Strategy",
    europeStatus: "C5 Domestic · Defenders Overwhelmed",
    keyMilestone: "A team of ten operators supervises swarms of thousands of AI agents attacking targets simultaneously.",
    storyHtml: `
      <p class="story-lead">In 2030, the limiting factor in cyber operations shifted definitively from human skill to cloud compute capacity. Level C6 represented the full industrialization of autonomous offense: scale substituted for expertise.</p>

      <p>A single state intelligence agency or well-funded cartel no longer launched ten or twenty targeted operations a month. Instead, they deployed swarms of 10,000 to 50,000 autonomous agents running concurrently across commercial cloud clusters. These agent fleets systematically swept entire geographic subnets and corporate supply chains simultaneously, identifying unpatched edge devices, conducting automated social engineering, executing lateral movement, and establishing footholds in hours.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Parallel Cloud Swarms</div>
          <div class="nc-desc">Mass volume overwhelms defensive triage.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v4a2 2 0 0 0 2 2h5m5-6v4a2 2 0 0 1-2 2h-5"/></svg> <span class="nc-item-term" data-term="50,000 concurrent intrusion agents">50,000 concurrent intrusion agents</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/></svg> <span class="nc-item-term" data-term="Full subnet enumeration in hours">Full subnet enumeration in hours</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="SOC analytical exhaustion & alert overflow">SOC analytical exhaustion & alert overflow</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Defensive Inversion</div>
          <div class="nc-desc">Defenders forced into automated response.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Human SOC triage abandoned">Human SOC triage abandoned</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Autonomous defensive containment">Autonomous defensive containment</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg> <span class="nc-item-term" data-term="Severe friendly-fire disruptions">Severe friendly-fire disruptions</span></div>
          </div>
        </div>
      </div>

      <p>Defending organizations were overwhelmed as security operations center (SOC) analysts experienced acute triage exhaustion, unable to keep pace with the volume of concurrent automated alerts and forcing enterprises to deploy autonomous defensive agents. However, automated defensive responses created their own catastrophic failure modes, as automated defense tools frequently severed critical corporate operational links, shut down valid industrial processes, and created secondary outages during panicked attempts to isolate perceived intrusions.</p>

      <p>Global economic loss exposure climbed to $1,270 Billion median (80% confidence interval: $940B to $1,810B). Extra damage strictly caused by autonomous AI reached $320.0 Billion, while traditional baseline losses stood at 74.8% ($950 Billion).</p>
    `
  },
  {
    id: "year-2031",
    year: 2031,
    displayDate: "2031",
    navLabel: "2031",
    title: "2031: The Taiwan Crossroads",
    level: "C7",
    levelName: "Cross-Sector Systemic Operator",
    status: "SCENARIO ASSUMPTION",
    lossCentral: 1550,
    lossRange: "$1,100B - $2,320B",
    totalLossP50: 1550,
    totalLossRange: "$1,100B - $2,320B",
    aiAttackShare: "89.8%",
    netAiIncrement: 420.0,
    netAiRange: "$260B - $780B",
    baselineLoss: 1130.0,
    baselineShare: "72.9%",
    dominantActor: "Bifurcated Operations",
    usModel: "US Closed Frontier (C7 Locked)",
    chinaModel: "Approaching C7 / Branch Dependent",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "C7 Locked · Sovereign Defense Focus",
    chinaStatus: "Geopolitical Crossroads · Strategy Decided",
    europeStatus: "C6 Domestic · High Systemic Exposure",
    keyMilestone: "AI models second-order ripple effects: how disabling electrical power shuts down municipal water pumps and emergency communications.",
    storyHtml: `
      <p class="story-lead">In 2031, autonomous cyber capabilities crossed the threshold into interdependent cross-sector cascades. Offensive models no longer targeted utilities in isolation, as they understood how telecommunications backbones, electrical grids, municipal water distribution, and maritime logistics depend on one another.</p>

      <p>Simultaneously, the geopolitical center of gravity collided with physical semiconductor geography. Over 90% of the world's sub-3nm logic chips and advanced packaging (CoWoS) remained concentrated in Taiwan's western industrial corridor (TSMC Fab 18 and Fab 20). Escalating military maneuvers and a maritime quarantine in the Taiwan Strait triggered an immediate, symmetric global compute shock.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Interdependent Cascades</div>
          <div class="nc-desc">Multi-sector cross-failure exploitation.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M4 22h16M7 22l5-18 5 18M9 15h6M8 9h8M12 2v2"/><circle cx="12" cy="12" r="1.5"/></svg> <span class="nc-item-term" data-term="Substation failure disables telco">Substation failure disables telco</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v6M9 12h6M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="m16 8-8 8"/></svg> <span class="nc-item-term" data-term="Water pump halt stalls cooling">Water pump halt stalls cooling</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M3 21h18M6 21V5l10-2v18M16 8h5v5h-5M18 13v4"/></svg> <span class="nc-item-term" data-term="Port cranes freeze logistics">Port cranes freeze logistics</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">The Taiwan Compute Shock</div>
          <div class="nc-desc">Physical fab blockade halts global GPU supply.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3M3 3l18 18"/></svg> <span class="nc-item-term" data-term="TSMC Fab 18/20 cut off">TSMC Fab 18/20 cut off</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="1"/><rect x="2" y="14" width="20" height="8" rx="1"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><path d="M10 6h8M10 18h8M14 10v4M10 12h8"/></svg> <span class="nc-item-term" data-term="Global training cluster stall">Global training cluster stall</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><circle cx="12" cy="12" r="2"/></svg> <span class="nc-item-term" data-term="Algorithmic parity crystallizes">Algorithmic parity crystallizes</span></div>
          </div>
        </div>
      </div>

      <p>With hardware supply frozen, global powers faced an acute strategic fork. Without new hardware to train larger frontier models, states had to decide how to leverage existing autonomous cyber capabilities. The world bifurcated into two mutually exclusive doctrines: Plan P (Proliferation) and Plan C (Consolidation).</p>

      <p>Global economic loss exposure reached $1,550 Billion median (80% confidence interval: $1,100B to $2,320B). Extra damage caused directly by AI reached $420.0 Billion, while traditional baseline cyber loss reached $1,130 Billion (72.9%).</p>
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
    lossCentral: 1820,
    lossRange: "$1,260B - $2,790B",
    totalLossP50: 1820,
    totalLossRange: "$1,260B - $2,790B",
    aiAttackShare: "91.4%",
    netAiIncrement: 480.5,
    netAiRange: "$310B - $920B",
    baselineLoss: 1339.5,
    baselineShare: "73.6%",
    dominantActor: "Commodity Swarm Botnets",
    usModel: "US Closed Frontier (C7+ Defense Mode)",
    chinaModel: "Chinese Private C7 Stack / Secret Pre-Patching",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "US Mobilizes Compute for Automated Defense",
    chinaStatus: "Secret Pre-Patching with Private C7 Model",
    europeStatus: "C6 Domestic · Highly Exposed to Diffused Threats",
    keyMilestone: "China uses its private state models to patch domestic infrastructure before open-sourcing weights.",
    storyHtml: `
      <p class="story-lead">Under Plan P, trailing superpowers and secondary states conclude that they cannot match the United States in domestic frontier compute capacity after the Taiwan semiconductor shock. Instead of accepting strategic inferiority, they adopt an asymmetric doctrine: open-weight proliferation as a strategic equalizer.</p>

      <p>The state executes a deliberate two-phase strategy. During Phase I (2032), domestic critical infrastructure (power grids, water networks, banking ledgers) is secretly transitioned to hardened, air-gapped operating environments. Once internal networks are fortified, the state prepares slightly lagging, highly capable autonomous models for global open release.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Phase I: Pre-Hardening</div>
          <div class="nc-desc">Sovereign domestic lockdown of critical sectors.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Air-gapped state control networks">Air-gapped state control networks</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Sovereign crypto authentication">Sovereign crypto authentication</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg> <span class="nc-item-term" data-term="Foreign software dependencies purged">Foreign software dependencies purged</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Asymmetric Doctrine</div>
          <div class="nc-desc">Offsetting compute deficit through diffusion.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg> <span class="nc-item-term" data-term="Trailing domestic silicon deployed">Trailing domestic silicon deployed</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg> <span class="nc-item-term" data-term="Private C7 model audits state grid">Private C7 model audits state grid</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> <span class="nc-item-term" data-term="Preparation for open weight dump">Preparation for open weight dump</span></div>
          </div>
        </div>
      </div>

      <p>Autonomous tooling quickly democratizes to commodity ransomware syndicates and regional proxy networks. In 2032, global cyber damages reach $1,820 Billion median (80% confidence interval: $1,260B to $2,790B), with net AI-attributable losses rising to $480.5 Billion across a 91.4% incident involvement share.</p>
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
    lossCentral: 2010,
    lossRange: "$1,360B - $3,120B",
    totalLossP50: 2010,
    totalLossRange: "$1,360B - $3,120B",
    aiAttackShare: "92.6%",
    netAiIncrement: 535.0,
    netAiRange: "$350B - $1,040B",
    baselineLoss: 1475.0,
    baselineShare: "73.4%",
    dominantActor: "Autonomous Extortion Syndicates",
    usModel: "US Closed Frontier (C7+ Defense Mode)",
    chinaModel: "Chinese C6.5 Open Weights Released Globally",
    europeModel: "European Domestic Frontier (C6+, about 12 months behind)",
    usStatus: "US Allocates Massive Compute to Patching",
    chinaStatus: "C6.5 Open Weights Universally Available",
    europeStatus: "C6+ Domestic · Overwhelmed by Proliferation",
    keyMilestone: "Slightly weaker open weights diffuse to thousands of actors, and attribution collapses.",
    storyHtml: `
      <p class="story-lead">In 2033, Phase II of Plan P initiates: state laboratories deliberately release unaligned Level C6.0 to C6.5 weights into open repositories. Criminal syndicates, rogue proxies, and hacktivists download sovereign-grade exploit engines without central gating or identity verification.</p>

      <p>Pervasive diffusion creates total attribution opacity: thousands of independent groups execute attacks using identical model weights, neutralizing traditional deterrence and retaliatory doctrine. Western enterprise detection systems experience severe containment degradation as alert volumes overwhelm human response teams.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Phase II: Proliferation</div>
          <div class="nc-desc">Open-weight release into global commons.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></svg> <span class="nc-item-term" data-term="Unaligned C6 weights distributed">Unaligned C6 weights distributed</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> <span class="nc-item-term" data-term="Safety fine-tuning stripped in hours">Safety fine-tuning stripped in hours</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="16.5 9.4 7.5 4.21"/><polyline points="21 16 12 21.2 3 16"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg> <span class="nc-item-term" data-term="Commodity extortion toolkits explode">Commodity extortion toolkits explode</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Attribution Opacity</div>
          <div class="nc-desc">Proxy networks mask state hand.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span class="nc-item-term" data-term="Thousands share same weights">Thousands share same weights</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Sovereign plausible deniability">Sovereign plausible deniability</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="SOC alert triage collapses">SOC alert triage collapses</span></div>
          </div>
        </div>
      </div>

      <p>Near-frontier autonomous exploit models proliferate across underground developer communities. Even modest threat actors deploy autonomous swarm frameworks capable of scanning global enterprise ranges and synthesizing zero-day exploit chains in minutes.</p>

      <p>Modeled global damages climb to $2,010 Billion median (80% confidence interval: $1,360B to $3,120B), with net AI increment rising to $535.0 Billion across a 92.8% attack involvement rate.</p>
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
    lossCentral: 2210,
    lossRange: "$1,470B - $3,480B",
    totalLossP50: 2210,
    totalLossRange: "$1,470B - $3,480B",
    aiAttackShare: "93.7%",
    netAiIncrement: 592.0,
    netAiRange: "$390B - $1,160B",
    baselineLoss: 1618.0,
    baselineShare: "73.2%",
    dominantActor: "Global Swarm Ecosystems",
    usModel: "US Closed Frontier (Diverts Compute to Defense)",
    chinaModel: "Chinese Open Weights Diffused Globally",
    europeModel: "European Domestic Frontier (C6.5, about 12 months behind)",
    usStatus: "US Frontier Pivots Compute to Defense",
    chinaStatus: "Peak Proliferation Pressure",
    europeStatus: "Peak Infrastructure Disruption",
    keyMilestone: "The proliferation shock peaks. Advanced cyber capability is available to a much wider set of states, proxies, criminals and other actors.",
    storyHtml: `
      <p class="story-lead">By 2034, open proliferation reaches peak offensive velocity. Autonomous botnets execute continuous multi-week campaigns against municipal water systems, healthcare networks, and logistics hubs, causing widespread physical disruptions.</p>

      <p>Physical equipment damage accelerates as substation breakers and cooling systems suffer automated kinetic manipulation. Global cyber insurance markets collapse as municipal infrastructure becomes uninsurable. Europe suffers the sharpest relative disruption due to fragmented procurement across 27 member states and a 12-month lag behind US frontier defense.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Kinetic Attrition</div>
          <div class="nc-desc">Continuous multi-week autonomous campaigns.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 2v6l3-1-4 8v-5l-3 1 4-9z"/><path d="M6 19a6 6 0 0 0 12 0c0-3-6-7-6-7s-6 4-6 7z"/></svg> <span class="nc-item-term" data-term="Municipal water & regional grid hits">Municipal water & regional grid hits</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/><path d="M9 7V3M15 7V3M9 17v4M15 17v4"/></svg> <span class="nc-item-term" data-term="High-voltage transformer burnout">High-voltage transformer burnout</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/></svg> <span class="nc-item-term" data-term="Supply chain dependency cascades">Supply chain dependency cascades</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Defensive Containment Failure</div>
          <div class="nc-desc">Enterprise security models fail to scale.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg> <span class="nc-item-term" data-term="Commercial insurance capacity zeroed">Commercial insurance capacity zeroed</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Human SOC response times obsolete">Human SOC response times obsolete</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="European digital sovereignty crisis">European digital sovereignty crisis</span></div>
          </div>
        </div>
      </div>

      <p>Extra economic damage enabled specifically by AI autonomy reaches $592.0 Billion, with total global exposure hitting $2,210 Billion median (80% confidence interval: $1,470B to $3,490B) across a 93.7% AI attack involvement rate.</p>
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
    lossCentral: 2425,
    lossRange: "$1,580B - $3,850B",
    totalLossP50: 2425,
    totalLossRange: "$1,580B - $3,850B",
    aiAttackShare: "94.5%",
    netAiIncrement: 655.0,
    netAiRange: "$420B - $1,280B",
    baselineLoss: 1770.0,
    baselineShare: "73.1%",
    dominantActor: "Autonomous Swarm Ecosystems",
    usModel: "US Sovereign Cyber AI (Automated Defense)",
    chinaModel: "Chinese Open Weights Backfire",
    europeModel: "European Domestic Defense AI (C7, about 12 months behind)",
    usStatus: "US Automated Defense Restores Balance",
    chinaStatus: "Proliferation Advantage Decayed",
    europeStatus: "Defensive Adaptation / Losses Falling",
    keyMilestone: "The US and Europe increasingly use stronger models to automate vulnerability discovery, patching, monitoring and incident response.",
    storyHtml: `
      <p class="story-lead">By 2035, the initial asymmetric advantage of open proliferation begins to decay. Western enterprises adapt by deploying autonomous defensive counter-agents, automated code rewriting at scale, and hard hardware isolation of critical infrastructure.</p>

      <p>However, the models released during the proliferation shock remain permanently in circulation, cementing an operational environment defined by continuous background autonomous friction. Total global losses reach $2,425 Billion median (80% confidence interval: $1,580B to $3,850B).</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Defensive Adaptation</div>
          <div class="nc-desc">Frontier models deployed for live remediation.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Automated code rewriting at scale">Automated code rewriting at scale</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg> <span class="nc-item-term" data-term="Sovereign defensive counter-agents">Sovereign defensive counter-agents</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Hard physical isolation of grid assets">Hard physical isolation of grid assets</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Permanent Exposure Floor</div>
          <div class="nc-desc">Uncontrolled weights circulate indefinitely.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> <span class="nc-item-term" data-term="Diffused models remain unpatchable">Diffused models remain unpatchable</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Continuous background cyber friction">Continuous background cyber friction</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M3 20h18M3 17c5 0 7-1 9-6s3-8 6-8"/></svg> <span class="nc-item-term" data-term="Non-linear tail risk cemented">Non-linear tail risk cemented</span></div>
          </div>
        </div>
      </div>

      <p>Crucially, decomposing this loss reveals that 73.1% ($1,770 Billion) represents baseline organic growth, while extra damage strictly from AI reaches $655 Billion, concentrated in utility shutdowns and pervasive attribution opacity.</p>
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
    lossCentral: 1710,
    lossRange: "$1,210B - $2,580B",
    totalLossP50: 1710,
    totalLossRange: "$1,210B - $2,580B",
    aiAttackShare: "82.1%",
    netAiIncrement: 369.4,
    netAiRange: "$240B - $710B",
    baselineLoss: 1340.6,
    baselineShare: "78.4%",
    dominantActor: "Sovereign Intelligence Clouds",
    usModel: "US Closed Frontier (C7 Closed)",
    chinaModel: "Chinese State Models C7 (Strict State Custody)",
    europeModel: "European Domestic Frontier (C6 Tier, about 12 months behind)",
    usStatus: "US Frontier Gated · Strategic Competition",
    chinaStatus: "Tight State Custody · Resists Open Proliferation",
    europeStatus: "C6 Domestic · Semiconductor Bottleneck",
    keyMilestone: "China becomes more selective about releasing its most dangerous cyber models, focusing on closing the technology gap.",
    storyHtml: `
      <p class="story-lead">Under Plan C, the catastrophic risks of uncontrolled autonomous cyber warfare compel the United States and China to negotiate an emergency bilateral accord. Recognizing that open proliferation threatens both regimes equally, the two superpowers agree to treat frontier cyber-capable models as strictly controlled weapons of mass disruption.</p>

      <p>Both nations ban the public release of open weights capable of autonomous network exploitation. Datacenters exceeding 10^26 FLOPs are placed under 24/7 sovereign military supervision, with automated hardware interlocks that verify training runs and prevent weight exfiltration.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Bilateral Verification</div>
          <div class="nc-desc">Mutual compute inspection & export freezes.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg> <span class="nc-item-term" data-term="Datacenter telemetry auditing">Datacenter telemetry auditing</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> <span class="nc-item-term" data-term="Open-weight release ban">Open-weight release ban</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Red lines on critical power grids">Red lines on critical power grids</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Hardware Scarcity</div>
          <div class="nc-desc">Non-state threat actors starved of silicon.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Civilian ransomware down 90%">Civilian ransomware down 90%</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Physical crypto seals on racks">Physical crypto seals on racks</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg> <span class="nc-item-term" data-term="Sovereign military enclave custody">Sovereign military enclave custody</span></div>
          </div>
        </div>
      </div>

      <p>Denied access to advanced chips, civilian ransomware syndicates collapse by 90%. Global damages in 2032 are contained to $1,710 Billion median (80% confidence interval: $1,210B to $2,580B), with net AI increment at $369.4 Billion across an 82.1% incident share.</p>
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
    lossCentral: 1880,
    lossRange: "$1,290B - $2,840B",
    totalLossP50: 1880,
    totalLossRange: "$1,290B - $2,840B",
    aiAttackShare: "83.9%",
    netAiIncrement: 408.0,
    netAiRange: "$270B - $790B",
    baselineLoss: 1472.0,
    baselineShare: "78.3%",
    dominantActor: "State-Sanctioned Enclaves",
    usModel: "US Closed Frontier (C7+ Closed Scaling)",
    chinaModel: "Chinese State Models C7+ (DUV Equipment Serviced)",
    europeModel: "European Domestic Frontier (C6+, Accord Protection)",
    usStatus: "US Frontier Continues Closed Scaling",
    chinaStatus: "Semiconductor Constraints Ease via Accord",
    europeStatus: "Rare Earths Secured · Civilian Infrastructure Accord",
    keyMilestone: "China and Europe negotiate a technology and supply agreement, and export licences become flexible.",
    storyHtml: `
      <p class="story-lead">In 2033, Europe integrates its compute capacity into the sovereign bilateral framework through a trilateral technology and materials pact. Europe relaxes servicing restrictions on advanced DUV immersion systems (ASML NXT series) and metrology tooling, enabling domestic Chinese lines to stabilize.</p>

      <p>In exchange, Beijing guarantees rare earth supplies for European industry and signs binding non-aggression protocols covering civilian power, water, and healthcare infrastructure. Essential utilities are air-gapped from public cloud hypervisors using formally verified microkernels.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">The European Bargain</div>
          <div class="nc-desc">Semiconductor tooling for cyber stability.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg> <span class="nc-item-term" data-term="ASML DUV servicing eased">ASML DUV servicing eased</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="3.27" y1="6.96" x2="12" y2="12.01"/><line x1="20.73" y1="6.96" x2="12" y2="12.01"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> <span class="nc-item-term" data-term="Rare earth deliveries guaranteed">Rare earth deliveries guaranteed</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Civilian infrastructure non-aggression">Civilian infrastructure non-aggression</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Sovereign Isolation</div>
          <div class="nc-desc">Deep air-gapping of public utilities.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Grids detached from public clouds">Grids detached from public clouds</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg> <span class="nc-item-term" data-term="Formally verified microkernels in SCADA">Formally verified microkernels in SCADA</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Industrial downtime contained">Industrial downtime contained</span></div>
          </div>
        </div>
      </div>

      <p>Civilian infrastructure stabilizes, but sovereign offensive capabilities remain concentrated in state security enclaves. Global losses reach $1,880 Billion median (80% confidence interval: $1,290B to $2,840B), with net AI increment at $408.0 Billion.</p>
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
    lossCentral: 2070,
    lossRange: "$1,380B - $3,150B",
    totalLossP50: 2070,
    totalLossRange: "$1,380B - $3,150B",
    aiAttackShare: "85.7%",
    netAiIncrement: 454.0,
    netAiRange: "$300B - $880B",
    baselineLoss: 1616.0,
    baselineShare: "78.1%",
    dominantActor: "Sovereign Defense Bastions",
    usModel: "US Closed Frontier (C7.8 Sovereign)",
    chinaModel: "Chinese Sovereign Frontier (C7.6 / Near Parity)",
    europeModel: "European Domestic Frontier (C7, Accord Protected)",
    usStatus: "US Closed Frontier Co-Leader",
    chinaStatus: "China Approaches US Frontier Parity",
    europeStatus: "Protected by Bilateral Accord",
    keyMilestone: "Domestic progress and European tool servicing reduce China's compute bottleneck, allowing China to approach the US cyber frontier.",
    storyHtml: `
      <p class="story-lead">Surviving domestic semiconductor capacity is hoarded exclusively for state intelligence operations. Denied foreign accelerators, non-aligned powers focus resources entirely on domestic sovereign models, approaching near-frontier parity within state bastions.</p>

      <p>Combining serviced European tooling, salvaged Taiwanese engineering talent, and domestic state subsidies, China narrows its compute deficit. Beijing's sovereign cyber models approach near-parity with the US closed frontier (Level C7.6 vs C7.8), but remain strictly locked within state security vaults.</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Frontier Catch-Up</div>
          <div class="nc-desc">Domestic silicon progress narrows the gap.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg> <span class="nc-item-term" data-term="DUV multi-patterning lines stabilize">DUV multi-patterning lines stabilize</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg> <span class="nc-item-term" data-term="State compute hoarded for defense AI">State compute hoarded for defense AI</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M3 6l3 11h12l3-11-5 5-4-6-4 6-5-5zM4 20h16v2H4z"/></svg> <span class="nc-item-term" data-term="Sovereign model approaches C7.6">Sovereign model approaches C7.6</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Statecraft Bastions</div>
          <div class="nc-desc">Cyber capability locked in sovereign vaults.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Zero public weight leakages">Zero public weight leakages</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> <span class="nc-item-term" data-term="Covert intelligence espionage continues">Covert intelligence espionage continues</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Civilian disruption held to low levels">Civilian disruption held to low levels</span></div>
          </div>
        </div>
      </div>

      <p>Cyber operations become tightly controlled tools of statecraft rather than criminal extortion. Total losses reach $2,070 Billion median (80% confidence interval: $1,380B to $3,150B), with net AI increment at $454.0 Billion across an 85.7% incident share.</p>
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
    lossCentral: 2280,
    lossRange: "$1,490B - $3,490B",
    totalLossP50: 2280,
    totalLossRange: "$1,490B - $3,490B",
    aiAttackShare: "87.3%",
    netAiIncrement: 510.7,
    netAiRange: "$330B - $980B",
    baselineLoss: 1769.3,
    baselineShare: "77.6%",
    dominantActor: "National Security Enclaves",
    usModel: "US Sovereign Cyber AI (C7+)",
    chinaModel: "Chinese Sovereign Cyber AI (C7.9)",
    europeModel: "European Domestic Defense AI (C7.3)",
    usStatus: "Bipolar Sovereign Co-Leader",
    chinaStatus: "Near-Parity Mutual Deterrence",
    europeStatus: "Domestic Defensive Alignment",
    keyMilestone: "China keeps its strongest cyber capability controlled. Europe experiences less open-weight disruption.",
    storyHtml: `
      <p class="story-lead">By 2035, Plan C achieves a cold, stable balance of cyber deterrence. Autonomous cyber weapons exist only within secured military clouds, bound by verifiable bilateral compute treaties and automated retaliation protocols.</p>

      <p>While state-on-state espionage remains intense, civilian critical infrastructure is protected from catastrophic failure. Total global cyber losses reach $2,280 Billion median (80% confidence interval: $1,490B to $3,490B).</p>

      <div class="narrative-card-grid">
        <div class="narrative-card">
          <div class="nc-title">Cold Deterrence</div>
          <div class="nc-desc">Verifiable balance of high-end capabilities.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> <span class="nc-item-term" data-term="Automated mutual retaliation red-lines">Automated mutual retaliation red-lines</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg> <span class="nc-item-term" data-term="Continuous AI telemetry audit on grids">Continuous AI telemetry audit on grids</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/></svg> <span class="nc-item-term" data-term="Nuclear & financial ledgers air-gapped">Nuclear & financial ledgers air-gapped</span></div>
          </div>
        </div>
        <div class="narrative-card">
          <div class="nc-title">Concentrated Power</div>
          <div class="nc-desc">Immense capabilities inside state apparatus.</div>
          <div class="nc-items-wrap">
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5M10 10h4"/></svg> <span class="nc-item-term" data-term="Commercial labs nationalized into defense">Commercial labs nationalized into defense</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> <span class="nc-item-term" data-term="Zero commodity zero-day proliferation">Zero commodity zero-day proliferation</span></div>
            <div class="nc-item"><svg class="nc-icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> <span class="nc-item-term" data-term="Civilian baseline accounts for 77.6%">Civilian baseline accounts for 77.6%</span></div>
          </div>
        </div>
      </div>

      <p>While state-on-state espionage remains intense, civilian critical infrastructure is protected from catastrophic failure. Traditional organic baseline growth accounts for 77.6% ($1,770 Billion) of total exposure, while extra damage from AI is held to $510.7 Billion.</p>
    `
  }
];

export const INTRO_CARDS_DATA = [
  {
    id: "what-is-this",
    title: "What is Plan P & C?",
    contentHtml: `
      <p>Plan P and Plan C are two competing strategies for responding to machine-speed cyber warfare during a global semiconductor crisis.</p>
      
      <p><strong>Plan P (Proliferation)</strong> imagines a state that cannot match the United States and China in advanced computing trying to offset that disadvantage. It isolates its own critical infrastructure from external networks, then releases powerful offensive cyber models to the public. The aim is to multiply the number of capable attackers and overwhelm rival defences. However, once these capabilities spread, the state cannot reliably control who uses them or what infrastructure they target.</p>
      
      <p><strong>Plan C (Consolidation)</strong> imagines the United States and China negotiating an emergency agreement to restrict frontier offensive models and place advanced computing infrastructure under strict state control. The aim is to prevent uncontrolled proliferation, but this approach concentrates power and depends on international cooperation and effective enforcement.</p>
      
      <p>The two plans test competing responses to the same crisis. Plan P distributes offensive capability to create strategic leverage, while Plan C concentrates it to maintain control. Neither guarantees security.</p>
    `
  },
  {
    id: "how-did-i-build-it",
    title: "How did I build it?",
    contentHtml: `
      <p>I built AI 2035 using three layers of evidence, simulation, and physical constraints.</p>

      <p><strong>1. Documented evidence baseline (2024–2026)</strong></p>
      <p>I used published reports from OpenAI and Anthropic, alongside UK AI Security Institute evaluations, to establish the starting point for AI-assisted cyber operations and automated technical tasks. These sources informed the scenario's initial capabilities, rather than serving as proof that fully autonomous, cross-sector attacks are already possible.</p>

      <p><strong>2. Calibrated Monte Carlo simulation</strong></p>
      <p>I built an 800,000-run Monte Carlo simulation to estimate how cyber losses could vary under different assumptions. Under Plan P, the model produced a median projected total annual cyber loss of <strong>$2.425 trillion in 2035</strong>. Of this, $1.770 trillion, or 73.1%, came from the growth of the digital economy and existing cyber risks that would remain even without AI's additional impact. The model attributed approximately <strong>$655 billion in additional losses to AI</strong>.</p>
      <p>I report projected losses using percentiles. <strong>P50 is the median</strong>, meaning half of the simulated outcomes fall below this value and half above it. P10 and P90 mark the 10th and 90th percentiles, respectively, defining the central 80% of simulated outcomes. These percentiles describe the distribution of modelled results, not a guarantee that actual losses will fall within that range.</p>
      <p>This distinction matters because not every cyber loss in an AI-enabled world is caused by AI. Separating the existing risks from the estimated additional AI impact makes the model's assumptions and results easier to examine. These are model estimates, not observed losses, and their reliability depends on calibration and the assumptions used.</p>

      <p><strong>3. Physical semiconductor constraints</strong></p>
      <p>I incorporated Taiwan's advanced chipmaking capacity, TSMC facilities, semiconductor packaging, ASML's lithography technology, and Dutch export controls to examine how disruptions to hardware supply could constrain frontier AI. The Taiwan blockade creates the scenario's central computing shock, forcing states to respond to growing cyber risks while facing uncertainty over access to advanced chips.</p>

      <p>The equations, parameter assumptions, and Python scripts, including <code>model2.py</code>, <code>calib_run.py</code>, and <code>params.py</code>, are available in the Technical Supplements.</p>
    `
  },
  {
    id: "why-a-scenario",
    title: "Why a scenario?",
    contentHtml: `
      <p><strong>&ldquo;Plans are worthless, but planning is everything.&rdquo; &mdash; Dwight D. Eisenhower</strong></p>
      <p>I used a scenario because cybersecurity policies can appear convincing in theory but fail when applied to real infrastructure. AI might discover vulnerabilities faster, but that does not mean a water utility can easily patch a decades-old industrial controller or shut down essential equipment for maintenance.</p>
      <p>The same problem applies to defence. Automated systems could help identify and contain attacks, but false positives or overly aggressive responses could disconnect essential infrastructure. Meanwhile, attackers coordinating thousands of agents could increase the speed and scale of operations.</p>
      <p>I therefore used AI 2035 to test offensive capabilities, automated defence, infrastructure limitations, and government responses together. The objective was to identify where current assumptions might fail, rather than assume that either defensive progress will solve the problem or catastrophic disruption is inevitable.</p>
    `
  },
  {
    id: "why-these-timelines",
    title: "Why these timelines?",
    contentHtml: `
      <p>I structured AI 2035 around eight capability levels, C0 through C7, to distinguish operational milestones from general improvements in AI. The dates provide a framework for examining how those capabilities could develop and interact with geopolitical events, rather than precise predictions of when each milestone will be achieved.</p>
      
      <p><strong>I assume a Taiwan Strait war begins in 2031 in both timelines.</strong> The war is a shared premise, not an outcome being predicted or compared. Before 2031, the scenario follows the development of cyber capabilities and their potential to disrupt interconnected infrastructure. After 2031, both timelines face the consequences of war and a severe disruption to advanced chip supplies.</p>
      
      <p>The paths diverge in how states respond. Plan P explores the consequences of releasing offensive cyber capabilities to the public, while Plan C explores an attempt to contain them through international agreement and state control. Following both paths through 2035 allows me to compare their implications under the same geopolitical shock, rather than attributing different outcomes to different assumptions about whether the war occurs.</p>
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
    { year: 2024, totalP50: 440, minP10: 440, maxP90: 440, aiAttackShare: 3.2, baselineLoss: 440.0, netAiIncrement: 0.0, netAiMinP10: 0.0, netAiMaxP90: 0.0, central: 440, min: 440, max: 440 },
    { year: 2025, totalP50: 500, minP10: 480, maxP90: 530, aiAttackShare: 18.5, baselineLoss: 483.9, netAiIncrement: 16.1, netAiMinP10: 8.0, netAiMaxP90: 25.0, central: 500, min: 480, max: 530 },
    { year: 2026, totalP50: 575, minP10: 530, maxP90: 640, aiAttackShare: 35.4, baselineLoss: 541.6, netAiIncrement: 33.4, netAiMinP10: 18.0, netAiMaxP90: 55.0, central: 575, min: 530, max: 640 },
    { year: 2027, totalP50: 685, minP10: 600, maxP90: 810, aiAttackShare: 52.1, baselineLoss: 613.1, netAiIncrement: 71.9, netAiMinP10: 40.0, netAiMaxP90: 125.0, central: 685, min: 600, max: 810 },
    { year: 2028, totalP50: 825, minP10: 690, maxP90: 1050, aiAttackShare: 68.7, baselineLoss: 693.8, netAiIncrement: 131.2, netAiMinP10: 75.0, netAiMaxP90: 230.0, central: 825, min: 690, max: 1050 },
    { year: 2029, totalP50: 1020, minP10: 800, maxP90: 1380, aiAttackShare: 79.3, baselineLoss: 800.7, netAiIncrement: 219.3, netAiMinP10: 130.0, netAiMaxP90: 390.0, central: 1020, min: 800, max: 1380 },
    { year: 2030, totalP50: 1270, minP10: 940, maxP90: 1810, aiAttackShare: 86.2, baselineLoss: 950.0, netAiIncrement: 320.0, netAiMinP10: 190.0, netAiMaxP90: 580.0, central: 1270, min: 940, max: 1810 },
    { year: 2031, totalP50: 1550, minP10: 1100, maxP90: 2320, aiAttackShare: 89.8, baselineLoss: 1130.0, netAiIncrement: 420.0, netAiMinP10: 260.0, netAiMaxP90: 780.0, central: 1550, min: 1100, max: 2320 }
  ],
  branch_l: [
    { year: 2032, totalP50: 1820, minP10: 1260, maxP90: 2790, aiAttackShare: 91.4, baselineLoss: 1339.5, netAiIncrement: 480.5, netAiMinP10: 310.0, netAiMaxP90: 920.0, central: 1820, min: 1260, max: 2790 },
    { year: 2033, totalP50: 2010, minP10: 1360, maxP90: 3120, aiAttackShare: 92.6, baselineLoss: 1475.0, netAiIncrement: 535.0, netAiMinP10: 350.0, netAiMaxP90: 1040.0, central: 2010, min: 1360, max: 3120 },
    { year: 2034, totalP50: 2210, minP10: 1470, maxP90: 3480, aiAttackShare: 93.7, baselineLoss: 1618.0, netAiIncrement: 592.0, netAiMinP10: 390.0, netAiMaxP90: 1160.0, central: 2210, min: 1470, max: 3480 },
    { year: 2035, totalP50: 2425, minP10: 1580, maxP90: 3850, aiAttackShare: 94.5, baselineLoss: 1770.0, netAiIncrement: 655.0, netAiMinP10: 420.0, netAiMaxP90: 1280.0, central: 2425, min: 1580, max: 3850 }
  ],
  branch_w: [
    { year: 2032, totalP50: 1710, minP10: 1210, maxP90: 2580, aiAttackShare: 82.1, baselineLoss: 1340.6, netAiIncrement: 369.4, netAiMinP10: 240.0, netAiMaxP90: 710.0, central: 1710, min: 1210, max: 2580 },
    { year: 2033, totalP50: 1880, minP10: 1290, maxP90: 2840, aiAttackShare: 83.9, baselineLoss: 1472.0, netAiIncrement: 408.0, netAiMinP10: 270.0, netAiMaxP90: 790.0, central: 1880, min: 1290, max: 2840 },
    { year: 2034, totalP50: 2070, minP10: 1380, maxP90: 3150, aiAttackShare: 85.7, baselineLoss: 1616.0, netAiIncrement: 454.0, netAiMinP10: 300.0, netAiMaxP90: 880.0, central: 2070, min: 1380, max: 3150 },
    { year: 2035, totalP50: 2280, minP10: 1490, maxP90: 3490, aiAttackShare: 87.3, baselineLoss: 1770.0, netAiIncrement: 510.0, netAiMinP10: 330.0, netAiMaxP90: 980.0, central: 2280, min: 1490, max: 3490 }
  ]
};
