import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const KONTAKT_LINKS = [
  {
    label: "Email",
    link: "mailto:omartaky.ot@gmail.com",
    icon: () => <MdEmail size={24} />,
    color: "text-green-400",
  },
  {
    label: "GitHub",
    link: "https://github.com/omartaky",
    icon: () => <FaGithub size={24} />,
    color: "text-gray-400",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/omartaky",
    icon: () => <FaLinkedin size={24} />,
    color: "text-blue-600",
  },
];


export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

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
    <div className="text-white font-sans selection:bg-blue-600 selection:text-white px-4 md:px-0 max-w-7xl mx-auto">
      {/* Section d'accueil */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-fadeIn max-w-4xl mx-auto text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          Hallo, ich bin Omar 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed tracking-wide">
          Fullstack-Webentwickler mit Schwerpunkt auf{" "}
          <strong className="text-white underline decoration-blue-500 decoration-2 underline-offset-4">
            Backend-Technologien
          </strong>
          , spezialisiert auf moderne Webanwendungen und interaktive User Interfaces.
          <br />
          Student am <strong className="text-white">B.i.B. International College</strong> in Paderborn 🇩🇪.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-14 py-5 rounded-full font-semibold text-xl text-black bg-white hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-blue-600 transform hover:scale-105 active:scale-95"
          aria-label="Meine Projekte ansehen"
        >
          Meine Projekte ansehen
        </a>
      </section>

      {/* Über mich */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
      >
        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg w-full max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-white/50 text-center">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-blue-400 drop-shadow-md">Über mich</h2>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-100 mb-6">
            Ich bin <strong className="text-white underline decoration-green-400 decoration-2 underline-offset-2">Omar Taky</strong>, 
            21 Jahre alt, Student am <strong className="text-white">B.i.B. International College</strong> in Paderborn 🇩🇪. 
            Ursprünglich aus Marokko 🇲🇦, habe ich mich für Deutschland entschieden, um meine Kenntnisse 
            in moderner Webentwicklung zu vertiefen und internationale Erfahrungen zu sammeln.
          </p>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-100 mb-6">
            Mein Studium umfasst die Bereiche <strong className="text-white">Backend-Entwicklung</strong>, 
            <strong className="text-white"> Frontend-Technologien</strong> sowie <strong className="text-white">Datenbanken</strong>. 
            Dabei lege ich besonderen Wert auf sauberen Code, Performance und ein reibungsloses Nutzererlebnis.
          </p>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-200">
            Sprachen: <strong className="text-white">Arabisch, Französisch, Englisch, Deutsch</strong>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-fadeIn max-w-4xl mx-auto my-20"
      >
        <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg w-full max-w-2xl mx-auto transition-shadow duration-300 hover:shadow-green-400/40 text-center">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-green-400 drop-shadow-md">Meine Skills</h2>
          <ul className="text-lg md:text-xl space-y-4 text-gray-200 list-disc list-inside text-left">
            <li>💻 <strong className="text-white">Frontend:</strong> HTML, CSS, JavaScript, React</li>
            <li>🖥 <strong className="text-white">Backend:</strong> Node.js, Express, Java, Python</li>
            <li>🗄 <strong className="text-white">Datenbanken:</strong> MongoDB</li>
            <li>⚙ <strong className="text-white">Tools:</strong> Docker, Git, Tailwind CSS</li>
          </ul>
        </div>
      </section>

      {/* Erfahrung & Bildung */}
      <section
        id="erfahrung"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
      >
        <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">Erfahrung & Bildung</h2>
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">

          <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg transition-shadow duration-300 hover:shadow-blue-500/40">
            <h3 className="text-2xl font-bold mb-6 text-white">🎓 Bildung</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li>📍 <strong>B.i.B. International College</strong>, Paderborn – 2. Semester Webentwicklung (2024–heute)</li>
              <li>📍 <strong>GoMyCode</strong> – Zertifikat in Webentwicklung</li>
              <li>📍 <strong>Institut Ibn Ghazi</strong> – Deutschvorbereitung</li>
              <li>📍 <strong>Harmonia, Casablanca</strong> – Baccalauréat in Physik (2022)</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg transition-shadow duration-300 hover:shadow-green-400/40">
            <h3 className="text-2xl font-bold mb-6 text-white">💼 Berufserfahrung</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li>📍 <strong>eProgram</strong> – Praktikum (Python, Jupyter Notebook, Data Cleaning)</li>
              <li>📍 <strong>Vivalis Salaf</strong> – Direkter Marketingbeauftragter</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projekte */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-fadeIn max-w-4xl mx-auto my-20"
      >
        <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">Meine Projekte</h2>
        <ul className="text-lg md:text-xl space-y-4 max-w-2xl text-gray-200 list-disc list-inside text-left">
          <li>📊 <strong className="text-white">Ausgaben-Tracker</strong> – HTML, CSS, C#</li>
          <li>🗳️ <strong className="text-white">Voting-App</strong> – Vue.js, Firebase</li>
          <li>🌐 <strong className="text-white">Portfolio Interaktiv</strong> – Next.js, Node.js, Docker</li>
        </ul>
      </section>

      {/* Kontakt */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
      >
        <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">Kontakt</h2>
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
              className={`flex flex-col items-center justify-center space-y-2 text-gray-400 hover:${color} transition-colors duration-300 cursor-pointer`}
            >
              <Icon />
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
    </div>
  );
}
