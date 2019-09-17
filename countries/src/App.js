import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Select from 'react-select';
// import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import convertFromInput from './components/SvgToPngConverter/SvgToPngConverter';

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
      imgSize: 150,
      countryColor: "#333333",
      imgURL: null,
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

  createPNGFromSVG = () => {
    let _this = this;
    let inputIMG = this.state.selectedCountries[0];
    console.log(this.state.selectedCountries[0]);
    convertFromInput(inputIMG, function(imgData){
      _this.setState({imgURL: imgData});
      console.log('i ran');
    }, this.state.imgSize, this.state.imgSize);
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
    console.log(this.state.selectedCountries);
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
          <CountryImage selectedColor={this.state.countryColor} selectCountry={this.selectCountry}/>
          <ColorPicker updateColor={this.updateColor} />
          {this.state.imgURL ?
            <a href={`data:image/png;base64 ${this.state.imgURL}`}  download="filename.png">
                <img src={`data:image/png;base64 ${this.state.imgURL}`} alt="name of country" style={{height: this.state.imgSize, width: this.state.imgSize}} />
            </a>
            : null
          }

          <button onClick={this.createPNGFromSVG} style={{backgroundColor: "lightgray"}}>change to png in state</button>
        </div>
      </div>
    );
  }
}

export default App;
