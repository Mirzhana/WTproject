import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <ul id="menu" className = "Navbar">
                <li>Направления </li>
                <li>Галерея </li>
                <li>Программы   </li>
                <li>Контакты    </li>
            </ul>
        </header>
        
      </div>
    );
  }
}

export default App;
