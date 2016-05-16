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
            <Switch enabled={false}/>
            <Switch className='other-class'/>
        </div>
    );
  }
}
```

### Props

1. `onClick` - Function handler to be called any time the switch is clicked.
2. `on` - Sets the switch on or off.  This can be useful if you want to update the state of the switch without actually
clicking on it.  Default is `false`.
3. `enabled` - If set to `false`, the switch cannot be toggled.  Default is `true`.
3. `className` - An optional classname for the root element

### Import Styling

```css
@import "node_modules/react-toggle-switch/dist/css/switch.min.css"
```