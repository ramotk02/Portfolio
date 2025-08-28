export default function Studies(){
return(
    <section
        id="erfahrung"
        className="min-h-screen flex flex-col items-center justify-center space-y-12 animate-slideUp max-w-4xl mx-auto my-20"
      >
        <h2 className="text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-md">Erfahrung & Bildung</h2>
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">

          <div className="p-8 rounded-2xl bg-white/70 dark:bg-neutral-800/70   border border-white/30 shadow-lg transition-shadow duration-300 ">
            <h3 className="text-2xl font-bold mb-6 text-white">🎓 Bildung</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li>📍 <strong>B.i.B. International College</strong>, Paderborn – 2. Semester Webentwicklung (2024–heute)</li>
              <li>📍 <strong>GoMyCode</strong> – Zertifikat in Webentwicklung</li>
              <li>📍 <strong>Institut Ibn Ghazi</strong> – Deutschvorbereitung</li>
              <li>📍 <strong>Harmonia, Casablanca</strong> – Baccalauréat in Physik (2022)</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white/70 dark:bg-neutral-800/70   border border-white/30 shadow-lg transition-shadow duration-300 ">
            <h3 className="text-2xl font-bold mb-6 text-white">💼 Berufserfahrung</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li>📍 <strong>eProgram</strong> – Praktikum (Python, Jupyter Notebook, Data Cleaning)</li>
              <li>📍 <strong>Vivalis Salaf</strong> – Direkter Marketingbeauftragter</li>
            </ul>
          </div>

        </div>
      </section>
);
}