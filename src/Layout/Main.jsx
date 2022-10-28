import React, { Component } from 'react';

import React from 'react';
import AllMovies from '../Components/AllMovies';

export default class Main extends Component {


  state = {
    movies : []
  }


  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=9dfc7ef&s=panda")
      .then (response => response.json())
      .then(data => this.setState(movies = {data.Search}))
  }

  render() {
    return (
      <div className='container content'>
        <AllMovies movies={this.state.movies} />
      </div>
    );
  }
}

