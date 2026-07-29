import React from 'react';
import './ConnectedEnterprise.css';
import Header from '../layout/Header/Header.jsx';
import PageTransition from '../layout/PageTransition/PageTransition.jsx';
import CEHero from '../sections/ConnectedEnterprise/CEHero/CEHero.jsx';
import Askbar from '../sections/Home/AskBar/AskBar.jsx';
import ConnectionFlow from '../sections/ConnectedEnterprise/ConnectionFlow/ConnectionFlow.jsx';
import FutureReady from '../sections/ConnectedEnterprise/FutureReady/FutureReady.jsx';
import IntegrationImpact from '../sections/ConnectedEnterprise/IntegrationImpact/IntegrationImpact.jsx';
import OutcomesSection from '../sections/ConnectedEnterprise/OutcomesSection/OutcomesSection.jsx';
import ImpactStories from '../sections/ConnectedEnterprise/ImpactStories/ImpactStories.jsx';
import PartnerEcosystem from '../sections/Home/PartnerEcosystem/PartnerEcosystem.jsx';
import PartnerCTA from '../sections/Home/PartnerCTA/PartnerCTA.jsx';
import Footer from '../layout/Footer/Footer.jsx';

const ConnectedEnterprise = () => {
  return (
    <>
    <PageTransition />
      <Header />
      <div className="ce-hero-section">
        <CEHero />
        <div className="ce-askbar-container">
          <Askbar />
        </div>
      </div>
      <FutureReady />
      <IntegrationImpact />
      <OutcomesSection />
      <ImpactStories />
      <PartnerEcosystem />
      <PartnerCTA />
      <Footer />
    </>
  );
};

export default ConnectedEnterprise;