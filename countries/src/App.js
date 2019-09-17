import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import convertFromInput from './components/SvgToPngConverter/SvgToPngConverter';

import './styles/App.scss';



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

  updateColor = (color) => {
    this.setState({
      countryColor: color
    });
  }

  changeSvgSize = () => {
    this.setState({
      imgSize: '25px'
    });
    this.props.changeSvgSize(this.state.imgSize);
  }

  createPNGFromSVG = () => {
    let _this = this;
    let inputIMG = "https://restcountries.eu/data/afg.svg"
    convertFromInput(inputIMG, function(imgData){
      _this.setState({imgURL: imgData});
    }, this.state.imgSize, this.state.imgSize);
  }

	selectCountry = (event) => {
		let ids = this.state.selectedCountries;
		let clickedCountry = event.currentTarget.id;
    let index = ids.indexOf(clickedCountry);
		if(index === -1){
		  // ids.push(clickedCountry);
			this.setState({selectedCountries : ids.concat([clickedCountry])});
		} else {
	    this.setState({selectedCountries: ids.filter(id => id !== clickedCountry) });
		}
	}

  render(){
    console.log('return', this.state.selectedCountries);
		return (
      <div className="App">
        <div className="container">
          <h1>Countries</h1>
          <SearchBar />
          <CountryImage selectedColor={this.state.countryColor} changeSvgSize={this.state.imgSize} selectCountry={this.selectCountry}/>
          <br/>
          <ColorPicker updateColor={this.updateColor} />
          <br/>
          <button onClick={this.state.changeSvgSize} style={{backgroundColor: "lightgray"}}>Change size to 25px</button>
          {this.state.imgURL ?
            <a href={`data:image/png;base64 ${this.state.imgURL}`}  download="filename.png">
                <img src={`data:image/png;base64 ${this.state.imgURL}`} alt="name of country" style={{height: '50px'}} />
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
