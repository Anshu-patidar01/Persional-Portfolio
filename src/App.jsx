import AboutSection from "./Components/AboutSection";
import Contect from "./Components/Contect";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      {/* <div>
        <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div> */}
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-8 mt-3 lg:mx-24 md:mx-32">
        {/* <Navbar /> */}
        <Hero />
        <AboutSection />
        <Skills />
        <Projects />
        <Contect />
        <Footer />
      </div>
    </>
  );
}

export default App;
