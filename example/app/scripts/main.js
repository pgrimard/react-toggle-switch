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
        <span>Toggle state: {this.state.on ? 'On' : 'Off'}</span>
        <div>
          <Switch onClick={() => this.setState({on: !this.state.on})}/>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));