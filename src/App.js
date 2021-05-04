import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./comonents/GlobalStyle";
import Nav from "./comonents/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
