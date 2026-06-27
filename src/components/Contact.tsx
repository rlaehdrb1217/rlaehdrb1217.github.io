import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <p className="section-label">연락처</p>
        <h2 className="section-title">공개 가능한 프로필 정보</h2>
        <div className="contact__cards">
          <a href={`mailto:${personalInfo.email}`} className="contact__card">
            <span className="contact__card-label">Email</span>
            <strong>{personalInfo.email}</strong>
            <span className="contact__card-hint">이메일 보내기</span>
          </a>

          <a href={personalInfo.homepage} target="_blank" rel="noreferrer" className="contact__card">
            <span className="contact__card-label">Homepage</span>
            <strong>{personalInfo.homepage}</strong>
            <span className="contact__card-hint">새 창으로 열기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
