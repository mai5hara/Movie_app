import React,{Component} from 'react';
import {fetchMovies} from '../actions/movieActions';


export default class Search extends Component {
    state = {
        searchValue: []
    }

    handleChange = (e) => {
        this.setState({searchValue: e.target.value})
    }

    resetInputField = () => {
        this.setState({searchValue: ''})
    }

    callSearchFunction = (e) => {
        e.preventDefault();
        this.props.dispatch(fetchMovies(this.state.searchValue));
    }

    render(){
        return (
            <div>
                <input 
                    type="text"
                    onChange={this.handleChange}
                />
                <button 
                    onClick={() => 
                    this.props.dispatch(fetchMovies(this.state.searchValue))}
                >
                    Search
                </button>
            </div>
        )
    }
}