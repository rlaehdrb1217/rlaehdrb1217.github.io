import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">{personalInfo.name}</span>
        <span className="footer__copy">© {new Date().getFullYear()} {personalInfo.nameEn}. Built with React, Vite, and GitHub Pages.</span>
      </div>
    </footer>
  );
}
