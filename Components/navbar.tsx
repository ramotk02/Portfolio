import Link from "next/link";
import { Home, User, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-20 fixed right-0 top-0 h-full flex flex-col justify-center items-center space-y-6 bg-white dark:bg-neutral-800 shadow-lg">
      <Link href="/"><Home /></Link>
      <Link href="/about"><User /></Link>
      <Link href="/projects"><Briefcase /></Link>
      <Link href="/contact"><Mail /></Link>
    </nav>
  );
}
