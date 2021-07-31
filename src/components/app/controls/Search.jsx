/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const SearchControls = ({ query, onChange }) => (
  <>

    <header>
      <h1>
        <span className={styles.first}>POSTMAN</span>
        <span className={styles.second}>POSTMAN</span>
      </h1>
    </header>



    <label htmlFor="query"></label>
    <input
      id="query"
      type="text"
      placeholder="URL"
      name="query"
      value={query}
      onChange={onChange}
    />

    <div className={styles.radioToolbar}>

      <input type="radio" name="methods" id="GET" />
      <label htmlFor="GET">GET</label>



      <input type="radio" name="methods" id="POST" />
      <label htmlFor="POST">POST</label>



      <input type="radio" name="methods" id="PUT" />
      <label htmlFor="PUT">PUT</label>



      <input type="radio" name="methods" id="PATCH" />
      <label htmlFor="PATCH">PATCH</label>



      <input type="radio" name="methods" id="DELETE" />
      <label htmlFor="DELETE">DELETE</label>

    </div>


    <button>Go!</button>

    <input
      id="raw-JSON"
      type="text"
      placeholder="Raw Json Body"
      name="raw-json"
    />

    <input
      id="bottom-display"
      type="text"
      placeholder="I am bored please do something"
      name="bottom-display"
    />

    <input
      id="side-display"
      type="text"
      placeholder="the things you clicked go here"
      name="side-display"
    />


  </>
);

SearchControls.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchControls;
