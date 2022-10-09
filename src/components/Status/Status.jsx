import css from './Status.module.css';
const Status = ({ type = 'status', message }) => {
  return <div className={css[type]}>{message}</div>;
};
export default Status;
