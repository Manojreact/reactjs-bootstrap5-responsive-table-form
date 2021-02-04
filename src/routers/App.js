import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Catagory from './../componets/catagory';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
function App() {

  return (
    <div className="App">
   <Router>
        <Switch>
          <Route exact path="/" component={Catagory} />
          </Switch>
            </Router>

    </div>
  );
}

export default App;
