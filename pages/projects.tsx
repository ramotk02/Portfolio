export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-fadeIn max-w-4xl mx-auto my-20"
    >
      <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">
        Meine Projekte
      </h2>
      <table className="text-lg md:text-xl max-w-2xl text-gray-200 text-left mx-auto w-full">
        <thead>
          <tr>
            <th>Projet</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong className="text-white">Ausgaben-Tracker</strong></td>
            <td>HTML, CSS, C#</td>
          </tr>
          <tr>
            <td><strong className="text-white">Voting-App</strong></td>
            <td>Vue.js, Firebase</td>
          </tr>
          <tr>
            <td><strong className="text-white">Portfolio Interaktiv</strong></td>
            <td>Next.js, Node.js, Docker</td>
          </tr>
          <tr>
            <td><strong className="text-white">Dokumenten-Scanner</strong></td>
            <td>Python, OpenCV</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
