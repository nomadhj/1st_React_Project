import AgreementItem from './AgreementItem';

const AgreementList = ({ itemList, isChange }) => {
  const listChangeHandler = id => {
    isChange(id);
  };

  return itemList.map(obj => {
    return (
      <AgreementItem key={obj.id} item={obj} onChecked={listChangeHandler} />
    );
  });
};

export default AgreementList;
