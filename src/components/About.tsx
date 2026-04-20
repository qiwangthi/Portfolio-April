import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section id="about" className="section" ref={ref}>
      <div className={`fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <h2 className="section__title">{t.about.sectionTitle}</h2>
        <div className="about__layout">
          <div className="about__image">
            <div className="about__image-frame">
              <img
                src="https://ik.imagekit.io/nhh7dpdil/profilohne.png"
                alt={t.hero.name}
                className="about__image-photo"
              />
            </div>
            <div className="about__image-glow" aria-hidden="true" />
          </div>
          <div className="about__content">
            {t.about.description.map((paragraph, i) => (
              <p key={i} className="about__text">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
