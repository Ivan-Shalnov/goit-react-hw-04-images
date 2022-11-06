import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
const ImageGalleryItem = ({ preview, largeFormat, tags }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css['ImageGalleryItem-image']}
        src={preview}
        alt={tags}
        onClick={openModal}
      />
      {showModal && <Modal src={largeFormat} closeModal={closeModal} />}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  preview: PropTypes.string.isRequired,
  largeFormat: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
