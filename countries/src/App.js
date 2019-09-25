import React, { Component } from 'react';
import Select from 'react-select';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Button from './components/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CheckBox from './components/CheckBox/CheckBox';
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
  { value: 1000, label: '1000 x 1000'},
];

const fileOptions = [
  { value: 'SVG', label: 'SVG' },
  { value: 'PNG', label: 'PNG' },
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
    let selected = this.state.selectedCountries;
    let elementId = event.currentTarget.id;
    let element = event.currentTarget.childNodes[0].childNodes[0];
    let elementObj = {id: elementId, svg: element};
    let index = selected.indexOfObject("id", elementId);

    if(index === -1){
      this.setState({selectedCountries : selected.concat([elementObj])});
    } else {
      console.log('selected', selected);
      this.setState({selectedCountries: selected.filter( el => el.id !== elementId) });
    }
  }

  toggleAllCountries = (event) => {
    const countryContainer = document.getElementsByClassName("countryContainer");
    const isChecked = event.currentTarget.checked;
    const allCountries = Array.from(countryContainer).map((country) => {
      return {
        id: country.id,
        svg: country.childNodes[0].childNodes[0]
      };
    });

    if(isChecked) {
      this.setState({ selectedCountries : allCountries });
    } else {
      this.setState({ selectedCountries : [] });
    }
  }

  generateFiles = () => {
    this.state.selectedCountries.map((country, index) => {
      createPNGFromSVGAndDownload(country.svg, `${country.id}.${this.state.fileType}`, this.state.fileType, this.state.imgSize, this.state.imgSize);
      return null;
    });
  }

  render(){
    const { selectedImgSize, selectedFileType } = this.state;
    console.log('selectedCountries', this.state.selectedCountries);
    //loop to look for object id in selected array
    Array.prototype.indexOfObject = function (property, value) {
      for (var i = 0, len = this.length; i < len; i++) {
          if (this[i][property] === value) return i;
      }
      return -1;
    }

    return (
      <div className="App">
        <div className="container">
          <div className="leftContainer">
            <div className="searchBlock">
              <h1>Hand drawn variable width country shapes</h1>
              <p>Variable width country shapes, *pretty* close to the correct shapes. Open source. Download ready-to-use assets in PNG or SVG, or download the <a href="">Adobe Illustrator source file</a> to modify as you wish. Please open source credit to Alissa Schlecht.</p>
              <SearchBar
                query={this.query}
                value={this.state.query}
              />
            </div>
            <div className="checkBoxContainer">
              <div className={this.state.query === '' ? '' : 'hidden'}>
                <label >
                  <CheckBox
                    name="selectAllCountries"
                    type="checkbox"
                    onChange={this.toggleAllCountries} 
                  />
                  <span>Select all</span>
                </label>
              </div>
            </div>
            <div className="optionsBlock d-desktop-none">
              <h3>Download</h3>
              <ColorPicker updateColor={this.updateColor} />
              <div className="selectContainer">
                <Select
                  value={selectedFileType}
                  onChange={this.changeFileType}
                  options={fileOptions}
                  className="selectItem"
                  styles={{indicatorSeparator: () => ({display: 'none'})}}
                />
                <label>File Type</label>
              </div>
              <div className="selectContainer">
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
            <div className="countryBlock">
              {countries.filter(country => country.title.toLowerCase().includes(this.state.query.toLowerCase())).map((item, key) => (
                <div
                  className={"countryContainer " + (this.state.selectedCountries.indexOfObject("id", item.title) > -1 ? 'checked' : '')}
                  id={item.title}
                  onClick={this.selectCountry}
                  key={item.id}
                >
                  <div className="svgContainer" dangerouslySetInnerHTML={{ __html: item.data }} />
                  <img className="checked" src={checkCircle} alt="checked" />
                  <p className="countryName">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="optionsBlock d-none d-desktop-block">
            <div className="fixedContainer">
              <h3>Download</h3>
              <ColorPicker updateColor={this.updateColor} />
              <div className="selectContainer">
                <Select
                  value={selectedFileType}
                  onChange={this.changeFileType}
                  options={fileOptions}
                  placeholder="SVG"
                  className="selectItem"
                  styles={{indicatorSeparator: () => ({display: 'none'})}}
                />
                <label>File Type</label>
              </div>
              <div className="selectContainer">
                <Select
                  value={selectedImgSize}
                  onChange={this.changeSvgSize}
                  options={sizeOptions}
                  className="selectItem"
                  isDisabled={this.state.fileType === 'SVG' ? true : false }
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
        <footer>Copyright 2019 Alissa Schlecht</footer>
      </div>
    );
  }
}

export default App;
