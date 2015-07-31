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
  }

  componentDidMount() {
    var el = React.findDOMNode(this);

    el.onclick = () => {
      this.props.onClick(this.props.value);
      el.className = el.className.match(/\bon\b/) !== null ? 'switch' : 'switch on';
    }
  }

  render() {
    return (
      <div className={'switch ' + (this.props.on ? 'on' : '')}>
        <div className="switch-toggle"></div>
      </div>
    );
  }
}