import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Select from 'react-select';
// import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
// import convertFromInput from './components/SvgToPngConverter/SvgToPngConverter';

import './styles/App.scss';

const options = [
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
  { value: 150, label: 150 },
  { value: 250, label: 250 },
  { value: 500, label: 500 },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSize: 100,
      countryColor: "#333333",
      selectedCountries: []
    }

    this.updateColor = this.updateColor.bind(this);
    this.changeSvgSize = this.changeSvgSize.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  changeSvgSize = selectedImgSize => {
    this.setState({ imgSize: selectedImgSize.value });
    console.log(`Option selected:`, selectedImgSize);
  };

  updateColor = (color) => {
    this.setState({
      countryColor: color
    });
  }

  createPNGFromSVGAndDownload = () => {

    const canvas = document.createElement('canvas');
    const imgPreview = document.createElement('img');
    imgPreview.style = "position: absolute; top: -99999px";
    document.body.appendChild(imgPreview);

    const ctx = canvas.getContext('2d');
    const data = (new XMLSerializer()).serializeToString(document.querySelector('svg'));
    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    const url = DOMURL.createObjectURL(svgBlob);

    const width = this.state.imgSize;
    const height = this.state.imgSize;

    img.src = url;

    canvas.width = width;
    canvas.height = height;

    img.onload = function () {
      ctx.drawImage(img, 0, 0, imgPreview.clientWidth, imgPreview.clientHeight, 0, 0, width, height);
      DOMURL.revokeObjectURL(url);

      const imgURI = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');

      const evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
      });

      const a = document.createElement('a');
      a.setAttribute('download', 'MY_COOL_IMAGE.png');
      a.setAttribute('href', imgURI);
      a.setAttribute('target', '_blank');

      a.dispatchEvent(evt);
    };

    imgPreview.src = url;
  }

	selectCountry = (event) => {
		let ids = this.state.selectedCountries;
		let clickedCountry = event.currentTarget;
    let index = ids.indexOf(clickedCountry.id);

		if(index === -1){
			this.setState({selectedCountries : ids.concat([clickedCountry])});
		} else {
	    this.setState({selectedCountries: ids.filter(id => id !== clickedCountry) });
		}
	}

  render(){
    const { selectedImgSize } = this.state;
    console.log('this.state.imgURL', this.state.imgURL);
    console.log('this.state', this.state.selectedCountries);
    // console.log(document.getElementById("sampleSVG"));
		return (
      <div className="App">
        <div className="container">
          {/*<h1>Countries</h1>
          <SearchBar />*/}
{/*          <Select
            value={selectedImgSize}
            onChange={this.changeSvgSize}
            options={options}
            style={{backgroundColor: "red"}}
          />*/}
          <CountryImage selectedColor={this.state.countryColor} selectCountry={this.selectCountry}/>
          <ColorPicker updateColor={this.updateColor} />

          <button onClick={this.createPNGFromSVGAndDownload} style={{backgroundColor: "lightgray"}}>download</button>
        </div>
      </div>
    );
  }
}

export default App;
