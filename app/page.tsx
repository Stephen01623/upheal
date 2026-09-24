import Header from "@/app/components/landing/Header";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import About from "@/app/components/landing/About";
import Anatomy from "@/app/components/landing/Anatomy";
import Lectures from "@/app/components/landing/Lectures"; 
import Research from "@/app/components/landing/Research"; 
import Histology from "@/app/components/landing/Histology";
import Practice from "@/app/components/landing/Practice";
import FAQs from "@/app/components/landing/FAQs";
import Contact from "@/app/components/landing/Contact";
import Footer from "@/app/components/landing/Footer";
import Gallery from "@/app/components/landing/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Anatomy />
        <Lectures />
        <Research />
        <Histology />
        <Practice />
        <FAQs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}