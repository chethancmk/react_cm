import React from 'react';
import './App.css';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/pages/About';
import Page404 from './Components/pages/Page404';
import Test from './Components/test/Test';

import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Header branding="Contacts Manager"></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
