# react-toggle-switch
A simple iOS inspired toggle switch.

<img src="https://github.com/pgrimard/react-toggle-switch/raw/master/switch.png" width="50" height="26" alt="Switch" title="Switch"/>

## Install

```
npm install --save react-toggle-switch
```

## Usage

```javascript
import React from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'

export default class MyComponent extends React.Component {
  render() {
    return (
        <div>
            <Switch onClick={() => this.setState({prop: !this.state.prop})}/>
            <Switch onClick={this.toggle}>
              <i class="some-icon"/>
            </Switch>
        </div>
    );
  }
}
```

### Props

1. `onClick` - Required function handler to be called any time the switch is clicked.
2. `on` - Optional property to set the switch on or off.  This can be useful if you want to update the state of the
switch without actually clicking on it.  Default is false.

### Import Styling

```css
@import "node_modules/react-toggle-switch/dist/css/switch.min.css"
```