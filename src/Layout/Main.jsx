import React, { Component } from "react";
import AllMovies from "../Components/AllMovies";
import Loader from "../Components/Loader";
import Search from "../Components/Search";

export default class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=9dfc7ef&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str)=>{
    fetch(`http://www.omdbapi.com/?apikey=9dfc7ef&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };


  render() {
    return (
      <div className="container content my-4">

       <Search searchMovie = {this.searchMovies} />

        {this.state.movies.length ? (
          <AllMovies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
