export default function About() {
  return (
<section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
      >
        <div className="p-8 rounded-2xl bg-white/70 dark:bg-neutral-800/70 shadow-lg w-full max-w-2xl mx-auto transition-shadow duration-300 text-center">
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
  );
}
