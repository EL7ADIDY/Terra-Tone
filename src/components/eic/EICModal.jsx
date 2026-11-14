import React, { useEffect } from 'react';
import { X, Sparkles, Globe } from 'lucide-react';
import { EICExperience } from './EICExperience';

export const EICModal = ({
  isOpen = false,
  onClose = () => {},
  lang = 'en',
  theme = 'dark'
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="eic-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="eic-modal-title"
    >
      <div className="eic-modal-container">
        {/* Modal Top Header */}
        <div className="eic-modal-header">
          <div className="eic-modal-title-box">
            <div className="eic-badge-pill">
              <Sparkles className="icon-xs" aria-hidden="true" />
              <span>OFFICIAL NASA SVS & EIC SHOWCASE</span>
            </div>
            <h2 id="eic-modal-title" className="eic-modal-heading">
              {lang === 'ar'
                ? 'مركز معلومات الأرض — تجربة الاستكشاف المرئي والبياني'
                : 'NASA Earth Information Center — Visual & Graph Experience'}
            </h2>
          </div>

          <button
            type="button"
            className="eic-modal-close-btn"
            onClick={onClose}
            aria-label={lang === 'ar' ? 'إغلاق المعرض' : 'Close Exhibition'}
            title={lang === 'ar' ? 'إغلاق (Esc)' : 'Close (Esc)'}
          >
            <X className="icon-sm" />
          </button>
        </div>

        {/* Modal Scrollable Body hosting the pure isolated EICExperience */}
        <div className="eic-modal-body">
          <EICExperience lang={lang} theme={theme} />
        </div>
      </div>
    </div>
  );
};
