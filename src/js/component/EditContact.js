import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
  const { actions, store } = useContext(Context);

  const params = useParams();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [contactId, setContactId] = useState(null);

  useEffect(() => {
    let contact = store.contacts[params.id];
    {
      console.log(contact);
      console.log(contact.id);
    }
    setNewName(contact.name);
    setNewEmail(contact.email);
    setNewPhone(contact.phone);
    setNewAddress(contact.address);
    setContactId(contact.id);
  }, []);

  // return <div>hola</div>;

  return (
    <form className="container">
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          type="text"
          className="form-control"
          id="nameInput"
          aria-describedby="nameInput"
          placeholder="Steve"
        />

        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailInput"
          placeholder="steve@4geeks.com"
        />

        <label htmlFor="phoneInput" className="form-label">
          Phone
        </label>
        <input
          onChange={(e) => setNewPhone(e.target.value)}
          value={newPhone}
          type="tel"
          className="form-control"
          id="phoneInput"
          aria-describedby="phoneInput"
          placeholder="91123123"
        />

        <label htmlFor="addressInput" className="form-label">
          Address
        </label>
        <input
          onChange={(e) => setNewAddress(e.target.value)}
          value={newAddress}
          type="text"
          className="form-control"
          id="addressInput"
          aria-describedby="addressInput"
          placeholder="Villa Esmeralda 2323"
        />

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          actions.editContact({
            id: contactId,
            name: newName,
            email: newEmail,
            phone: newPhone,
            address: newAddress,
          });
        }}
      >
        Edit
      </button>

      {/* {<!-- Modal -->} */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Contacto modificado con éxito
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok!
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddContact;
