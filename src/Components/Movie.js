import React, { Component } from 'react';

class Movie extends Component {

    render() {
        return (
            <li className="Movie">
                <strong>{this.props.movie.title}:</strong>
            </li>
        );
    }
}

Movie.propTypes = {
    todos: React.PropTypes.object,
}

export default Movie;
