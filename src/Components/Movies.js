import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {

    render() {
        let movies;
        if( this.props.movies ) {
            movies = this.props.movies.map( movie => {
                // console.log(movies);
                return (
                    <Movie key={movie.id} movie={ movie }  />
                );
            });
        }
        return (
            <div className="Movies" >
                {movies}
            </div>
        );
    }
}

Movies.propTypes = {
    // todos: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default Movies;
