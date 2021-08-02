import React from 'react';
import Side from './Side';
import { getMethod, getUrl } from '../UtilFunctions.js';
import styles from './SideDisplay.css';

const SideDisplay = () => {

  const method = getMethod();
  const url = getUrl();

  const sideElements = url.map((sideItem, i) => {
    return <li className={styles.back} key={sideItem}>
      <Side
        u={sideItem}
        m={method[i]}
      />
    </li>;
  });

  return (
    <ul className={styles.back} data-testid="side">
      {sideElements}
    </ul>
  );
};

export default SideDisplay;
