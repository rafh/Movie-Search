import React, { Component } from 'react';

class Movie extends Component {



    render() {

        var styles = {
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.props.movie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }

        return (
            <div className="Movie" style={styles}>
                <div className="col-50">
                    <img className="Movie__image" src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path} />
                </div>
                <div className="col-50 Movie__content">
                    <div>
                        <h2>{this.props.movie.title}</h2>
                        <strong>{this.props.movie.tagline}</strong>
                        <p>{this.props.movie.overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Movie.propTypes = {
    todos: React.PropTypes.object,
}

export default Movie;
