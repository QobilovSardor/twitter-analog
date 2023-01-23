import React from 'react';
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.stata = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(e) {
    const term = e.target.value;
    this.setState({term})
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input 
        type="search" 
        className="form-control search-input input-sm" 
        placeholder='Search' 
        onChange={this.onUpdateSearch}
      />
    );
  }
};