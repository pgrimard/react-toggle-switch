# react-toggle-switch
A simple iOS inspired toggle switch.

<img src="https://github.com/pgrimard/react-toggle-switch/raw/master/switch.png" width="50" height="26" alt="Switch" title="Switch"/>

## Install

```
npm install --save react-toggle-switch
```

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
            <Switch onClick={this.toggleSwitch}/>

            {/* With children */}
            <Switch onClick={this.toggleSwitch}>
              <i class="some-icon"/>
            </Switch>

            {/* Disabled */}
            <Switch enabled={false}/>

            {/* Custom classnames */}
            <Switch className='other-class'/>
        </div>
    );
  }

}

export default MyComponent;
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
