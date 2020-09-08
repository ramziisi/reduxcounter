import React ,{useState}from 'react';
import Counter from './counter'
import logo from './logo.svg';
import './App.css';
import store from'./store';


function App() {
  
  return (
    <div className="container">
    <h1>Counter</h1>
    <Counter />
    </>
  );
}

export default App;
