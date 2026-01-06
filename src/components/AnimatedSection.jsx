import { useEffect, useRef, useState } from "react";

function AnimatedSection({ children, id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${visible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
