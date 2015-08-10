'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Modal = (function (_Component) {
  _inherits(Modal, _Component);

  _createClass(Modal, null, [{
    key: 'propTypes',
    value: {
      active: _react.PropTypes.bool.isRequired,
      closeOnOuterClick: _react.PropTypes.bool,
      className: _react.PropTypes.string,
      children: _react.PropTypes.node,
      onClose: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, props);

    this.hideOnOuterClick = this.hideOnOuterClick.bind(this);
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown.bind(this), false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown.bind(this), false);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var keyCode = e.keyCode;

      if (this.props.active && keyCode === 27) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      if (!this.props.active) {
        return false;
      }

      var className = {
        'f-modal': true,
        'active': this.props.active
      };

      return _react2['default'].createElement(
        _reactMotion.Spring,
        { defaultValue: { top: { val: -10 }, opacity: { val: 0 } }, endValue: { top: { val: 10 }, opacity: { val: 1 } } },
        function (interpolated) {
          var top = interpolated.top;
          var opacity = interpolated.opacity;

          return _react2['default'].createElement(
            'div',
            _extends({}, _this.props, { className: (0, _classnames2['default'])(className, _this.props.className), onClick: _this.hideOnOuterClick, 'data-modal': 'true' }),
            _react2['default'].createElement(
              'div',
              { className: 'f-modal-content', style: { top: top.val + 'rem', opacity: opacity.val } },
              _this.props.children
            )
          );
        }
      );
    }
  }, {
    key: 'hideOnOuterClick',
    value: function hideOnOuterClick(e) {
      if (!this.props.closeOnOuterClick) return;
      if (e.target.dataset.modal) {
        this.props.onClose(e);
      }
    }
  }]);

  return Modal;
})(_react.Component);

exports['default'] = Modal;
module.exports = exports['default'];