import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../movielist/MovieList';
import '../films/films.css'



class Films extends Component {
    HandleShowMovies = () => {
        if (this.props.filter === '') {
            return this.props.dataMovie.map((items, i) => <MovieList key={i} item={items} id={i} />)
        }
        else {
            let tab = this.props.dataMovie;
            let tabs = [];
            for (let i = 0; i < tab.length; i++) {
                if (tab[i].category === this.props.filter) {
                    tabs.push(tab[i]);


                }
            }

            if (tabs.length > 0 || tabs.length < 3) {
                return tabs.map((items, j) => <MovieList key={j} item={items} />)
            }
        }
    }


    render() {
        return (
            // <MovieList handleListMovies={handleListMovies} />
            <div className="wrapper">{this.HandleShowMovies()}</div>
        );
    }

}

function mapStateToProps(state) {
    return ({
        filter: state.filter,
        dataMovie: state.dataMovie
    })
}

export default connect(
    mapStateToProps,

    ''
)(Films)