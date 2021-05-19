import React from "react";
import { ToggleDarkMode } from "./ToggleDarkMode";
import Menu from "./Menu";

const Header = ({ theme, toggleTheme }) => {
   return (
      <header>
         <div className="header-wrapper container">
            <Menu />
            <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
         </div>
      </header>
   );
};
export default Header;
