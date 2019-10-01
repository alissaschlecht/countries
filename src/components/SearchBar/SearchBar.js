import React, { Component } from 'react';
import './SearchBar.scss';


class SearchBar extends Component {
	
	render(){
		return (
			<div className="searchField">
				<input
					type="text"
					value={ this.props.value }
					placeholder="Search for a country"
					className="searchInput"
					aria-label="Search"
					aria-controls="top-search"
					onChange={ this.props.query }
				/>
			</div>
		)
	}
}

export default SearchBar;
