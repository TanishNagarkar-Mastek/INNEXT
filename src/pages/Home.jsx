import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import AskBar from "../components/AskBar/AskBar";
import HelpSection from "../components/HelpSection/HelpSection";
import ExploreSection from "../components/ExploreSection/ExploreSection";
import Stats from "../components/Stats/Stats";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import PartnerCTA from "../components/PartnerCTA/PartnerCTA";
import PartnerEcosystem from "../components/PartnerEcosystem/PartnerEcosystem";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
       <Hero />
      <AskBar />
      <HelpSection />
      <ExploreSection />
      <Stats />
      <SuccessStories />
      <PartnerEcosystem />
      <PartnerCTA /> 
      <Footer />
    </>
  );
}

export default Home;