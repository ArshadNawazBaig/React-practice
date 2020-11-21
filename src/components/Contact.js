import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  state = {
    isOpen: false,
  };
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, address, phone } = this.props.contact;
    const { isOpen } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              {this.props.contact ? (
                <div className="card mt-3">
                  <div className="user px-4 mb-0 pb-0 pt-2">
                    <h5 className="card-title">
                      {name}
                      <i
                        className={`fa ${
                          isOpen ? "fa-sort-up" : "fa-sort-down"
                        } `}
                        onClick={() => this.setState({ isOpen: !isOpen })}
                      ></i>
                    </h5>
                    <div className="close text-right">
                      <span
                        aria-hidden="true"
                        onClick={this.onDeleteClick.bind(this, id, dispatch)}
                      >
                        &times;
                      </span>
                    </div>
                  </div>
                  {isOpen ? (
                    <div className="card-body pt-0">
                      <ul className="list-group">
                        <li className="list-group-item">{email}</li>
                        <li className="list-group-item">{address}</li>
                        <li className="list-group-item">{phone}</li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : (
                "no data"
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
