export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg">
        Hallo, ich bin Omar 👋
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
        Fullstack-Webentwickler mit Schwerpunkt auf{" "}
        <span className="text-white underline decoration-blue-500">Backend-Technologien</span>, spezialisiert auf moderne Webanwendungen und interaktive User Interfaces.
        <br />
        Student am <strong className="text-white">B.i.B. International College</strong> in Paderborn 🇩🇪.
      </p>
      <a
        href="#projects"
        className="mt-6 px-14 py-5 rounded-full bg-white text-black font-semibold text-xl hover:bg-blue-500 hover:text-white transition transform hover:scale-105"
      >
        Meine Projekte ansehen
      </a>
    </section>
  );
}
