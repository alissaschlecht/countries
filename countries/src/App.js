import React from 'react';
// import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Countries</h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
