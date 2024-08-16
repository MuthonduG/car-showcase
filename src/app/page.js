// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Contact";
import Footer from "./components/Footer";
import ToTopBtn from "./components/ToTopBtn";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header/>
      <Hero/>
      <Cars/>
      <About/>
      <Why/>
      <Testimonials/>
      <Cta/>
      <Footer/>
      <ToTopBtn/>
    </main>
  );
}
