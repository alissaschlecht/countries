import React, { Component } from 'react';
import './CountryImage.scss';
import parse from 'html-react-parser';
import countries from './Countries';


class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: countries
		};
	}

	stringToSvg(svgString) {
		const parser = new DOMParser();
		console.log(this.state.countries);
		let SVG = parser.parseFromString(svgString, "image/svg+xml");
		console.log(SVG);
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
						{parse(`${country.data}`)}
					</div>
					</li>
				))
				}
			</ol>
			</div>
		)
	}
}

// const CountryImage = () => {
// 	return (

// 	)
// }

export default CountryImage;
