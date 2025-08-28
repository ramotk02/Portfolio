export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto my-20"
    >
      <div className="p-10 rounded-2xl bg-white/70 dark:bg-neutral-800/70 shadow-xl w-full max-w-2xl mx-auto transition-transform duration-500 hover:shadow-2xl text-center backdrop-blur-md">
        <h2 className="text-5xl font-extrabold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md animate-fadeInUp">
          Über mich
        </h2>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-100 mb-6 animate-fadeInUp delay-150 transition-colors duration-300 hover:text-white/90">
          Ich bin <strong className="text-white underline decoration-green-400 decoration-2 underline-offset-2">Omar Taky</strong>, 
          21 Jahre alt, Student am <strong className="text-white">B.i.B. International College</strong> in Paderborn 🇩🇪. 
          Ursprünglich aus Marokko 🇲🇦, habe ich mich für Deutschland entschieden, um meine Kenntnisse 
          in moderner Webentwicklung zu vertiefen und internationale Erfahrungen zu sammeln.
        </p>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-100 mb-6 animate-fadeInUp delay-300 transition-transform duration-300 hover:translate-y-1 hover:text-white">
          Mein Studium umfasst die Bereiche <strong className="text-white">Backend-Entwicklung</strong>, 
          <strong className="text-white"> Frontend-Technologien</strong> sowie <strong className="text-white">Datenbanken</strong>. 
          Dabei lege ich besonderen Wert auf sauberen Code, Performance und ein reibungsloses Nutzererlebnis.
        </p>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-200 animate-fadeInUp delay-450 transition-colors duration-300 hover:text-white/80">
          Sprachen: <strong className="text-white">Arabisch, Französisch, Englisch, Deutsch</strong>
        </p>

        <div className="mt-8 flex justify-center space-x-3">
          <span className="inline-block w-4 h-4 rounded-full bg-blue-400 animate-bounce"></span>
          <span className="inline-block w-4 h-4 rounded-full bg-purple-500 animate-bounce delay-150"></span>
          <span className="inline-block w-4 h-4 rounded-full bg-green-400 animate-bounce delay-300"></span>
          <span className="inline-block w-4 h-4 rounded-full bg-pink-500 animate-pulse delay-450"></span>
          <span className="inline-block w-4 h-4 rounded-full bg-yellow-400 animate-bounce delay-600"></span>
          <span className="inline-block w-4 h-4 rounded-full bg-cyan-400 animate-pulse delay-750"></span>
        </div>
      </div>
    </section>
  );
}
