import 'the-new-css-reset/css/reset.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cllaude99UIProvider } from '@cllaude99_lib/ui';
import DefaultComponent from './components/DefaultComponent';

const router = createBrowserRouter([
  {
    index: true,
    element: <DefaultComponent />,
  },
]);

const App = () => {
  return (
    <Cllaude99UIProvider>
      <RouterProvider router={router} />
    </Cllaude99UIProvider>
  );
};

export default App;
