import PropTypes from 'prop-types';
import React, {Component} from 'react';

const propTypes = {
  on: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  enabled: true,
  className: '',
  onDisabledClick: () => {}
};

function Switch({on, onClick, onDisabledClick, enabled, className, children}) {
  const classes = ['switch', className, (on ? 'on ' : ''), (enabled ? '' : 'disabled ')].join(' ');
  return (
    <div className={classes} onClick={(e) => enabled ? onClick(e) : onDisabledClick(e)}>
      <div className="switch-toggle" children={children}></div>
    </div>
  );
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
