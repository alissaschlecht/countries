import React, { Component } from 'react';
import './SearchBar.scss';


class SearchBar extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<label>Search</label>
				<input
					type="text"
					placeholder="Search for a country"
					onChange={ this.props.query }
					onKeyPress={ this.props.search }
				/>
				<button onClick={this.props.search}>
					Search
				</button>
			</div>
		)
	}
}

export default SearchBar;
