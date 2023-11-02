import ReactDom from 'react-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
//import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
 return (
 <>
  <Header name="ruka" color="vilot"></Header>
  <div>
    <Main greet="Howdy"></Main>
    <Sidebar greet="Hello"></Sidebar>
  </div>
  </>
 );
}

export default App;
