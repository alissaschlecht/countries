import React, { Component } from "react";
import { ChromePicker } from 'react-color';
import './ColorPicker.scss';


class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      defaultColor: "#333333",
      changeColor: "#333333",
      color: {
        r: "51",
        g: "51",
        b: "51",
        a: "1"
      }
    }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleShowColorPicker = this.handleShowColorPicker.bind(this);
    this.changeColorPicker = this.changeColorPicker.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ displayColorPicker: false });
    }
  }

  handleShowColorPicker = () => {
    this.setState({ displayColorPicker: true });
  }

  changeColorPicker = color => {
    this.setState({color: color.rgb, changeColor: color.hex });
    this.props.updateColor(color.hex);
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        <div 
          className="colorInputContainer" 
          onClick={this.handleShowColorPicker}
        >
          <div 
            className="colorRect"          
            style={{backgroundColor: this.state.changeColor }}
          ></div>
          <input
            readOnly
            className="colorText"
            type="text"
            name="color-picker-text"
            value={this.state.changeColor}
            
          />
        </div>
        <div className="colorPickerPalette">
            {
              this.state.displayColorPicker &&
              <ChromePicker
                color = {this.state.color}
                onChange = {this.changeColorPicker}
              />
            }
        </div>

      </div>
    )
  }
}

export default ColorPicker;
