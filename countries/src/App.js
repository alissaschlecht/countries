import React, { Component } from 'react';
import Select from 'react-select';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CheckBox from './components/CheckBox/CheckBox';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import createPNGFromSVGAndDownload from './components/SvgToPngConverter/SvgToPngConverter';
import countries from './components/CountryImage/Countries';
import checkCircle from './images/check-circle.svg';
import './styles/App.scss';

const sizeOptions = [
  { value: 25, label: '25 x 25' },
  { value: 50, label: '50 x 50' },
  { value: 100, label: '100 x 100' },
  { value: 150, label: '150 x 150' },
  { value: 250, label: '250 x 250' },
  { value: 500, label: '500 x 500'},
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
      query: '',
      selectedCountries: []
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

  toggleAllCountries = (event) => {
    const allIds = countries.map( country => country.title);
    const isChecked = event.currentTarget.checked;

    if(isChecked) {
      this.setState({ selectedCountries : allIds });
    } else {
      this.setState({ selectedCountries : [] });
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
    console.log('selectedCountries', this.state.selectedCountries);

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
          <div className="leftContainer">
            <div className="searchBlock">
              <h1>Countries</h1>
              <SearchBar
                query={this.query}
                value={this.state.query}
              />
            </div>
            <div className="checkBoxContainer">
              <label >
                <CheckBox
                  name="selectAllCountries"
                  type="checkbox"
                  onChange={this.toggleAllCountries}
                />
                <span>Select all</span>
              </label>
            </div>
            <div className="countryBlock">
              {parsedCountryArray.filter(country => country.title.toLowerCase().includes(this.state.query.toLowerCase())).map((item, key) => (
                <div 
                  className={"countryContainer " + (this.state.selectedCountries.indexOf(item.title) > -1 ? 'checked' : '')}
                  id={item.title} 
                  onClick={this.selectCountry} 
                  key={item.id}
                >
                  <img className="checked" src={checkCircle} alt="checked" />
                  {item.data[0]}
                  <p className="countryName">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="optionsBlock">
            <h3>Download</h3>
            <ColorPicker updateColor={this.updateColor} />
            <div class="selectContainer">
              <Select
                value={selectedFileType}
                onChange={this.changeFileType}
                options={fileOptions}
                className="selectItem"
                styles={{indicatorSeparator: () => ({display: 'none'})}}
              />
              <label>File Type</label>
            </div>
            <div class="selectContainer">
              <Select
                value={selectedImgSize}
                onChange={this.changeSvgSize}
                options={sizeOptions}
                className="selectItem"
                styles={{indicatorSeparator: () => ({display: 'none'})}}
              />
              <label>Size (px)</label>
            </div>
            <Button 
              text='Download' 
              type='submit' 
              onClick={this.generateFiles} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
