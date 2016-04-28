import React from 'react';

export default class Switch extends React.Component {
  static propTypes = {
    on: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    on: false
  };

  constructor(props) {
    super(props);
    this.state = {on: this.props.on};
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({on: nextProps.on});
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
    this.setState({on: !this.state.on});
  }

  render() {
    return (
      <div className={'switch ' + (this.state.on ? 'on' : '')} onClick={this.handleClick}>
        <div className="switch-toggle" children={this.props.children}></div>
      </div>
    );
  }
}