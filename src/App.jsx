import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export default function App() {
  return (
    <main
      className="
      relative
      min-h-screen
      bg-white
      dark:bg-gradient-to-b dark:from-[#0a0a0a] dark:to-[#111]
      md:pb-0
      overflow-x-hidden
      "
    >
      {/* NAV DESKTOP */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SEÇÕES */}
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />

      {/* FOOTER */}
      <Footer />

      {/* NAV MOBILE */}
      <MobileNav />
    </main>
  );
}
