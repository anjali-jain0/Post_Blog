import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Post from './post';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/contact' component={Contact} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
