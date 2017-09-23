import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch';
import 'styles/styles.scss';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true
    }
  }

  render() {
    return (
      <div className="row">
        <div className="card col-sm">
          <div className="card-body">
            <p>Basic</p>
            <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}/>
          </div>
        </div>

        <div className="card col-sm">
          <div className="card-body">
            <p>With Children</p>
            <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on}>
              <i className="fa fa-bolt" style={{position: 'relative', left: '8px', top: '-1px'}}></i>
            </Switch>
          </div>
        </div>

        <div className="card col-sm">
          <div className="card-body">
            <p>Disabled</p>
            <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on} enabled={false}/>
          </div>
        </div>

        <div className="card col-sm">
          <div className="card-body">
            <p>Custom Classnames</p>
            <Switch onClick={() => this.setState({on: !this.state.on})} on={this.state.on} className="other-class"/>
          </div>
        </div>
      </div>
    );
  }
}

render(<Example/>, document.getElementById('app'));