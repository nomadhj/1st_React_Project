import { useState, useEffect } from 'react';
import AgreementList from './AgreementList';
import './Terms.scss';

const Terms = ({ onAgree }) => {
  const [itemList, setItemList] = useState(TERMS_LIST);
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(false);
  const [isRequiredItemChecked, setIsRequiredItemChecked] = useState(false);

  const checkAllHandler = () => {
    setTotalCheckboxisChecked(prevstate => !prevstate);
    setIsRequiredItemChecked(true);
    setItemList(prevState => {
      return prevState.map(obj => {
        return { ...obj, isChecked: !totalCheckboxisChecked };
      });
    });
  };

  const listChangeHandler = id => {
    setItemList(prevState => {
      return prevState.map(obj => {
        if (id === obj.id) {
          return { ...obj, isChecked: !obj.isChecked };
        } else {
          return obj;
        }
      });
    });
  };

  useEffect(() => {
    let checkAll = true;
    let checkRequiredItems = true;

    for (let i = 0; i < itemList.length; i++) {
      if (!itemList[i].isChecked) {
        checkAll = false;
        if (itemList[i].isRequired) {
          checkRequiredItems = false;
        }
      }
    }
    setTotalCheckboxisChecked(checkAll);
    setIsRequiredItemChecked(checkRequiredItems);
  }, [itemList]);

  useEffect(() => {
    onAgree(isRequiredItemChecked);
  }, [onAgree, isRequiredItemChecked]);

  return (
    <div className="terms">
      <section>
        <div className="title">
          <div className="iconWrapper">
            <i className="fa-solid fa-clipboard-check" />
          </div>
          <div className="textWrapper">
            <p>이용약관</p>
            <p>위설록</p>
          </div>
        </div>
        <div className="content">
          <div className="agreeAll">
            <input
              id="checkAll"
              type="checkbox"
              checked={totalCheckboxisChecked}
              onChange={checkAllHandler}
            />
            <label htmlFor="checkAll">
              <div>
                <img src="/images/iconCheckWhite.png" alt="check" />
              </div>
              전체 동의하기
            </label>
          </div>
          <div className="scrollSection">
            <div className="description">
              <p>
                전체동의는 위설록의 서비스 동의를 포함하고 있습니다. 전체동의는
                선택목적에 대한 동의를 포함하고 있으며, 선택목적에 대한 동의를
                거부해도 서비스 이용이 가능합니다.
              </p>
            </div>
            <div className="description">
              <div className="account">
                <div>
                  <i className="fa-solid fa-user" />
                  <p>wesulloc@wecode.co.kr</p>
                </div>
                <a href="/" onClick={() => {}}>
                  계정변경
                </a>
              </div>
              <p>
                위설록 서비스 제공을 위해 회원번호와 함께 개인정보가 제공됩니다.
                보다 자세한 개인정보 제공항목은 동의 내용에서 확인하실 수
                있습니다. 정보는 서비스 탈퇴 시 또는 제공목적 달성 후
                파기됩니다.
              </p>
            </div>
            <div>
              <p>위설록 서비스 동의</p>
              <AgreementList itemList={itemList} isChange={listChangeHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TERMS_LIST = [
  {
    id: 1,
    text: '위설록 서비스 이용 약관',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 2,
    text: '위설록 사이트 이용동의',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 3,
    text: '위설록 문자 수신 동의',
    isRequired: false,
    hasMoreInfo: false,
    isChecked: false,
  },
  {
    id: 4,
    text: '개인정보 제 3자 제공동의',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 5,
    text: '개인정보 수집 및 이용 동의',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 6,
    text: '개인정보 수집 및 이용 동의(마케팅)',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 7,
    text: '개인정보 제공동의',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 8,
    text: '개인정보 국외이전 동의',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 9,
    text: '만 14세 이상입니다.',
    isRequired: true,
    hasMoreInfo: false,
    isChecked: false,
  },
];

export default Terms;
