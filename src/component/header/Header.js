import React, { Component } from 'react';
import { connect } from 'react-redux'
import './header.css';

class header extends Component {

    onChange = (event) => {
        //console.log(event.target.value);
        this.props._HandleDispatchFilterToStore(event.target.value);
    }
    render() {
        return (
            <div id="header">
                <h5 className="header-title">my movie app</h5>
                <form>
                    <select id="select-category" onChange={(event) => this.onChange(event)}>
                        <option value="">...</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </form>
            </div>
        )
    }
}

function mapDispatchStateToProps(dispatch) {
    return {
        _HandleDispatchFilterToStore(data) {
            dispatch({ type: 'FILTER_CATEGORY', payload: data })
        }
    }
}

export default connect(
    '',
    mapDispatchStateToProps
)(header)