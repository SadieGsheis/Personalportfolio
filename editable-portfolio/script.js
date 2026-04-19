/*
  ==============================================================
  EDITABLE CONTENT AREA
  - Edit texts, titles, links, years, tools, skills
  - Replace image URLs with your own image links
  ==============================================================
*/
const CONTENT = {
  site: {
    name: "Lara",
    footerText: "© 2026 Alex Morgan — All rights reserved",
    ctaLink: "https://www.linkedin.com/",
  },
  home: {
    helloLabel: "HELLO",
    titleLine1: "I'm Lara",
    titleLine2: "Digital Product Designer",
    intro1:
      "with 12+ years of experience shaping intuitive digital products for startups and global organizations.",
    intro2:
      "My work combines design expertise with strategy, collaboration, and growing leadership in product and team alignment.",
    trustedBy: ["Volvo", "Netflix", "Adobe", "Nike", "Uber", "Figma", "Adidas"],
    portfolioTitle: "Selected Work",
    portfolioSubtitle:
      "Exploring the intersection of design, technology, and human experience",
    contactTitle1: "Let's Create",
    contactTitle2: "Together",
    contactDescription:
      "Always open to discussing new projects, creative ideas, and opportunities.",
  },
  about: {
    title: "Hi, I'm Lara",
    paragraphs: [
      "A passionate Product Designer with over 6 years of experience crafting digital experiences that users love. I believe great design is where aesthetics meet functionality.",
      "My journey in design began with curiosity and visual storytelling. Today, I combine data-driven insights with creative vision to solve complex problems.",
    ],
    profileImage:
      "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=1400&q=80",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Design Systems",
      "Interaction Design",
      "Usability Testing",
      "Information Architecture",
    ],
    tools: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "Miro"],
    experience: [
      {
        role: "Senior Product Designer",
        company: "Tech Innovations Inc.",
        period: "2021 - Present",
        bullets: [
          "Leading design initiatives for enterprise SaaS products.",
          "Managing and mentoring a team of designers.",
          "Built a design system that improved delivery speed.",
        ],
      },
      {
        role: "Product Designer",
        company: "Digital Creative Agency",
        period: "2019 - 2021",
        bullets: [
          "Designed end-to-end digital experiences for large clients.",
          "Conducted user research and usability testing.",
          "Collaborated with cross-functional teams in product launches.",
        ],
      },
    ],
  },
  projects: [
    {
      id: 1,
      title: "Harmony Music",
      subtitle: "Redefining Music Streaming",
      description:
        "A next-generation music streaming platform with AI-powered playlists and social features.",
      tags: ["STREAMING", "AUDIO", "SOCIAL"],
      year: "2025",
      client: "Harmony Labs",
      role: "Product Designer",
      duration: "8 months",
      overview:
        "Harmony Music reimagines the streaming experience with personalization and social discovery.",
      challenge:
        "Users wanted a music app that felt personal and social without being overwhelming.",
      solution:
        "We designed an immersive listening mode and a contextual discovery feed.",
      impact: ["1M+ downloads", "92% satisfaction", "40% higher engagement"],
      mainImages: [
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1520420097861-e4959843b682?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 2,
      title: "Connect Mobile",
      subtitle: "Enterprise Communication Reimagined",
      description:
        "A unified communication platform for messaging, calls, and project collaboration.",
      tags: ["COLLABORATION", "MOBILE", "ENTERPRISE"],
      year: "2025",
      client: "ConnectCorp",
      role: "Lead UX Designer",
      duration: "10 months",
      overview:
        "Connect Mobile combines key team workflows in one clean experience.",
      challenge: "Teams used too many disconnected tools.",
      solution:
        "A context-aware interface that surfaces relevant conversations and files.",
      impact: ["500+ enterprise clients", "65% less tool switching", "4.7/5 rating"],
      mainImages: [
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 3,
      title: "HealthTrack Pro",
      subtitle: "Transforming Fitness & Wellness",
      description:
        "A fitness app for workouts, nutrition, and wellness goals with personalized insights.",
      tags: ["UI/UX", "MOBILE", "HEALTH"],
      year: "2024",
      client: "FitnessTech Inc.",
      role: "Lead Product Designer",
      duration: "6 months",
      overview:
        "A holistic wellness platform combining tracking and motivation.",
      challenge: "Users abandon apps with overwhelming interfaces.",
      solution:
        "Adaptive UI and onboarding tailored to goals and experience level.",
      impact: ["85% better retention", "4.8 rating", "250k+ active users"],
      mainImages: [
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 4,
      title: "ShopHub Dashboard",
      subtitle: "E-Commerce Intelligence Platform",
      description:
        "Analytics platform for merchants to monitor sales and customer behavior in real time.",
      tags: ["DASHBOARD", "ANALYTICS", "E-COMMERCE"],
      year: "2024",
      client: "ShopHub Inc.",
      role: "Senior Product Designer",
      duration: "7 months",
      overview:
        "Transforms complex e-commerce data into clear business insights.",
      challenge: "Merchants needed insight without technical analysis skills.",
      solution:
        "A customizable dashboard highlighting anomalies and opportunities.",
      impact: ["10k+ merchants", "45% faster decisions", "4.9/5 satisfaction"],
      mainImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1551281044-8f7ce8f6d1a9?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 5,
      title: "Wanderlust Travel",
      subtitle: "Discover Your Next Adventure",
      description:
        "Travel booking experience for discovering, planning, and booking destinations.",
      tags: ["BOOKING", "MOBILE", "TRAVEL"],
      year: "2025",
      client: "Wanderlust Co.",
      role: "Product Designer",
      duration: "9 months",
      overview:
        "Story-driven travel discovery connected to frictionless booking.",
      challenge: "Travelers were juggling too many apps and websites.",
      solution:
        "A single flow from inspiration to booking with recommendations.",
      impact: ["2M+ downloads", "78% completion rate", "$50M bookings"],
      mainImages: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
      ],
    },
    {
      id: 6,
      title: "FinanceFlow",
      subtitle: "Personal Banking Simplified",
      description:
        "A banking app for budgeting, saving, investing, and secure transactions.",
      tags: ["FINTECH", "MOBILE", "BANKING"],
      year: "2024",
      client: "FinanceFlow Bank",
      role: "Lead Product Designer",
      duration: "12 months",
      overview:
        "A modern banking product focused on financial wellness and trust.",
      challenge: "Banking apps were hard to navigate and not proactive.",
      solution:
        "An intelligent home screen with personalized insights and guidance.",
      impact: ["750k active users", "40% higher savings", "4.8 trust rating"],
      mainImages: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1565514020179-026b92b2d95b?auto=format&fit=crop&w=1600&q=80",
      ],
    },
  ],
};

function getProjectById(id) {
  return CONTENT.projects.find((project) => project.id === Number(id));
}

function projectFileName(project) {
  return project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function header() {
  return `
    <!-- HEADER SECTION: edit site name and nav labels -->
    <header class="header">
      <div class="container header-inner">
        <a class="logo" href="#/">${CONTENT.site.name}</a>
        <nav class="nav">
          <a href="#/">Work</a>
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <!-- FOOTER SECTION: edit copyright line -->
    <footer class="footer">
      <div class="container muted">${CONTENT.site.footerText}</div>
    </footer>
  `;
}

function homePage() {
  const projectCards = CONTENT.projects
    .map(
      (project) => `
        <!-- PROJECT CARD: edit title/description/image/tags in CONTENT.projects -->
        <a class="card" href="./projects/${projectFileName(project)}.html">
          <img src="${project.mainImages[0]}" alt="${project.title}" />
          <div class="card-body">
            <h3>${project.title}</h3>
            <p class="soft">${project.description}</p>
            <div class="pill-grid">
              ${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
          </div>
        </a>
      `
    )
    .join("");

  return `
    ${header()}
    <main>
      <!-- HERO SECTION: edit intro texts in CONTENT.home -->
      <section class="hero">
        <div class="container">
          <p class="muted">${CONTENT.home.helloLabel}</p>
          <h1>
            ${CONTENT.home.titleLine1.split(" ")[0]}
            <span class="gradient-text">${CONTENT.home.titleLine1.split(" ").slice(1).join(" ")}</span>
            <br />
            ${CONTENT.home.titleLine2}
          </h1>
          <p>${CONTENT.home.intro1}</p>
          <p>${CONTENT.home.intro2}</p>
        </div>
      </section>

      <!-- TRUSTED BY SECTION: edit logo/client labels in CONTENT.home.trustedBy -->
      <section class="section">
        <div class="container">
          <p class="muted">TRUSTED BY</p>
          <div class="pill-grid">
            ${CONTENT.home.trustedBy.map((client) => `<span class="pill">${client}</span>`).join("")}
          </div>
        </div>
      </section>

      <!-- PROJECTS SECTION: edit each project card data in CONTENT.projects -->
      <section class="section">
        <div class="container">
          <h2>${CONTENT.home.portfolioTitle}</h2>
          <p class="soft">${CONTENT.home.portfolioSubtitle}</p>
          <div class="project-grid spacer-top">${projectCards}</div>
        </div>
      </section>

      <!-- CONTACT SECTION: edit CTA text and URL in CONTENT.home + CONTENT.site -->
      <section class="section">
        <div class="container">
          <h2>
            ${CONTENT.home.contactTitle1} <span class="gradient-text">${CONTENT.home.contactTitle2}</span>
          </h2>
          <p class="soft">${CONTENT.home.contactDescription}</p>
          <a class="btn" href="${CONTENT.site.ctaLink}" target="_blank" rel="noreferrer">Let's Talk</a>
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function aboutPage() {
  const skills = CONTENT.about.skills.map((item) => `<span class="pill">${item}</span>`).join("");
  const tools = CONTENT.about.tools.map((item) => `<span class="pill">${item}</span>`).join("");
  const experience = CONTENT.about.experience
    .map(
      (item) => `
      <!-- EXPERIENCE ITEM: edit role/company/period/bullets in CONTENT.about.experience -->
      <article class="experience-item">
        <h3>${item.role}</h3>
        <p class="soft">${item.company} · ${item.period}</p>
        <ul>
          ${item.bullets.map((bullet) => `<li class="soft">${bullet}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");

  return `
    ${header()}
    <main>
      <!-- ABOUT HERO SECTION: edit title, paragraphs and profile image -->
      <section class="hero">
        <div class="container two-cols">
          <div>
            <h1>${CONTENT.about.title}</h1>
            <p>${CONTENT.about.paragraphs[0]}</p>
            <p>${CONTENT.about.paragraphs[1]}</p>
          </div>
          <div>
            <img class="image-full" src="${CONTENT.about.profileImage}" alt="About profile image" />
          </div>
        </div>
      </section>

      <!-- SKILLS SECTION: edit CONTENT.about.skills -->
      <section class="section">
        <div class="container">
          <h2>Skills & Expertise</h2>
          <div class="pill-grid">${skills}</div>
        </div>
      </section>

      <!-- TOOLS SECTION: edit CONTENT.about.tools -->
      <section class="section">
        <div class="container">
          <h2>Tools I Use</h2>
          <div class="pill-grid">${tools}</div>
        </div>
      </section>

      <!-- EXPERIENCE SECTION: edit CONTENT.about.experience -->
      <section class="section">
        <div class="container">
          <h2>Experience</h2>
          <div class="experience-list">${experience}</div>
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function projectPage(projectId) {
  const project = getProjectById(projectId);
  if (!project) {
    return `
      ${header()}
      <main class="section">
        <div class="container">
          <h1>Project not found</h1>
          <a class="btn" href="#/">Back to Home</a>
        </div>
      </main>
      ${footer()}
    `;
  }

  const currentIndex = CONTENT.projects.findIndex((item) => item.id === project.id);
  const prevProject =
    CONTENT.projects[(currentIndex - 1 + CONTENT.projects.length) % CONTENT.projects.length];
  const nextProject = CONTENT.projects[(currentIndex + 1) % CONTENT.projects.length];

  return `
    ${header()}
    <main>
      <!-- PROJECT HERO SECTION: edit main identity fields for each project -->
      <section class="hero">
        <div class="container">
          <a class="muted" href="#/">← Back to Work</a>
          <h1>${project.title}</h1>
          <p class="soft">${project.subtitle}</p>
          <div class="pill-grid">
            ${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
          </div>
        </div>
      </section>

      <!-- PROJECT META SECTION: year/client/role/duration -->
      <section class="section">
        <div class="container project-meta">
          <div><p class="muted">Year</p><p>${project.year}</p></div>
          <div><p class="muted">Client</p><p>${project.client}</p></div>
          <div><p class="muted">Role</p><p>${project.role}</p></div>
          <div><p class="muted">Duration</p><p>${project.duration}</p></div>
        </div>
      </section>

      <!-- PROJECT OVERVIEW SECTION: edit overview/challenge/solution -->
      <section class="section">
        <div class="container">
          <h2>Overview</h2>
          <p class="soft">${project.overview}</p>
          <div class="two-cols spacer-top">
            <div>
              <h3>Challenge</h3>
              <p class="soft">${project.challenge}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <p class="soft">${project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- PROJECT IMPACT SECTION: edit impact list -->
      <section class="section">
        <div class="container">
          <h2>Impact</h2>
          <div class="two-cols">
            ${project.impact.map((item) => `<div class="impact-item">${item}</div>`).join("")}
          </div>
        </div>
      </section>

      <!-- PROJECT IMAGES SECTION: replace image URLs in project.mainImages -->
      <section class="section">
        <div class="container">
          ${project.mainImages
            .map(
              (imageUrl, index) => `
                <img class="image-full card spacer-top" src="${imageUrl}" alt="${project.title} image ${index + 1}" />
              `
            )
            .join("")}
        </div>
      </section>

      <!-- PROJECT NAVIGATION SECTION: previous and next project links -->
      <section class="section">
        <div class="container two-cols">
          <a class="card card-body" href="#/projects/${prevProject.id}">
            <p class="muted">Previous</p>
            <h3>${prevProject.title}</h3>
          </a>
          <a class="card card-body" href="#/projects/${nextProject.id}">
            <p class="muted">Next</p>
            <h3>${nextProject.title}</h3>
          </a>
        </div>
      </section>
    </main>
    ${footer()}
  `;
}

function getRoute() {
  const route = window.location.hash.replace("#", "");
  return route || "/";
}

function renderRoute() {
  const app = document.getElementById("app");
  const route = getRoute();

  if (route === "/") {
    app.innerHTML = homePage();
    return;
  }

  if (route === "/about") {
    app.innerHTML = aboutPage();
    return;
  }

  if (route.startsWith("/projects/")) {
    const id = route.split("/")[2];
    app.innerHTML = projectPage(id);
    return;
  }

  app.innerHTML = `
    ${header()}
    <main class="section">
      <div class="container">
        <h1>404</h1>
        <p class="soft">This editable page does not exist.</p>
        <a class="btn" href="#/">Back to Home</a>
      </div>
    </main>
    ${footer()}
  `;
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
