import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'DELETE_CONTACT': {
      console.log('In Delete');
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    }
    case 'ADD_CONTACT': {
      console.log('In Delete');
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    }
    case 'EDIT_CONTACT': {
      console.log('In Edit');
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    }
    default:
      return state;
  }
};

export class Provider extends Component {
  async componentDidMount() {
    console.log('In Component Did Mount');

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ contacts: res.data });
  }

  state = {
    contacts: [],
    // [  {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'jd@email.com',
    //     phone: '555-555-555'
    //   },
    //   {
    //     id: 2,
    //     name: 'Jane Doe',
    //     email: 'jade@email.com',
    //     phone: '666-555-555'
    //   },
    //   {
    //     id: 3,
    //     name: 'Karen Doe',
    //     email: 'kd@email.com',
    //     phone: '777-555-555'
    //   }
    // ],
    dispatch: action => {
      this.setState(state => {
        console.log(reducer(state, action));
        return reducer(state, action);
      });
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
