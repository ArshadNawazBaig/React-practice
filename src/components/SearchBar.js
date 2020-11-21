import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  handleSearchInput = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  };
  render() {
    const { searchTerm } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Search Video</label>
            <input
              type="text"
              className="form-control"
              id="videoSearch"
              aria-describedby="videoSearch"
              placeholder="Video Title here"
              value={searchTerm}
              onChange={this.handleSearchInput}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
