import Header from "../layout/Header/Header";
import Hero from "../sections/Home/Hero/Hero";
import AskBar from "../sections/Home/AskBar/AskBar";
import HelpSection from "../sections/Home/HelpSection/HelpSection";
import ExploreSection from "../sections/Home/ExploreSection/ExploreSection";
import Stats from "../sections/Home/Stats/Stats";
import SuccessStories from "../sections/Home/SuccessStories/SuccessStories";
import PartnerCTA from "../sections/Home/PartnerCTA/PartnerCTA";
import PartnerEcosystem from "../sections/Home/PartnerEcosystem/PartnerEcosystem";
import Footer from "../layout/Footer/Footer";


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