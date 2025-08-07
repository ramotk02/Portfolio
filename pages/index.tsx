export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen p-10">
        {/* Contenu de ta page d'accueil */}
        <h1>Accueil</h1>
        {/* ... contenu d'index.tsx ... */}
      </section>

      <section id="about" className="min-h-screen p-10">
         <h1 className="text-3xl font-bold mb-4">Über mich</h1>
      <p>
        Ich bin Omar Taky, ein leidenschaftlicher Webentwickler mit Schwerpunkt Backend.
        Ich lebe in Paderborn, Deutschland 🇩🇪.
      </p>
      </section>

      <section id="projects" className="min-h-screen p-10">
          <h1 className="text-3xl font-bold mb-4">Meine Projekte</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li>Voting-App (mit Vite + React)</li>
        <li>Portfolio mit Next.js (dieses hier 👀)</li>
        <li>Ausgaben-Tracker (HTML / CSS / C#)</li>
      </ul>
      </section>

      <section id="contact" className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p>Du kannst mich per E-Mail erreichen: <strong>omartaky.ot@gmail.com</strong></p>
      <p>Oder auf LinkedIn, GitHub usw. (wird später hinzugefügt!)</p>
    </section>
    </div>
  );
}
