"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems = [
    { href: "#home", id: "home", label: "Home", icon: <Home /> },
    { href: "#about", id: "about", label: "About", icon: <User /> },
    { href: "#projects", id: "projects", label: "Projects", icon: <Briefcase /> },
    { href: "#contact", id: "contact", label: "Contact", icon: <Mail /> },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
<nav className="w-20 fixed right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center space-y-6 bg-white/70 dark:bg-neutral-800/70 shadow-lg backdrop-blur-md py-20 mx-4 rounded-xl">
      {navItems.map(({ href, label, icon, id }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          className={`p-3 rounded-full transition-all shadow-md ${
            activeSection === id
              ? "bg-gray-300 dark:bg-neutral-500 text-black scale-110"
              : "bg-white dark:bg-neutral-700 text-black dark:text-white hover:bg-gray-300"
          }`}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
}
