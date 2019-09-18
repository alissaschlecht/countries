import React, { Component } from 'react';
import './CountryImage.scss';
import countries from './Countries';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

//make sure svg props are correct syntax
const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'svg') {
    const child = node.children[0];
    const { width, height, viewbox, preserveaspectratio } = node.attribs;
    return (
      <svg
        key={index}
        width={width}
        height={height}
        viewBox={viewbox}
        preserveAspectRatio={preserveaspectratio}
      >
        {convertNodeToElement(child, index, transform)}
      </svg>
    );
  }
}

//parse string into xml (html) for react
let parsedCountryArray = countries.map((element, index) => {
		element.data = ReactHtmlParser(element.data, { transform: transform })
		return element;
});

class CountryImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSize: '100px'
		}
	}

	render(){
		// const eachCountry = parsedCountryArray.map((item, key) => 
		//     <li key={item.id}>{item.data[0]}</li>
		// );
		return (
			<div>
				{parsedCountryArray.map((item, key) => (
			    <div className="countryContainer" id={item.title} onClick={this.props.selectCountry} key={item.id}>{item.data[0]}</div>
				))}
		    {/*{eachCountry}
				<Afghanistan
					className="someClassThatWillBeUsedInCSS"
					id="sampleSVG"
					alt="icon"
					width={this.state.imgSize}
					height={this.state.imgSize}
					fill={this.props.selectedColor}
					onClick={this.props.selectCountry}
				/>*/}
			</div>
		)
	}
}


export default CountryImage;
