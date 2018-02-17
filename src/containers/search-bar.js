import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: null };
    }
    onInputChange(event){
        conole.log(event.target.value);
    }
    render() {
        return (
            <form className='input-group'>
                <input
                    placeholder='Get a five-day forcast in your favorite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondry'> Submit</button>
                </span>
            </form>
        );
    }
}