import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header branding="Contacts Manager"></Header>
      <div className="container">
        <Contact
          name="John Doe"
          email="jd@email.com"
          phone="555-555-555"
        ></Contact>
        <Contact
          name="Jane Doe"
          email="jade@email.com"
          phone="666-666-666"
        ></Contact>
      </div>
    </div>
  );
}

export default App;
