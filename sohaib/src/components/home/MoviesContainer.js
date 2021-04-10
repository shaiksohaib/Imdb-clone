import React, { Component } from 'react';

import { connect } from 'react-redux';
// import AddFavourites from "./AddFavourites.js";
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie}  /> //favouriteComponent ={AddFavourites}    //ADDED favouriteComponent ={AddFavourites} INSIDE MOVIECARD TAG 
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
  
const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
