import PropTypes from 'prop-types';
import Lane from './LaneContainer.js';
import styles from './Lane.css';
import React  from 'react';

const Lanes = ({ lanes }) => {
  return (
    <div className={styles.Lanes}>{lanes.map(lane =>
      <Lane key={lane.id} lane={lane} />
    )}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

export default Lanes;
