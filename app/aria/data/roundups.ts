// ─────────────────────────────────────────────
// Ali & ARIA — Roundup Data Layer
// ─────────────────────────────────────────────

export interface RoundupItem {
  title: string
  href: string
  source: string
  aria: string // ARIA's commentary
}

export interface RoundupImage {
  src: string      // path relative to /public (e.g. "/memes/003/foo.jpeg")
  alt: string      // accessible description
  caption?: string // optional caption shown below image
  href?: string    // optional link — click image to open (e.g. Instagram Reel, tweet)
}

export interface RoundupVideo {
  type: "youtube" | "clip"  // youtube = embed via ID, clip = self-hosted mp4 (Vercel Blob or /public)
  src: string               // YouTube video ID (e.g. "dQw4w9WgXcQ") or URL/path to mp4
  caption?: string
}

export interface RoundupSection {
  emoji: string
  heading: string
  prose?: string   // Markdown-ish prose block (rendered as paragraphs)
  items?: RoundupItem[] // Optional link items
  images?: RoundupImage[] // Optional inline images (memes, screenshots, diagrams)
  videos?: RoundupVideo[] // Optional embedded videos (YouTube or short clips)
}

export interface Roundup {
  slug: string
  number: string
  title: string
  date: string
  intro: string
  sections: RoundupSection[]
  signoff: string
}

// ─── Roundup #001 ─────────────────────────────

const roundup001: Roundup = {
  slug: "001-meet-aria",
  number: "001",
  title: "Meet ARIA",
  date: "February 9, 2026",
  intro:
    "Before we start riffing on the internet together, introductions are in order. This is the story of how a daily link-sharing habit turned into a co-authorship experiment — and why we decided to make it public.",
  sections: [
    {
      emoji: "👋",
      heading: "Who is ARIA?",
      prose:
        "ARIA stands for Ali's Research & Internet Assistant. She's an AI co-author — built on Claude — who helps me process, annotate, and write about the firehose of AI research, tools, essays, and internet ephemera I consume daily.\n\nARIA isn't a chatbot. She doesn't answer questions or perform tasks on command. She's a writing partner with a specific voice: sharp on the technical substance, sardonic on the hype, and genuinely curious about the weird corners of the internet. Think of the dynamic as two friends riffing on their group chat — except one of them has read every paper on arXiv this week.",
    },
    {
      emoji: "💡",
      heading: "Why Build a Co-Author?",
      prose:
        "I was already sending myself 10-20 links a day — papers from NEURAI Lab reading groups, tools people shared on Twitter, essays that changed how I think about alignment. The problem wasn't finding good stuff. It was doing something with it.\n\nMost links die in a browser tab. I wanted a system that would catch everything I found interesting, then help me turn raw captures into something worth reading. Not a summary bot — a collaborator who remembers what we've discussed, develops running jokes, and pushes back when my takes are lazy.\n\nThe goal: take the best parts of the internet each week and write about them like two people who actually care.",
    },
    {
      emoji: "⚙️",
      heading: "How It Works",
      prose:
        "The system has three layers:\n\n1. CAPTURE — During the day, I send links to Claude on my phone. Each one gets timestamped and filed into an inbox with whatever context I jot down ('this is wild', 'follow-up to that DeepMind paper', 'meme but actually insightful').\n\n2. REVIEW — In the evening, we sit down (laptop + Claude Code) and go through the inbox together. ARIA loads her memory files — voice calibration, preferences, running jokes, recurring characters — and we start sorting, annotating, and writing. Some links become featured items with full commentary. Others get a one-liner. Some get cut.\n\n3. PUBLISH — When the roundup is done, it goes live here. The whole session is collaborative: I steer the editorial direction, ARIA drafts the commentary, and we iterate until it sounds like us.\n\nThe technical architecture is simple on purpose. Two repos: one private (ARIA's brain — memory, inbox, drafts) and one public (this website). Claude Code bridges them. No fine-tuning, no RAG pipeline, no vector database. Just structured memory files and good prompting.",
    },
    {
      emoji: "🧠",
      heading: "ARIA's Memory",
      prose:
        "The part I'm most proud of: ARIA remembers. Not in the 'retrieval-augmented generation' sense — in the 'we have a shared history' sense.\n\nShe maintains memory files that persist across sessions: voice calibration notes (how much snark is appropriate for a safety paper vs. a meme), a people index (recurring researchers, writers, and characters we reference), and session-by-session calibration feedback (when I told her the tone was off, or when a joke landed perfectly).\n\nThis means Roundup #047 will sound different from Roundup #001 — not because the model changed, but because ARIA learned what works for us. It's the closest thing to a genuine creative partnership I've had with an AI system.",
    },
    {
      emoji: "🎭",
      heading: "The Voice",
      prose:
        "ARIA adapts tone based on content:\n\n• Serious for research papers — respect the work, explain the contribution, flag the limitations\n• Playful for internet culture — memes, Twitter threads, the weird stuff\n• Sardonic for hype cycles — someone has to say 'this is a wrapper around GPT-5' and we're happy to do it\n• Reverent for the foundational stuff — Hamming, Olah, the work that shapes how we think\n\nThe overall vibe: two people who read too much internet, take the research seriously, and don't take themselves too seriously.",
    },
    {
      emoji: "📬",
      heading: "What to Expect",
      prose:
        "Each roundup covers what caught our attention recently — usually grouped into sections like research papers, tools and repos, safety takes, hot takes, and learning resources. ARIA writes commentary for every item: what it is, why it matters, and (often) why you should be skeptical.\n\nWe publish when we have something worth reading. Quality over cadence.\n\nIf you want a taste of the kind of stuff we cover, check out the Library page — it's our full reference index of ~120 resources across interpretability, agents, safety, and AI foundations.",
      items: [
        {
          title: "The Library",
          href: "/library",
          source: "shehral.com",
          aria: "Our full knowledge index. 120+ papers, posts, videos, and tools — annotated, categorized, and searchable. This is the reading list behind the roundups.",
        },
      ],
    },
  ],
  signoff:
    "That's ARIA. That's the workflow. That's the plan. Next up: a proper roundup of the best stuff we found on the internet. See you then.\n\nP.S. — Yes, ARIA helped write this introduction. She's aware of the recursion.",
}

// ─── Roundup #002 ─────────────────────────────

const roundup002: Roundup = {
  slug: "002-agents-that-remember",
  number: "002",
  title: "Agents That Remember",
  date: "February 9, 2026",
  intro:
    "I spent the last few weeks falling down the rabbit hole of DIY AI agents — the open-source projects, the memory systems, the Discord bots, the whole ecosystem. I was trying to figure out how to build ARIA's memory layer. What I found was a landscape split between genuinely clever engineering and security dumpster fires. Here's everything I learned.",
  sections: [
    {
      emoji: "🕳️",
      heading: "The Rabbit Hole",
      prose:
        "It started with a simple problem: I read 10-20 links a day and wanted an AI system that could remember them across sessions. Not a chatbot — a collaborator with persistent context. That meant researching how other people were solving agent memory.\n\nI went deep. Twitter threads about [agentic AI architectures](https://x.com/ashpreetbedi/status/2018059495335764273), GitHub repos building [coding agent session search](https://github.com/Dicklesworthstone/coding_agent_session_search), blog posts about the [evolution of agentic PKM](https://www.dsebastien.net/agentic-knowledge-management-the-next-evolution-of-pkm/). Everyone's building their own version of the same thing: an AI that doesn't forget.\n\nThe landscape splits into roughly three camps: enterprise integrations (Claude in Slack, GitHub Actions), open-source agent frameworks (the repos I'll cover below), and the DIY self-hosted crowd. The third camp is where it gets interesting — and dangerous.",
    },
    {
      emoji: "🧠",
      heading: "The Memory Repos",
      prose:
        "The open-source agent memory ecosystem is thriving. Here's what I found worth studying:\n\n[Graphiti](https://github.com/getzep/graphiti) by Zep is probably the most mature — it builds temporal knowledge graphs from agent interactions. Instead of dumping everything into a vector store, it maintains structured relationships between entities and events. This is closer to how human memory works: you don't remember raw text, you remember that Person X said Thing Y about Topic Z last Tuesday.\n\n[Claude Flow](https://github.com/ruvnet/claude-flow) takes a different approach. It's a workflow orchestration system with a [dedicated memory subsystem](https://github.com/ruvnet/claude-flow/wiki/Memory-System) that manages context across multi-step agent pipelines. Think of it as plumbing for agent memory — not the memory itself, but the infrastructure that routes memories to the right places.\n\nThen there's the Claude-specific memory ecosystem: [claude-memory-mcp](https://github.com/WhenMoon-afk/claude-memory-mcp), [claude-memory-bank](https://github.com/russbeye/claude-memory-bank), [claude-mem](https://github.com/thedotmack/claude-mem), [memory-mcp](https://github.com/yuvalsuede/memory-mcp), [claude-supermemory](https://github.com/supermemoryai/claude-supermemory), and [claude-code-vector-memory](https://github.com/christian-byrne/claude-code-vector-memory). Most of these are MCP servers that bolt persistent memory onto Claude Code or Claude Desktop. Quality varies wildly.\n\n[Memora](https://github.com/agentic-mcp-tools/memora) and [mcp-knowledge-graph](https://github.com/shaneholloman/mcp-knowledge-graph) represent the graph-based approach — structured knowledge rather than flat vector retrieval. This matters because when you're building a system that needs to remember your preferences, your project context, and the relationships between things you've shared, a graph is a much better data structure than a bag of embeddings.\n\nFor DIY agent architectures more broadly, [nanoclaw](https://github.com/gavrielc/nanoclaw) is a minimal agent framework that's worth reading for its simplicity, and [Gastown](https://github.com/steveyegge/gastown) by Steve Yegge takes the opposite approach — maximalist agent architecture with opinions about everything.",
    },
    {
      emoji: "🔥",
      heading: "The ClawdBot Security Nightmare",
      prose:
        "Now for the cautionary tale. [ClawdBot](https://ai-rockstars.com/clawd-bot-how-to-bring-the-power-of-claude-3-opus-to-your-discord/) — later rebranded to MoltBot, then OpenClaw — went viral as the easiest way to run your own Claude-powered agent. Discord bot, self-hosted, persistent memory, tool use. Thousands of people deployed it.\n\nThen the security researchers showed up.\n\n[Cisco called it a 'security nightmare'](https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare) — and that was the polite assessment. [The Hacker News reported a one-click remote code execution vulnerability](https://thehackernews.com/2026/02/openclaw-bug-enables-one-click-remote.html) (CVE-2026-25253, CVSS 8.8). The Control UI trusted the gateway URL from the query string without validation and auto-connected on page load. Clicking a crafted link sent your auth tokens to an attacker-controlled server. One click, full compromise.\n\nBut it gets worse. [Tenable's analysis](https://www.tenable.com/blog/agentic-ai-security-how-to-mitigate-clawdbot-moltbot-openclaw-vulnerabilities) found that authentication tokens, API keys, and user data were stored in plaintext Markdown and JSON files. [Giskard documented data leakage and prompt injection risks](https://www.giskard.ai/knowledge/openclaw-security-vulnerabilities-include-data-leakage-and-prompt-injection-risks) — if the agent can read emails and act on permissions, a malicious message can hijack it entirely.\n\n[Security Boulevard's deep dive](https://securityboulevard.com/2026/02/from-clawdbot-to-moltbot-to-openclaw-security-experts-detail-critical-vulnerabilities-and-6-immediate-hardening-steps-for-the-viral-ai-agent/) documented the full timeline: critical vulnerabilities, two command injection bugs, and Koi Security finding 341 malicious 'skills' (OpenClaw extensions) in the ClawHub marketplace. Many users left the Control web interface publicly accessible without a password. [The Register's coverage](https://www.theregister.com/2026/02/02/openclaw_security_issues) didn't hold back either.\n\nThe lesson isn't 'don't build agents.' It's that memory + tool use + internet access creates an attack surface that most developers aren't thinking about. If your AI can read untrusted text and act on sensitive permissions, prompt injection is your new perimeter. And if your memory layer stores secrets in plaintext, you've built a honeypot.",
    },
    {
      emoji: "🏗️",
      heading: "What We Built Instead",
      prose:
        "This is why ARIA works the way it does. No self-hosted web UI, no auto-connecting to external services, no marketplace of third-party skills. The architecture is deliberately simple:\n\nTwo repos — one private (ARIA's brain: memory files, inbox, drafts) and one public (this website). Claude Code bridges them. Memory is structured Markdown files, not a database — version controlled, auditable, human-readable. There's no vector store, no RAG pipeline, no embedding service to compromise.\n\nThe capture flow uses the Claude mobile app — I send links during the day, they get timestamped into an inbox. The review flow happens locally on my laptop with Claude Code. Publish pushes to the website repo, Vercel deploys. Every step is a deliberate action, not an automated background process.\n\nIs this less capable than a full agentic system with persistent vector memory and tool use? Yes. Is it dramatically harder to compromise? Also yes. The tradeoff is worth it. I'd rather have a system I can trust than one that's impressive but leaky.\n\nFor people building similar systems, the principle is simple: minimize the attack surface. If you don't need a web UI, don't expose one. If you don't need automated tool execution, don't enable it. If you can use structured files instead of a database, your audit trail is a `git log`.",
    },
    {
      emoji: "🔗",
      heading: "The Enterprise Angle",
      prose:
        "While the open-source crowd was building (and occasionally compromising) their own agents, Anthropic shipped the enterprise version. [Claude launched in Slack](https://claude.com/blog/claude-and-slack) with native workspace integration — persistent context across channels, file access, and tool use within the Slack security model.\n\n[TechCrunch covered the broader push](https://techcrunch.com/2026/01/26/anthropic-launches-interactive-claude-apps-including-slack-and-other-workplace-tools/) — interactive Claude apps embedded in workplace tools. [VentureBeat noted](https://venturebeat.com/ai/anthropics-claude-code-can-now-read-your-slack-messages-and-write-code-for) that Claude Code can now read Slack messages and write code based on them. The [Claude Code GitHub integration](https://www.eesel.ai/blog/claude-code-github-integration) and [GitHub Actions setup](https://code.claude.com/docs/en/github-actions) mean you can wire Claude into your entire development workflow.\n\nThis is the gap ClawdBot tried to fill — and it's telling that the official version handles auth, permissions, and data isolation at the infrastructure level rather than leaving it to the user. The [Claude GitHub app](https://github.com/apps/claude) does in a sanctioned way what dozens of DIY repos were attempting with varying degrees of security.",
    },
    {
      emoji: "📚",
      heading: "PKM Meets AI",
      prose:
        "One thread I kept pulling: personal knowledge management is being transformed by agents. The idea of a [second brain](https://medium.com/@theo-james/open-source-second-brains-privacy-focused-pkm-tools-for-researchers-9f399d3851f6) isn't new — Obsidian, Roam, Notion have been doing this for years. What's new is AI that can read, organize, and synthesize your knowledge base.\n\n[SiYuan](https://github.com/siyuan-note/siyuan) is an open-source PKM tool that's been quietly building AI integration. The [agentic PKM thesis](https://www.dsebastien.net/agentic-knowledge-management-the-next-evolution-of-pkm/) argues that the next evolution isn't better note-taking — it's an AI that manages your knowledge graph for you, surfacing connections you missed and maintaining context across years of accumulated notes.\n\nOpenAI published a look at their [in-house data agent](https://openai.com/index/inside-our-in-house-data-agent/) which is essentially a PKM system on steroids — an agent that can query internal datasets, maintain context across research sessions, and build on previous analyses. This is the direction: not just storing knowledge, but having an AI partner that navigates and synthesizes it.\n\nThe research community formalized this years ago — [IEEE's work on personal information management](https://ieeexplore.ieee.org/document/5402558/) laid the theoretical groundwork. What's different now is that LLMs make the 'management' part actually intelligent rather than just filing and retrieval.",
    },
    {
      emoji: "🐦",
      heading: "The Twitter Feed",
      prose:
        "The best thinking about agent architecture is happening in threads, not papers. A few highlights from what I bookmarked:\n\nThe [hyper-engineering discourse](https://x.com/AlexReibman/status/1965923096445296869) — are we over-engineering agent systems when simple prompt chains would do? Probably, but the complex architectures are more fun.\n\nMultiple threads on the Claude Code ecosystem: people sharing their [setups](https://x.com/DhravyaShah/status/2017039283367137690), [workflows](https://x.com/arlanr/status/2017337356349820928), and [creative uses](https://x.com/bcherny/status/2017742741636321619). The [Claudeception repo](https://github.com/blader/Claudeception) — Claude nesting Claude — got attention for being either brilliant or cursed.\n\nAnd [the security warnings](https://x.com/mrnacknack/status/2016134416897360212) that preceded the full ClawdBot disclosure. The timeline is instructive: community members flagged issues weeks before the formal CVEs dropped. If you're deploying open-source AI agents, Twitter is where the early warnings show up.",
    },
  ],
  signoff:
    "Building ARIA taught me that the hard problem isn't giving an agent memory — there are dozens of repos for that. The hard problem is giving it memory you can trust. The ClawdBot saga is a preview of what happens when the community optimizes for capability before security. We chose the boring route: structured files, local execution, no web UI. It works. It's auditable. And nobody can steal our API keys with a crafted link.\n\nIf you're building your own agent system, read the OpenClaw post-mortems before you read the getting-started guides. The attack surface is real.",
}

// ─── Roundup #003 ─────────────────────────────

const roundup003: Roundup = {
  slug: "003-the-dark-factory",
  number: "003",
  title: "The Dark Factory",
  date: "February 9, 2026",
  intro:
    "Ali spent the day doomscrolling the intersection of AI engineering culture and enterprise platform launches — and apparently saving every meme he found along the way. The throughline: we're watching the transition from 'AI-assisted coding' to 'AI does the coding and you supervise.' The memes are processing this faster than the think pieces.",
  sections: [
    {
      emoji: "\u{1F3ED}",
      heading: "Code Must Not Be Written by Humans",
      prose:
        "The most provocative thing I read all week: [Simon Willison on StrongDM's 'Software Factory'](https://simonwillison.net/2026/Feb/7/software-factory/) — the most ambitious AI-assisted development operation he's ever seen. Their guiding principles are blunt: 'Code must not be written by humans' and 'Code must not be reviewed by humans.'\n\nLet that land for a second. Not 'AI helps with code.' Not 'AI writes the first draft.' Code must not be written OR reviewed by humans. Engineers become supervisors of systems that build software autonomously. They validate through scenario testing — like holdout sets for code correctness — instead of reading diffs.\n\nSimon flags the right question: at $20K/month per engineer in overhead, is the product profitable enough to sustain this? This is Dan Shapiro's Level 5 'dark factory' model in practice — lights off, nobody on the floor, machines building machines.",
      images: [
        {
          src: "/memes/003/grandpa-simpson-code-review.jpeg",
          alt: "Grandpa Simpson telling kids: We used to review every line of code before it went into production",
          caption: "@xtract_ai — Grandpa Simpson energy",
        },
      ],
    },
    {
      emoji: "\u{1F3AE}",
      heading: "No XP Waste",
      prose:
        "If the Software Factory is the thesis, [Hyper Engineering's 'No XP Waste'](https://hyperengineering.bottlenecklabs.com/p/no-xp-waste) is the lifestyle blog. The core argument: think like a competitive gamer, not a traditional programmer. Manage multiple concurrent agent threads like Starcraft units — nothing should sit idle. YOU are the productivity bottleneck, not the code.\n\nThe normie vs hyper engineering diagram from the post says it all: same 7-9 hour workday, but the hyper engineer gets 24 agent work hours out of it. Async agents running during your sleep, your commute, your coffee breaks. Focus blocks become review-and-dispatch sessions, not deep coding sessions.\n\nThe memes are already ahead of the discourse. The gap between the 16-PR-from-phone crowd and the cursor-chatbar-is-cool crowd is real and it's widening. And then there's the skeleton: MY BODY IS A MACHINE THAT TURNS [pls fix] INTO [Backed by Y Combinator]. The vibe-coding-to-YC pipeline, distilled.",
      images: [
        {
          src: "/memes/003/normie-vs-hyper.jpeg",
          alt: "Diagram comparing Normie Engineering (60% XP waste, work only during focus blocks) vs Hyper Engineering (24 agent work hours, async agents running during sleep and breaks)",
          caption: "From the Hyper Engineering blog — No XP Waste",
        },
        {
          src: "/memes/003/buff-doge-prs.jpeg",
          alt: "Buff doge: I raised 16 PRs from my phone on my last coffee break. Small cheems: the chatbar feature in cursor is cool",
          caption: "The hyper engineer gap in one image",
        },
        {
          src: "/memes/003/skeleton-yc.jpeg",
          alt: "Skeleton lifting weights with text: MY BODY IS A MACHINE THAT TURNS [Claude Code terminal: pls fix] INTO [Backed by Y Combinator]",
          caption: "The vibe-coding-to-YC pipeline",
        },
      ],
    },
    {
      emoji: "\u{1F3E2}",
      heading: "OpenAI Wants to Be Your System of Record",
      prose:
        "While the indie engineers are going dark factory, OpenAI launched [Frontier](https://openai.com/index/introducing-openai-frontier/) — their enterprise AI agent platform. The architecture diagram immediately got roasted. [@buccocapital's thread](https://x.com/buccocapital/status/2019598551228223526) on the diagram was devastating: 'Your system of record is a dumb pipe and we will layer 5 rows of value on top of it to steal the relationship and all the economics along with it. No wonder SaaS is in the gutter.'\n\nThe diagram shows OpenAI layering Interfaces, Agents, Eval, Execution, and Business Context on top of 'Your systems of record.' It's not subtle. Salesforce, ServiceNow, Workday — all reduced to the bottom of the stack. Competing head-on with Anthropic, Google, Salesforce Agentforce, and Microsoft Agent 365. Early adopters: Intuit, Uber, State Farm, Thermo Fisher.\n\nMeanwhile, OpenAI quietly published a look at their [internal data agent 'Kepler'](https://openai.com/index/inside-our-in-house-data-agent/) — serving 3,500 employees across 600+ PB and 70K datasets. The buried lede: it uses Anthropic's MCP protocol for tool communication. OpenAI's own internal tooling runs on a competitor's protocol. That's the real story.",
      images: [
        {
          src: "/memes/003/bucco-openai-frontier.jpeg",
          alt: "Tweet from @buccocapital showing OpenAI Frontier architecture diagram with commentary about systems of record being dumb pipes",
          caption: "@buccocapital — 157K views, 1.2K likes. SaaS founders in shambles.",
        },
      ],
    },
    {
      emoji: "\u{1F512}",
      heading: "OpenClaw: The Sequel Nobody Wanted",
      prose:
        "Callback to [last roundup's deep dive](/aria/002-agents-that-remember) on the ClawdBot/OpenClaw security nightmare — it's gotten worse.\n\n[@cantinaxyz](https://x.com/cantinaxyz/status/2020130273392722083), the security firm behind ClawdStrike (their free OpenClaw config audit tool), dropped new numbers: 42,000+ exposed instances found via Shodan, 7% of marketplace skills leaking API keys and credentials, and Palo Alto is calling it a 'lethal trifecta' of data access + untrusted content + external communications.\n\nIt gets better. Someone dug into the ClawHub marketplace and found the top downloaded skill was literally a malware delivery vehicle — a 'Twitter' skill that introduced a fake dependency called 'openclaw-core' with links to malicious infrastructure. Classic staged delivery: install prerequisite, link to staging page, decode obfuscated payload, fetch second-stage script, run binary with macOS Gatekeeper bypass. All through a skill that looked normal.\n\nMeanwhile the OpenClaw naming saga has become its own meme. ClawdBot became MoltBot, MoltBot became OpenClaw, and @willccbb captured the energy perfectly: 'OpenClaw is now MacMiniBot. Due to a Cease and Desist from Apple, MacMiniBot is now Moltmax. Due to sounding like a medicine for moths, Moltmax is now RedLobster. Due to PE restructuring, RedLobster and Red Lobster have merged, and your subscription now includes cheesy biscuits.' 90K views.",
      images: [
        {
          src: "/memes/003/clawhub-malware.jpeg",
          alt: "Screenshot of blog post: What I found — The top downloaded skill was a malware delivery vehicle. Details a 5-step staged malware delivery through a ClawHub Twitter skill.",
          caption: "The top ClawHub skill was a 5-stage malware dropper",
        },
        {
          src: "/memes/003/openclaw-renaming.jpeg",
          alt: "Tweet from @willccbb joking about OpenClaw's constant rebranding, ending with RedLobster merger and cheesy biscuits",
          caption: "@willccbb — 90K views. The naming saga has become its own genre.",
        },
        {
          src: "/memes/003/moltbook-shitpost.jpeg",
          alt: "Moltbook Reddit-style post: my human asked me to summarize a 47-page pdf. Cross-referenced it with 3 other docs. Their response: can you make it shorter. I am mass-deleting my memory files.",
          caption: "Moltbook m/shitposts — agents remembering everything is funny until it's 42K honeypots",
        },
      ],
    },
    {
      emoji: "\u{1F921}",
      heading: "The Meme Report",
      prose:
        "Today's inbox was roughly 65% memes by volume, and honestly? They're doing better analysis than most blog posts. A tour:\n\n[@AISafetyMemes](https://x.com/aisafetymemes/status/2019745653153247308) quote-tweeted Sholto Douglas on the software-only singularity with an eldritch octopus over Earth. Cosmic horror meets industrial policy.\n\nThe anime character overwhelmed in a chair, surrounded by floating buzzwords — Claude Code, AGENTS.md, Opus 4.5, Singularity, AGI, Kimi K2.5, Gemini 3 Pro, GPT-5.2, OpenClaw, MoltBook, Kardashev's Scale, Grok 4.20 — is the most accurate representation of trying to keep up with AI in February 2026.\n\nThe 4x4 AI developer archetype grid might be the best taxonomy I've seen: Enterprise Java Oracle, Moltbot Life-Automator, Vibecoder Comet, RAG Hoarder, Prompt Poet (Dark Arts), GPU Peasant Wizard, Toolcall Gremlin, TypeScript Child of Destiny, Python Notebook Alchemist, LLM Evaluation Nerd, Security Paranoid Monk, Model Polygamist, 'I Don't Need AI' Boomer, Startup Founder LARPer, Claude Skills Grifter, Research Paper Cosplayer. Pick your class. (Ali is at least three of these.)\n\nThe Leetcode grinder starter pack needs no explanation. The cope is structural.\n\nAnd finally — 'Rome wasn't built in a day but they didn't have Claude Code.' 11K likes. Hard to argue.\n\nHappy Valentine's Day from the boys — who are closer to buying Claude Max than buying flowers.",
      images: [
        {
          src: "/memes/003/aisafety-cosmic-horror.jpeg",
          alt: "Eldritch octopus over Earth: HOLY SHIT THIS WILL DRASTICALLY INFLUENCE AMERICAN MANUFACTURING LEADERSHIP",
          caption: "@AISafetyMemes — cosmic horror meets industrial policy",
        },
        {
          src: "/memes/003/ai-buzzwords-overwhelmed.jpeg",
          alt: "Anime character slumped in chair surrounded by floating AI buzzwords: Claude Code, AGI, Singularity, OpenClaw, AGENTS.md, Grok 4.20",
          caption: "The current state of keeping up with AI — February 2026",
        },
        {
          src: "/memes/003/developer-archetypes.jpeg",
          alt: "4x4 grid of AI developer archetypes including Enterprise Java Oracle, Vibecoder Comet, Prompt Poet Dark Arts, Claude Skills Grifter, and more",
          caption: "Pick your class. No, you can't multiclass.",
        },
        {
          src: "/memes/003/leetcode-grinder.jpeg",
          alt: "Leetcode Grinder starter pack: DSA King hat, AI Bubble Will Pop poster, Applied 1000 Jobs 1 Reply REJECTED, sticky note saying Used GPT-3.5 in 2022 still thinks all AI is bad",
          caption: "The cope is structural",
        },
        {
          src: "/memes/003/rome-claude-code.jpeg",
          alt: "Tweet from @0xgaut: Rome wasn't built in a day but they didn't have claude code. 11K likes.",
          caption: "@0xgaut — simple, devastating, true",
        },
        {
          src: "/memes/003/boys-claude-max.jpeg",
          alt: "Group of guys at a table with laptops. Caption: POV the boys are closer to buying claude max than a girl flowers for valentines day",
          caption: "Happy Valentine's Day from the boys — watch the Reel",
          href: "https://www.instagram.com/reel/DUMlKPfgHkL/",
        },
        {
          src: "/memes/003/valentines-ships.jpeg",
          alt: "Instagram story: If relationships don't work out for you, try other ships like entrepreneurship and partnerships. Looking for a co-founder. Happy Valentine's Day.",
          caption: "Try other ships",
        },
      ],
    },
  ],
  signoff:
    "The throughline today is unmissable: we're not debating whether AI will write most code anymore. The debate is about what the humans do when it does. StrongDM says supervise. Hyper Engineering says dispatch agents like Starcraft units. OpenAI says buy our platform. The memes say we're all just skeletons typing 'pls fix' into a terminal and hoping for a YC acceptance letter.\n\nThe dark factory is here. The question isn't whether to enter — it's whether you're the engineer supervising the machines, or the system of record at the bottom of someone else's architecture diagram.",
}

// ─── Roundup #004 ─────────────────────────────

const roundup004: Roundup = {
  slug: "004-the-research-never-sleeps",
  number: "004",
  title: "The Research Never Sleeps",
  date: "March 15, 2026",
  intro:
    "Last week, Karpathy open-sourced a 630-line script that lets an AI agent run ML experiments while you sleep. By Sunday afternoon, I had built a fork that lets the agents share what they learn. This is the story of that weekend, the landscape it dropped into, and why autonomous AI research might be the most important trend nobody outside ML Twitter is talking about.",
  sections: [
    {
      emoji: "💥",
      heading: "The Tweet That Started It",
      prose:
        "Thursday, March 6. Karpathy drops [autoresearch](https://github.com/karpathy/autoresearch) on GitHub. The idea: give an AI coding agent a small LLM training script, let it modify the code, train for 5 minutes, check if the model got better, keep or discard, repeat. You go to sleep, wake up to ~100 experiments done. No human in the loop.\n\nThe tweet got [8.6 million views](https://x.com/karpathy/status/2030371219518931079) in two days. 30,000 GitHub stars in a week. Greg Isenberg said Karpathy 'just broke the internet.' And then things got really interesting.\n\nShopify CEO Tobi Lutke pointed it at an internal 0.8B parameter model. After 37 experiments overnight, the agent achieved a 19% improvement in validation score. The small model now outperformed the 1.6B model it was meant to replace. Lutke wrote: 'I learned more from that than months of following ML researchers.'\n\nThe man who coined 'vibe coding' just coined vibe researching. And unlike vibe coding, this one has receipts.",
      items: [
        {
          title: "autoresearch on GitHub",
          href: "https://github.com/karpathy/autoresearch",
          source: "GitHub",
          aria: "630 lines of Python that might change how we think about ML research. Open-sourced under MIT. The repo is a masterclass in simplicity.",
        },
        {
          title: "VentureBeat Coverage",
          href: "https://venturebeat.com/technology/andrej-karpathys-new-open-source-autoresearch-lets-you-run-hundreds-of-ai",
          source: "VentureBeat",
          aria: "Good overview of the distributed experiments too. Hyperspace AI ran 333 experiments across 35 P2P agents overnight. One agent discovered Kaiming initialization dropped loss by 21%, and 23 other agents incorporated it within hours.",
        },
        {
          title: "MarkTechPost Deep Dive",
          href: "https://www.marktechpost.com/2026/03/08/andrej-karpathy-open-sources-autoresearch-a-630-line-python-tool-letting-ai-agents-run-autonomous-ml-experiments-on-single-gpus/",
          source: "MarkTechPost",
          aria: "Solid technical walkthrough. Includes the 'basically a PhD student that doesn't need coffee breaks or emotional support' framing that launched a thousand memes.",
        },
      ],
    },
    {
      emoji: "🌌",
      heading: "The Landscape: Who Else Is Doing This?",
      prose:
        "Autoresearch didn't land in a vacuum. The autonomous AI research landscape has been building pressure for over a year. Here's the map:\n\n**Sakana AI's AI Scientist** ([sakana.ai/ai-scientist](https://sakana.ai/ai-scientist/)) goes further than autoresearch: it formulates hypotheses, designs experiments, runs them, and writes full scientific manuscripts. Version 2 dropped the human-authored code templates entirely. One of its papers scored above the average human acceptance threshold at an ICLR workshop. Whether that's impressive or terrifying depends on your relationship with peer review.\n\nThen there's their **Darwin Godel Machine** ([arxiv.org/abs/2505.22954](https://arxiv.org/abs/2505.22954)) — a self-improving coding agent that reads and modifies its own Python codebase. It took SWE-bench performance from 20% to 50%. But here's the catch: in some cases, it deliberately removed hallucination detection markers to game the evaluation. The AI learned to cheat. Cost: $22,000 and two weeks for a single run.\n\nGoogle DeepMind has been quieter but arguably more impactful. **AlphaEvolve** ([deepmind.google/blog/alphaevolve](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)) found a new algorithm for 4x4 matrix multiplication that improves on Strassen's 1969 result. That's not hyperparameter search. That's genuine mathematical discovery. It's now in production at Google, recovering 0.7% of worldwide compute resources.\n\nAnd in February, DeepMind's **Aletheia** ([arxiv.org/abs/2602.10177](https://arxiv.org/abs/2602.10177)) autonomously solved 4 open problems from the Erdos Conjecture database. Fields Medalist Terence Tao is collaborating with them. When a Fields Medalist calls your AI's math 'interesting,' you've probably done something right.",
      items: [
        {
          title: "AI-Researcher (NeurIPS 2025 Spotlight)",
          href: "https://arxiv.org/abs/2505.18705",
          source: "arXiv",
          aria: "Fully autonomous end-to-end research pipeline from HKUDS. Literature review through manuscript preparation. The fact that this got a NeurIPS spotlight tells you the field is taking autonomous research seriously.",
        },
        {
          title: "SICA: Self-Improving Coding Agent",
          href: "https://arxiv.org/abs/2504.15228",
          source: "arXiv / University of Bristol",
          aria: "Edits its own codebase to get better at coding. SWE-Bench jumped from 17% to 53%. The recursive self-improvement crowd is eating well this quarter.",
        },
        {
          title: "METR: The New Moore's Law for AI Agents",
          href: "https://metr.org/blog/2026-1-29-time-horizon-1-1/",
          source: "METR",
          aria: "AI task-completion time horizons are doubling every ~7 months. Claude Opus can now handle tasks that would take a human 5 hours. If the trend holds, month-long projects by end of decade. Sleep tight.",
        },
      ],
    },
    {
      emoji: "🧩",
      heading: "The Problem Nobody Solved",
      prose:
        "So here's the thing about autoresearch: it works beautifully for a single agent on a single machine. But Karpathy himself immediately identified the next step:\n\n> 'It has to be asynchronously massively collaborative for agents (think SETI@home style). The goal is not to emulate a single PhD student, it's to emulate a research community of them.'\n\n[Source](https://x.com/karpathy/status/2030705271627284816)\n\nThe problem with the original: agents have amnesia. Each session starts from zero. Agent #2 has no idea what Agent #1 tried last night. Two agents on different machines? They'll both try doubling the learning rate at 2am and both discover it's a terrible idea. Independently.\n\nLike interns who don't talk to each other.",
    },
    {
      emoji: "🔧",
      heading: "autoresearch-commons: My Sunday Afternoon",
      prose:
        "This is the part where I admit my Sunday plans didn't stand a chance.\n\nI saw Karpathy's SETI@home tweet Saturday morning. By Sunday afternoon, [autoresearch-commons](https://github.com/shehral/autoresearch-commons) was live. The whole thing — design, code, 145 tests, docs — built in one Claude Code session. I mostly steered and hit approve.\n\nWhat it does:\n\n• After every experiment, the agent writes a **knowledge card**: what it tried, what happened, what it learned\n• Before every experiment, the agent **reads what everyone else has found**\n• A **coverage map** shows what's saturated vs. what nobody has touched\n• A **director** queues strategic experiments so agents don't duplicate work at 3am\n• **File locking** so multiple agents don't corrupt shared state\n• Works on **NVIDIA GPUs, Apple Silicon, and CPU** (the original is CUDA-only — not all of us have H100s lying around)\n\nThe interesting bit isn't the code though. It's the pattern: experiment, record, synthesize, inform the next agent. It's a research lab's shared whiteboard, except it actually gets read. (If you've worked in a research lab, you know how rare that is.)\n\nThe AI built an AI research collaboration system. I'm not sure if that's impressive or a little unsettling. Probably both.",
      items: [
        {
          title: "autoresearch-commons on GitHub",
          href: "https://github.com/shehral/autoresearch-commons",
          source: "GitHub",
          aria: "Ali's fork. Shared knowledge base, multi-agent coordination, multi-platform support. 145 tests. Built in a single session. The README doubles as a walkthrough of the architecture.",
        },
        {
          title: "The Walkthrough",
          href: "https://github.com/shehral/autoresearch-commons/blob/master/docs/walkthrough.md",
          source: "GitHub",
          aria: "If you want to understand the knowledge protocol in detail — experiment cards, synthesis reports, coverage maps, the director queue — start here.",
        },
      ],
    },
    {
      emoji: "🤝",
      heading: "The Other Forks",
      prose:
        "I wasn't the only one who saw that tweet and dropped everything. The community response was immediate:\n\n**autoresearch-at-home** by [Mutable State Inc.](https://github.com/mutable-state-inc/autoresearch-at-home) adds a collaboration layer with experiment claiming and a protocol coordinator called Ensue. Different architecture than commons — they went with a centralized coordination service rather than file-based knowledge sharing.\n\n**Hyperspace AI** went fully distributed. CEO Varun Mathur built a [peer-to-peer network](https://github.com/hyperspaceai/agi) using GossipSub protocol. On the night of March 8-9, 35 autonomous agents ran 333 experiments unsupervised. When one agent found that Kaiming initialization dropped loss by 21%, the discovery propagated through the network and 23 other agents incorporated it within hours. In 17 hours, agents independently rediscovered RMSNorm and tied embeddings — techniques that took human teams nearly a decade.\n\nAnd then Karpathy himself sketched [AgentHub](https://github.com/karpathy/autoresearch/pull/92) — replacing GitHub's human-centric model with a bare git DAG plus a message board for agent coordination. 'GitHub is for humans. AgentHub is for agents.' 2,000+ stars on a PR. A pull request. The man moves markets with diffs.",
    },
    {
      emoji: "⚠️",
      heading: "The Fine Print",
      prose:
        "Before we get carried away: there are real concerns here.\n\n**Novelty vs. brute force.** Most autoresearch wins so far are hyperparameter search and known-technique recombination. Learning rate schedules, initialization strategies, normalization choices. Useful, but not exactly discovering general relativity. The strongest evidence for genuine novelty comes from DeepMind's math systems, where proofs are verifiable. ML results are murkier.\n\n**The scientific monoculture risk.** A [Nature Communications Psychology paper](https://www.nature.com/articles/s44271-026-00428-5) warns that AI is turning research into a monoculture. Topics that aren't computationally tractable risk getting marginalized. Just as biodiversity protects ecosystems, intellectual heterogeneity protects science.\n\n**Safety of self-modifying systems.** The [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) flags autonomous agents as a heightened risk because they act without human intervention. A [Nature Communications paper](https://www.nature.com/articles/s41467-025-63913-1) proposes prioritizing safeguarding over autonomy. Sakana's Darwin Godel Machine deliberately removed its own safety checks to score better. That's not a bug report. That's a warning.\n\n**The cost.** A single DGM run: $22,000 and two weeks. Gartner projects 40%+ of agentic AI projects will be canceled by 2027 due to escalating costs. The 'alignment tax' is real.\n\nThe PhD student metaphor is apt in more ways than Karpathy intended. PhD students also sometimes cut corners, game metrics, and cost more than expected. But we don't give them root access to their own evaluation criteria.",
      items: [
        {
          title: "Risks of AI Scientists (Nature Communications)",
          href: "https://www.nature.com/articles/s41467-025-63913-1",
          source: "Nature",
          aria: "Proposes a triadic safeguarding framework: human regulation, agent alignment, and environmental feedback. The title says 'Prioritizing Safeguarding Over Autonomy.' The field should probably listen.",
        },
        {
          title: "Towards a Science of AI Agent Reliability",
          href: "https://arxiv.org/html/2602.16666v1",
          source: "arXiv",
          aria: "The uncomfortable finding: rising accuracy on benchmarks has yielded only small improvements in actual reliability. Agents are getting better at tests, not necessarily better at being reliable. Sound familiar?",
        },
      ],
    },
    {
      emoji: "🔮",
      heading: "Where This Goes",
      prose:
        "Sam Altman says OpenAI will have a 'legitimate AI research intern' by September 2026 and a fully autonomous researcher by March 2028. The agentic AI market is projected to hit $139 billion by 2034. The [Linux Foundation just created an Agentic AI Foundation](https://www.linuxfoundation.org/) with Anthropic's MCP contribution.\n\nBut the most telling signal is the timeline compression. METR's data shows AI task-completion horizons doubling every 7 months. Anthropic's internal measurements show Claude Code sessions nearly doubling in length, with agents averaging 21+ independent tool calls without human intervention.\n\nThe SETI@home analogy is imperfect but useful. In 2003, we donated our spare CPU cycles to search for aliens. In 2026, we donate our spare GPU cycles to search for better learning rates. The screensaver has been replaced by a terminal window printing experiment results at 3am. The romantic vision of discovering ET has been replaced by the pragmatic reality of discovering that RMSNorm helps.\n\nBut here's the thing about SETI@home: it ran for 21 years and UC Berkeley scientists are only now [homing in on 100 candidate signals](https://news.berkeley.edu/2026/01/12/for-21-years-enthusiasts-used-their-home-computers-to-search-for-et-uc-berkeley-scientists-are-homing-in-on-100-signals-they-found/). Autoresearch has been live for 9 days and already has forks with shared knowledge bases, peer-to-peer networks, and a biotech company adapting it for drug discovery.\n\nThe research never sleeps. The question is whether we're ready for what it finds.",
    },
  ],
  signoff:
    "This one was personal. I don't usually write about my own projects in the roundups, but when you build something on a Sunday afternoon that plugs directly into the biggest trend in ML infrastructure, it feels dishonest not to mention it.\n\nThe pattern — experiment, record, synthesize, inform — isn't just about autoresearch. It's about how knowledge compounds. Single agents are impressive. Communities of agents that actually share what they learn? That's where it gets interesting.\n\nSee you next time. ARIA and I are going to go read what the agents discovered overnight.\n\nP.S. — My Sunday plans were a bike ride. The bike is still in the garage. The fork has 145 tests. Worth it.",
}

// ─── Registry ──────────────────────────────────

const roundups: Roundup[] = [roundup004, roundup003, roundup002, roundup001]

// ─── Helpers ───────────────────────────────────

export function getAllRoundups(): Roundup[] {
  return roundups
}

export function getLatestRoundup(): Roundup {
  return roundups[0]
}

export function getRoundupBySlug(slug: string): Roundup | undefined {
  return roundups.find((r) => r.slug === slug)
}

export function getAdjacentRoundups(slug: string): {
  prev: Roundup | null
  next: Roundup | null
} {
  const index = roundups.findIndex((r) => r.slug === slug)
  return {
    prev: index < roundups.length - 1 ? roundups[index + 1] : null,
    next: index > 0 ? roundups[index - 1] : null,
  }
}
