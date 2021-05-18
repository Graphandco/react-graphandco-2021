//CORE
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//STYLES
import './styles/base.scss'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './styles/useDarkMode';
import { ToggleDarkMode } from './components/ToggleDarkMode';

//PAGES
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TestAuth from './pages/TestAuth';
import Tips from './pages/Tips';

//COMPONENTS
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import Projects from './components/Projects/Projects';
import { AddTip } from "./components/Tips/AddTip";
import { EditTip } from "./components/Tips/EditTip";

//CONTEXT
import AuthContext from './store/auth-context';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const authCtx = useContext(AuthContext);
  const [ theme, toggleTheme ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <GlobalProvider>
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Layout>
        <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path='/auth'>
              <AuthPage />
            </Route>
          )}
          <Route path='/profile'>
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>
          <Route path='/test-auth'>
            {authCtx.isLoggedIn && <TestAuth />}
            {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/tips'>
            <Tips />
          </Route>
          <Route path="/add" component={AddTip} />
          <Route path="/edit/:id" component={EditTip} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
