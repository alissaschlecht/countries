import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import SearchBar from './components/SearchBar/SearchBar';
import CountryImage from './components/CountryImage/CountryImage';
import './styles/App.scss';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSize: 25,
      countryColor: "#333333"
    }
    this.changeSvgSize = () => {
      this.setState({
        imgSize: 55
      });
    }

    this.updateColor = this.updateColor.bind(this);
  }

  updateColor = (color) => {
    this.setState({
      countryColor: color
    });
  }
  render(){
		return (
      <div className="App">
        <div className="container">
          <h1>Countries</h1>
          <SearchBar />
          <button onClick={this.changeSvgColor}>click me</button>
          <CountryImage selectedColor={this.state.countryColor}/>
          <ColorPicker updateColor={this.updateColor}/>
        </div>
      </div>
    );
  }
}

export default App;
