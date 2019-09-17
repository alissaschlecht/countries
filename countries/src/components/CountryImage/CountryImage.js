import React, { Component } from 'react';
import { ReactComponent as Afghanistan } from "./assets/Afghanistan.svg"
import './CountryImage.scss';


class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSize: '100px'
		}

		// this.changeSvgSize = this.changeSvgSize.bind(this);
	}

	// changeSvgSize() {
	//     this.setState({imgSize: this.props.imgSize });
	//     console.log('props ran');
	// }


	render(){
		return (
			<div>
				<Afghanistan
					className="someClassThatWillBeUsedInCSS"
					id="sampleSVG"
					alt="icon"
					width={this.state.imgSize}
					height={this.state.imgSize}
					fill={this.props.selectedColor}
					onClick={this.props.selectCountry}
				/>
			</div>
		)
	}
}


export default CountryImage;
