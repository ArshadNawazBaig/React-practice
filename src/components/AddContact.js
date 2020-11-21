import React, { Component } from "react";
import { Consumer } from "../context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });
  onFormSubmit = (dispatch, e) => {
    const { name, email, address, phone } = this.state;
    e.preventDefault();
    console.log("Submited");
    const payload = {
      name,
      email,
      address,
      phone,
    };
    dispatch({ type: "ADD_CONTACT", payload });
  };
  render() {
    const { email, name, address, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Address"
                        value={address}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="+92-000-000-0000"
                        value={phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add Contact
                    </button>
                  </form>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
