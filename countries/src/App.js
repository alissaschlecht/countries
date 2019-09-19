import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Select from 'react-select';
// import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import createPNGFromSVGAndDownload from './components/SvgToPngConverter/SvgToPngConverter';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

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
      imgSize: 200,
      countryColor: "#333333",
      selectedCountries: []
    }

    this.updateColor = this.updateColor.bind(this);
    this.changeSvgSize = this.changeSvgSize.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.generateFiles = this.generateFiles.bind(this);
  }

  changeSvgSize = selectedImgSize => {
    this.setState({ imgSize: selectedImgSize.value });
    console.log(`Option selected:`, selectedImgSize);
    console.log(`state:`, this.state.imgSize);
  };

  updateColor = (color) => {
    this.setState({
      countryColor: color
    });
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
   this.state.selectedCountries.map((value, index) => {
     createPNGFromSVGAndDownload(value, this.state.imgSize, this.state.imgSize, `${value}.png`);
   });
 }

  render(){
    const { selectedImgSize } = this.state;
    console.log('ids after runs', this.state.selectedCountries);

		return (
      <div className="App">
        <div className="container">
          {/*<h1>Countries</h1>
          <SearchBar />*/}
         <Select
            value={selectedImgSize}
            onChange={this.changeSvgSize}
            options={options}
            style={{backgroundColor: "red"}}
          />
          <CountryImage selectedColor={this.state.countryColor} selectCountry={this.selectCountry} style={{width: '100px'}} />
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
