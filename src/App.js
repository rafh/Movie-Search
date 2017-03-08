import React, { Component } from 'react';
import $ from 'jquery';
import Movies from './Components/Movies';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    getMovies() {
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/155?api_key=3963cd7dc78abf65997e8ce1d3f9b148',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ movies: [data] }, function() {
                    console.log(data);
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
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}

export default App;
