import { useEffect, useRef, useState } from "react";

export default function useIntersection(opts = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(null);

  useEffect(() => {
    const element = elementRef.current;

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting)
      });
    };

    const observer = new IntersectionObserver(callback, opts);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    }
  });

  return [elementRef, isIntersecting];
}
