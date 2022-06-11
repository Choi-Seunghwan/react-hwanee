import ChorongPage from '@/pages/ChorongPage';
import MainPage from '@/pages/MainPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const RouterModule = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/chorong" element={<ChorongPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterModule;
