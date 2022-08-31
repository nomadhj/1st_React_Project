import './Button.scss';

const Button = ({ btnFunction, bgStyle, children }) => {
  return (
    <button className={`${bgStyle || ''} Btn`} onClick={btnFunction}>
      {children}
    </button>
  );
};

export default Button;
