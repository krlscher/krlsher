"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getCopy, langPath } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";
import type { Lang } from "@/content/types";

type Props = { lang: Lang };

export function Nav({ lang }: Props) {
  const copy = getCopy(lang);
  const pathname = usePathname() || "/";
  const home = langPath(lang);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", menuOpen);
    return () => document.body.classList.remove("is-menu-open");
  }, [menuOpen]);

  // Close menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={"nav" + (scrolled ? " is-scrolled" : "")}>
        <div className="container container--wide nav__inner">
          <Link href={home} className="nav__brand" aria-label="dr.Scherbakov — home">
            <span className="nav__brand-name">dr.Scherbakov</span>
            <span className="nav__brand-sub">{copy.nav.brandSub}</span>
          </Link>
          <ul className="nav__links">
            {copy.nav.links.map((l) => (
              <li key={l.id}>
                <a href={`${home}#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav__right">
            <LangSwitch lang={lang} />
            <button
              className="nav__hamburger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className="nav-drawer" aria-hidden={!menuOpen}>
        {copy.nav.links.map((l) => (
          <a key={l.id} href={`${home}#${l.id}`} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <ThemeToggle lang={lang} className="theme-toggle nav-drawer__theme" />
      </div>
    </>
  );
}
