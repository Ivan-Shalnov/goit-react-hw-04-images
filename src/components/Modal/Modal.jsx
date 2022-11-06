import PropTypes from 'prop-types';
import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const Modal = ({ src, alt, closeModal }) => {
  const closeFromKeyboard = event => {
    if (event.key === 'Escape') closeModal();
  };
  const closeOnOverlayClick = event => {
    if (event.target === event.currentTarget) closeModal();
  };
  useEffect(() => {
    window.addEventListener('keydown', closeFromKeyboard);
    return () => {
      window.removeEventListener('keydown', closeFromKeyboard);
    };
  }, []);
  return createPortal(
    <div className={css.Overlay} onClick={closeOnOverlayClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default Modal;
