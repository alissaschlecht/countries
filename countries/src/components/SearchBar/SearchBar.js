import React, { Component } from 'react';
import './SearchBar.scss';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	search() {
		console.log('search', this.state.query);
	}

	render(){
		return (
			<div>
				<label>Search</label>
				<input
					type="text"
					placeholder="search for a country"
					onChange={event => this.setState({query: event.target.value})}
					onKeyPress={event => {
							if (event.key === 'Enter') {
								this.search();
							}
						}
					}
				/>
				<button onClick={() => this.search()}>
					Search
				</button>
			</div>
		)
	}
}

export default SearchBar;
