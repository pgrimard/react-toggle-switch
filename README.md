# react-toggle-switch
A simple iOS inspired toggle switch.

<img src="https://github.com/pgrimard/react-toggle-switch/raw/master/switch.png" width="50" height="26" alt="Switch" title="Switch"/>

## Install

```
npm install --save react-toggle-switch
```

## Demo

https://patrickgrimard.io/react-toggle-switch/

## Usage

```javascript
import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };

  render() {
    return (
        <div>
            {/* Basic Switch */}
            <Switch onClick={this.toggleSwitch} on={this.state.switched}/>

            {/* With children */}
            <Switch onClick={this.toggleSwitch} on={this.state.switched}>
              <i class="some-icon"/>
            </Switch>

            {/* Disabled */}
            <Switch onClick={this.toggleSwitch} on={this.state.switched} enabled={false}/>

            {/* Custom classnames */}
            <Switch onClick={this.toggleSwitch} on={this.state.switched} className='other-class'/>
        </div>
    );
  }

}

export default MyComponent;
```

### Upgrading to version 3.0.0

Please take note that as of version 3.0.0, a `Switch` no longer maintains an internal state.  Using this component
requires that you pass both an `onClick` method and an `on` value to set the current state of the `Switch`.  More
details about why this was changed can be found [here](https://github.com/pgrimard/react-toggle-switch/pull/18).

### Props

1. `onClick` - Function handler to be called any time the switch is clicked.
2. `on` - Sets the switch on or off.
3. `enabled` - If set to `false`, the switch cannot be toggled.  Default is `true`.
3. `className` - Optional CSS classes for the root element.

### Import Styling

```css
@import "node_modules/react-toggle-switch/dist/css/switch.min.css"
```
