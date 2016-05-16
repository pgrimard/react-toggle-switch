import React from 'react';
import ReactDom from 'react-dom';
import Switch from 'react-toggle-switch';
import 'styles/main.scss';

class Usage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {on: false};
  }

  render() {
    return (
      <div className="example-usage">
        <h2>Basic usage</h2>
        <p>Switch state: {this.state.on ? 'On' : 'Off'}</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}/>
      </div>
    );
  }
}

class Usage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {on: false};
  }

  render() {
    return (
      <div className="example-usage">
        <h2>Toggle directly or indirectly</h2>
        <p>Switch state: {this.state.on ? 'On' : 'Off'}</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}/>
        <br/><br/>
        <p>This button demonstrates how to toggle the switch indirectly by simply updating the "on" prop.</p>
        <button onClick={() => this.setState({on: !this.state.on})}>{this.state.on ? 'Switch Off' : 'Switch On'}</button>
      </div>
    );
  }
}

class Usage3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {on: false};
  }

  render() {
    return (
      <div className="example-usage">
        <h2>Disabled Switch</h2>
        <p>Off and disabled</p>
        <Switch enabled={false}/><br/><br/>
        <p>On and disabled</p>
        <Switch enabled={false} on={true}/>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  render() {
    return (
      <div>
        <h1>React Toggle Switch</h1>
        <Usage1/>
        <Usage2/>
        <Usage3/>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));