'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Switch = (function (_React$Component) {
  _inherits(Switch, _React$Component);

  _createClass(Switch, null, [{
    key: 'propTypes',
    value: {
      on: _react2['default'].PropTypes.bool,
      onClick: _react2['default'].PropTypes.func,
      enabled: _react2['default'].PropTypes.bool,
      className: _react2['default'].PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      on: false,
      onClick: function onClick() {},
      enabled: true,
      className: ''
    },
    enumerable: true
  }]);

  function Switch(props) {
    var _this = this;

    _classCallCheck(this, Switch);

    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);

    this.handleClick = function (e) {
      e.preventDefault();
      if (_this.props.enabled) {
        _this.props.onClick();
        _this.setState({ on: !_this.state.on });
      }
    };

    this.state = { on: this.props.on };
  }

  _createClass(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ on: nextProps.on });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = ['switch', this.props.className, this.state.on ? 'on ' : '', this.props.enabled ? '' : 'disabled '].join(' ');
      return _react2['default'].createElement(
        'div',
        { className: className, onClick: this.handleClick },
        _react2['default'].createElement('div', { className: 'switch-toggle', children: this.props.children })
      );
    }
  }]);

  return Switch;
})(_react2['default'].Component);

exports['default'] = Switch;
module.exports = exports['default'];