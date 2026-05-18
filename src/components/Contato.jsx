import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
export default function Contato() {
  return (
    <section id="contato" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* FUNDO */}
      <div
        className="absolute inset-0 -z-10 
      bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 blur-3xl"
      />

      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center 
        text-black dark:text-white"
      >
        Fale comigo
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LADO ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* TELEFONE */}
          <div className="flex items-center gap-4">
            <Phone className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Telefone</p>
              <p className="text-black dark:text-white font-medium">
                (14)99171-7754
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <Mail className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-black dark:text-white font-medium">
                capriolianalivia7@gmail.com
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/caprs?tab=repositories"
              target="_blank"
              className="p-3 rounded-xl bg-black/5 dark:bg-white/10 
              hover:scale-110 transition"
            >
              <img src="github (1).png" alt="GitHub" className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ana-livia-caprioli-666597306/?skipRedirect=true"
              target="_blank"
              className="p-3 rounded-xl bg-black/5 dark:bg-white/10 
              hover:scale-110 transition"
            >
              <img src="linkedin.png" alt="Linkedin" className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* LADO DIREITO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-10 rounded-3xl backdrop-blur-xl 
          bg-white/10 dark:bg-white/5 
          border border-white/20 dark:border-white/10
          shadow-2xl text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Vamos trabalhar juntos?
          </h3>

          <p className="text-gray-500 mb-6">
            Estou disponível para novos projetos e oportunidades.
          </p>

          <a
            href="https://wa.me/5514991717754?text=Olá%20Ana,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-xl 
            bg-white text-black dark:bg-black dark: 
            text-white font-medium
            hover:scale-105 transition"
          >
            Entrar em contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}
