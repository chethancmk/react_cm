import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "DELETE_CONTACT": {
            console.log('In Delete')
            return ({
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            })
        }
        default: return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [{
            "id": 1,
            "name": "John Doe",
            "email": "jd@email.com",
            "phone": "555-555-555"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "jade@email.com",
            "phone": "666-555-555"
        },
        {
            "id": 3,
            "name": "Karen Doe",
            "email": "kd@email.com",
            "phone": "777-555-555"
        }],
        dispatch: action => {
            this.setState(state => {
                console.log(reducer(state, action))
                return reducer(state, action)
            })
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;