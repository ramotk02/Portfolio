"use client";

import React, { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail, BookOpen, Code } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { href: "#home", id: "home", label: "Home", icon: <Home /> },
    { href: "#about", id: "about", label: "About", icon: <User /> },
    { href: "#skills", id: "skills", label: "Skills", icon: <Code /> },
    { href: "#erfahrung", id: "erfahrung", label: "Erfahrung", icon: <BookOpen /> },
    { href: "#projects", id: "projects", label: "Projects", icon: <Briefcase /> },
    { href: "#contact", id: "contact", label: "Contact", icon: <Mail /> },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-20 fixed right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-6 bg-white/70 dark:bg-neutral-800/70 shadow-lg backdrop-blur-md py-20 mx-4 rounded-xl">
      {navItems.map(({ href, label, icon, id }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={href}
            aria-label={label}
            onClick={(e) => handleClick(e, href)}
            className={`p-3 rounded-full transition-all shadow-md flex items-center justify-center ${
              isActive
                ? "bg-gray-200 dark:bg-neutral-400 scale-125"
                : "bg-white dark:bg-neutral-700 hover:bg-gray-300"
            }`}
          >
            {React.cloneElement(icon, {
              className: isActive
                ? "text-blue-600 dark:text-blue-400"
                : "text-black dark:text-white",
              size: 24,
            })}
          </a>
        );
      })}
    </nav>
  );
}
