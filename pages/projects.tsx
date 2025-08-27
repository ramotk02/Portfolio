export default function Projects(){
    return(
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
      );
}