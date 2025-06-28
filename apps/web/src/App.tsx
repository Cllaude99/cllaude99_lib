import { Button } from '@cllaude99_lib/ui';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1>Button Examples</h1>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Button size="x-small">Small Button</Button>
        <Button>Medium Button</Button>
        <Button size="bold">Large Button</Button>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Button fullWidth>Full Width Button</Button>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <Button disabled>Disabled Button</Button>
        <Button isLoading>Loading Button</Button>
      </div>
    </div>
  );
}

export default App;
