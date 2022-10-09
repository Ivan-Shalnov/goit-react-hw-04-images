import PropTypes from 'prop-types';
import { FallingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
const Loader = ({ visible }) => {
  return (
    <div className={css.loader}>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={visible}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};
export default Loader;
