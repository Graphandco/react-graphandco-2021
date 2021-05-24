//CORE
import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//STYLES
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./styles/useDarkMode";
import "./styles/style.scss";

//PAGES
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Tips from "./pages/Tips";
import Contact from "./pages/Contact";

//COMPONENTS
import Header from "./components/Header/Header";
import { AddTip } from "./components/Tips/AddTip";
import { EditTip } from "./components/Tips/EditTip";
import Realisations from "./pages/Realisations";
import { Footer } from "./components/Footer";

//CONTEXT
import AuthContext from "./store/auth-context";
import { GlobalProvider } from "./context/GlobalState";

function App() {
   const authCtx = useContext(AuthContext);
   const [theme, toggleTheme] = useDarkMode();
   const themeMode = theme === "light" ? lightTheme : darkTheme;

   return (
      <GlobalProvider>
         <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Header theme={theme} toggleTheme={toggleTheme} />
               <main>
               <Switch>
                  <Route path="/" exact>
                     <HomePage />
                  </Route>
                  {!authCtx.isLoggedIn && (
                     <Route path="/auth">
                        <AuthPage />
                     </Route>
                  )}
                  <Route path="/tips">
                     <Tips />
                  </Route>
                  <Route path="/contact">
                     <Contact />
                  </Route>
                  <Route path="/realisations">
                     <Realisations />
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
