export default function Skills() {
  return (
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
  );
}
