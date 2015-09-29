import React, { Component, PropTypes } from 'react';
import { Spring } from 'react-motion';
import cn from 'classnames';

class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    closeOnOuterClick: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.hideOnOuterClick = ::this.hideOnOuterClick;
  }

  componentDidMount() {
    document.addEventListener('keydown', ::this.onKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', ::this.onKeyDown, false);
  }

  onKeyDown(e) {
    const { keyCode } = e;

    if (this.props.active && keyCode === 27) {
      this.props.onClose();
    }
  }

  hideOnOuterClick(e) {
    if (!this.props.closeOnOuterClick) return;
    if (e.target.dataset.modal) {
      this.props.onClose(e);
    }
  }

  render() {
    if (!this.props.active) {
      return false;
    }

    const className = {
      'f-modal': true,
      'active': this.props.active,
    };

    return (
      <Spring defaultValue={{top: { val: -10 }, opacity: { val: 0 }}} endValue={{top: { val: 10 }, opacity: { val: 1 }}}>
        {interpolated => {
          const { top, opacity } = interpolated;

          return (
            <div {...this.props} className={cn(className, this.props.className)} onClick={this.hideOnOuterClick} data-modal="true">
              <div className="f-modal-content" style={{top: `${top.val}rem`, opacity: opacity.val}}>
                {this.props.children}
              </div>
            </div>
          );
        }}
      </Spring>
    );
  }
}

export default Modal;
