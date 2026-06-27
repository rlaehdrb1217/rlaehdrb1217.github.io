import { competencyGroups } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="competencies" className="skills section">
      <div className="container">
        <p className="section-label">업무 역량</p>
        <h2 className="section-title">재무·회계·인사·총무·계약·ERP까지 연결된 실무 범위</h2>
        <p className="section-sub">
          채용담당자가 업무 범위를 빠르게 파악할 수 있도록 실제 수행 영역을 6개 직무군으로 정리했습니다.
        </p>

        <div className="skills__grid">
          {competencyGroups.map((group) => (
            <article key={group.title} className="skills__card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
