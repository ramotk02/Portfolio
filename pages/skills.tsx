import React, { useEffect, useRef, useState } from "react";

function useInView(options: IntersectionObserverInit = { threshold: 0.2 }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

type LinearProgressProps = {
  label: string;
  percent: number;
  index: number;
};

function LinearProgress({ label, percent, index }: LinearProgressProps) {
  const { ref, inView } = useInView();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = performance.now();
      const duration = 1000 + index * 200;

      const animate = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setProgress(Math.round(percent * t));
        if (t < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [inView, percent, index]);

  return (
    <div
      ref={ref}
      className="flex flex-col w-[80%] space-y-2 animate-fadeInUp transform transition-all duration-300 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between">
        <span className="text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {label}
        </span>
        <span className="text-sm font-medium text-blue-400">{progress}%</span>
      </div>

      <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(to right, #51A2FF, #7F5AF0)",
          }}
        ></div>
      </div>
    </div>
  );
}

type Skill = {
  name: string;
  percent: number;
};

type Category = {
  title: string;
  items: Skill[];
};

export default function Skills() {
  const categories: Category[] = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", percent: 90 },
        { name: "CSS", percent: 85 },
        { name: "JavaScript", percent: 80 },
        { name: "React", percent: 75 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", percent: 80 },
        { name: "Express", percent: 75 },
        { name: "Java", percent: 70 },
        { name: "Python", percent: 65 },
      ],
    },
    {
      title: "Datenbanken",
      items: [{ name: "MongoDB", percent: 75 }],
    },
    {
      title: "Tools",
      items: [
        { name: "Docker", percent: 65 },
        { name: "Git", percent: 85 },
        { name: "Tailwind CSS", percent: 85 },
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center space-y-10 max-w-5xl mx-auto my-20 px-6 py-12 bg-white/70 dark:bg-neutral-800/70 shadow-xl backdrop-blur-md rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight animate-fadeInUp">
        Meine Skills
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {categories.map((cat, i) => (
          <div key={cat.title} className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
              {cat.title}
            </h3>
            <div className="space-y-3">
              {cat.items.map((s, j) => (
                <LinearProgress
                  key={s.name}
                  label={s.name}
                  percent={s.percent}
                  index={i * 10 + j}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
