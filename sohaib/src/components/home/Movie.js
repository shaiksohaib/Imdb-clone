import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';



export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    const FavouriteComponent = this.props.favouriteComponent
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="image-container col-md-4 card card-body bg-dark ">
            <img src={movie.Poster}   className=" thumbnail" alt="Poster" />
           
            <div className="overlay d-flex align-items-center justify-content-center">
              <FavouriteComponent></FavouriteComponent>
           </div>
          </div>
          
          <div className="col-md-8">
            <h2 className="mb-4 text-light">{movie.Title}</h2>
            <ul className="list-group  ">
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info" >Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info">Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info">Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info"> IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info">Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info">Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item bg-dark text-light">
                <strong className= "text-info">Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12 ">
              <h3 className= "text-info">About </h3>
              {movie.Plot}
              <hr />
              
              <Link to="/" className="btn btn btn-primary text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
