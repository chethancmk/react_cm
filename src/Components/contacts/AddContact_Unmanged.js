import React, { Component } from 'react';

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameIp = React.createRef();
    this.emailIp = React.createRef();
    this.phoneIp = React.createRef();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameIp.current.value,
      email: this.phoneIp.current.value,
      phone: this.emailIp.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: 'Def Name',
    email: 'def@email.com',
    phone: '444-444-444'
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameIp}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                defaultValue={email}
                ref={this.emailIp}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                defaultValue={phone}
                ref={this.phoneIp}
              />
            </div>

            <input
              type="submit"
              value="Submit"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
