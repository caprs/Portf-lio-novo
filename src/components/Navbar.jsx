import useActiveSection from "../hooks/useAtiveSecao";

export default function Navbar() {
  const active = useActiveSection();

  const linkClass = (id) =>
    `hover:opacity-70 ${active === id ? "text-white font-semibold" : ""}`;

  return (
    <header
      className=" hidden md:block
  fixed top-0 w-full z-50
  backdrop-blur-md
  bg-white/70 dark:bg-[#0f0f0f]/70
  border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto p-4">
        <nav className="hidden md:flex gap-6 text-sm dark:text-gray-300 justify-center">
          <a href="#hero" className={linkClass("hero")}>
            Início
          </a>
          <a href="#sobre" className={linkClass("sobre")}>
            Sobre
          </a>
          <a href="#habilidades" className={linkClass("habilidades")}>
            Habilidades
          </a>
          <a href="#projetos" className={linkClass("projetos")}>
            Projetos
          </a>
          <a href="#contato" className={linkClass("contato")}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
