import React, { Component } from 'react';
import $ from 'jquery';
import Movies from './Components/Movies';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    getMovies() {
        $.ajax({
            // url: 'https://jsonplaceholder.typicode.com/todos',
            url: 'https://api.themoviedb.org/3/movie/76341?api_key=3963cd7dc78abf65997e8ce1d3f9b148',
            dataType: 'json',
            cache: false,
            success: function(movies) {
                this.setState({ movies: movies.movies }, function() {
                    console.log(movies);
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
            }
        })
    }

    componentWillMount(){
        this.getMovies();
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        return (
            <div className="App">
                <hr/>
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}

export default App;
