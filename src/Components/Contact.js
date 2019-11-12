import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  static propTypes = { name: PropTypes.string.isRequired };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Phone : {phone}</li>
          <li className="list-group-item">email : {email}</li>
        </ul>
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired
// };

export default Contact;
