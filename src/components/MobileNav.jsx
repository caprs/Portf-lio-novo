import { House, User, FolderGit2, Mail, Layers3 } from "lucide-react";

export default function MobileNav() {
  const items = [
    { icon: <House size={20} />, href: "#hero" },
    { icon: <User size={20} />, href: "#sobre" },
    { icon: <Layers3 size={20} />, href: "#habilidades" },
    { icon: <FolderGit2 size={20} />, href: "#projetos" },
    { icon: <Mail size={20} />, href: "#contato" },
  ];

  return (
    <div
      className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      z-[999]
      md:hidden
      "
    >
      <div
        className="
        flex items-center gap-3
        px-4 py-3
        rounded-2xl
        backdrop-blur-xl
        bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        shadow-2xl
        "
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="
            p-3 rounded-xl
            text-black dark:text-white
            hover:bg-white/10
            hover:scale-110
            active:scale-95
            transition duration-300
            "
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
