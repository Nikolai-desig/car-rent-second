import css from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore} className={css.btn}>
      Load More
    </button>
  );
};

export default Button;
