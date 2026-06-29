import ImageGallery from './ImageGallery';
import { personalProjects, type LinkItem } from '../data/portfolio';
import './PersonalProjects.css';

function isReadyLink(link: LinkItem) {
  return Boolean(link.url && /^https?:\/\//.test(link.url));
}

export default function PersonalProjects() {
  return (
    <section className="personal-projects section" aria-labelledby="personal-projects-title">
      <div className="container">
        <p className="section-label">AI 활용 사례</p>
        <h2 id="personal-projects-title" className="section-title">AI 개발 도구를 활용한 개인 프로젝트</h2>
        <p className="section-sub">
          아이디어를 직접 기획하고, AI 개발 도구와 Flutter를 활용해 모바일 앱으로 구현하고 있습니다.
          이를 통해 요구사항 정리, 화면 설계, 기능 검증 등 문제 해결 역량을 확장하고 있습니다.
        </p>

        <div className="personal-projects__grid">
          {personalProjects.map((project) => (
            <article key={project.title} className="personal-projects__card">
              <ImageGallery images={project.images} title={project.title} />
              <div className="personal-projects__body">
                <div className="personal-projects__heading">
                  <h3>{project.title}</h3>
                  <span>{project.status}</span>
                </div>
                <p>{project.description}</p>
                <p className="personal-projects__role">
                  <strong>역할</strong>
                  <span>{project.role}</span>
                </p>
                <div className="personal-projects__links">
                  {project.links.map((link) =>
                    isReadyLink(link) ? (
                      <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label} aria-disabled="true">{link.label} 준비 중</span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
