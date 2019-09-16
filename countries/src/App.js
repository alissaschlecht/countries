import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import SvgToPngConverter from './components/SvgToPngConverter/SvgToPngConverter';
import { saveSvgAsPng } from 'save-svg-as-png';

import './styles/App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSize: '150px',
      countryColor: "#333333",
      imgURL: "", 
      selectedCountries: []
    }

    this.updateColor = this.updateColor.bind(this);
    this.changeSvgSize = this.changeSvgSize.bind(this);
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

  saveAsPng = () => {
    saveSvgAsPng(document.getElementById("sampleSVG"), "sampleSVG.png");
  }

  createPNGFromSVG = () => {
    let _this = this;
    let inputIMG = "https://restcountries.eu/data/afg.svg"
    new SvgToPngConverter().convertFromInput(inputIMG, function(imgData){
      _this.setState({imgURL: imgData});
    });
  }

  render(){
  // createPNGFromSVG();
		return (
      <div className="App">
        <div className="container">
          <h1>Countries</h1>
          <SearchBar />
          <CountryImage selectedColor={this.state.countryColor} changeSvgSize={this.state.imgSize}/>
          <ColorPicker updateColor={this.updateColor} />
          <button onClick={this.state.changeSvgSize}>Change size to 25px</button>
          <button onClick={this.saveAsPng}>Save as PNG</button>
          <SvgToPngConverter />
          <img src={this.state.imgURL} alt="name of country" style={{height: '200px'}} />
          <a href="data:image/png;base64" download="filename.png">  
              <img src={`data:image/png;base64 ${this.state.imgURL}`} alt="name of country" style={{height: '200px'}} />
          </a>
          <button onClick={this.createPNGFromSVG}>change to png in state</button>
          
        </div>
      </div>
    );
  }
}

export default App;
