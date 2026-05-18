import { motion } from "framer-motion";
import { Code2, Braces, Palette, Search, FileCode } from "lucide-react";

const skills = [
  { name: "React", level: 50, icon: <Code2 size={18} /> },
  { name: "JavaScript", level: 65, icon: <Braces size={18} /> },
  { name: "TypeScript", level: 40, icon: <FileCode size={18} /> },
  { name: "HTML", level: 100, icon: <Code2 size={18} /> },
  { name: "CSS", level: 60, icon: <Palette size={18} /> },
  { name: "Tailwind", level: 65, icon: <Palette size={18} /> },
  { name: "PHP", level: 55, icon: <Braces size={18} /> },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* FUNDO GRADIENTE (glow) */}
      <div
        className="absolute inset-0 -z-10 
      bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 blur-3xl"
      />

      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-black dark:text-white"
      >
        Sobre mim
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700 dark:text-gray-300 text-lg"
        >
          <p>
            Sou desenvolvedora front-end focada em criar interfaces modernas,
            responsivas e com alta performance.
          </p>

          <p>
            Trabalho com React e integração com APIs, criando experiências
            fluidas e bem estruturadas.
          </p>

          <p>
            Meu foco é desenvolver interfaces que gerem impacto visual e
            entreguem excelente usabilidade.
          </p>
        </motion.div>

        {/* CARD DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl backdrop-blur-xl 
          bg-white/10 dark:bg-white/5 
          border border-white/20 dark:border-white/10
          shadow-2xl"
        >
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                {/* HEADER */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3 text-black dark:text-white">
                    <div
                      className="p-2 rounded-lg bg-black/5 dark:bg-white/10 
                    group-hover:scale-110 transition"
                    >
                      {skill.icon}
                    </div>

                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>

                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>

                {/* BARRA */}
                <div className="w-full h-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    className="h-full rounded-full 
                    bg-gradient-to-r from-purple-500 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
