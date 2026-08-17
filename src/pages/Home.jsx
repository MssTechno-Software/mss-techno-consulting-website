import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhoWeHelp from "../components/WhoWeHelp";
import HiringPartners from "../components/HiringPartners";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatWeOffer from "../components/WhatWeOffer";
import IndustryExpert from "../components/IndustryExpert";
import Reviews from "../components/Reviews";
import OurCommitment from "../components/OurCommitment";
import ContactSection from "../components/ContactSection";
import PremiumMentoring from "../components/PremiumMentoring";
import SeekerStruggle from "../components/SeekersStruggle";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HiringPartners />
        <Services />
        <WhoWeHelp />
        <WhyChooseUs/>
        <WhatWeOffer/>
        <IndustryExpert/>
        <Reviews/>
        <OurCommitment/>
        <ContactSection/>
        <PremiumMentoring/>
        <Faq/>
        <Footer/>
      </main>
    </>
  );
}