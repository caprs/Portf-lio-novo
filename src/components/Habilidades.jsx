import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "JavaScript", "Tailwind", "HTML", "CSS"],
  Backend: ["Node.js", "API REST", "MySQL"],
  Ferramentas: ["Git", "Vite", "VSCode"],
};

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 
        text-black dark:text-white"
      >
        Minhas Habilidades
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 rounded-2xl border 
            border-gray-200 dark:border-gray-800
            hover:scale-105 transition"
          >
            <h3
              className="text-xl font-semibold mb-4 
            text-black dark:text-white"
            >
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full 
                  bg-gray-200 dark:bg-gray-800 
                  text-black dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
