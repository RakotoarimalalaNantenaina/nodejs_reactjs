import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Test from './component/test'
import Liste from './component/liste'
import Ajouter from './component/ajouter'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="pp">
      <Router>
      <div className="App">
        <header className="App-header">
            <Route path="/test" component={Test} />
            <Route path="/list" component={Liste} />
            <Route path="/ajouter" component={Ajouter} />
        </header>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
