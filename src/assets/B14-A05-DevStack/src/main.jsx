import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Menu, Search, Star, Twitter, X, Check, ArrowRight, Layers3, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import technologiesData from './data/technologies.json';
import './styles.css';
import './catalog-overrides.css';
import './light-theme.css';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Styling', 'DevOps', 'Tools'];

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTechnologies(technologiesData), 350);
    return () => clearTimeout(timer);
  }, []);

  const filtered = technologies.filter((technology) => {
    const matchesCategory = category === 'All' || technology.category === category;
    const matchesSearch = `${technology.name} ${technology.description}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (technology) => {
    setStack((current) => current.filter((item) => item.id !== technology.id));
    toast.info(`${technology.name} removed.`);
  };

  const removeAll = () => {
    if (!stack.length) return;
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <div className="site">
      <header className="navbar">
        <button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Open navigation"><Menu /></button>
        <a href="#" className="brand"><span className="brand-icon"><Layers3 size={17} /></span><span>Dev<span>Stack</span></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'Technologies', 'Projects', 'About', 'Contact'].map((item) => <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} key={item}>{item}</a>)}
        </nav>
        <div className="auth-links"><button>Sign In</button><button className="signup">Sign Up</button></div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> Curated tools for modern builders</span>
            <h1>Build better with<br /><span>the right stack.</span></h1>
            <p>Discover the technologies that power exceptional digital experiences. Choose your tools, build your stack, and ship with confidence.</p>
            <div className="hero-buttons"><a href="#technologies" className="button primary">Explore Technologies <ArrowRight size={16} /></a><a href="#about" className="button outline">Learn More</a></div>
            <div className="trust-line"><div className="avatars"><span>AK</span><span>SR</span><span>JM</span><span>+2k</span></div><span>Trusted by 2,000+ builders</span></div>
          </div>
          <div className="hero-art"><div className="art-glow" /><img src="/assets/banner-stack.png" alt="Abstract technology stack illustration" /></div>
        </section>

        <section className="technology-section" id="technologies">
          <div className="section-heading"><div><span className="section-kicker">Explore the ecosystem</span><h2>Technologies <span>you'll love</span></h2><p>Handpicked tools to help you go from idea to impact.</p></div><div className="search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search technologies..." /></div></div>
          <div className="content-grid">
            <div className="catalog">
              <div className="category-bar">{categories.map((item) => <button className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
              {technologies.length === 0 ? <div className="loading"><span className="spinner" /> Loading your toolkit...</div> : <div className="tech-grid">{filtered.map((technology) => <TechnologyCard technology={technology} added={stack.some((item) => item.id === technology.id)} onAdd={addToStack} key={technology.id} />)}</div>}
            </div>
            <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </div>
        </section>

        <section className="stats-strip"><div><strong>12+</strong><span>Curated technologies</span></div><div><strong>7</strong><span>Categories to explore</span></div><div><strong>2k+</strong><span>Happy builders</span></div><div><strong>100%</strong><span>Free to explore</span></div></section>
      </main>
      <footer id="about"><div className="footer-main"><div className="footer-brand"><a href="#" className="brand"><span className="brand-icon"><Layers3 size={17} /></span><span>Dev<span>Stack</span></span></a><p>A thoughtful collection of tools for people who build the future.</p><div className="socials"><a href="https://github.com"><Github /></a><a href="https://twitter.com"><Twitter /></a><a href="https://linkedin.com"><Linkedin /></a></div></div><FooterGroup title="Product" links={['Technologies', 'Your Stack', 'Changelog']} /><FooterGroup title="Company" links={['About us', 'Contact', 'Careers']} /><FooterGroup title="Legal" links={['Privacy', 'Terms', 'Cookies']} /></div><div className="footer-bottom"><span>© 2024 DevStack. Built for builders.</span><span>Made with curiosity and caffeine.</span></div></footer>
      <ToastContainer position="bottom-right" theme="dark" autoClose={2200} />
    </div>
  );
}

function TechnologyCard({ technology, added, onAdd }) {
  return <article className={added ? 'tech-card selected' : 'tech-card'}><div className="card-top"><div className="tech-icon"><img src={technology.icon} alt="" /></div><span className="badge">{technology.badge}</span></div><h3>{technology.name}</h3><p>{technology.description}</p><div className="card-meta"><span className="chip">{technology.category}</span><span className="difficulty">{technology.difficulty}</span></div><div className="card-bottom"><span className="rating"><Star size={14} fill="currentColor" /> {technology.rating}</span><button className={added ? 'add-button added' : 'add-button'} onClick={() => onAdd(technology)} disabled={added}>{added ? <><Check size={15} /> Added to Stack</> : <>Add to Stack <ArrowRight size={14} /></>}</button></div></article>;
}

function StackPanel({ stack, onRemove, onRemoveAll }) {
  return <aside className="stack-panel" id="your-stack"><div className="stack-heading"><div><span className="section-kicker">Your toolkit</span><h2>Your Stack <span className="count">{stack.length}</span></h2></div><button className="remove-all" onClick={onRemoveAll}>Remove all</button></div>{stack.length === 0 ? <div className="empty-stack"><div className="empty-icon"><Layers3 size={22} /></div><h3>Your stack is empty</h3><p>Explore the technologies and add the tools you want to build with.</p><a href="#technologies">Browse technologies <ArrowRight size={14} /></a></div> : <div className="stack-items">{stack.map((item) => <div className="stack-item" key={item.id}><img src={item.icon} alt="" /><div><strong>{item.name}</strong><small>{item.category}</small></div><button onClick={() => onRemove(item)} aria-label={`Remove ${item.name}`}><X size={16} /></button></div>)}</div>}<div className="stack-tip"><span>✦</span> Tip: A balanced stack makes better products.</div></aside>;
}

function FooterGroup({ title, links }) { return <div className="footer-group"><h4>{title}</h4>{links.map((link) => <a href={`#${link.toLowerCase().replace(' ', '-')}`} key={link}>{link}</a>)}</div>; }
createRoot(document.getElementById('root')).render(<App />);
