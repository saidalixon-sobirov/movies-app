import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
      </div>
    );
  }
}
