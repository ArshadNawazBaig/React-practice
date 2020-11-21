import React, { Component } from "react";
import { Consumer } from "../context";
import Contact from "./Contact";

class Contacts extends Component {
  addContactHandler = (id, dispatch) => {
    const payload = {
      id: id + 1,
      name: "Liaqat",
      email: "liaqat@gmail.com",
      address: "200 main street Gilgit",
    };
    dispatch({ type: "ADD_CONTACT", payload: payload });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          const isData = contacts && contacts.length > 0;
          return (
            <React.Fragment>
              {isData ? (
                contacts.map((contact) => (
                  <Contact contact={contact} key={contact.id} />
                ))
              ) : (
                <p className="text-center">No Data</p>
              )}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
