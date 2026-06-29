import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import type { ProjectImage } from '../data/portfolio';
import './ImageGallery.css';

type ImageGalleryProps = {
  images: ProjectImage[];
  title: string;
};

export default function ImageGallery({ images, title }: ImageGalleryProps) {
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
          className="image-lightbox"
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
            className="image-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="확대 이미지 닫기"
            title="닫기"
          >
            <X aria-hidden="true" />
          </button>

          {hasMultipleImages && (
            <button
              className="image-lightbox__nav image-lightbox__nav--previous"
              type="button"
              onClick={showPrevious}
              aria-label="이전 이미지"
              title="이전 이미지"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
          )}

          <img
            className="image-lightbox__image"
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
                className="image-lightbox__nav image-lightbox__nav--next"
                type="button"
                onClick={showNext}
                aria-label="다음 이미지"
                title="다음 이미지"
              >
                <ChevronRight aria-hidden="true" />
              </button>
              <span className="image-lightbox__count" aria-live="polite">
                {activeIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>,
        document.body,
      )
    : null;

  return (
    <div className="image-gallery">
      <div className="image-gallery__image-stage">
        <button
          className="image-gallery__image-button"
          type="button"
          onClick={openLightbox}
          aria-label={`${activeImage.alt} 확대`}
        >
          <img src={activeImage.src} alt={activeImage.alt} loading="lazy" />
        </button>
        <button
          ref={zoomButtonRef}
          className="image-gallery__zoom"
          type="button"
          onClick={openLightbox}
          aria-label={`${activeImage.alt} 확대`}
          title="이미지 확대"
        >
          <ZoomIn aria-hidden="true" />
        </button>
      </div>

      {hasMultipleImages && (
        <div className="image-gallery__thumbnails" aria-label={`${title} 이미지 선택`}>
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
