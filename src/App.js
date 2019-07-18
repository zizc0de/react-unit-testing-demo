import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoadingIndicator from './components/LoadingIndicator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoadingIndicator isLoading={true}>
          Hello World
        </LoadingIndicator>
      </header>
    </div>
  );
}

export default App;
