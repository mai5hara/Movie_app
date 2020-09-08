import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './containers/movieList';
import Navbar from './containers/navbar';
import SignIn from './containers/signIn';
import SignUp from './containers/signUp';
import MovieDetails from './containers/movieDetaile';
import Review from './containers/review';
import Mypage from './pages/Mypage';
import Comment from './containers/comment';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/:id/comments/:userId" component={Comment} />
          <Route path="/movies/:id/reviews/new" component={Review} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
