import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import SearchForm from 'components/SearchForm/SearchForm';
const Searchbar = ({ onSubmit, disableBtn }) => {
  return (
    <header className={css.Searchbar}>
      <SearchForm onSubmit={onSubmit} disableBtn={disableBtn} />
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  disableBtn: PropTypes.bool.isRequired,
};
export default Searchbar;
