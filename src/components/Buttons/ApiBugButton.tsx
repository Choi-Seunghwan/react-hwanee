import { ReactNode } from 'react';
import './ApiBugButton.css';
import axios from 'axios';
import * as Sentry from '@sentry/react';

const ApiBugButton = ({ children }: { children?: ReactNode }) => {
  const apiTest = async () => {
    try {
      const result = await axios.get('https://dog.ceo/api/breeds/image/random');
      const data = result?.data;

      const b = data.a.b; // a is undefined
      console.log(data);
    } catch (e) {
      console.log(e);
      Sentry.captureException(e);
    }
  };

  const clickHandler = () => {
    apiTest();
  };

  return (
    <button className="api-bug-button" onClick={clickHandler}>
      {children}
    </button>
  );
};

export default ApiBugButton;
