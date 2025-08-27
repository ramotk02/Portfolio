import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react"; 

const KONTAKT_LINKS = [
  { label: "Email", link: "mailto:omartaky.ot@gmail.com", icon: Mail, color: "text-red-400" },
  { label: "GitHub", link: "https://github.com/omar", icon: Github, color: "text-white" },
  { label: "LinkedIn", link: "https://linkedin.com/in/omar", icon: Linkedin, color: "text-blue-500" },
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleEmailCopy = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Fehler beim Kopieren der Email:", err);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">
        Kontakt
      </h2>

      <div className="grid grid-cols-3 gap-8 border-t border-b border-gray-600 py-6 max-w-sm">
        {KONTAKT_LINKS.map(({ label, link, icon: Icon, color }, index) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={(e) => {
              if (label === "Email") {
                e.preventDefault();
                handleEmailCopy("omartaky.ot@gmail.com");
              }
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex flex-col items-center justify-center space-y-2 text-gray-400 transition-colors duration-300 cursor-pointer ${
              hoveredIndex === index ? color : "hover:" + color
            }`}
          >
            <Icon size={28} />
            <span
              className={`font-semibold text-sm md:text-base ${
                hoveredIndex === index ? color : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {copiedEmail && (
        <p className="mt-4 text-green-400 font-semibold animate-fadeIn">
          Email-Adresse wurde in die Zwischenablage kopiert!
        </p>
      )}
    </section>
  );
}
