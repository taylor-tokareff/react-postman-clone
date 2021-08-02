/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const SearchControls = ({ url, method, putBody, onUrlChange,
  onSubmit, onMethodChange, onPutChange }) => {

  return (

    <form className="actualForm" onSubmit={onSubmit}>

      <label htmlFor="query"></label>
      <input placeholder="URL" className={styles.search} value={url} onChange={onUrlChange} />

      <div className={styles.radioToolbar}>

        <input id="get" type="radio" name="method" value="GET" method={method} onChange={onMethodChange} />
        <label htmlFor="get">GET</label>



        <input id="post" type="radio" name="method" value="POST" method={method} onChange={onMethodChange} />
        <label htmlFor="post">POST</label>



        <input id="put" type="radio" name="method" value="PUT" method={method} onChange={onMethodChange} />
        <label htmlFor="put">PUT</label>



        <input id="patch" type="radio" name="method" value="PATCH" method={method} onChange={onMethodChange} />
        <label htmlFor="patch">PATCH</label>



        <input id="delete" type="radio" name="method" value="DELETE" method={method} onChange={onMethodChange} />
        <label htmlFor="delete">DELETE</label>

      </div>

      <div className={styles.go}>
        <button className={styles.goBut}>Go!</button>
      </div>

      <textarea className={styles.raw} placeholder="Raw JSON Body" name="body"
        value={putBody} onChange={onPutChange}></textarea>




    </form>

  );
};

SearchControls.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  putBody: PropTypes.string,
  onUrlChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onMethodChange: PropTypes.func,
  onPutChange: PropTypes.func
};

export default SearchControls;
