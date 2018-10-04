import React, { Component } from 'react';
import { connect } from 'react-redux';
//React Icons
import { FaThumbsUp, FaThumbsDown, FaTrashAlt } from "react-icons/fa";
import './movielist.css';

// const MovieList = props => {
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: this.props.item.likes,
            dislike: this.props.item.dislikes
        }
    }

    like = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    dislike = () => {

        this.setState({
            dislike: this.state.dislike + 1
        })
    }

    onClickTrash = () => {
        this.props._HandleDispatchDeleteCardToStore(this.props.id);
    }

    render() {

        return (
            <div className="card">
                <div className="title">
                    <h6>{this.props.item.title}</h6>
                </div>
                <div className="category">
                    {this.props.item.category}
                </div>
                <div className="likedislike">
                    <span onClick={this.like}><FaThumbsUp className="iconup" />  {this.state.like}</span>
                    <span onClick={this.dislike}><FaThumbsDown className="icondown" />  {this.state.dislike}</span>
                    <span><FaTrashAlt className="trash" onClick={this.onClickTrash} /></span>
                </div>
            </div>
        )
    }

}
function mapDispatchStateToProps(dispatch) {
    return {
        _HandleDispatchDeleteCardToStore(data) {
            dispatch({ type: 'DELETE_MOVIES', payload: data })
        }
    }
}

export default connect(
    '',
    mapDispatchStateToProps

)(MovieList);