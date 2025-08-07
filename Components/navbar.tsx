import Link from "next/link";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-20 fixed right-0 top-0 h-full flex flex-col justify-center items-center space-y-6 bg-white dark:bg-neutral-800 shadow-lg">
      <a href="#home" aria-label="Home"><Home /></a>
      <a href="#about" aria-label="About"><User /></a>
      <a href="#projects" aria-label="Projects"><Briefcase /></a>
      <a href="#contact" aria-label="Contact"><Mail /></a>
    </nav>
  );
}


