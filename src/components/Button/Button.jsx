import PropTypes from 'prop-types';
import css from './Button.module.css';
const Button = ({ loadMoreHandler, disabled }) => {
  return (
    <button
      type="button"
      className={css.Button}
      onClick={loadMoreHandler}
      disabled={disabled}
    >
      Load more
    </button>
  );
};
Button.propTypes = {
  loadMoreHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
export default Button;
