import React, { Component } from 'react';
import { ReactComponent as Afghanistan } from "./assets/Afghanistan.svg"
import './CountryImage.scss';


class CountryImage extends Component {
	constructor(props) {
		super(props);
	}

	changeSvgSize() {
		console.log('i was clicked');
	}

	render(){
		return (
			<div>
				<Afghanistan
					className="someClassThatWillBeUsedInCSS"
					alt="icon"
					width="150px"
					height="150px"
					fill={this.props.selectedColor}
				/>
			</div>
		)
	}
}


export default CountryImage;
