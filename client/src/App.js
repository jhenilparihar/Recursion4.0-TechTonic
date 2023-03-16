import { useState } from 'react';
import './App.css';
import CreateAccount from './components/CreateAccount';

function App() {
  const [status, setStatus] = useState('createAccount')

  return (
    <div className="text-blue-500">
      <CreateAccount/>
    </div>
  );
}

export default App;
