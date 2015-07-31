# react-toggle-switch
A simple iOS inspired toggle switch

## Install

```
npm install --save react-toggle-switch
```

## Usage

### Props

1. `onClick` - Required function handler for when the switch is clicked.
1. `value` - Required value that will be passed to the onClick handler.
2. `on` - Optional prop to set switch on or off.  Default is false.

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
            <Switch value={value} on={true} onClick={this.toggle}/>
        </div>
    );
  }
}
```

If you're using SASS, then import the styles

```css
@import "node_modules/react-toggle-switch/dist/css/switch.min.css"
```