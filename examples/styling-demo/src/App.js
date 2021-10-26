import { Switch, Route, Link } from "react-router-dom";

import CSSButton from "./components/CSSButton/CSSButton";
import InlineStylesButton from "./components/InlineStylesButton/InlineStylesButton";
import CSSModuleButton from "./components/CSSModuleButton/CSSModuleButton";
import CSSInJSButton from "./components/CSSInJSButton/CSSInJSButton";
import StyledButton from "./components/StyledButton/StyledButton";
import MUIButton from "./components/MUIButton/MUIButton";

function App() {
  return (
    <div className="App">
      <li>
        <ul>
          <Link to="/css-button">css-button</Link>
        </ul>
        <ul>
          <Link to="/inline-styles-button">inline-styles-button</Link>
        </ul>
        <ul>
          <Link to="/css-module-button">css-module-button</Link>
        </ul>
        <ul>
          <Link to="/css-in-js-button">css-in-js-button</Link>
        </ul>
        <ul>
          <Link to="/styled-button">styled-button</Link>
        </ul>
        <ul>
          <Link to="/mui-button">mui-button</Link>
        </ul>
      </li>
      <Switch>
        <Route
          exact
          path="/css-button"
          component={() => <CSSButton>CLICK ME</CSSButton>}
        />
        <Route
          exact
          path="/inline-styles-button"
          component={() => <InlineStylesButton>CLICK ME</InlineStylesButton>}
        />
        <Route
          exact
          path="/css-module-button"
          component={() => <CSSModuleButton>CLICK ME</CSSModuleButton>}
        />
        <Route
          exact
          path="/css-in-js-button"
          component={() => <CSSInJSButton>CLICK ME</CSSInJSButton>}
        />
        <Route
          exact
          path="/styled-button"
          component={() => <StyledButton>CLICK ME</StyledButton>}
        />
        <Route
          exact
          path="/mui-button"
          component={() => <MUIButton>CLICK ME</MUIButton>}
        />
      </Switch>
    </div>
  );
}

export default App;
