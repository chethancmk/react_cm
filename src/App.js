import React from 'react';
import './App.css';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contacts Manager"></Header>
        <div className="container">
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
