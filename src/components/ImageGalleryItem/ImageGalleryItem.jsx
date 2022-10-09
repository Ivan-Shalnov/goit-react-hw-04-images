import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    const { preview, largeFormat, tags } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={preview}
          alt={tags}
          onClick={this.openModal}
        />
        {this.state.showModal && (
          <Modal src={largeFormat} closeModal={this.closeModal} />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  preview: PropTypes.string.isRequired,
  largeFormat: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
