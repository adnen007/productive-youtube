import React from "react";

class SearchBar extends React.Component {
  state = { inputValue: "" };

  onFormSunmit = async (event) => {
    event.preventDefault();
    this.props.fetchData(this.state.inputValue);
  };

  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <form className="search-bar " onSubmit={this.onFormSunmit}>
        <div className="field">
          <input
            type="search"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            placeholder="video search"
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
