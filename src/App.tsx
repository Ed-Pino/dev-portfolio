import { useState } from 'react'
import {
  ArrowRight, BriefcaseBusiness, Code2, Languages, Mail, MapPin, Moon, Sun,
} from 'lucide-react'
import './App.css'

type Language = 'en' | 'es'
type Theme = 'dark' | 'light'

const content = {
  en: {
    nav: ['About', 'Stack', 'Projects', 'Strengths', 'Contact'],
    connect: "Let's connect", eyebrow: 'Full-Stack Developer — Java • React • PostgreSQL',
    title: 'Building reliable digital products with Java, React, and clean architecture.',
    lead: 'Versatile full-stack developer specializing in Java / Spring Boot backend and complex enterprise applications with modern API integrations: OpenAI, Gutendex, WhatsApp, LinkedIn, and more.',
    projects: 'See projects', available: 'Available for opportunities', role: 'Mid-Level / Semi-Senior',
    remote: 'Open to remote and hybrid projects', about: 'About me',
    aboutTitle: 'Developer focused on solving real business problems.',
    aboutText: 'I am Ed-Pino, a full-stack developer with 3+ years building scalable products. I specialize in Java / Spring Boot backend, with a solid React + TypeScript frontend and PostgreSQL as my primary database.',
    stack: 'Tech stack', stackTitle: 'Technologies I work with.', projectsTitle: 'Featured projects',
    projectsSub: 'Explore a selection of projects and repositories.', strengths: 'Professional profile',
    strengthsTitle: 'A practical, product-focused approach.', contact: 'Contact',
    contactTitle: 'Open to new challenges, collaborations and technical opportunities.',
    viewRepo: 'View repository', footer: 'Full-Stack Developer • Java Spring Boot • React TypeScript',
    theme: 'Switch to light theme', language: 'Cambiar idioma a español',
  },
  es: {
    nav: ['Sobre mí', 'Tecnologías', 'Proyectos', 'Fortalezas', 'Contacto'],
    connect: 'Conectemos', eyebrow: 'Desarrollador Full-Stack — Java • React • PostgreSQL',
    title: 'Creo productos digitales confiables con Java, React y arquitectura limpia.',
    lead: 'Desarrollador full-stack versátil, especializado en backend Java / Spring Boot y aplicaciones empresariales con integraciones modernas: OpenAI, Gutendex, WhatsApp, LinkedIn y más.',
    projects: 'Ver proyectos', available: 'Disponible para oportunidades', role: 'Nivel intermedio / semi-senior',
    remote: 'Abierto a proyectos remotos e híbridos', about: 'Sobre mí',
    aboutTitle: 'Desarrollador enfocado en resolver problemas reales de negocio.',
    aboutText: 'Soy Ed-Pino, desarrollador full-stack con más de 3 años creando productos escalables. Me especializo en backend Java / Spring Boot, con frontend sólido en React + TypeScript y PostgreSQL como base de datos principal.',
    stack: 'Tecnologías', stackTitle: 'Herramientas con las que trabajo.', projectsTitle: 'Proyectos destacados',
    projectsSub: 'Explora una selección de proyectos y repositorios.', strengths: 'Perfil profesional',
    strengthsTitle: 'Enfoque práctico y orientado al producto.', contact: 'Contacto',
    contactTitle: 'Abierto a nuevos retos, colaboraciones y oportunidades técnicas.',
    viewRepo: 'Ver repositorio', footer: 'Desarrollador Full-Stack • Java Spring Boot • React TypeScript',
    theme: 'Cambiar a tema claro', language: 'Switch language to English',
  },
}

const projects = [
  { name: 'FieldFlow', url: 'FieldFlow', description: 'Full-stack platform for technical service management, work orders, status tracking, and field operations.', stack: 'Java 17 · Spring Boot 3 · React · TypeScript · PostgreSQL' },
  { name: 'ForoHub API', url: 'ForoHub_API', description: 'Robust REST API for an online forum with JWT authentication and complete CRUD operations.', stack: 'Spring Boot · Java 17 · MySQL · JWT · Flyway' },
  { name: 'TalentCircle', url: 'TalentCircle', description: 'Technical content publishing platform with multi-channel integration and a community feed.', stack: 'Java · Spring Boot · PostgreSQL · Redis · RabbitMQ' },
  { name: 'GasSolution', url: 'GasSolution', description: 'Gas and fuel e-commerce with a product and services catalog.', stack: 'TypeScript · React · Vite · Tailwind' },
  { name: 'Ecomart', url: 'Ecomart', description: 'App with OpenAI integration for product creation, automatic categorization, and image generation.', stack: 'Java · Spring Boot · OpenAI · React · PostgreSQL' },
  { name: 'EleVideo', url: 'EleVideo', description: 'Video editor for converting vertical videos to horizontal format with duration controls.', stack: 'TypeScript · React · Vite · Tailwind' },
]
const stacks = [
  ['Backend', 'Java 17', 'Spring Boot 3', 'Spring Data JPA', 'Spring Security', 'Flyway', 'Node.js'],
  ['Frontend', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Vite'],
  ['Databases', 'PostgreSQL', 'NoSQL', 'MySQL', 'H2', 'JPA / Hibernate'],
  ['Cloud & DevOps', 'AWS', 'Docker', 'Git / GitHub', 'Oracle Cloud'],
  ['Languages', 'Python', 'JavaScript', 'TypeScript', 'Java'],
  ['APIs & tools', 'REST APIs', 'OpenAI', 'JWT', 'Swagger / OpenAPI'],
  ['Solutions', 'E-commerce', 'Video Processing', 'PWA'],
]

function App() {
  const [activeCategory] = useState('')
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('portfolio-theme') as Theme) || 'dark')
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('portfolio-language') as Language) || 'en')
  const text = content[language]

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('portfolio-theme', next)
  }
  const toggleLanguage = () => {
    const next = language === 'en' ? 'es' : 'en'
    setLanguage(next)
    localStorage.setItem('portfolio-language', next)
    document.documentElement.lang = next
  }

  return (
    <div className="page-shell" data-theme={theme}>
      <header className="topbar container">
        <a className="brand" href="#top" aria-label="Ed Pino home"><span className="brand-mark">EP</span><span>Ed Pino</span></a>
        <nav className="nav" aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}>
          {text.nav.map((item, index) => <a key={item} href={`#${['about', 'stack', 'projects', 'strengths', 'contact'][index]}`}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <a className="nav-button" href="#contact">{text.connect}</a>
          <button className="header-control" type="button" onClick={toggleTheme} aria-label={theme === 'dark' ? text.theme : 'Switch to dark theme'} title={theme === 'dark' ? text.theme : 'Switch to dark theme'}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="header-control language-control" type="button" onClick={toggleLanguage} aria-label={text.language} title={text.language}>
            <Languages size={18} /><span>{language === 'en' ? 'ES' : 'EN'}</span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">{text.eyebrow}</p>
            <h1>{text.title.split(/(Java|React)/).map((part, i) => part === 'Java' || part === 'React' ? <span key={i}>{part}</span> : part)}</h1>
            <p className="lead">{text.lead}</p>
            <div className="cta-row">
              <a className="primary-btn" href="#projects">{text.projects}<ArrowRight size={18} /></a>
              <a className="secondary-btn" href="https://github.com/Ed-Pino" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub — Ed-Pino</a>
            </div>
            <div className="mini-stats" aria-label="Portfolio statistics">
              {[['3+', language === 'en' ? 'Years of experience' : 'Años de experiencia'], ['11+', language === 'en' ? 'REST APIs built' : 'APIs REST creadas'], ['15+', language === 'en' ? 'Featured repositories' : 'Repositorios destacados'], ['7', language === 'en' ? 'Service categories' : 'Categorías de servicio']].map(([value, label]) => <div key={label} className="stat-box"><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-header"><span className="status-dot" />{text.available}</div>
            <div className="panel-body">
              <div className="profile-badge"><BriefcaseBusiness size={20} />{text.role}</div>
              <ul><li>Java • Spring Boot • Spring Data JPA • Python • Node.js • Next.js</li><li>React + TypeScript + PostgreSQL + NoSQL</li><li>REST APIs, JWT & OpenAI Integration</li><li>E-commerce • Video Processing • PWA</li></ul>
              <div className="location-row"><MapPin size={16} /><span>{text.remote}</span></div>
            </div>
          </aside>
        </section>

        <section id="about" className="container section-block">
          <div className="section-heading"><p className="eyebrow accent">{text.about}</p><h2>{text.aboutTitle}</h2></div>
          <div className="about-grid"><p>{text.aboutText}</p><p>{language === 'en' ? 'I have built enterprise platforms such as FieldFlow and ForoHub, as well as e-commerce, multimedia, finance, AI, and CRM projects. I focus on clean code, JWT security, and experiences that deliver real value.' : 'He creado plataformas empresariales como FieldFlow y ForoHub, además de proyectos de comercio electrónico, multimedia, finanzas, IA y CRM. Me enfoco en código limpio, seguridad JWT y experiencias que aportan valor real.'}</p></div>
        </section>

        <section id="stack" className="container section-block">
          <div className="section-heading"><p className="eyebrow accent">{text.stack}</p><h2>{text.stackTitle}</h2></div>
          <div className="stack-grid">{stacks.map(([title, ...items]) => <div key={title} className="stack-card"><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        </section>

        <section id="projects" className="container section-block">
          <div className="section-heading"><p className="eyebrow accent">{text.projectsTitle}</p><h2>{language === 'en' ? 'Selected work across products and platforms.' : 'Una selección de productos y plataformas.'}</h2><p className="section-sub">{text.projectsSub}</p></div>
          <div className="project-grid">{projects.map(project => <article key={project.name} className="project-card"><div className="project-meta"><span className="project-badge">{language === 'en' ? 'Featured' : 'Destacado'}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="chip-list">{project.stack.split(' · ').map(item => <span key={item} className="chip">{item}</span>)}</div><a href={`https://github.com/Ed-Pino/${project.url}`} target="_blank" rel="noreferrer">{text.viewRepo}<ArrowRight size={16} /></a></article>)}</div>
        </section>

        <section id="strengths" className="container section-block profile-section">
          <div className="section-heading"><p className="eyebrow accent">{text.strengths}</p><h2>{text.strengthsTitle}</h2></div>
          <div className="profile-layout"><div className="profile-list">{(language === 'en' ? ['Java / Spring Boot expertise for robust, scalable backends', 'Full-stack development with React + TypeScript', 'External API integrations: OpenAI, Gutendex, WhatsApp, LinkedIn', 'Secure authentication with JWT and clean architecture'] : ['Especialista en Java / Spring Boot para backends robustos y escalables', 'Desarrollo full-stack con React + TypeScript', 'Integración de APIs externas: OpenAI, Gutendex, WhatsApp, LinkedIn', 'Autenticación segura con JWT y arquitectura limpia']).map(item => <div key={item} className="highlight-item"><span className="highlight-icon"><Code2 size={16} /></span><p>{item}</p></div>)}</div><div className="strength-card"><BriefcaseBusiness size={22} /><h3>Product mindset</h3><p>{language === 'en' ? 'Scalable backends, modern React frontends, and thoughtful integrations for business applications.' : 'Backends escalables, interfaces modernas en React e integraciones para aplicaciones de negocio.'}</p></div></div>
        </section>

        <section id="contact" className="container section-block cta-section"><div className="cta-card"><div><p className="eyebrow accent">{text.contact}</p><h2>{text.contactTitle}</h2></div><div className="contact-actions"><a href="https://github.com/Ed-Pino" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a><a href="mailto:hello@portfolio.dev"><Mail size={18} /> Email</a></div></div></section>
      </main>
      <footer className="footer container"><p>© 2026 Ed Pino — {text.footer}</p></footer>
    </div>
  )
}

export default App
