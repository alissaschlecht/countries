import React, { Component } from 'react';
import './CountryImage.scss';
import countries from './Countries';


class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: countries
		};
	}

	componentDidMount() {
    var req = require.context("./assets", false, /.*\.svg$/);
    req.keys().forEach(function(key){
      req(key);
    });
 }

	changeSvgSize() {
		console.log('i was clicked');
	}

	render(){
		const { countries } = this.state;
		return (
			<div>
			<ol className="item">
				{
				countries.map(country => (
					<li key={country.id} align="start">
					<div>
						<p className="title">{country.title}</p>
						<img src={require("./assets/" + country.title + ".svg")} alt={country.title}  />
					</div>
					</li>
				))
				}
			</ol>
			</div>
		)
	}
}


export default CountryImage;
