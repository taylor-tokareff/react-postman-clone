import React from 'react';
import styles from './PreArea.css';
import PropTypes from 'prop-types';


const PreArea = ({ body }) => {
  return <pre className={styles.back}>{JSON.stringify(body, null, 2)}</pre>;
};

PreArea.propTypes = {
  body: PropTypes.string.isRequired
};

export default PreArea;
