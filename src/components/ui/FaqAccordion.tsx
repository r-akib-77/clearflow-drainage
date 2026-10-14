"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/content/faqs";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white card-shadow">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-[15.5px] font-bold text-navy">{faq.q}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                    open ? "bg-navy text-white" : "bg-mist text-navy"
                  )}
                >
                  <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!open}
              className="px-5 pb-5 text-[15px] leading-7 text-muted"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
