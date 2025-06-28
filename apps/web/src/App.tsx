import 'the-new-css-reset/css/reset.css';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Button, Cllaude99UIProvider } from '@cllaude99_lib/ui';

const router = createBrowserRouter([
  {
    index: true,
    element: (
      <div style={{ padding: '20px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div>
          <h2>Primary Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>
        <div>
          <h2>Secondary Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Button variant="secondary" size="small">
              Small
            </Button>
            <Button variant="secondary" size="medium">
              Medium
            </Button>
            <Button variant="secondary" size="large">
              Large
            </Button>
          </div>
        </div>
        <div>
          <h2>Danger Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Button variant="danger" size="small">
              Small
            </Button>
            <Button variant="danger" size="medium">
              Medium
            </Button>
            <Button variant="danger" size="large">
              Large
            </Button>
          </div>
        </div>
        <div>
          <h2>Ghost Buttons</h2>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Button variant="ghost" size="small">
              Small
            </Button>
            <Button variant="ghost" size="medium">
              Medium
            </Button>
            <Button variant="ghost" size="large">
              Large
            </Button>
          </div>
        </div>
      </div>
    ),
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
