import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react'
import './App.css'

const navItems = ['About', 'Stack', 'Projects', 'Contact']

const stats = [
  { label: 'Years of experience', value: '3+' },
  { label: 'REST APIs built', value: '11+' },
  { label: 'Production apps', value: '8+' },
  { label: 'Core stack', value: 'Java + React' },
]

const stackGroups = [
  {
    title: 'Backend',
    items: ['Java 17 / 21', 'Spring Boot', 'JWT', 'Spring Security', 'JPA/Hibernate', 'Flyway'],
  },
  {
    title: 'Frontend',
    items: ['React 18 / 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Axios', 'React Router'],
  },
  {
    title: 'Infra & tools',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'GitHub', 'Docker basics'],
  },
]

const projects = [
  {
    name: 'ForoHub API',
    status: 'Production Ready',
    difficulty: 'Medium-Hard',
    description:
      'Forum platform with secure authentication, threaded discussions and author-only operations.',
    stack: ['Spring Boot', 'Java 17', 'MySQL', 'JWT', 'Swagger'],
    href: 'https://github.com/Ed-Pino/ForoHub_API',
  },
  {
    name: 'TalentCircle',
    status: 'Production Ready',
    difficulty: 'Hard',
    description:
      'Content pipeline that orchestrates publishing across Discord, LinkedIn and Twitter with queues and monitoring.',
    stack: ['Java 21', 'PostgreSQL', 'Redis', 'RabbitMQ', 'WebSocket'],
    href: 'https://github.com/Ed-Pino/TalentCircle',
  },
  {
    name: 'EleVideo',
    status: 'Completed',
    difficulty: 'Medium-Hard',
    description:
      'Full-stack tool for converting vertical videos into horizontal format for social media.',
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'Cloud-ready', 'REST'],
    href: 'https://github.com/Ed-Pino/EleVideo',
  },
]

const profileHighlights = [
  'REST APIs and secure authentication flows',
  'Responsive client interfaces with React and TypeScript',
  'Clean architecture and layered business logic',
  'Database design, migrations and data optimization',
  'Integration with third-party APIs and asynchronous jobs',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand">
          <span className="brand-mark">EP</span>
          <span>Ed Pino</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-button" href="#contact">
          Let's connect
        </a>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} /> Full-Stack Developer
            </p>

            <h1>
              Building reliable digital products with <span>Java</span>, <span>React</span>, and
              clean architecture.
            </h1>

            <p className="lead">
              I design and build secure, scalable web applications with a strong focus on backend
              logic, frontend experience and production-ready quality.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                See projects <ArrowRight size={18} />
              </a>
              <a className="secondary-btn" href="https://github.com/Ed-Pino" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub
              </a>
            </div>

            <div className="mini-stats" aria-label="portfolio stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Professional summary card">
            <div className="panel-header">
              <span className="status-dot" />
              Available for opportunities
            </div>

            <div className="panel-body">
              <div className="profile-badge">
                <BriefcaseBusiness size={20} />
                Mid-Level / Semi-Senior
              </div>

              <ul>
                <li>Java Spring Boot</li>
                <li>React + TypeScript</li>
                <li>REST APIs & integrations</li>
                <li>Security & database design</li>
              </ul>

              <div className="location-row">
                <MapPin size={16} />
                <span>Open to remote and hybrid projects</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about container section-block">
          <div className="section-heading">
            <p className="eyebrow accent">About me</p>
            <h2>Developer focused on solving real business problems.</h2>
          </div>

          <div className="about-grid">
            <p>
              I am a Full-Stack Developer with 3+ years of experience building scalable products
              using modern technologies. My work blends backend robustness, frontend usability and
              clean architecture to create functional solutions that can evolve with the business.
            </p>
            <p>
              I enjoy building APIs, implementing auth flows, creating responsive interfaces and
              connecting systems in a way that remains maintainable, secure and understandable for
              the team.
            </p>
          </div>
        </section>

        <section id="stack" className="container section-block">
          <div className="section-heading">
            <p className="eyebrow accent">Tech stack</p>
            <h2>Tools and technologies I use to deliver value.</h2>
          </div>

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <div key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="container section-block">
          <div className="section-heading">
            <p className="eyebrow accent">Featured projects</p>
            <h2>Selected work focused on product impact.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-meta">
                  <span className="project-badge">{project.status}</span>
                  <span className="project-level">{project.difficulty}</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="chip-list">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.href} target="_blank" rel="noreferrer">
                  View repository <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-block profile-section">
          <div className="section-heading">
            <p className="eyebrow accent">Professional profile</p>
            <h2>What I bring to a team.</h2>
          </div>

          <div className="profile-layout">
            <div className="profile-list">
              {profileHighlights.map((highlight) => (
                <div key={highlight} className="highlight-item">
                  <span className="highlight-icon">
                    <Layers3 size={16} />
                  </span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>

            <div className="strength-card">
              <Rocket size={22} />
              <h3>Product mindset</h3>
              <p>
                I value clear communication, maintainable code, user focus and the ability to turn
                requirements into useful experiences.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="container section-block cta-section">
          <div className="cta-card">
            <div>
              <p className="eyebrow accent">Let's connect</p>
              <h2>Open to new challenges, collaborations and technical opportunities.</h2>
            </div>

            <div className="contact-actions">
              <a href="https://github.com/Ed-Pino" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub
              </a>
              <a href="mailto:hello@portfolio.dev">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>© 2026 Ed Pino — Full-Stack Developer</p>
      </footer>
    </div>
  )
}

export default App
