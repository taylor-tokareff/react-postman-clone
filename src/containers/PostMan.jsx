import React, { Component } from 'react';
import SearchControls from '../components/app/controls/Search';



export default class PostMan extends Component {
  state = {
    query: '',
    get: '',
    post: '',
    put: '',
    patch: '',
    delete: '',
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <SearchControls
          query={query}
          onChange={this.handleSearch}
        />

      </>




    );
  }
}
