//import StartingPageContent from '../components/StartingPage/StartingPageContent';
import PageAttributes from './PageAttributes';
import { Atouts, Hero, ContactSection, Presentation } from '../components/HomePage';

const HomePage = () => {
  return (
    <>
      <PageAttributes bodyID="home" pageTitle="Accueil" />
      <Hero />
      <Presentation />
      <Atouts />
      <ContactSection />
      {/* <StartingPageContent /> */}
    </>
  );
};

export default HomePage;
