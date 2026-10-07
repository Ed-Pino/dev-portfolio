import { useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  CreditCard,
  Gamepad2,
  Layers3,
  Mail,
  MapPin,
  Plug,
  Rocket,
  ShoppingCart,
  Sparkles,
  Clapperboard,
} from 'lucide-react'
import './App.css'

const navItems = ['About', 'Stack', 'Projects', 'Strengths', 'Contact']

const stats = [
  { label: 'Years of experience', value: '3+' },
  { label: 'REST APIs built', value: '11+' },
  { label: 'Featured repositories', value: '15+' },
  { label: 'Service categories', value: '7' },
]

type StackGroup = {
  title: string
  items: string[]
}

const stackGroups: StackGroup[] = [
  {
    title: 'Backend',
    items: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'Flyway'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vite'],
  },
  {
    title: 'Bases de Datos',
    items: ['PostgreSQL', 'MySQL', 'H2', 'JPA / Hibernate'],
  },
  {
    title: 'APIs',
    items: ['REST APIs', 'OpenAI Integration', 'JWT', 'Gutendex API', 'Swagger / OpenAPI'],
  },
  {
    title: 'Herramientas',
    items: ['Jupyter Notebook', 'Git / GitHub', 'Maven', 'Redis', 'RabbitMQ', 'Docker basics'],
  },
  {
    title: 'Especialidades',
    items: ['Full-Stack Development', 'E-commerce', 'Video Processing', 'PWA'],
  },
]

type ProjectCategory =
  | 'Enterprise & Backend'
  | 'E-commerce'
  | 'Multimedia'
  | 'Finanzas'
  | 'Datos & IA'
  | 'Entretenimiento'
  | 'CRM'

type Project = {
  name: string
  repo: string
  category: ProjectCategory
  status: string
  description: string
  features: string[]
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'FieldFlow',
    repo: 'https://github.com/Ed-Pino/FieldFlow',
    category: 'Enterprise & Backend',
    status: 'Production Ready',
    description:
      'Plataforma full-stack para gestión de servicios técnicos: órdenes de trabajo, seguimiento de estados y operación en campo.',
    features: ['Órdenes de trabajo', 'Checklists', 'Evidencia fotográfica', 'Firma digital', 'PWA'],
    stack: ['Java 17', 'Spring Boot 3', 'React', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'ForoHub API',
    repo: 'https://github.com/Ed-Pino/ForoHub_API',
    category: 'Enterprise & Backend',
    status: 'Production Ready',
    description:
      'API RESTful robusta para foro online con autenticación JWT y operaciones CRUD completas.',
    features: ['JWT Authentication', 'Temas y respuestas', 'Gestión de usuarios', 'Swagger UI'],
    stack: ['Spring Boot', 'Java 17', 'MySQL', 'JWT', 'Flyway'],
  },
  {
    name: 'TalentCircle',
    repo: 'https://github.com/Ed-Pino/TalentCircle',
    category: 'Enterprise & Backend',
    status: 'Production Ready',
    description:
      'Plataforma de publicación de contenido técnico con integración multi-canal y community feed.',
    features: ['Newsletter', 'LinkedIn', 'Twitter / X', 'Community feed'],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  },
  {
    name: 'GasSolution',
    repo: 'https://github.com/Ed-Pino/GasSolution',
    category: 'E-commerce',
    status: 'Completed',
    description: 'E-commerce de gas y combustible con catálogo de productos y servicios.',
    features: ['Catálogo', 'Carrito', 'Responsive UI', 'Routing moderno'],
    stack: ['TypeScript', 'React 19', 'Vite', 'Tailwind', 'React Router'],
  },
  {
    name: 'Ecomart',
    repo: 'https://github.com/Ed-Pino/Ecomart',
    category: 'E-commerce',
    status: 'Completed',
    description:
      'App con integración OpenAI: chat para creación de productos, categorización automática y generación de imágenes.',
    features: ['Chat de productos', 'Categorización IA', 'Generación de imágenes'],
    stack: ['Java', 'Spring Boot', 'OpenAI', 'React', 'PostgreSQL'],
  },
  {
    name: 'EleVideo',
    repo: 'https://github.com/Ed-Pino/EleVideo',
    category: 'Multimedia',
    status: 'Completed',
    description:
      'Editor para convertir videos verticales a formato horizontal con control de duración.',
    features: ['Conversión de formato', 'Ajuste de duración', 'UI moderna'],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind', 'Shadcn/ui'],
  },
  {
    name: 'videoboost-pro',
    repo: 'https://github.com/Ed-Pino/videoboost-pro',
    category: 'Multimedia',
    status: 'Completed',
    description: 'Convertidor de video con procesamiento multimedia optimizado.',
    features: ['Procesamiento multimedia', 'Conversión rápida'],
    stack: ['TypeScript', 'React', 'Vite'],
  },
  {
    name: 'CreditCard',
    repo: 'https://github.com/Ed-Pino/CreditCard',
    category: 'Finanzas',
    status: 'Completed',
    description: 'Sistema de operaciones de crédito con lógica financiera.',
    features: ['Operaciones de crédito', 'Lógica financiera', 'Validaciones'],
    stack: ['Java', 'Spring Boot'],
  },
  {
    name: 'MoneyExchangeApp',
    repo: 'https://github.com/Ed-Pino/MoneyExchangeApp',
    category: 'Finanzas',
    status: 'Completed',
    description: 'Aplicación de cambio de divisas con tasas y conversión.',
    features: ['Conversión de divisas', 'Tasas', 'Java backend'],
    stack: ['Java', 'Spring Boot'],
  },
  {
    name: 'LiterAlura',
    repo: 'https://github.com/Ed-Pino/LiterAlura',
    category: 'Datos & IA',
    status: 'Completed',
    description:
      'App de búsqueda de libros clásicos con API Gutendex y almacenamiento persistente.',
    features: ['API Gutendex', 'PostgreSQL', 'Búsquedas avanzadas'],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA'],
  },
  {
    name: 'Sentiment Analisis',
    repo: 'https://github.com/Ed-Pino/Sentiment_Analisis',
    category: 'Datos & IA',
    status: 'Hackathon',
    description: 'Hackathon de análisis de sentimientos con Machine Learning.',
    features: ['NLP', 'Clasificación', 'Notebooks'],
    stack: ['Jupyter Notebook', 'Python', 'ML'],
  },
  {
    name: 'dev-portfolio',
    repo: 'https://github.com/Ed-Pino/dev-portfolio',
    category: 'Entretenimiento',
    status: 'Live',
    description:
      'Portfolio profesional cloud-ready que demuestra capacidades full-stack.',
    features: ['Cloud-ready', 'React + TS', 'Arquitectura moderna'],
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind'],
  },
  {
    name: 'Mokepones',
    repo: 'https://github.com/Ed-Pino/Mokepones',
    category: 'Entretenimiento',
    status: 'Completed',
    description: 'Juego interactivo web con lógica de batalla y UI dinámica.',
    features: ['Gameplay interactivo', 'JS vanilla'],
    stack: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'NEXO CRM Integration',
    repo: 'https://github.com/Ed-Pino/NEXO-CRM-intgration-WhatsApp-Email',
    category: 'CRM',
    status: 'Completed',
    description: 'Integración CRM con WhatsApp y Email para automatizar comunicación.',
    features: ['WhatsApp API', 'Email', 'Automatización CRM'],
    stack: ['Java', 'Spring Boot', 'REST APIs'],
  },
]

const categories: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Enterprise & Backend',
  'E-commerce',
  'Multimedia',
  'Finanzas',
  'Datos & IA',
  'Entretenimiento',
  'CRM',
]

const categoryIcons: Record<string, typeof Building2> = {
  'Enterprise & Backend': Building2,
  'E-commerce': ShoppingCart,
  Multimedia: Clapperboard,
  Finanzas: CreditCard,
  'Datos & IA': Cpu,
  Entretenimiento: Gamepad2,
  CRM: Plug,
}

const strengths = [
  'Especialista en Java / Spring Boot — backend robusto y escalable',
  'Full-Stack proficiency — React + TypeScript en frontend',
  'Experiencia en e-commerce — múltiples plataformas de ventas',
  'Integración de APIs externas — OpenAI, Gutendex, WhatsApp, LinkedIn',
  'Enfoque en PWA — aplicaciones progresivas offline-ready',
  'Autenticación segura — JWT y manejo de credenciales',
  'Diversidad de proyectos — desde finanzas hasta multimedia',
]

const profileHighlights = [
  'REST APIs and secure authentication flows with JWT + Spring Security',
  'Responsive client interfaces with React and TypeScript',
  'Clean architecture and layered business logic',
  'PostgreSQL design, migrations and data optimization',
  'Integration with third-party APIs, AI and asynchronous jobs',
]

function App() {
  const [activeCategory, setActiveCategory] = useState<( typeof categories )[number]>('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
              <Sparkles size={16} /> Full-Stack Developer — Java • React • PostgreSQL
            </p>

            <h1>
              Building reliable digital products with <span>Java</span>, <span>React</span>, and
              clean architecture.
            </h1>

            <p className="lead">
              Desarrollador full-stack versátil con fortaleza en backend Java / Spring Boot y
              capacidad para aplicaciones empresariales complejas con integración de APIs modernas:
              OpenAI, Gutendex, WhatsApp, LinkedIn y más.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                See projects <ArrowRight size={18} />
              </a>
              <a className="secondary-btn" href="https://github.com/Ed-Pino" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub — Ed-Pino
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
                <li>Java 17 • Spring Boot 3 • Spring Data JPA</li>
                <li>React + TypeScript + PostgreSQL</li>
                <li>REST APIs, JWT & OpenAI Integration</li>
                <li>E-commerce • Video Processing • PWA</li>
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
              Soy Ed-Pino, desarrollador full-stack con 3+ años construyendo productos escalables.
              Especialista en backend Java / Spring Boot, con frontend sólido en React + TypeScript
              y PostgreSQL como base de datos principal.
            </p>
            <p>
              He construido desde plataformas enterprise como FieldFlow y ForoHub, hasta e-commerce
              (GasSolution, Ecomart con OpenAI), multimedia (EleVideo), finanzas, IA y CRM. Me
              enfoco en código limpio, seguridad con JWT y experiencias que aportan valor real.
            </p>
          </div>
        </section>

        <section id="stack" className="container section-block">
          <div className="section-heading">
            <p className="eyebrow accent">Tech stack</p>
            <h2>Stack tecnológico identificado.</h2>
            <p className="section-sub">
              Backend robusto • Frontend moderno • Datos persistentes • APIs e integraciones
            </p>
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
            <h2>Mejores repositorios por servicio y funcionalidad.</h2>
            <p className="section-sub">
              {filteredProjects.length} proyectos — filtra por categoría de negocio
            </p>
          </div>

          <div className="filter-row" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={activeCategory === cat ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => {
              const Icon = categoryIcons[project.category] ?? Code2
              return (
                <article key={project.name} className="project-card">
                  <div className="project-meta">
                    <span className="project-badge">{project.status}</span>
                    <span className="project-level">
                      <Icon size={13} /> {project.category}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <ul className="feature-list">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <div className="chip-list">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.repo} target="_blank" rel="noreferrer">
                    View repository <ArrowRight size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section id="strengths" className="container section-block profile-section">
          <div className="section-heading">
            <p className="eyebrow accent">Professional profile</p>
            <h2>Resumen de fortalezas.</h2>
          </div>

          <div className="profile-layout">
            <div className="profile-list">
              {strengths.map((highlight) => (
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
                Backend robusto y escalable + frontend React + integraciones modernas (OpenAI,
                Gutendex, WhatsApp). PWA, JWT y arquitectura limpia para apps empresariales
                complejas.
              </p>
              <ul className="strength-mini">
                {profileHighlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
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
        <p>© 2026 Ed Pino — Full-Stack Developer • Java Spring Boot • React TypeScript</p>
      </footer>
    </div>
  )
}

export default App
