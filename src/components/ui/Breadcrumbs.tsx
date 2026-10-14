import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13.5px]">
      <ol className="flex flex-wrap items-center gap-1 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-line" aria-hidden />}
              {item.href && !last ? (
                <Link href={item.href} className="font-medium hover:text-brand hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "font-semibold text-navy" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
