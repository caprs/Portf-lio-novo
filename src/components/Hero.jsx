export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* FUNDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/50 rounded-full blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/50 rounded-full blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Ana Livia Caprioli
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
            Desenvolvedora Front-end | Back-end | React | Node.js | JavaScript
          </p>

          {/* BOTÕES */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="#projetos"
              className="px-6 py-3 rounded-xl 
              bg-black text-white 
              dark:bg-white dark:text-black
              transition hover:scale-105"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="px-6 py-3 rounded-xl border 
              border-black dark:border-white
              text-black dark:text-white
              transition hover:scale-105"
            >
              Contato
            </a>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* glow */}
            <div
              className="absolute inset-0 rounded-3xl 
            bg-gradient-to-tr from-purple-500 to-blue-500 
            blur-2xl opacity-30 group-hover:opacity-50 transition"
            />

            {/* imagem */}
            <img
              src="/fotoperfil.jpeg"
              alt="Ana Livia"
              className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] 
                rounded-full object-cover 
                border border-white/10 shadow-2xl
                group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
