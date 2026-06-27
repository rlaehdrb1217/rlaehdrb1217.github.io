import { aiPrinciple, improvementCases } from '../data/portfolio';
import './Improvements.css';

export default function Improvements() {
  return (
    <section id="improvements" className="improvements section">
      <div className="container">
        <p className="section-label">업무개선 사례</p>
        <h2 className="section-title">실무 경험을 업무개선으로 연결했습니다</h2>
        <p className="section-sub">
          이 영역에서만 AI 활용과 프로그램 구현 경험을 소개합니다. 목적은 개발 자체가 아니라 반복업무 개선입니다.
        </p>

        <div className="improvements__grid">
          {improvementCases.map((item) => (
            <article key={item.title} className="improvements__card">
              <div className="improvements__header">
                <h3>{item.title}</h3>
                <span>{item.label}</span>
              </div>
              <div className="improvements__block">
                <h4>배경</h4>
                <p>{item.background}</p>
              </div>
              <div className="improvements__block">
                <h4>개선</h4>
                <ul>
                  {item.improvements.map((improvement) => (
                    <li key={improvement}>{improvement}</li>
                  ))}
                </ul>
              </div>
              <div className="improvements__role">
                <strong>역할</strong>
                <p>{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="improvements__principle">{aiPrinciple}</p>
      </div>
    </section>
  );
}
