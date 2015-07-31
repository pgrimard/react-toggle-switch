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
import Switch from 'react-toggle-switch'

export default class MyComponent extends React.Component {
  toggle(value) {
    // do something with value
  }
  
  render() {
    return (
        <div>
            <Switch value={'some string or integer value'} on={true} onClick={this.toggle}/>
            <Switch onClick={() => this.setState({prop: !this.state.prop})}/>
        </div>
    );
  }
}
```

### Props

1. `onClick` - Required function handler for when the switch is clicked.
1. `value` - Required value that will be passed to the onClick handler.
2. `on` - Optional prop to set switch on or off.  Default is false.

### Import Styling

```css
@import "node_modules/react-toggle-switch/dist/css/switch.min.css"
```