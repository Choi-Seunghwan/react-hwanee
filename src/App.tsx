import RouterModule from '@/routes/RouterModule';
import { useState } from 'react';
import logo from './logo.svg';
import PageLayout from '@/components/PageLayout/PageLayout';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PageLayout>
        <RouterModule />
      </PageLayout>
    </div>
  );
}

export default App;
