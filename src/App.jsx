import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './containers/movieList';
import Navbar from './containers/navbar';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import MovieDetails from './containers/movieDetaile';
import Review from './containers/review';
import Mypage from './pages/Mypage'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className="App"> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/:id/review" component={Review} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
