"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="#home" aria-label="Praise Fredrick home">
          praise<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#expertise">Expertise</a>
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
        </nav>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[
            ["Expertise", "expertise"],
            ["Selected work", "work"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
