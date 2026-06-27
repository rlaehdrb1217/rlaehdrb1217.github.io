import { careerCard, careerIntro } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="career" className="about section">
      <div className="container about__layout">
        <div className="about__content">
          <p className="section-label">경력 소개</p>
          <h2 className="section-title">재무·회계를 중심으로 경영지원 업무 전반을 수행했습니다</h2>
          <div className="about__paragraphs">
            {careerIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="about__side" aria-label="경력 정보">
          <dl className="about__career-card">
            <div>
              <dt>회사명</dt>
              <dd>{careerCard.company}</dd>
            </div>
            <div>
              <dt>재직기간</dt>
              <dd>{careerCard.period}</dd>
            </div>
            <div>
              <dt>소속·직급</dt>
              <dd>{careerCard.position}</dd>
            </div>
            <div>
              <dt>담당 분야</dt>
              <dd>{careerCard.scope}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
