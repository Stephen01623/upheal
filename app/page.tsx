import Header from "@/app/components/landing/Header";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import About from "@/app/components/landing/About";
import Anatomy from "@/app/components/landing/Anatomy";
import Research from "@/app/components/landing/Research"; 
import Histology from "@/app/components/landing/Histology";
import Practice from "@/app/components/landing/Practice";
import FAQs from "@/app/components/landing/FAQs";
import Contact from "@/app/components/landing/Contact";
import Gallery from "@/app/components/landing/Gallery";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Anatomy />
        <Research />
        <Histology />
        <Practice />
        <FAQs />
        <Contact />
      </main>


    </>
  );
}