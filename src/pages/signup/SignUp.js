import { useState, useCallback } from 'react';
import UserInputForm from './components/UserInputForm';
import Terms from './components/Terms';

import './SignUp.scss';

const SignUp = () => {
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);

  const requiredTermsCheckHandler = useCallback(isAgree => {
    setIsAgreeTerms(isAgree);
  }, []);

  return (
    <div className="signup">
      <Terms onAgree={requiredTermsCheckHandler} />
      <section className="signupForm">
        <h1 className="signupTitle">위설록 회원가입</h1>
        <UserInputForm isAgreeTerms={isAgreeTerms} />
      </section>
    </div>
  );
};

export default SignUp;
