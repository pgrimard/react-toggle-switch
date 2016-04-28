import React from 'react';
import ReactDom from 'react-dom';
import Switch from 'react-toggle-switch';
import 'styles/main.scss';

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
        <span>Switch state: {this.state.on ? 'On' : 'Off'}</span>
        <div>
          <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}/>
        </div>
        <div style={{clear: 'both', marginTop: '4em'}}>
          This button demonstrates how to toggle the switch indirectly by simply updating the "on" prop.<br/>
          <button onClick={() => this.setState({on: !this.state.on})}>{this.state.on ? 'Switch Off' : 'Switch On'}</button>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));