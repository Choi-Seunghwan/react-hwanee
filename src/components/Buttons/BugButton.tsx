import { ReactNode } from 'react';
import './BugButton.css';

const BugButton = ({ children }: { children?: ReactNode }) => {
  const clickHandler = () => {
    throw new Error('err123');
  };

  return (
    <button className="bug-button" onClick={clickHandler}>
      {children}
    </button>
  );
};

export default BugButton;
