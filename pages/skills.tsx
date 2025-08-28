import React, { useEffect, useRef, useState } from "react";

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
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

function RadialProgress({ label, percent, index }) {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const { ref, inView } = useInView();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = performance.now();
      const duration = 1000 + index * 200;

      const animate = (now) => {
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
      className="flex flex-col items-center space-y-2 transform transition-all duration-300 hover:scale-105 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="currentColor"
          className="text-neutral-300 dark:text-neutral-700"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference - (progress / 100) * circumference
          }
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 ease-out"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#51A2FF" />
            <stop offset="100%" stopColor="#7F5AF0" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-sm md:text-base text-neutral-900 dark:text-neutral-100 font-semibold hover:text-blue-400 transition-colors duration-300">
        {label} — {progress}%
      </span>
    </div>
  );
}

export default function Skills() {
  const categories = [
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
    <section className="rounded-2xl flex flex-col items-center justify-center space-y-10 max-w-5xl mx-auto my-20 px-6 py-12 bg-white/70 dark:bg-neutral-800/70 shadow-xl backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight animate-fadeInUp">
        Meine Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat) =>
          cat.items.map((s, i) => (
            <RadialProgress
              key={s.name}
              label={s.name}
              percent={s.percent}
              index={i}
            />
          ))
        )}
      </div>
    </section>
  );
}
