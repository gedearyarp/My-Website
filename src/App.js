import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Achievements, Projects, Home, AboutMe, Contact } from './pages/';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/AboutMe" exact component={() => <AboutMe />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route path="/Achievements" exact component={() => <Achievements />} />
          <Route path="/Projects" exact component={() => <Projects />} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
