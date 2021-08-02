import React from 'react';
import styles from './BottomDisplay.css';
import PropTypes from 'prop-types';


const BottomDisplay = ({ body }) => {
  return <pre className={styles.back}>{JSON.stringify(body, null, 2)}</pre>;

};

BottomDisplay.propTypes = {
  body: PropTypes.string.isRequired
};

export default BottomDisplay;
