import React from 'react';

export default class Switch extends React.Component {
  static propTypes = {
    on: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    enabled: React.PropTypes.bool
  };

  static defaultProps = {
    on: false,
    onClick: () => {},
    enabled: true
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
    return (
      <div className={'switch ' + (this.state.on ? 'on ' : '') + (this.props.enabled ? '' : 'disabled ')} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}