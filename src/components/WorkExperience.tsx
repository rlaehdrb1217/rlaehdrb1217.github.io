import { workCases } from '../data/portfolio';
import './WorkExperience.css';

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience section">
      <div className="container">
        <p className="section-label">주요 업무 경험</p>
        <h2 className="section-title">재무·회계·인사·총무 핵심 업무를 직접 수행했습니다</h2>
        <p className="section-sub">
          일상적인 경영지원 업무뿐 아니라 부가세 신고, 지방세 세무조사, 자금계획, 급여·퇴직, 보험·선급비용, 계약·입찰·정산까지 직접 수행한 경험을 정리했습니다.
        </p>

        <div className="work-experience__grid">
          {workCases.map((item, index) => (
            <article key={item.title} className="work-experience__card">
              <div className="work-experience__header">
                <span className="work-experience__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="work-experience__badge">{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="work-experience__role">
                <strong>역할 요약</strong>
                <p>{item.roleSummary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
