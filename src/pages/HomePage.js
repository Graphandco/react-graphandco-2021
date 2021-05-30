import Atouts from "../components/HomePage/Atouts";
import Hero from "../components/HomePage/Hero";
import Presentation from "../components/HomePage/Presentation";
import StartingPageContent from "../components/StartingPage/StartingPageContent";
import PageAttributes from "./PageAttributes";

const HomePage = () => {
   return (
      <>
         <PageAttributes bodyID="home" pageTitle="Accueil" />
         <Hero />
         <Presentation />
         <Atouts />
         <StartingPageContent />
      </>
   );
};

export default HomePage;
