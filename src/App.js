import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import '../src/assets/scss/main.scss'
import Home from './components/landingPage/Home';


const App = () => {
  return (
          <BrowserRouter>
              <Route exact path="/" component={Home} />
          </BrowserRouter>

   
  );
};

export default App;