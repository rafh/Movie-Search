import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {

    render() {
        let movies;
        if( this.props.movies ) {
            movies = this.props.movies.map( movie => {
                // console.log(todo);
                return (
                    <Movie key={movie.title} movie={ movie } />
                );
            });
        }
        return (
            <div className="Movie">
                <h3></h3>
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
