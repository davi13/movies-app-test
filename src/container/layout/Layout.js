import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Header from '../../component/header/Header';

//BDD
import { movies } from '../../bddLocal/bddLocal';

//Styles
import './layout.css';


class Layout extends Component {
    componentDidMount() {
        this.props._HandleDispatchDataToStore(movies)
    }
    render() {
        return (
            <div className="layout">
                <Header />
                {this.props.children}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        _HandleDispatchDataToStore(dataMovies) {
            dispatch({ type: 'DATA_MOVIES', payload: dataMovies })
        }
    }
}

export default connect(
    '',
    mapDispatchToProps
)(Layout)
