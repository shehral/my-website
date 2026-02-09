// ─────────────────────────────────────────────
// Ali & ARIA — Roundup Data Layer
// ─────────────────────────────────────────────

export interface RoundupItem {
  title: string
  href: string
  source: string
  aria: string // ARIA's commentary
}

export interface RoundupSection {
  emoji: string
  heading: string
  prose?: string   // Markdown-ish prose block (rendered as paragraphs)
  items?: RoundupItem[] // Optional link items
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

// ─── Registry ──────────────────────────────────

const roundups: Roundup[] = [roundup002, roundup001]

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
