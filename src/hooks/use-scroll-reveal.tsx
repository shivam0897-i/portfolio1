import * as React from "react";

type UseScrollRevealOptions = IntersectionObserverInit & {
  /** Reveal immediately if IntersectionObserver is unavailable. */
  fallbackVisible?: boolean;
};

/**
 * Reveals an element the first time it enters the viewport.
 */
export function useScrollReveal<T extends Element>(
  options: UseScrollRevealOptions = {},
) {
  const { fallbackVisible = true, ...observerOptions } = options;
  const [isVisible, setIsVisible] = React.useState(false);

  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const ref = React.useCallback(
    (node: T | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;

      if (!node || isVisible) return;

      if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        if (fallbackVisible) setIsVisible(true);
        return;
      }

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observerRef.current?.disconnect();
          observerRef.current = null;
        }
      }, observerOptions);

      observerRef.current.observe(node);
    },
    [fallbackVisible, isVisible, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold],
  );

  React.useEffect(() => () => observerRef.current?.disconnect(), []);

  return { ref, isVisible } as const;
}
