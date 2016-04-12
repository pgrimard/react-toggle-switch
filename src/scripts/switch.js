import React from 'react';

export default class Switch extends React.Component {
  static propTypes = {
    value: React.PropTypes.string,
    on: React.PropTypes.bool,
    onClick: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    value: '',
    on: false
  };

  constructor(props) {
    super(props);
    this.state = {on: this.props.on};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.value);
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