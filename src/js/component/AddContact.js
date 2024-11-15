import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContact = () => {
  const { actions, store } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <form className="container">
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
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
          onChange={(e) => setAddress(e.target.value)}
          value={address}
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
          actions.createContact({
            name: name,
            email: email,
            phone: phone,
            address: address,
          });

          setName("");
          setEmail("");
          setPhone("");
          setAddress("");
        }}
      >
        Add
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
                Contacto agregado con éxito
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
