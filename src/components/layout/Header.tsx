"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Droplets, Menu, Phone, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ClearFlow Drainage — home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
            <Droplets className="h-5 w-5 text-teal" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-extrabold tracking-tight text-navy">
              ClearFlow <span className="font-semibold text-brand">Drainage</span>
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              Cork, Ireland
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") setServicesOpen(true);
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors",
                pathname.startsWith("/services")
                  ? "text-brand"
                  : "text-ink hover:bg-mist hover:text-navy"
              )}
            >
              Services
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[340px] overflow-hidden rounded-2xl border border-line bg-white p-2 card-shadow-lg">
                {navigation.servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 hover:bg-mist focus-visible:bg-mist"
                  >
                    <span className="block text-[14.5px] font-semibold text-navy">{item.label}</span>
                    <span className="block text-[13px] text-muted">{item.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigation.primary
            .filter((i) => i.label !== "Services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors",
                  isActive(item.href) ? "text-brand" : "text-ink hover:bg-mist hover:text-navy"
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-[15px] font-bold text-navy hover:text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {business.phoneDisplay}
          </a>
          <Link
            href="/request-a-quote"
            className="rounded-xl bg-brand px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-xl lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4 pb-8" aria-label="Mobile">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex items-center justify-between rounded-xl bg-mist px-4 py-3 text-left text-[16px] font-bold text-navy"
            >
              Services
              <ChevronDown
                className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")}
                aria-hidden
              />
            </button>
            {mobileServicesOpen && (
              <div className="ml-2 flex flex-col gap-1 border-l-2 border-line pl-3">
                {navigation.servicesMenu.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink hover:bg-mist"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            {navigation.primary
              .filter((i) => i.label !== "Services")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-[16px] font-bold text-navy hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/request-a-quote"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-xl bg-brand px-4 py-3.5 text-center text-[16px] font-bold text-white"
            >
              Request a Quote
            </Link>
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-line px-4 py-3.5 text-[16px] font-bold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {business.phoneDisplay}
            </a>
            <p className="mt-2 text-center text-[12px] text-muted">Demo phone number — replace before launch.</p>
          </nav>
        </div>
      )}
    </header>
  );
}
