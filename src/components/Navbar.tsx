import { useEffect, useState } from 'react';
import { navItems, personalInfo } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <button className="navbar__logo" type="button" onClick={() => handleNav('#home')} aria-label="홈으로 이동">
          <span className="navbar__logo-mark" aria-hidden="true">DK</span>
          <span>{personalInfo.name}</span>
        </button>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} id="site-navigation" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <button key={item.href} className="navbar__link" type="button" onClick={() => handleNav(item.href)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
