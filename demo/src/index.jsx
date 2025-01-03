import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../dist/index.esm';

const App = () => {

    return (
        <div>
          <h1>Demo App</h1>
          <Button label="Click Me" />
        </div>
      )
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
