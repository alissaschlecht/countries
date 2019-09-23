import React, { Component } from 'react';
import './SearchBar.scss';


class Checkbox extends Component {
  render() {
    const isChecked = this.props;

    return (
      <label>
        <input
			name="selectAllCountries"
			type="checkbox"
			checked={isChecked}
			onChange={this.props.toggleAllCountries}
        />
        Select all
      </label>
    );
  }
}

export default SearchBar;
