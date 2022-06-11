import { ReactNode } from 'react';
import './PageLayout.css';

const PageLayout = ({ children }: { children?: ReactNode }) => {
  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
