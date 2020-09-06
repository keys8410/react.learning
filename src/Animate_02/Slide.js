import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [positon, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();

    setPosition(-(width * active));
  }, [active]);

  const slidePrev = () => {
    if (active > 0) setActive(active - 1);
  };
  const slideNext = () => {
    if (active < slides.length - 1) setActive(active + 1);
  };

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${positon}px)` }}
      >
        {slides.map(({ id, text }) => (
          <div key={id} className={styles.item}>
            {text}
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
