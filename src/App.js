import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import Projects from './components/Projects/Projects';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TestAuth from './pages/TestAuth';
import { AddTip } from "./components/Tips/AddTip";
import { EditTip } from "./components/Tips/EditTip";
import AuthContext from './store/auth-context';
import { GlobalProvider } from "./components/Context/GlobalState";
import Tips from './pages/Tips';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <GlobalProvider>
      <Layout>
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
    </GlobalProvider>
  );
}

export default App;
