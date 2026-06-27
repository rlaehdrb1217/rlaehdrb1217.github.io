import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { personalProjects, type LinkItem, type ProjectImage } from '../data/portfolio';
import './PersonalProjects.css';

function isReadyLink(link: LinkItem) {
  return Boolean(link.url && /^https?:\/\//.test(link.url));
}

function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const zoomButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const zoomButton = zoomButtonRef.current;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowLeft' && hasMultipleImages) {
        showPrevious();
        return;
      }

      if (event.key === 'ArrowRight' && hasMultipleImages) {
        showNext();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.setTimeout(() => zoomButton?.focus(), 0);
    };
  }, [hasMultipleImages, isOpen, showNext, showPrevious]);

  if (!activeImage) {
    return null;
  }

  const lightbox = isOpen
    ? createPortal(
        <div
          ref={dialogRef}
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} 이미지 확대 보기`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <button
            ref={closeButtonRef}
            className="project-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="확대 이미지 닫기"
            title="닫기"
          >
            <X aria-hidden="true" />
          </button>

          {hasMultipleImages && (
            <button
              className="project-lightbox__nav project-lightbox__nav--previous"
              type="button"
              onClick={showPrevious}
              aria-label="이전 이미지"
              title="이전 이미지"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
          )}

          <img
            className="project-lightbox__image"
            src={activeImage.src}
            alt={activeImage.alt}
            onTouchStart={(event) => {
              touchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0]?.clientX;
              if (!hasMultipleImages || touchStartX.current === null || endX === undefined) {
                return;
              }

              const distance = endX - touchStartX.current;
              if (Math.abs(distance) >= 50) {
                if (distance > 0) {
                  showPrevious();
                } else {
                  showNext();
                }
              }
              touchStartX.current = null;
            }}
          />

          {hasMultipleImages && (
            <>
              <button
                className="project-lightbox__nav project-lightbox__nav--next"
                type="button"
                onClick={showNext}
                aria-label="다음 이미지"
                title="다음 이미지"
              >
                <ChevronRight aria-hidden="true" />
              </button>
              <span className="project-lightbox__count" aria-live="polite">
                {activeIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>,
        document.body,
      )
    : null;

  return (
    <div className="personal-projects__gallery">
      <div className="personal-projects__image-stage">
        <button
          className="personal-projects__image-button"
          type="button"
          onClick={openLightbox}
          aria-label={`${activeImage.alt} 확대`}
        >
          <img src={activeImage.src} alt={activeImage.alt} loading="lazy" />
        </button>
        <button
          ref={zoomButtonRef}
          className="personal-projects__zoom"
          type="button"
          onClick={openLightbox}
          aria-label={`${activeImage.alt} 확대`}
          title="이미지 확대"
        >
          <ZoomIn aria-hidden="true" />
        </button>
      </div>

      {hasMultipleImages && (
        <div className="personal-projects__thumbnails" aria-label={`${title} 이미지 선택`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              className={index === activeIndex ? 'is-active' : undefined}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${image.alt} 선택`}
              aria-pressed={index === activeIndex}
            >
              <img src={image.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {lightbox}
    </div>
  );
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
              <ProjectGallery images={project.images} title={project.title} />
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
