import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
class Modal extends React.Component {
  overlayRef = React.createRef();
  componentDidMount() {
    window.addEventListener('keydown', this.closeFromKeyboard);
    this.overlayRef.current.addEventListener('click', this.closeOnOverlayClick);
  }
  closeFromKeyboard = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };
  closeOnOverlayClick = event => {
    if (event.target === this.overlayRef.current) this.props.closeModal();
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeFromKeyboardHandler);
    this.overlayRef.current.removeEventListener(
      'click',
      this.closeOnOverlayClick
    );
  }
  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={css.Overlay} ref={this.overlayRef}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}
Modal.propTypes = {
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default Modal;
