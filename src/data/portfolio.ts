export const identity = {
  brand: "Kernel Space",
  subline: "arya mehta / systems, backend, intelligence",
  eyebrow: "kernel space / systems console",
  headlineA: "I build systems",
  headlineB: "that turn chaos into signal.",
  intro:
    "This is not a portfolio wall. It is a technical dossier for a builder working across data infrastructure, backend engineering, and applied AI.",
  status: [
    "M.S. Applied Data Science @ San Jose State University",
    "Open to backend, data, and platform roles",
    "Bias toward systems that survive real-world use",
  ],
  fieldNotes: ["midnight builder", "architecture-first", "product-grade systems"],
};

export const terminalSnapshot = {
  title: "Live build surface",
  tabs: ["graph_rag.ts", "retrieval_flow.yaml", "deploy.sh"],
  code: [
    "const graphRagFlow = [",
    "  'ingest_sources',",
    "  'entity_graph_build',",
    "  'vector_index_sync',",
    "  'hybrid_retrieval',",
    "  'answer_orchestrator',",
    "];",
  ],
  lines: [
    "$ graph sync --source docs --entities customers,devices,policies",
    "entity_graph: healthy | nodes: 184k | links: 1.4M",
    "$ rag query --mode hybrid --topk 8 --rerank true",
    "retrieval_precision@5: 0.84 | hallucination_risk: lowered",
    "$ deploy surface --target platform-core",
    "api: healthy | workers: scaled | graph cache: warm",
  ],
};

export const manifesto = [
  "I do not want to be remembered as someone who can list tools. I want to be remembered as someone who can structure complexity.",
  "The work I care about sits at the intersection of infrastructure, intelligence, and product clarity.",
  "The best systems are not only fast or clever. They are legible, observable, and trusted by the people using them.",
];

export const operatingModes = [
  {
    id: "ingest",
    label: "Ingest",
    title: "Map the raw signals before writing the first abstraction.",
    description:
      "I start by understanding sources, constraints, and failure patterns. Clean systems begin with honest inputs, not optimistic assumptions.",
    tools: ["Python", "SQL", "Kafka", "REST APIs", "Data contracts"],
    proof: "Used in ETL design, data platforms, graph fraud workflows, and multi-source forecasting pipelines.",
  },
  {
    id: "architect",
    label: "Architect",
    title: "Design system shape before scaling the implementation.",
    description:
      "I care about boundaries, ownership, and how information moves. The architecture should explain itself before the README does.",
    tools: ["FastAPI", "Spring Boot", "Next.js", "gRPC", "WebSocket"],
    proof: "Seen in multi-agent systems, full-stack products, and service architectures built for reliability instead of demos.",
  },
  {
    id: "optimize",
    label: "Optimize",
    title: "Remove drag where systems quietly bleed time and money.",
    description:
      "Performance work is one of the strongest signals of engineering maturity. I like finding expensive habits and replacing them with better defaults.",
    tools: ["Spark", "Indexing", "Caching", "Profiling", "Prometheus/Grafana"],
    proof: "Includes 40% throughput gains, 60% p95 latency reduction, and large infra savings through smarter defaults.",
  },
  {
    id: "deploy",
    label: "Deploy",
    title: "Ship with automation, not crossed fingers.",
    description:
      "A good build is not done when it runs once. It is done when it can be deployed, monitored, and handed to another engineer without drama.",
    tools: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    proof: "Used across canary deploys, blue-green rollout patterns, agent systems, and platform-style operational workflows.",
  },
];

export const systemModes = [
  {
    id: "builder",
    label: "Builder",
    eyebrow: "Mode 01",
    title: "Structure chaos before the code gets expensive.",
    description:
      "This mode is about boundaries, sequencing, and turning vague product pressure into a system shape that can actually ship.",
    signals: ["architecture-first", "product-grade execution", "clear ownership"],
  },
  {
    id: "fraud",
    label: "Fraud",
    eyebrow: "Mode 02",
    title: "Read behavior like a graph, not a spreadsheet.",
    description:
      "Used when value hides in relationships, suspicious structure, and the story between entities instead of flat rows.",
    signals: ["graph ontology", "behavioral detection", "analyst context"],
  },
  {
    id: "platform",
    label: "Platform",
    eyebrow: "Mode 03",
    title: "Make scale observable, operable, and boring in the best way.",
    description:
      "This mode favors systems that survive growth: better defaults, quality rules, metrics, and recovery paths.",
    signals: ["5TB+ daily", "ops discipline", "cost-aware scaling"],
  },
  {
    id: "agentic",
    label: "Agentic",
    eyebrow: "Mode 04",
    title: "Treat AI like a coordinated system, not a clever prompt.",
    description:
      "Memory, retrieval, state, and user flow all work together here so the AI surface feels deliberate instead of fragile.",
    signals: ["orchestration", "persistent memory", "execution loops"],
  },
  {
    id: "governance",
    label: "Governance",
    eyebrow: "Mode 05",
    title: "Operational trust starts with discoverability and system memory.",
    description:
      "This mode is about making data assets legible, governed, and usable without relying on tribal knowledge.",
    signals: ["metadata automation", "trust surface", "embedded governance"],
  },
  {
    id: "ml-bigdata",
    label: "ML & Big Data",
    eyebrow: "Mode 06",
    title: "Clean signals drive intelligence at scale.",
    description:
      "Processing millions of records to extract high-precision fraud scoring models and training recommender systems on noise-filtered datasets.",
    signals: ["PySpark pipelines", "multi-modal defense", "collaborative filtering"],
  },
] as const;

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "enterprise-rag",
    name: "Enterprise RAG",
    cardName: "Enterprise RAG",
    mode: "builder",
    category: "Applied AI system",
    cardHook: "Enterprise-grade vector search, auth, and caching infrastructure.",
    shortDescription: "A high-performance retrieval engine for enterprise knowledge workflows.",
    heroLine: "Enterprise retrieval, auth, caching, and vector infrastructure delivered as one product-grade system.",
    achievement: "Production-minded retrieval stack for enterprise knowledge workflows",
    stackHeadline: "FastAPI, React, pgvector, Redis, Docker, and JWT auth.",
    challenge:
      "Most RAG demos collapse when retrieval quality, latency, and maintainability become real constraints.",
    solution:
      "Built a serious retrieval system with custom search flow, model orchestration, API delivery, and evaluation-friendly infrastructure instead of a thin chatbot shell.",
    stack: ["LangChain", "PyTorch", "FastAPI", "PySpark", "Pinecone", "MLflow"],
    repo: "https://github.com/aryaMehta26/enterprise-rag",
    accents: ["retrieval quality", "API delivery", "experimentation"],
    architecture: ["sources", "embedding", "retriever", "ranker", "answer api"],
    year: "2025",
    role: "System architect / builder",
    status: "Production-minded prototype",
    impactStats: [
      { label: "Retrieval mode", value: "Hybrid + rerank" },
      { label: "Primary risk", value: "Hallucination reduction" },
      { label: "System focus", value: "Trustworthy answers" },
    ],
    outcomes: [
      "Structured retrieval quality as an engineering problem, not just prompt tuning.",
      "Designed the system to be maintainable when indexes, corpora, and evaluation loops evolve.",
      "Balanced search quality, speed, and API delivery inside one coherent architecture.",
    ],
    proofPoints: ["1M+ document scale narrative", "92% answer accuracy framing", "75% faster retrieval loop"],
    buildNotes: [
      "Separated retrieval quality from generation quality so evaluation could be reasoned about more honestly.",
      "Treated indexing, ranking, and answer delivery as different system responsibilities instead of one monolithic chain.",
      "Designed the stack to stay legible as corpora, prompts, and models evolve over time.",
    ],
    decisionSignals: [
      "Optimize for trust, not only answer fluency",
      "Keep retrieval and serving boundaries explicit",
      "Make experimentation possible without architecture churn",
    ],
    detailSections: [
      {
        title: "Why it matters",
        body: "RAG systems are easy to demo and hard to trust. This project was about reducing hallucination risk and building a retrieval pipeline that could stand up to real-world use.",
      },
      {
        title: "What I focused on",
        body: "Retriever design, orchestration flow, evaluation-aware API delivery, and the system boundaries between indexing, ranking, and response generation.",
      },
    ],
  },
  {
    slug: "graph-fraud-detection",
    name: "Graph-Based Fraud Detection",
    cardName: "Graph-Based Fraud Detection",
    mode: "fraud",
    category: "Graph ML / fraud intelligence",
    cardHook: "Expose laundering rings and coordinated transaction abuse.",
    shortDescription: "Graph-based intelligence pipeline exposing relational fraud rings.",
    heroLine: "A living fraud intelligence graph built to expose laundering rings, funnel accounts, and coordinated abuse invisible to flat models.",
    achievement: "Graph reasoning for high-signal fraud behavior detection",
    stackHeadline: "Neo4j, Graph Data Science, Python, and analyst dashboard.",
    challenge:
      "Traditional fraud models miss relational behavior, especially when fraud hides across users, devices, and transaction graphs.",
    solution:
      "Designed a graph-based fraud workflow that turns transactions into connected behavioral signals, then uses graph-aware features and ML reasoning to surface suspicious patterns with more context.",
    repo: "https://github.com/aryaMehta26/Graph-Based-Fraud-Intelligence-Platform",
    stack: ["Python", "PyTorch", "Graph ML", "FastAPI", "PostgreSQL"],
    accents: ["graph features", "fraud signals", "relational reasoning"],
    architecture: ["events", "graph build", "node features", "fraud model", "alerting"],
    year: "2025",
    role: "Graph workflow designer",
    status: "Intelligence pipeline",
    impactStats: [
      { label: "Core edge", value: "Relational reasoning" },
      { label: "Main surface", value: "Fraud context" },
      { label: "Analyst value", value: "More explainable alerts" },
    ],
    outcomes: [
      "Used relationships as first-class signal instead of treating transactions as isolated rows.",
      "Made fraud reasoning more explainable by showing the suspicious cluster structure.",
      "Created a design that could support both offline modeling and analyst-facing alerting.",
    ],
    proofPoints: ["31.9M transactions modeled", "Palantir-inspired ontology framing", "Dashboard + LLM investigation surface"],
    buildNotes: [
      "Started from the weakness of flat tabular fraud models and made relationships the main signal surface.",
      "Designed the pipeline so the graph layer could support both modeling and downstream analyst workflows.",
      "Focused on explainability because fraud systems fail when they score risk without usable context.",
    ],
    decisionSignals: [
      "Use relationships as signal, not decoration",
      "Expose suspicious structure, not only scores",
      "Design for offline modeling and alert operations",
    ],
    detailSections: [
      {
        title: "Why graph here",
        body: "Fraud often hides in coordination. Graph features help reveal rings, mule links, device reuse, and indirect relationships that flat tabular models can miss.",
      },
      {
        title: "System shape",
        body: "The pipeline turns events into graph structure, extracts node and edge features, scores risk, and exposes suspicious activity through a service layer for downstream action.",
      },
    ],
  },
  {
    slug: "data-platform",
    name: "Distributed Data Platform",
    cardName: "Distributed Data Platform",
    mode: "platform",
    category: "Platform engineering",
    cardHook: "5 TB+/day ETL pipeline built for scale and operational quality.",
    shortDescription: "ETL infrastructure built with quality rules and autoscaling discipline.",
    heroLine: "A distributed processing platform that treats data quality, observability, and deployment discipline as first-class platform concerns.",
    achievement: "5 TB+/day ETL with quality rules, observability, and autoscaling discipline",
    stackHeadline: "Airflow, Spark, Kubernetes, Prometheus, and Grafana.",
    challenge:
      "Large-volume jobs fail not just from code issues but from orchestration, resource pressure, weak observability, and brittle release processes.",
    solution:
      "Built a distributed platform around Airflow, Spark on Kubernetes, FastAPI, S3, Prometheus, and Grafana with quality rules, metrics, runbooks, and CI/CD.",
    stack: ["Python", "Airflow", "Spark", "FastAPI", "Docker", "Kubernetes", "AWS EKS", "Prometheus", "Grafana"],
    repo: "https://github.com/aryaMehta26/data-platform",
    accents: ["5TB+ daily", "99.9% job success", "platform observability"],
    architecture: ["ingest", "dag orchestration", "spark jobs", "metrics", "serving api"],
    year: "2024",
    role: "Platform builder",
    status: "Scale-oriented system",
    impactStats: [
      { label: "Daily scale", value: "5 TB+" },
      { label: "Job health", value: "99.9% success" },
      { label: "Ops mindset", value: "Observable by design" },
    ],
    outcomes: [
      "Turned ETL into a platform concern with clearer operational ownership.",
      "Integrated quality rules and SLO thinking into the data layer instead of treating them as afterthoughts.",
      "Improved trust by making health, metrics, and deployability part of the product.",
    ],
    proofPoints: ["5TB+ processed daily", "100+ concurrent jobs", "40% infrastructure cost reduction"],
    buildNotes: [
      "Treated orchestration, quality, monitoring, and deployment as one platform problem instead of disconnected tool decisions.",
      "Prioritized operational recovery and cost-awareness alongside throughput.",
      "Made observability a product feature for the engineers running the system.",
    ],
    decisionSignals: [
      "Design for operators, not only builders",
      "Quality rules belong inside the pipeline",
      "Scale without observability is unfinished work",
    ],
    detailSections: [
      {
        title: "Operational value",
        body: "The point was not only to move data quickly, but to make the whole pipeline observable, recoverable, and economical to operate.",
      },
      {
        title: "What stands out",
        body: "Airflow orchestration, Spark on Kubernetes, data quality enforcement, and platform monitoring all work together rather than living as disconnected tools.",
      },
    ],
  },

  {
    slug: "layover-os",
    name: "LayoverOS",
    cardName: "LayoverOS",
    mode: "agentic",
    category: "Agentic product system",
    cardHook: "Context-aware traveler recovery system with persistent memory.",
    shortDescription: "Multi-agent travel OS with vector search and Coinbase CDP.",
    heroLine: "A context-aware recovery system for stranded travelers with persistent memory, orchestration, and transaction-aware execution.",
    achievement: "MongoDB Agentic Hackathon finalist",
    stackHeadline: "LangGraph, Atlas Vector Search, FastAPI, and Next.js.",
    challenge:
      "Travel assistance products feel fragmented unless planning, memory, retrieval, and transaction flow all behave like one coherent system.",
    solution:
      "Architected a multi-agent state machine with LangGraph, MongoDB Atlas Vector Search, Coinbase CDP, and Next.js to support memory, zero-hallucination retrieval, and generative transaction UI.",
    stack: ["Python", "FastAPI", "LangGraph", "MongoDB Atlas", "Next.js", "Coinbase CDP"],
    repo: "https://github.com/aryaMehta26/LayoverOS",
    accents: ["agentic commerce", "vector search", "persistent memory"],
    architecture: ["supervisor", "agents", "atlas vector", "wallet flow", "ui memory"],
    year: "2025",
    role: "Agent system architect",
    status: "Hackathon finalist",
    impactStats: [
      { label: "Mode", value: "Multi-agent" },
      { label: "Memory", value: "Persistent" },
      { label: "Transaction layer", value: "Integrated" },
    ],
    outcomes: [
      "Built a multi-agent state machine instead of a thin assistant wrapper.",
      "Used Atlas Vector Search and strict retrieval control to reduce hallucination risk.",
      "Connected AI workflow to actual transaction and UI flow, which makes the system feel product-grade.",
    ],
    proofPoints: ["Agentic hackathon finalist", "Persistent memory loop", "Execution beyond recommendation"],
    buildNotes: [
      "Treated memory, retrieval, supervision, and wallet flow as one operating loop.",
      "Used strict retrieval control because trust matters more than clever sounding output in travel planning.",
      "Pushed the experience beyond advice into coordinated execution.",
    ],
    decisionSignals: [
      "Orchestrate agents like a system, not a gimmick",
      "Memory should improve execution, not only recall",
      "Tie AI to real product actions",
    ],
    detailSections: [
      {
        title: "What makes it special",
        body: "This project is about orchestration and coherence. The memory, retrieval, wallet flow, and frontend experience are all treated as parts of one operating system.",
      },
      {
        title: "Why it feels premium",
        body: "The agent system does not stop at suggestion. It coordinates execution, fallback handling, memory, and transaction UI in one loop.",
      },
    ],
  },
  {
    slug: "metadata-catalog",
    name: "Automated Data Governance Metadata Catalog",
    cardName: "Automated Governance Catalog",
    mode: "governance",
    category: "Data governance system",
    cardHook: "Governance infrastructure turning tribal knowledge into system memory.",
    shortDescription: "Automated metadata catalog for discovery and compliance.",
    heroLine: "An operational metadata system designed to make discoverability, lineage, and governance feel embedded instead of bureaucratic.",
    achievement: "Automated metadata capture and governance-oriented catalog design",
    stackHeadline: "Python, custom catalog flows, and metadata automation.",
    challenge:
      "Data systems become hard to trust when metadata lives in scattered docs, tribal knowledge, and manually maintained references.",
    solution:
      "Built an automated metadata catalog approach that centralizes discovery, governance context, and operational visibility so data assets are easier to understand and manage.",
    stack: ["Python", "Metadata Automation", "Documentation"],
    repo: "https://github.com/aryaMehta26/Automated-Data-Governance-Metadata-Catalog",
    accents: ["metadata automation", "governance", "data discoverability"],
    architecture: ["metadata ingestion", "catalog layer", "governance rules", "search and discovery"],
    year: "2024",
    role: "Governance system designer",
    status: "Operational clarity project",
    impactStats: [
      { label: "Primary goal", value: "Asset trust" },
      { label: "System layer", value: "Metadata automation" },
      { label: "Team value", value: "Discoverability" },
    ],
    outcomes: [
      "Turned metadata into an operational asset instead of static documentation.",
      "Improved discoverability by giving data assets a clearer system of record.",
      "Framed governance as something embedded into workflow rather than bolted on later.",
    ],
    proofPoints: ["Metadata capture automation", "Governance by workflow", "Operational trust surface"],
    buildNotes: [
      "Approached metadata as infrastructure that affects trust, not a documentation afterthought.",
      "Designed for discoverability so data users could move faster with less tribal knowledge.",
      "Made governance part of normal system flow instead of a separate compliance ritual.",
    ],
    decisionSignals: [
      "Metadata should be generated, not begged for",
      "Trust grows from operational clarity",
      "Governance works best when embedded",
    ],
    detailSections: [
      {
        title: "Why it matters",
        body: "Strong data systems are not only about pipelines and models. They also depend on whether teams can discover, understand, and trust the assets they are working with.",
      },
      {
        title: "What this project signals",
        body: "This project shows system thinking around metadata, governance, and the layer of operational clarity that sits underneath mature data platforms.",
      },
    ],
  },
  {
    slug: "trustguard-ai",
    name: "TrustGuard AI",
    cardName: "TrustGuard AI",
    mode: "ml-bigdata",
    category: "Big Data ML / Trust Systems",
    cardHook: "6-layer multi-modal defense against bot farm manipulation.",
    shortDescription: "Big Data review filter and trusted recommender engine.",
    heroLine: "A 6-layer multi-modal defense system and trust-based recommendation pipeline protecting revenue from bot farm manipulation.",
    achievement: "Processed 1.98M reviews with 25% improvement in recommender systems RMSE",
    stackHeadline: "PySpark, Spark MLlib, K-Means, ALS, and Streamlit.",
    challenge: "Fake reviews pollute recommender models, causing poor suggestions and revenue losses.",
    solution: "Built a Lakehouse architecture pipeline filtering reviews with a multi-layered behavioral defense, training ALS models only on gold-layer trusted reviews.",
    stack: ["PySpark", "Spark MLlib", "Streamlit", "Python", "VADER", "K-Means", "ALS"],
    repo: "https://github.com/aryaMehta26/TrustGuard-AI",
    accents: ["1.98M reviews", "25% RMSE gain", "bot farm clustering"],
    architecture: ["raw reviews", "pyspark features", "6-layer trust score", "trusted data gold layer", "als recommender", "streamlit interface"],
    year: "2025",
    role: "Lead Big Data Engineer",
    status: "Production Ready",
    impactStats: [
      { label: "RMSE reduction", value: "25% improvement" },
      { label: "Protected revenue", value: "$20M+ estimated" },
      { label: "Data size", value: "1.98M reviews" }
    ],
    outcomes: [
      "Filtered out 1.6M dirty reviews to achieve an RMSE of 0.84 vs 1.12 baseline",
      "Developed a 6-layer defense system detecting sentiment-rating inconsistency, similarity spam, and burst temporal anomalies",
      "Quantified business value by establishing a Revenue Protection Model preserving $20M+ from returns"
    ],
    proofPoints: ["25% RMSE improvement", "Processed 1.98M reviews", "6-layer user defense engine"],
    buildNotes: [
      "Avoided OOM crashes by parallelizing feature extraction in Spark worker partitions",
      "Cached dataframes (.cache) to speed up iterative K-Means clustering calculations",
      "Substituted Pandas matrix operations with Spark MLlib VectorAssembler and HashingTF"
    ],
    decisionSignals: [
      "Quality data beats volume: training on less but cleaner data yields superior models",
      "User behavior (frequency, deviation) yields stronger fraud signals than text classification alone",
      "Compute trust indexes dynamically to prevent downstream metric pollution"
    ],
    detailSections: [
      {
        title: "System Architecture",
        body: "TrustGuard runs PySpark feature extraction, feeds values into a 6-layer user defense score, stores gold-layer reviews, and trains ALS recommending logic."
      },
      {
        title: "6-Layer Defense",
        body: "Layers include User Clustering (K-Means), Sentiment-Rating Inconsistency (VADER), Text Similarity (Cosine), Burst Detection, Rating Entropy (Shannon), and the composite Trust Index."
      }
    ]
  },
  {
    slug: "netflix-popularity",
    name: "Netflix Popularity Prediction",
    cardName: "Netflix Popularity",
    mode: "ml-bigdata",
    category: "Machine Learning / EDA",
    cardHook: "Predict pre-release content success using synopses and metadata.",
    shortDescription: "Predictive modeling pipeline for pre-release content success.",
    heroLine: "Predicting pre-release success using metadata features, cast/director ratings, and natural language plot profiles.",
    achievement: "Achieved 80% accuracy predicting pre-release popularity targets",
    stackHeadline: "Python, scikit-learn, Random Forest, and Power BI.",
    challenge: "Identifying pre-release content success factors before expensive production investments.",
    solution: "Engineered features for director track records, genre popularity, duration, and textual plot synopsis themes (TF-IDF), training Random Forest classifiers.",
    stack: ["Python", "scikit-learn", "NLTK", "Power BI", "Random Forest", "TF-IDF"],
    repo: "https://github.com/aryaMehta26/Netflix_popularity_Predicition",
    accents: ["80.6% accuracy", "0.721 ROC-AUC", "TF-IDF plot keywords"],
    architecture: ["netflix dataset", "synopsis text", "nlp feature prep", "random forest", "power bi logs"],
    year: "2024",
    role: "Machine Learning Engineer",
    status: "Model Pipeline",
    impactStats: [
      { label: "Overall accuracy", value: "80.60%" },
      { label: "ROC-AUC", value: "0.721 score" },
      { label: "Held-out test set", value: "20% partition" }
    ],
    outcomes: [
      "Trained Random Forest classifiers yielding 80% accuracy, outperforming Logistic Regression baselines",
      "Extracted predictive keywords ('finds', 'help', 'young') from plot synopses, showing semantic influence on show popularity",
      "Developed dynamic Power BI dashboards representing KMeans clustering partitions and correlation heatmaps"
    ],
    proofPoints: ["80% Random Forest accuracy", "TF-IDF synopsis predictive power", "Power BI dashboard integration"],
    buildNotes: [
      "Handled class imbalances using advanced pre-processing and stratified data splits",
      "Used TF-IDF and NLTK stopword filters to clean synopses descriptions",
      "Built correlations visualizations and correlation heatmaps to assess feature importance"
    ],
    decisionSignals: [
      "Intrinsic content attributes (plot keywords, duration) hold more predictive power than financial budgets",
      "A baseline model (Logistic Regression) can offer higher recall, but Random Forest yields superior precision",
      "Feature dependencies require correlation mapping before training model ensembles"
    ],
    detailSections: [
      {
        title: "Predictive NLP",
        body: "Extracted vocabulary signals from text metadata, analyzing plot descriptions to identify keywords that strongly correlate with audience success."
      },
      {
        title: "Feature Importance",
        body: "Found duration, release year, and specific plot keywords had higher relative feature importance than traditional markers like cast popularity or budget."
      }
    ]
  },
  {
    slug: "speech-emotion-recognition",
    name: "Speech Emotion Recognition",
    cardName: "Speech Emotion Recognition",
    mode: "ml-bigdata",
    category: "Deep Learning / Audio DSP",
    cardHook: "Detect human emotional states from spoken audio in real-time.",
    shortDescription: "Spatial-temporal deep learning speech classifier.",
    heroLine: "A speech emotion classifier with InstanceNorm2d speaker normalization, Context CNN dialog modeling, and Bi-LSTM + Attention layers.",
    achievement: "Achieved +15.8% accuracy over MFCC+MLP baseline and a 0.00008 Real-Time Factor",
    stackHeadline: "PyTorch, Librosa DSP, 2D CNN, Bi-LSTM, and Attention.",
    challenge: "Audio features suffer from static representation gaps, class imbalances, speaker tone variability, and cross-corpus noise.",
    solution: "Designed a dual-branch network separating Log-Mel spatial spectrogram features and MFCC temporal coefficients, applying speaker normalization and multi-utterance dialogue context.",
    stack: ["PyTorch", "Librosa", "Python", "Docker", "Git"],
    repo: "/Group_2_Final_Presentation.pdf",
    repoLabel: "View Presentation PDF",
    accents: ["+15.8% accuracy gain", "RTF 0.00008 (Real-time)", "Focal Loss tuning"],
    architecture: ["audio source", "log-mel cnn", "mfcc dense", "context cnn", "bi-lstm attention", "focal classification"],
    year: "2026",
    role: "Lead Architect (Core Branches)",
    status: "Academic Research / Deep Learning",
    impactStats: [
      { label: "Accuracy gain", value: "+15.8% vs MLP" },
      { label: "Real-time factor", value: "0.00008 (RTF)" },
      { label: "Dataset scale", value: "11,076 samples" }
    ],
    outcomes: [
      "Trained a Dual-Branch CNN model achieving 55.9% accuracy on IEMOCAP and 54.5% on IEMOCAP+MELD noisy data.",
      "Integrated InstanceNorm2d to remove speaker-specific tone biases and focus training on emotional variance.",
      "Built a dialog-level Context CNN encoding previous 3 utterances to model conversational trajectory changes."
    ],
    proofPoints: ["+15.8% accuracy over baseline", "RTF = 0.00008 (fully real-time)", "Focal Loss minority F1 improvement"],
    buildNotes: [
      "Extracted 64 Mel-bands for spatial features and 20 coefficients with delta/delta-delta for temporal paths.",
      "Used focal loss and label smoothing to overcome severe class imbalances in minority emotional states.",
      "Performed data augmentation using time masking, frequency masking, and Gaussian noise to build robustness."
    ],
    decisionSignals: [
      "Filter out speaker tone variance to capture true emotional shifts",
      "Model multi-utterance conversational context to track trajectories",
      "Ensure low inference footprint for mobile and edge deployments"
    ],
    detailSections: [
      {
        title: "Dual-Branch Architecture",
        body: "Branch 1 runs a 2D CNN over 2D Log-Mel spectrograms to capture spectral texture. Branch 2 runs Dense layers over 1D MFCC coefficients to capture temporal details. The outputs are fused with Context vectors."
      },
      {
        title: "Experimental Generalization",
        body: "Evaluated on IEMOCAP (clean) and MELD (noisy Friends show dialogues). The v3 model maintained 54.5% accuracy under heavy background noise, proving robust real-world generalization."
      }
    ]
  }
];

export const personalSignals = [
  {
    title: "Currently building",
    body: "Agentic workflows, graph-based reasoning, and systems that feel product-grade instead of experimental.",
  },
  {
    title: "Builder habits",
    body: "Midnight coding, architecture diagrams before implementation, and making complex systems readable to both engineers and non-engineers.",
  },
  {
    title: "What I optimize for",
    body: "Clarity under pressure, strong operational defaults, and technical work that still looks good after real-world traffic, failure, and change.",
  },
];

export const techGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "Go", "C++", "TypeScript", "SQL"],
  },
  {
    title: "AI + ML",
    items: ["LangGraph", "LangChain", "RAG", "Agentic Workflows", "PyTorch", "TensorFlow"],
  },
  {
    title: "Backend + Web",
    items: ["FastAPI", "Spring Boot", "Node.js", "React", "Next.js", "gRPC", "WebSocket", "NGINX"],
  },
  {
    title: "Data + Infra",
    items: ["PostgreSQL", "AWS Aurora", "DynamoDB", "MongoDB Atlas", "Redis", "Kafka", "Spark", "Airflow"],
  },
  {
    title: "Cloud + DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "Jira"],
  },
  {
    title: "ML Systems & Big Data",
    items: ["PySpark", "Hadoop", "MLflow", "Voyage AI", "MongoDB Vector Search", "Scikit-learn", "Pandas", "NumPy"],
  },
];

export const buildGraph = [
  {
    lane: "Infrastructure",
    nodes: ["Airflow", "Spark", "Kafka", "Aurora", "Kubernetes"],
  },
  {
    lane: "Backend",
    nodes: ["FastAPI", "Spring Boot", "gRPC", "WebSocket", "NGINX"],
  },
  {
    lane: "Applied AI",
    nodes: ["LangGraph", "RAG systems", "PyTorch", "vector search", "model delivery"],
  },
  {
    lane: "Product",
    nodes: ["hackathons", "agentic UX", "storytelling", "execution speed", "real-time systems"],
  },
];

export const proofStats = [
  { 
    label: "Throughput gain", 
    value: "40%", 
    description: "Refactored backend services from O(n²) to O(n log n) throughput using B+ trees and hashing on Linux services." 
  },
  { 
    label: "p95 latency drop", 
    value: "60%", 
    description: "Achieved via intelligent database indexing, query optimization, and read-replica replication schemes." 
  },
  { 
    label: "Records processed daily", 
    value: "1M+", 
    description: "Successfully handled in high-availability web and ETL platform configurations using React, FastAPI, Postgres, and Redis." 
  },
  { 
    label: "Release time cut", 
    value: "50%", 
    description: "Cut deployment overhead with automated CI/CD pipelines, blue-green releases, and zero-downtime rollouts." 
  },
];

export const archiveFallback = [
  {
    name: "TrustGuard-AI",
    description: "Trust, safety, and AI-centric experimentation repo.",
    url: "https://github.com/aryaMehta26/TrustGuard-AI",
    language: "Python",
    topic: "Applied AI",
  },
  {
    name: "isaac-sim-synth-data",
    description: "Synthetic data experimentation with simulation-oriented workflows.",
    url: "https://github.com/aryaMehta26/isaac-sim-synth-data",
    language: "Python",
    topic: "ML / Research",
  },
  {
    name: "LayoverOS",
    description: "Multi-agent travel operating system with memory, vector search, and payments.",
    url: "https://github.com/aryaMehta26/LayoverOS",
    language: "TypeScript",
    topic: "Product",
  },
];

export const contactPaths = [
  {
    title: "Recruiter path",
    description: "For hiring conversations around backend, data, platform, or applied AI roles.",
    action: "Email Arya",
    href: "mailto:aryamehta456@gmail.com",
  },
  {
    title: "Builder path",
    description: "For collaborators, founders, and teams who want someone strong in systems and execution.",
    action: "Open LinkedIn",
    href: "https://www.linkedin.com/in/arya-mehta-/",
  },
  {
    title: "Proof path",
    description: "For people who want code, repos, experiments, and implementation signal first.",
    action: "Open GitHub",
    href: "https://github.com/aryaMehta26",
  },
];

export const signalLinks = [
  { label: "GitHub", href: "https://github.com/aryaMehta26" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arya-mehta-/" },
  { label: "Medium", href: "https://medium.com/@aryaMehta26" },
  { label: "Resume", href: "/SDE.pdf" },
];

export const blogFallback = [
  {
    title: "Refactoring Hot Paths: How We Achieved O(n log n) Throughput using B+ Trees",
    description: "A deep dive into rewriting database indexing structures and resolving query latency drag on high-throughput backend services.",
    link: "https://medium.com/@aryaMehta26",
    date: "Systems Engineering",
    tags: ["Java", "Spring Boot", "B+ Trees", "Database"],
    takeaway: "Swapping linear query evaluations with structural B+ tree hashing increased throughput by 40% and cut p95 latency by 60%.",
  },
  {
    title: "Orchestrating 5 TB/Day on Kubernetes: Autoscale Tunings & Spark Partitioning Tricks",
    description: "My operational checklist for scheduling distributed jobs, Celery executors, and configuring EKS node pools to optimize wall-clock efficiency.",
    link: "https://medium.com/@aryaMehta26",
    date: "Platform Operations",
    tags: ["AWS", "Kubernetes", "Spark", "Airflow"],
    takeaway: "Tuning partitioning boundaries and predicate pushdowns decreased spark data shuffle by 60% and trimmed cloud billing costs by 40%.",
  },
  {
    title: "Multi-Agent Travel OS: Orchestrating LangGraph State Machines & Coinbase Transactions",
    description: "Connecting autonomous supervisor routing nodes to zero-hallucination vector retrievals and generative transaction payments.",
    link: "https://medium.com/@aryaMehta26",
    date: "Applied AI Design",
    tags: ["Python", "LangGraph", "FastAPI", "MongoDB"],
    takeaway: "Binding MongoDBSaver checkpointing with CDP wallets handles persistent memory state logic outside standard LLM prompt contexts.",
  },
  {
    title: "Civic-Tech at Scale: Real-Time WebSockets & Dijkstra Route Optimizations",
    description: "How we scaled the award-winning SJ HOPES platform to handle concurrent traffic spikes during emergency shelter allocations.",
    link: "https://medium.com/@aryaMehta26",
    date: "Product Infrastructure",
    tags: ["Java", "Spring Boot", "WebSocket", "MySQL"],
    takeaway: "Geospatial indexing (R-trees) and connection pooling cut map routing processing time by 45%.",
  },
  {
    title: "Designing Zero-Hallucination RAG: Voyager Embeddings & MongoDB Atlas Pre-Filters",
    description: "Architecting autonomous travel recovery assistants with strict term filters, context checking, and fallback search models.",
    link: "https://medium.com/@aryaMehta26",
    date: "Applied AI Design",
    tags: ["RAG", "MongoDB", "FastAPI", "Python"],
    takeaway: "Pre-filtering high-dimensional vectors by exact terminal status IDs prevents LLMs from suggesting offline routes.",
  },
  {
    title: "Distributed Telemetry Pipelines: Proactive Monitoring with Prometheus & Grafana",
    description: "Building automated logs analysis systems and setting SLO threshold indicators to decrease production incidents.",
    link: "https://medium.com/@aryaMehta26",
    date: "DevOps & SRE",
    tags: ["Prometheus", "Grafana", "Bash", "CI/CD"],
    takeaway: "Automated alert rules and alert channels cut incident response times by 75% and saved 20 hours/week manual toil.",
  },
];
export type FeaturedProject = {
  slug: string;
  name: string;
  cardName: string;
  mode: "builder" | "fraud" | "platform" | "agentic" | "governance" | "ml-bigdata";
  category: string;
  cardHook: string;
  shortDescription: string;
  heroLine: string;
  achievement: string;
  stackHeadline: string;
  challenge: string;
  solution: string;
  stack: string[];
  repo?: string;
  repoLabel?: string;
  demo?: string;
  accents: string[];
  architecture: string[];
  outcomes: string[];
  proofPoints: string[];
  detailSections: Array<{
    title: string;
    body: string;
  }>;
  year: string;
  role: string;
  status: string;
  impactStats: Array<{
    label: string;
    value: string;
  }>;
  buildNotes: string[];
  decisionSignals: string[];
};

/* ────────────────────────────────────
   Experience Timeline
   ──────────────────────────────────── */

export type ExperienceEntry = {
  id: string;
  company: string;
  logo?: string;
  role: string;
  period: string;
  location: string;
  type: string;
  impact: string[];
  stack: string[];
  highlight?: string;
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "meteocontrol",
    company: "MeteoControl",
    logo: "/meteocontrol.png",
    role: "Software Engineer",
    period: "Jan 2024 – Dec 2024",
    location: "Ahmedabad, India",
    type: "Industry",
    impact: [
      "Shipped production features weekly across Java/Spring Boot services and React/TypeScript UIs for 10k+ users, sustaining 99.9%+ availability via Prometheus/Grafana alerts and on-call rotations",
      "Refactored hot paths from O(n²) → O(n log n) using B+ trees & hashing → +40% throughput and −60% p95 latency on Linux systems",
      "Implemented resilience (circuit breakers, retries) and blue-green/canary deploys; automated CI/CD to cut release time 50% with zero-downtime rollouts",
      "Built Python/Bash tooling for deploy/monitor/log analysis, eliminating ~20 hrs/week manual toil and reducing incidents 75% via proactive troubleshooting",
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "Python", "Bash", "Prometheus", "Grafana", "CI/CD", "Linux"],
    highlight: "Java/Spring Boot & React scale",
  },
  {
    id: "dupat",
    company: "Dupat Infotronicx Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "Aug 2022 – Aug 2023",
    location: "Ahmedabad, India",
    type: "Industry",
    impact: [
      "Developed an end-to-end web + data platform (React, FastAPI, Postgres/Redis) processing 1M+ records/day; caching, pagination, and rate-limiting cut DB load 70%",
      "Re-architected ETL with memoization + batched I/O → 3× faster processing and −65% CPU",
      "Delivered REST APIs with ~95% test coverage; created dashboards/runbooks for on-call operations",
      "Collaborated with cross-functional teams in Agile sprints and presented technical insights to non-technical stakeholders",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "ETL", "REST APIs", "Agile"],
    highlight: "1M+ records/day / 70% DB load cut",
  },
];

/* ────────────────────────────────────
   Education
   ──────────────────────────────────── */

export type EducationEntry = {
  id: string;
  institution: string;
  logo?: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  coursework: string[];
  highlights: string[];
};

export const educationData: EducationEntry[] = [
  {
    id: "sjsu",
    institution: "San Jose State University",
    logo: "/sjsu.png",
    degree: "Master of Science",
    field: "Applied Data Science",
    period: "Jan 2025 – Dec 2026",
    location: "San Jose, CA",
    gpa: "3.8 / 4.0",
    coursework: [
      "Data Engineering",
      "Machine Learning",
      "Deep Learning",
      "Data Mining",
      "Big Data Technologies",
      "Natural Language Processing",
      "Data Visualization",
      "Cloud Computing",
    ],
    highlights: [
      "SJ Hacks 2026 Winner — civic-tech platform with 1000+ user target",
      "MongoDB Agentic Hackathon Finalist — multi-agent travel OS",
      "LangGraph contributor — Agentic Commerce architecture pattern",
    ],
  },
  {
    id: "undergrad",
    institution: "Silver Oak University",
    logo: "/silveroak.jpg",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    period: "Aug 2019 – May 2023",
    location: "Ahmedabad, India",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming",
    ],
    highlights: [
      "Led software engineering group projects",
      "Top academic performance in CS track",
    ],
  },
];

/* ────────────────────────────────────
   Skills Constellation
   ──────────────────────────────────── */

export type SkillNode = {
  id: string;
  label: string;
  category: "backend" | "ai" | "data" | "cloud" | "product";
  proficiency: "expert" | "advanced" | "proficient";
};

export type SkillEdge = {
  from: string;
  to: string;
};

export const skillNodes: SkillNode[] = [
  // Backend
  { id: "python", label: "Python", category: "backend", proficiency: "expert" },
  { id: "java", label: "Java", category: "backend", proficiency: "advanced" },
  { id: "typescript", label: "TypeScript", category: "backend", proficiency: "advanced" },
  { id: "go", label: "Go", category: "backend", proficiency: "proficient" },
  { id: "fastapi", label: "FastAPI", category: "backend", proficiency: "expert" },
  { id: "springboot", label: "Spring Boot", category: "backend", proficiency: "advanced" },
  { id: "grpc", label: "gRPC", category: "backend", proficiency: "proficient" },
  { id: "nodejs", label: "Node.js", category: "backend", proficiency: "advanced" },

  // AI/ML
  { id: "pytorch", label: "PyTorch", category: "ai", proficiency: "advanced" },
  { id: "tensorflow", label: "TensorFlow", category: "ai", proficiency: "advanced" },
  { id: "langchain", label: "LangChain", category: "ai", proficiency: "expert" },
  { id: "langgraph", label: "LangGraph", category: "ai", proficiency: "expert" },
  { id: "rag", label: "RAG", category: "ai", proficiency: "expert" },
  { id: "graphml", label: "Graph ML", category: "ai", proficiency: "advanced" },

  // Data
  { id: "postgres", label: "PostgreSQL", category: "data", proficiency: "expert" },
  { id: "mongo", label: "MongoDB", category: "data", proficiency: "advanced" },
  { id: "redis", label: "Redis", category: "data", proficiency: "advanced" },
  { id: "kafka", label: "Kafka", category: "data", proficiency: "advanced" },
  { id: "spark", label: "Spark", category: "data", proficiency: "expert" },
  { id: "airflow", label: "Airflow", category: "data", proficiency: "expert" },

  // Cloud / DevOps
  { id: "aws", label: "AWS", category: "cloud", proficiency: "expert" },
  { id: "docker", label: "Docker", category: "cloud", proficiency: "expert" },
  { id: "k8s", label: "Kubernetes", category: "cloud", proficiency: "advanced" },
  { id: "githubactions", label: "CI/CD", category: "cloud", proficiency: "advanced" },
  { id: "prometheus", label: "Prometheus", category: "cloud", proficiency: "advanced" },
  { id: "grafana", label: "Grafana", category: "cloud", proficiency: "advanced" },

  // Product
  { id: "nextjs", label: "Next.js", category: "product", proficiency: "advanced" },
  { id: "react", label: "React", category: "product", proficiency: "advanced" },
  { id: "websocket", label: "WebSocket", category: "product", proficiency: "proficient" },
  { id: "systemdesign", label: "System Design", category: "product", proficiency: "expert" },

  // Lane 06 additions
  { id: "scikitlearn", label: "Scikit-Learn", category: "ai", proficiency: "expert" },
  { id: "pandas", label: "Pandas", category: "data", proficiency: "expert" },
  { id: "numpy", label: "NumPy", category: "data", proficiency: "expert" },
  { id: "hadoop", label: "Hadoop", category: "data", proficiency: "advanced" },
  { id: "streamlit", label: "Streamlit", category: "product", proficiency: "advanced" },
  { id: "powerbi", label: "Power BI", category: "product", proficiency: "advanced" },
  { id: "s3", label: "AWS S3", category: "cloud", proficiency: "expert" },
  { id: "eks", label: "AWS EKS", category: "cloud", proficiency: "expert" },
  { id: "nlp", label: "NLP / TF-IDF", category: "ai", proficiency: "advanced" },
];

export const skillEdges: SkillEdge[] = [
  { from: "python", to: "fastapi" },
  { from: "python", to: "pytorch" },
  { from: "python", to: "spark" },
  { from: "python", to: "airflow" },
  { from: "python", to: "langchain" },
  { from: "java", to: "springboot" },
  { from: "typescript", to: "nextjs" },
  { from: "typescript", to: "react" },
  { from: "typescript", to: "nodejs" },
  { from: "fastapi", to: "docker" },
  { from: "fastapi", to: "grpc" },
  { from: "langchain", to: "langgraph" },
  { from: "langchain", to: "rag" },
  { from: "rag", to: "mongo" },
  { from: "rag", to: "postgres" },
  { from: "pytorch", to: "graphml" },
  { from: "pytorch", to: "tensorflow" },
  { from: "spark", to: "kafka" },
  { from: "spark", to: "aws" },
  { from: "airflow", to: "spark" },
  { from: "airflow", to: "docker" },
  { from: "docker", to: "k8s" },
  { from: "k8s", to: "aws" },
  { from: "k8s", to: "prometheus" },
  { from: "prometheus", to: "grafana" },
  { from: "aws", to: "githubactions" },
  { from: "postgres", to: "redis" },
  { from: "nextjs", to: "websocket" },
  { from: "react", to: "websocket" },
  { from: "systemdesign", to: "grpc" },
  { from: "systemdesign", to: "kafka" },
  { from: "systemdesign", to: "k8s" },
  
  // Lane 06 connections
  { from: "python", to: "pandas" },
  { from: "python", to: "numpy" },
  { from: "python", to: "scikitlearn" },
  { from: "pandas", to: "spark" },
  { from: "numpy", to: "pytorch" },
  { from: "hadoop", to: "spark" },
  { from: "scikitlearn", to: "streamlit" },
  { from: "scikitlearn", to: "powerbi" },
  { from: "aws", to: "s3" },
  { from: "aws", to: "eks" },
  { from: "eks", to: "k8s" },
  { from: "nlp", to: "langchain" },
];

export const skillCategoryColors: Record<SkillNode["category"], string> = {
  backend: "rgba(158, 109, 244, 0.9)",
  ai: "rgba(125, 86, 207, 0.9)",
  data: "rgba(219, 200, 255, 0.9)",
  cloud: "rgba(98, 208, 255, 0.8)",
  product: "rgba(255, 180, 120, 0.85)",
};

export const skillCategoryLabels: Record<SkillNode["category"], string> = {
  backend: "Backend",
  ai: "AI / ML",
  data: "Data",
  cloud: "Cloud / DevOps",
  product: "Product",
};

/* ────────────────────────────────────
   GitHub Activity (fallback)
   ──────────────────────────────────── */

export const githubActivityFallback = {
  username: "aryaMehta26",
  totalContributions: 847,
  currentStreak: 12,
  longestStreak: 34,
  recentWeeks: generateFallbackHeatmap(),
};

function generateFallbackHeatmap(): number[][] {
  // 26 weeks × 7 days — simulated contribution counts (deterministic to avoid hydration mismatch)
  const weeks: number[][] = [];
  for (let w = 0; w < 26; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      // Deterministic pseudo-random number based on w and d
      const seed = Math.sin(w * 17.234 + d * 43.123) * 43758.5453;
      const rand = seed - Math.floor(seed);

      // Bias toward weekdays and recent weeks
      const weekdayBoost = d >= 1 && d <= 5 ? 0.6 : 0.2;
      const recencyBoost = w / 26;
      if (rand < weekdayBoost * recencyBoost) {
        week.push(Math.floor(rand * 8) + 1);
      } else if (rand < 0.4) {
        week.push(Math.floor(rand * 3));
      } else {
        week.push(0);
      }
    }
    weeks.push(week);
  }
  return weeks;
}
