//CORE
import { Switch, Route, Redirect } from 'react-router-dom';

//STYLES
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './styles/useDarkMode';
import './styles/style.scss';

//PAGES
import HomePage from './pages/HomePage';
import Tips from './pages/Tips';
import Contact from './pages/Contact';
import Prestations from './pages/Prestations';
import MentionsLégales from './pages/MentionsLégales';
import PolitiqueConfidentialité from './pages/PolitiqueConfidentialité';

//COMPONENTS
import Header from './components/Header/Header';
import { AddTip } from './components/Tips/AddTip';
import { EditTip } from './components/Tips/EditTip';
//import Realisations from "./pages/Realisations";
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login';
// import { Signup } from './components/Signup/Signup';

//CONTEXT
import { GlobalProvider } from './context/GlobalState';
// import { useAuth } from './hooks';
import { Projects } from './components/Projets';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // const { isAuthed } = useAuth();

  return (
    <GlobalProvider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          {/* <Signup /> */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/tips">
              <Tips />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/realisations">
              <Projects />
            </Route>
            <Route path="/prestations">
              <Prestations />
            </Route>
            <Route path="/mentions-legales">
              <MentionsLégales />
            </Route>
            <Route path="/politique-confidentialite">
              <PolitiqueConfidentialité />
            </Route>
            <Route path="/add" component={AddTip} />
            <Route path="/edit/:id" component={EditTip} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
