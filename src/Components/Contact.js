import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Context'

export class Contact extends Component {
  static propTypes = { name: PropTypes.string.isRequired };
  // constructor(){
  //   super();
  //   this.state ={};
  // }

  state = {
    showContactInfo: false
  }

  onShowClick = (name, e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

  deleteHandler = (id, dispatch) => {
    console.log('Deleting ' + id);
    // this.props.deleteContact(id);
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { id, name, email, phone } = this.props.contact;
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name} <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down" style={{ cursor: "pointer" }}></i>
                <i className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "red" }} onClick={this.deleteHandler.bind(this, id, dispatch)}>

                </i>
              </h4>
              {this.state.showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Phone : {phone}</li>
                <li className="list-group-item">email : {email}</li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }

  // render() {
  //   const { id, name, email, phone } = this.props.contact;
  //   return (
  //     <div className="card card-body mb-3">
  //       <h4>{name} <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down" style={{ cursor: "pointer" }}></i>
  //         <i className="fas fa-times" style={{ cursor: "pointer", float: "right", color: "red" }} onClick={this.deleteHandler.bind(this, id)}>

  //         </i>
  //       </h4>
  //       {this.state.showContactInfo ? (<ul className="list-group">
  //         <li className="list-group-item">Phone : {phone}</li>
  //         <li className="list-group-item">email : {email}</li>
  //       </ul>) : null}
  //     </div>
  //   );
  // }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteContact: PropTypes.func.isRequired
};

export default Contact;
