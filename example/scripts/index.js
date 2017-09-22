import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch';
import 'styles/styles.css';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    }
  }

  render() {
    return (
      <div>
        <p>Basic</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}/>

        <p>With Children</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}>
          <div>i</div>
        </Switch>

        <p>Disabled</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on} enabled={false}/>

        <p>Custom Classnames</p>
        <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on} className="other-class"/>
      </div>
    );
  }
}

render(<Example/>, document.getElementById('app'));