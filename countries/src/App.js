import React, { Component } from 'react';
// import logo from './logo.svg';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Select from 'react-select';
import SearchBar from './components/SearchBar/SearchBar';
// import CountryImage from './components/CountryImage/CountryImage';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import createPNGFromSVGAndDownload from './components/SvgToPngConverter/SvgToPngConverter';
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
      selectedCountries: [],
      query: '',
      matchingCountries: []
    }

    this.updateColor = this.updateColor.bind(this);
    this.changeSvgSize = this.changeSvgSize.bind(this);
    this.changeFileType = this.changeFileType.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.query = this.query.bind(this);
    this.transform = this.transform.bind(this);
  }

  changeSvgSize = selectedImgSize => {
    this.setState({ imgSize: selectedImgSize.value });
  };

  changeFileType = selectedFileType => {
    this.setState({ fileType: selectedFileType.value });
  };

  updateColor = color => {
    this.setState({
      color: color
    });
    const svgCollection = document.querySelectorAll(".countryContainer svg");
    const svgArray = Array.from(svgCollection);
    return svgArray.map(svg => svg.setAttribute("fill", this.state.color));
  }

  query(event) {
    this.setState( { query : event.target.value } );
    console.log('event', event);
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
      createPNGFromSVGAndDownload(value, `${value}.${this.state.fileType}`, this.state.fileType, this.state.imgSize, this.state.imgSize);
      return null;
    });
  }

  //make sure svg props are correct syntax
  transform = (node, index) => {
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
        {convertNodeToElement(child, index, this.transform)}
        </svg>
      );
    }
  }

  render(){
    const { selectedImgSize } = this.state;
    const { selectedFileType } = this.state;



    //parse string into xml (html) for react
    const parsedCountryArray = countries.map((element, index) => {
      const newElement = {
        ...element,
        data: ReactHtmlParser(element.data, { transform: this.transform })
      }
      return newElement;
    });

    return (
      <div className="App">
      <div className="container">
      <h1>Countries</h1>
      <SearchBar
      query={this.query}
      value={this.state.query}
      />
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

      {parsedCountryArray.filter(country => country.title.includes(this.state.query)).map((item, key) => (
        <div className="countryContainer" id={item.title} onClick={this.selectCountry} key={item.id}>{item.data[0]}</div>
      ))}
      {/* <CountryImage selectedColor={this.state.color} selectCountry={this.selectCountry} /> */}
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
