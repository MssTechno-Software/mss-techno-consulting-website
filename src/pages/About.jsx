import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import IndustryExpert from "../components/IndustryExpert";
import HeroSection from "../components/About/HeroSection";
import Ourstory from "../components/About/OurStory";
import OurViSion from "../components/About/OurVision";
import ContactSection from "../components/ContactSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <main> 
        <HeroSection/>
         <IndustryExpert/>
         <Ourstory/>
         <OurViSion/>
        <Faq/>
         <ContactSection/>
        <Footer/>
      </main>
    </>
  );
}