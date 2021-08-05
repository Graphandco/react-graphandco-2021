//CORE
import { Switch, Route, Redirect } from 'react-router-dom';

//STYLES
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './styles/useDarkMode';
import './styles/style.scss';

//ANIMATION
import { AnimatePresence } from 'framer-motion';

//PAGES
import HomePage from './pages/HomePage';
import Prestations from './pages/Prestations';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import MentionsLégales from './pages/MentionsLégales';
import PolitiqueConfidentialité from './pages/PolitiqueConfidentialité';
import Tips from './pages/Tips';

//COMPONENTS
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AddTip } from './components/Tips/AddTip';
import { EditTip } from './components/Tips/EditTip';
import { Login } from './components/Login';

//CONTEXT
import { GlobalProvider } from './context/GlobalState';
// import { useAuth } from './hooks';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const { isAuthed } = useAuth();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  return (
    <GlobalProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact>
                <HomePage variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/contact">
                <Contact variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/realisations">
                <Realisations variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/prestations">
                <Prestations variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/mentions-legales">
                <MentionsLégales variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/politique-confidentialite">
                <PolitiqueConfidentialité variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/login">
                <Login variant={pageVariants} transition={pageTransition} />
              </Route>
              <Route path="/tips">
                <Tips />
              </Route>
              <Route path="/add" component={AddTip} />
              <Route path="/edit/:id" component={EditTip} />
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
