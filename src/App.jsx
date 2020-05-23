import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
// import Movie from './components/Movie';
import Navbar from './components/layout/Navbar';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import MovieDetails from './components/MovieDetail';

import './App.css'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={MovieList} />
              <Route path='/movielist/:id' component={MovieDetails} />
              <Route path='/signup' component={SignUp} />
              <Route path='/signin' component={SignIn} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
