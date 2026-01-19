import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="grid gap-6 md:grid-cols-12">
          <header className="md:col-span-4">
            {eyebrow ? (
              <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              {title}
            </h2>
          </header>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
