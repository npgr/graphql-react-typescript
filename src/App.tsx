import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "pages/Home";
import { AppHeader } from "components/AppHeader";
//import './App.css'

const App: React.FC = () => (
  <BrowserRouter>
    <AppHeader />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* 
      <Route path='/detail/:id' component={Detail} />
      <Route path='/about' component={About} /> 
      Not found Page
      */}
    </Switch>
  </BrowserRouter>
);

export default App;
