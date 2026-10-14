import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={cn(
            "text-[12px] font-extrabold uppercase tracking-[0.16em]",
            dark ? "text-teal" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-3 text-pretty text-[16px] leading-7", dark ? "text-slate-300" : "text-muted")}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-line bg-white card-shadow", className)}>
      {children}
    </div>
  );
}
