import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../config';
import AuthContext from '../../../Context/authContext';
import './LoginInputForm.scss';

let regExpForId =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let regExpForPassword =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

const LoginInputForm = () => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const [isValidate, setIsValidate] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const inputHandler = event => {
    const { name, value } = event.target;
    setInput(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const checkValidate = (id, pwd) => {
    const validation = regExpForId.test(id) && regExpForPassword.test(pwd);
    setIsValidate(validation);
  };

  const loginHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch(API.login, {
        method: 'POST',
        body: JSON.stringify({
          email: input.id,
          password: input.password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${input.id}님 환영합니다.`);
        authContext.login(data.idToken);
        navigate('/');
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const timeid = setTimeout(() => {
      checkValidate(input.id, input.password);
    }, 300);

    return () => {
      clearTimeout(timeid);
    };
  }, [input.id, input.password]);

  return (
    <form className="loginSubmitForm" onSubmit={loginHandler}>
      <input placeholder="아이디" name="id" onChange={inputHandler} />
      <input
        placeholder="비밀번호"
        name="password"
        type="password"
        onChange={inputHandler}
      />
      <button disabled={!isValidate}>로그인</button>
    </form>
  );
};

export default LoginInputForm;
