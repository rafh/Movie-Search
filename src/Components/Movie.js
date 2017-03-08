import React, { Component } from 'react';
// import Genres from './Genres';

class Movie extends Component {

    render() {

        // iterate through genres array
        var genres = [];
        var genres = this.props.movie.genres.map(function(genre){
            return (
                <span className="Movie__cat" key={genre.id}> {genre.name}</span>
            )
        })

        // Create our number formatter.
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        })

        // return revenue in currency format
        var revenue = formatter.format(this.props.movie.revenue)

        // var styles = {
        //     backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.props.movie.backdrop_path})`,
        // }

        var bodyStyle = document.body.style;

        bodyStyle.backgroundImage = `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path})`;

        return (
            <div className="Movie" >
                <div className="col-50 Movie__image">
                    <img src={'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path} alt={this.props.movie.title}/>
                </div>
                <div className="col-50 Movie__content">
                    <div>
                        <h2>{this.props.movie.title}</h2>
                        <strong>{this.props.movie.tagline}</strong>
                        <p>{this.props.movie.overview}</p>
                        {genres}
                        <p className="green-font">{revenue}</p>
                        <p>{this.props.movie.vote_average}/10</p>
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
