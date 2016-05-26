import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
	}
	onInputChange(e){
		this.setState({term:e.target.value});
		this.props.onSearchTermChange(e.target.value);
	}
	render() {
		return (
			<input 
			type="text" 
			placeholder="Type here to search" 
			value={this.state.term} 
			onChange={(e)=>{this.onInputChange(e)}} />
		);
	}
}
