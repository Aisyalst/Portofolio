"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal animation runs */
  delay?: number;
  /** Direction the element eases in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "section";
};

const hiddenTransforms: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "translateY(0px)",
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0px, 0px)" : hiddenTransforms[direction],
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
