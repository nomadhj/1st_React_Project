import './AgreementItem.scss';

const AgreementItem = ({ item, onChecked }) => {
  const { id, text, isRequired, hasMoreInfo, isChecked } = item;

  const checkboxHandler = () => {
    onChecked(id);
  };

  return (
    <div className="agreementItem">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={checkboxHandler}
      />
      <label htmlFor={id}>
        <i className="fa-solid fa-check" />
        {`[${isRequired ? '필수' : '선택'}] ${text}`}
      </label>
      {hasMoreInfo && (
        <a href="/" onClick={() => {}}>
          보기
        </a>
      )}
    </div>
  );
};

export default AgreementItem;
