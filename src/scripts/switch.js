import PropTypes from 'prop-types';
import React, {Component} from 'react';

const propTypes = {
  on: PropTypes.bool.required,
  onClick: PropTypes.func.required,
  enabled: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  enabled: true,
  className: ''
};

class Switch extends Component {
  handleClick(e) {
    e.preventDefault();
    const {enabled, onClick} = this.props;

    if(enabled)
      onClick();
  }

  render() {
    const className = ['switch', this.props.className, (this.props.on ? 'on ' : ''), (this.props.enabled ? '' : 'disabled ')].join(' ');
    return (
      <div className={className} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
