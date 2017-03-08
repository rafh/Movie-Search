import React, { Component } from 'react';

class Genres extends Component {

    render() {
        let genres;
        if( this.props.movies.genres ) {
            console.log(genres);
            var genres = [];
            var genres = this.props.movie.genres.map(genre => {
                return (
                    <Genres key={genre.id} genre={genre.name} />
                )
            })
        }
        return (
            <p>{genres}</p>
        );
    }
}

Genres.propTypes = {
    // todos: React.PropTypes.array,
    // onDelete: React.PropTypes.func
}

export default Genres;
