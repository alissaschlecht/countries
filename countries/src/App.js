import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Select from 'react-select';
import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import createPNGFromSVGAndDownload from './components/SvgToPngConverter/SvgToPngConverter';
import parsedCountryArray from './components/XMLParser/XMLParser';
import countries from './components/CountryImage/Countries';

import './styles/App.scss';

const sizeOptions = [
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
  { value: 150, label: 150 },
  { value: 250, label: 250 },
  { value: 500, label: 500 },
];

const fileOptions = [
  { value: 'PNG', label: 'PNG' },
  { value: 'SVG', label: 'SVG' },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSize: 200,
      fileType: 'SVG',
      color: "#333333",
      selectedCountries: []
    }

    this.updateColor = this.updateColor.bind(this);
    this.changeSvgSize = this.changeSvgSize.bind(this);
    this.changeFileType = this.changeFileType.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  changeSvgSize = selectedImgSize => {
    this.setState({ imgSize: selectedImgSize.value });
  };

  changeFileType = selectedFileType => {
    this.setState({ fileType: selectedFileType.value });
  };

  updateColor = (color) => {
    this.setState({
      color: color
    });
    const svgCollection = document.querySelectorAll(".countryContainer svg");
    const svgArray = Array.from(svgCollection);
    console.log(svgArray);
    return svgArray.map(svg => svg.setAttribute("fill", this.state.color));
  }

	selectCountry = (event) => {
		let ids = this.state.selectedCountries;
		let clickedCountry = event.currentTarget.id;
    let index = ids.indexOf(clickedCountry);

		if(index === -1){
			this.setState({selectedCountries : ids.concat([clickedCountry])});
		} else {
	    this.setState({selectedCountries: ids.filter(id => id !== clickedCountry) });
		}
	}

 generateFiles = () => {
  console.log(this.state.fileType);
   this.state.selectedCountries.map((value, index) => {
     createPNGFromSVGAndDownload(value, `${value}.${this.state.fileType}`, this.state.fileType, this.state.imgSize, this.state.imgSize);
     return null;
   });
 }

  render(){
    const { selectedImgSize } = this.state;
    const { selectedFileType } = this.state;
    console.log('parsedCountryArray', parsedCountryArray);
    console.log('countries', countries);
		return (
      <div className="App">
        <div className="container">
          <h1>Countries</h1>
          <SearchBar />
         <Select
            value={selectedFileType}
            onChange={this.changeFileType}
            options={fileOptions}
          />
         <Select
            value={selectedImgSize}
            onChange={this.changeSvgSize}
            options={sizeOptions}
          />
          <CountryImage selectedColor={this.state.color} selectCountry={this.selectCountry} />
          <ColorPicker updateColor={this.updateColor} />

          <button onClick={this.generateFiles}>
            download
          </button>
        </div>
      </div>
    );
  }
}

export default App;
