import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            preview={webformatURL}
            largeFormat={largeImageURL}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
