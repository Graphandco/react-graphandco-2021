//import StartingPageContent from '../components/StartingPage/StartingPageContent';
import PageAttributes from './PageAttributes';
import { Atouts, Hero, Presentation } from '../components/HomePage';
import { motion } from 'framer-motion';

const HomePage = ({ variant, transition }) => {
  return (
    <>
      <motion.div initial="initial" animate="in" exit="out" variants={variant} transition={transition}>
        <PageAttributes bodyID="home" pageTitle="Accueil" />
        <Hero />
        <Presentation />
        <Atouts />
        {/* <ContactSection /> */}
        {/* <StartingPageContent /> */}
      </motion.div>
    </>
  );
};

export default HomePage;
