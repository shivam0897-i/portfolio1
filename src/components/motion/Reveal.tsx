import * as React from "react";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealProps = {
  /** Render without an extra wrapper element. */
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;

  /**
   * Stagger support for lists. Applied as CSS `animation-delay` when revealed.
   */
  delayMs?: number;

  /** IntersectionObserver options. */
  rootMargin?: string;
  threshold?: number | number[];
};

function composeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") ref(node);
      else {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (ref as any).current = node;
        } catch {
          // ignore
        }
      }
    }
  };
}

/**
 * Subtle one-time reveal on viewport entry (fade + slight upward slide).
 * Uses IntersectionObserver and respects `prefers-reduced-motion`.
 */
export function Reveal({
  asChild,
  className,
  children,
  delayMs,
  rootMargin = "-10% 0px",
  threshold = 0.15,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<Element>({ rootMargin, threshold });

  const style =
    isVisible && delayMs
      ? ({ animationDelay: `${delayMs}ms` } as React.CSSProperties)
      : undefined;

  const classes = cn(
    "transform-gpu will-change-transform",
    // Hidden state (no layout impact)
    "opacity-0",
    // Respect reduced-motion
    "motion-reduce:opacity-100 motion-reduce:transform-none motion-reduce:filter-none",
    // Visible state
    isVisible && "opacity-100 animate-reveal-up",
    className,
  );

  if (asChild) {
    const child = React.Children.only(children);
    if (!React.isValidElement(child)) return null;

    const mergedStyle = { ...(child.props as any).style, ...(style ?? {}) };
    const mergedClassName = cn((child.props as any).className, classes);

    return React.cloneElement(child as any, {
      className: mergedClassName,
      style: mergedStyle,
      ref: composeRefs((child as any).ref, ref as any),
    });
  }

  return (
    <div ref={ref as unknown as React.Ref<HTMLDivElement>} style={style} className={classes}>
      {children}
    </div>
  );
}
