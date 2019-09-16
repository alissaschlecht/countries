import React, { Component } from 'react';
import { ReactComponent as Afghanistan } from "./assets/Afghanistan.svg"
import './CountryImage.scss';


class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSize: '150px',
		}

		this.changeSvgSize = this.changeSvgSize.bind(this);
		this.updateSize = this.updateSize.bind(this);
	}

	changeSvgSize() {
		console.log(this.props.imgSize);
	    this.setState({imgSize: this.props.imgSize });
	}

	updateSize() {
		this.setState({imgSize: '10px'});
		console.log('updated size locally');
	}

	render(){
		console.log(this.state.imgSize);
		return (
			<div>
				<Afghanistan
					className="someClassThatWillBeUsedInCSS"
					id="sampleSVG"
					alt="icon"
					width={this.state.imgSize}
					height={this.state.imgSize}
					fill={this.props.selectedColor}
				/>
				<button onClick={this.updateSize}>try me locally</button>
			</div>
		)
	}
}


export default CountryImage;
