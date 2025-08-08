export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen p-10">
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4  from-neutral-900 to-black text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hallo, ich bin Omar 👋</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Fullstack-Webentwickler mit einer Leidenschaft für Backend-Technologien,
            moderne Interfaces und interaktive Erlebnisse. Aktuell in Paderborn.
          </p>
<h1 className="text-4xl font-rajdhani">
  Bonjour avec Rajdhani et Tailwind !
</h1>
          <a
            href="#projects"
            className="mt-8 inline-block bg-white text-black dark:bg-neutral-100 dark:text-neutral-900 px-6 py-3 rounded-full font-semibold hover:bg-neutral-300 transition"
          >
            Meine Projekte ansehen
          </a>
        </section>
      </section>

      <section id="about" className="min-h-screen p-30">
        <h1 className="text-3xl font-bold mb-4">Über mich</h1>
        <p>
          Ich bin Omar Taky, ein leidenschaftlicher Webentwickler mit Schwerpunkt Backend.
          Ich lebe in Paderborn, Deutschland 🇩🇪.
        </p>

      </section>

      <section id="projects" className="min-h-screen p-30">
        <h1 className="text-3xl font-bold mb-4">Meine Projekte</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>Voting-App (mit Vite + React)</li>
          <li>Portfolio mit Next.js (dieses hier 👀)</li>
          <li>Ausgaben-Tracker (HTML / CSS / C#)</li>
        </ul>
      </section>

      <section id="contact" className="min-h-screen p-30">
        <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
        <p>Du kannst mich per E-Mail erreichen: <strong>omartaky.ot@gmail.com</strong></p>
        <p>Oder auf LinkedIn, GitHub usw. (wird später hinzugefügt!)</p>
      </section>
      
    </div>
    
  );
}
