import StartingPageContent from '../components/StartingPage/StartingPageContent';
import PageAttributes from './PageAttributes';
import { Atouts, Hero, Packs, Presentation } from '../components/HomePage';

const HomePage = () => {
  return (
    <>
      <PageAttributes bodyID="home" pageTitle="Accueil" />
      <Hero />
      <Presentation />
      <Atouts />
      <Packs />
      <StartingPageContent />
    </>
  );
};

export default HomePage;
