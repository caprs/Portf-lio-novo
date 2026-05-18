/* eslint-disable no-unused-vars */
import projects from "../data/projetos";
import { fadeInUp, staggerContainer } from "../helpers/animacoes";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projetos" className="py-28 px-6 max-w-6xl mx-auto">
      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-20 
            text-black dark:text-white"
      >
        Projetos
      </motion.h2>

      {/* CONTAINER */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-32"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`flex flex-col md:flex-row items-center gap-10 
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* IMAGEM */}
            <div className="w-full md:w-1/2 group relative">
              <div
                className="overflow-hidden rounded-3xl border 
                border-gray-200 dark:border-gray-800"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] md:h-[350px] object-cover 
                    transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY HOVER */}
              <div
                className="absolute inset-0 rounded-3xl 
                bg-gradient-to-t from-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition"
              />
            </div>

            {/* TEXTO */}
            <div className="w-full md:w-1/2">
              <h3
                className="text-2xl md:text-3xl font-semibold 
                text-black dark:text-white"
              >
                {project.title}
              </h3>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-gray-800 
                        px-3 py-1 rounded-full text-black dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BOTÃO */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-5 py-2 rounded-xl
                    bg-black text-white 
                    dark:bg-white dark:text-black
                    hover:scale-105 transition"
              >
                Ver projeto →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
