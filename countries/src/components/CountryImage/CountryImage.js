import React, { Component } from 'react';
import { ReactComponent as Afghanistan } from "./assets/Afghanistan.svg"
import './CountryImage.scss';


class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSize: '550px'
		}

		this.changeSvgSize = this.changeSvgSize.bind(this);
		this.updateSize = this.updateSize.bind(this);
	}

	changeSvgSize() {
	    this.setState({imgSize: this.props.imgSize });
	}

	updateSize() {
		this.setState({imgSize: '10px'});
		console.log('updated size locally');
	}



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
				<button onClick={this.updateSize}>try me locally</button>
			</div>
		)
	}
}


export default CountryImage;
