import React from 'react';
import propTypes from 'prop-types';

export default function IconSwitch(props) {
  const { icon, iconClick } = props;
  const clickFn = () => {
    iconClick();
  };

  return (
    <div className="Store-Icon-Switch" onClick={clickFn}>{icon}</div>
  );
}

IconSwitch.propTypes = {
  icon: propTypes.string.isRequired,
  iconClick: propTypes.func.isRequired,
};
