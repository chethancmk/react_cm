import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../Context'

class Contacts extends Component {
    // constructor() {
    //     super();
    // this.state = {contacts:[]}
    // }

    deleteContact = (id) => {
        console.log('Deleteing from list ' + id);
        const newContacts = this.state.contacts.filter(contact => {
            return contact.id !== id;
        })

        this.setState({ contacts: newContacts })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact contact={contact} key={contact.id} />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }

    // render() {
    //     const { contacts } = this.state
    //     return (
    //         <React.Fragment>
    //             {contacts.map(contact => (
    //                 <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact} />
    //             ))}
    //         </React.Fragment>
    //     )
    // }
}

export default Contacts