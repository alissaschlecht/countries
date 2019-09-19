import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import countries from '../CountryImage/Countries';

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
const parsedCountryArray = countries.map((element, index) => {
	element.data = ReactHtmlParser(element.data, { transform: transform });
	return element;
});
console.log(parsedCountryArray);

export default parsedCountryArray;