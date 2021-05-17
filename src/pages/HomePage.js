import { useContext } from 'react';
import StartingPageContent from '../components/StartingPage/StartingPageContent';
import AuthContext from '../store/auth-context';

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <StartingPageContent />
      {authCtx.isLoggedIn && (
          <span>Hello</span>
        )}
    </div>
  )
};

export default HomePage;
