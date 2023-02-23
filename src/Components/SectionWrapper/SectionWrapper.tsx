import { useState, useEffect, useRef } from 'react';
import "./SectionWrapper.scss";

interface SectionWrapperProps {
  id: string;
  section: JSX.Element;
  observer?: boolean;
  className?: string;
}

function SectionWrapper({ id, section, observer, className }: SectionWrapperProps) {
  const [sectionObserver, setSectionObserver] = useState<IntersectionObserver | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (observer && wrapperRef.current) {
      let callback = () => { }

      let opts = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      }

      setSectionObserver(new IntersectionObserver(callback, opts))
    }
  }, [wrapperRef.current])
  

  return (
    <section
      id={id}
      className={className !== typeof "undefined" ? "c-sectionwrapper" : "c-sectionwrapper " + className}
      ref={wrapperRef}
    >
      {section}
    </section>
  )
}

export default SectionWrapper