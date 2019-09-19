import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import countries from './Countries';
import './CountryImage.scss';

//make sure svg props are correct syntax
const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'svg') {
    const child = node.children[0];
    const { width, height, viewbox, preserveaspectratio, fill } = node.attribs;
    return (
      <svg
        key={index}
        width={width}
        height={height}
        viewBox={viewbox}
        preserveAspectRatio={preserveaspectratio}
        fill={'#333'}
      >
        {convertNodeToElement(child, index, transform)}
      </svg>
    );
  }
}

//parse string into xml (html) for react
let parsedCountryArray = countries.map((element, index) => {
	element.data = ReactHtmlParser(element.data, { transform: transform })
  console.log(element.data[0])
	return element;
});

const CountryImage = (props) => {
	return (
		<div>
			{parsedCountryArray.map((item, key) => (
		    <div className="countryContainer" id={item.title} style={{color: props.selectedColor}} onClick={props.selectCountry} key={item.id}>{item.data[0]}</div>
			))}
		</div>
	)
}


export default CountryImage;
