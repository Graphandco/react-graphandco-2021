import { useContext } from 'react';
import Atouts from '../components/HomePage/Atouts';
import Hero from '../components/HomePage/Hero';
import Presentation from '../components/HomePage/Presentation';
import StartingPageContent from '../components/StartingPage/StartingPageContent';
import AuthContext from '../store/auth-context';

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Hero />
      <Atouts />
      <Presentation />
      <StartingPageContent />
      {authCtx.isLoggedIn && (
          <span>Hello</span>
        )}
    </>
  )
};

export default HomePage;
