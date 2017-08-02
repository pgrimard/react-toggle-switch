import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Switch extends Component {
  static propTypes = {
    id: PropTypes.string,
    on: PropTypes.bool,
    onClick: PropTypes.func,
    enabled: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    id: '',
    on: false,
    onClick: () => {},
    enabled: true,
    className: ''
  };

  constructor(props) {
    super(props);
    this.state = {on: this.props.on};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({on: nextProps.on});
  }

  handleClick = (e) => {
    e.preventDefault();
    if(this.props.enabled) {
      this.props.onClick();
      this.setState({on: !this.state.on});
    }
  };

  render() {
    const className = ['switch', this.props.className, (this.state.on ? 'on ' : ''), (this.props.enabled ? '' : 'disabled ')].join(' ');
    return (
      <div id={this.props.id} className={className} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}
