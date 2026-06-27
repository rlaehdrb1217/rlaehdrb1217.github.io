import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className={`container hero__inner${personalInfo.profileImage ? '' : ' hero__inner--without-photo'}`}>
        <div className="hero__content">
          <p className="hero__eyebrow">Career Portfolio</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__role">{personalInfo.role}</p>
          <p className="hero__headline">{personalInfo.headline}</p>
          <p className="hero__summary">{personalInfo.summary}</p>
        </div>

        {personalInfo.profileImage && (
          <aside className="hero__photo-card" aria-label="프로필 사진">
            <img src={personalInfo.profileImage} alt={personalInfo.profileImageAlt} />
          </aside>
        )}
      </div>
    </section>
  );
}
