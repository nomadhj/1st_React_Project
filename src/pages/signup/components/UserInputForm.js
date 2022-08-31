import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/authContext';
import API from '../../../config';
import './UserInputForm.scss';

const checkRegExp = (category, str) => {
  const regExpForId =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regExpForPassword =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  if (category === 'id') return regExpForId.test(str);
  if (category === 'password') return regExpForPassword.test(str);
};

const UserInputForm = ({ isAgreeTerms }) => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  });
  const [isValid, setIsValid] = useState({
    id: null,
    password: null,
    pwdChk: null,
    button: null,
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    id: isValidId,
    password: isValidPwd,
    pwdChk: isValidPwdChk,
  } = isValid;

  const InputHandler = event => {
    const { name, value } = event.target;

    if (name === 'pwdChk') {
      setIsValid(prevState => {
        return {
          ...prevState,
          pwdChk: isValidPwd && userInfo.password === value,
        };
      });
      return;
    }
    setIsValid(prevState => {
      return { ...prevState, [name]: checkRegExp(name, value) };
    });
    setUserInfo(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch(API.signup, {
        method: 'POST',
        body: JSON.stringify({
          email: userInfo.id,
          password: userInfo.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        authContext.login(data.idToken);
        alert(`${userInfo.id}님 환영합니다.`);
        navigate('/main');
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const classNameHandler = category => {
    return isValid[category]
      ? 'valid'
      : isValid[category] === null
      ? ''
      : 'invalid';
  };

  const descriptionHandler = category => {
    if (isValid[category]) {
      return <p className="valid">{USER_DESCRIPTION_FORMAT[category].valid}</p>;
    } else if (isValid[category] !== null && !isValid[category]) {
      return (
        <p className="invalid">{USER_DESCRIPTION_FORMAT[category].invalid}</p>
      );
    }
  };

  useEffect(() => {
    const validationBtn =
      isValidId && isValidPwd && isValidPwdChk && isAgreeTerms;
    setIsValid(prevState => {
      return { ...prevState, button: validationBtn };
    });
  }, [isValidId, isValidPwd, isValidPwdChk, isAgreeTerms]);

  return (
    <form className="signupSubmitForm" onSubmit={submitHandler}>
      {USER_INFO_FORMAT.map(item => {
        return (
          <>
            <input
              key={item.id}
              className={classNameHandler(item.name)}
              {...item}
              onChange={InputHandler}
            />
            {descriptionHandler(item.name)}
          </>
        );
      })}
      <button disabled={!isValid.button}>회원가입</button>
    </form>
  );
};

const USER_INFO_FORMAT = [
  { id: 1, name: 'id', placeholder: '아이디 (이메일 주소)', type: 'text' },
  {
    id: 2,
    name: 'password',
    placeholder: '비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)',
    type: 'password',
  },
  {
    id: 3,
    name: 'pwdChk',
    placeholder: '비밀번호 확인',
    type: 'password',
  },
];

const USER_DESCRIPTION_FORMAT = {
  id: {
    valid: '사용가능한 아이디입니다.',
    invalid: '아이디는 이메일 형식에 맞게 입력 해 주세요.',
  },
  password: {
    valid: '사용가능한 비밀번호 입니다.',
    invalid:
      '비밀번호는 영문(소문자), 숫자, 특수문자를 최소 한 번이상 사용하여 8~16자로 입력해주세요.',
  },
  pwdChk: {
    valid: '비밀번호와 비밀번호 확인이 일치합니다.',
    invalid: '비밀번호를 한번 더 입력해주세요.',
  },
};

export default UserInputForm;
