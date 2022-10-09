import PropTypes from 'prop-types';

import css from './SearchForm.module.css';
const SearchForm = ({ onSubmit, disableBtn }) => {
  const submitHander = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    onSubmit(query);
  };
  return (
    <form className={css.SearchForm} onSubmit={submitHander}>
      <button
        type="submit"
        className={css['SearchForm-button']}
        disabled={disableBtn}
      >
        <span className={css['SearchForm-button-label']}>Search</span>
      </button>

      <input
        className={css['SearchForm-input']}
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  disableBtn: PropTypes.bool.isRequired,
};
export default SearchForm;
