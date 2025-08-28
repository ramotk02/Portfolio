export default function Studies() {
  const education = [
    {
      title: "Harmonia - Casablanca, Marokko",
      desc: "2020 - 2021: Allgemeine Hochschulreife (Abitur)",
      icon: "🎓",
      color: "from-green-400 to-blue-400",
    },
    {
      title: "Studienkolleg Ibn Ghazi - Casablanca, Marokko",
      desc: "2022 - 2023: Deutsch-Vorbereitungskurse - Abschluss: B1-Zertifikat",
      icon: "🎓",
      color: "from-green-400 to-blue-400",
    },
    {
      title: "GoMyCode - Casablanca, Marokko",
      desc: "2023 - 2024: Zertifikat in Webentwicklung (JavaScript, HTML, CSS, Node.js, React)",
      icon: "🎓",
      color: "from-green-400 to-blue-400",
    },
    {
      title: "Berufliches Bildungszentrum B.i.B - Paderborn, Deutschland",
      desc: "Seit 2024: 2. Jahr des IT-Studiums (Informatik)",
      icon: "🎓",
      color: "from-green-400 to-blue-400",
    },
  ];

  const experience = [
    {
      title: "Vivalis Salaf - Casablanca, Marokko",
      desc: "Juli 2023 - September 2023: Durchführung von Marketingaktionen, Kundenkontakt und Produktpräsentation, Kommunikations- und Verkaufserfahrung gesammelt",
      icon: "💼",
      color: "from-pink-400 to-red-400",
    },
    {
      title: "eProgram - Casablanca, Marokko",
      desc: "August 2023 - Oktober 2023: Entwicklung eines Algorithmus zur Datenbereinigung mit Python und Jupyter Notebook, Umgang mit fehlerhaften Datensätzen, Teamfähigkeit & Problemlösung, Einblick in reale Aufgaben der Datenanalyse",
      icon: "💼",
      color: "from-pink-400 to-red-400",
    },
  ];

  const renderCards = (items) => {
    return items.map((item, idx) => (
      <div
        key={item.title}
        className="mb-8 animate-fadeInUp"
      >
        <div className="flex items-start space-x-4">
          {/* Cercle coloré */}
          <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg mt-1 flex-shrink-0`}></span>

          {/* Carte */}
          <div className={`bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl flex-1`}>
            <h3 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2`}>
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-200 text-sm">{item.desc}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="erfahrung" className="min-h-screen flex flex-col items-center justify-start space-y-16 max-w-4xl mx-auto my-20 px-6">
      {/* Bildungsweg */}
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md mb-8 animate-fadeInUp">
          Bildungsweg
        </h2>
        {renderCards(education)}
      </div>

      {/* Berufserfahrung */}
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 drop-shadow-md mb-8 animate-fadeInUp">
          Berufserfahrung
        </h2>
        {renderCards(experience)}
      </div>
    </section>
  );
}
