import React from 'react';

import './App.css';
import { Stars } from './components/Stars';

const App: React.FC = () => {
  return <Stars count={3} />;
};

export default App;