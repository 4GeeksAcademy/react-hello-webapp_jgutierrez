import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

let ContactCard = ({ contact, contactKey }) => {
  console.log(contactKey);
  const { actions, store } = useContext(Context);

  return (
    <div className="card mb-3 container" style={{ maxWidth: "800px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/802/802404.png"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text">{contact.email}</p>
            <p className="card-text">{contact.phone}</p>
            <p className="card-text">{contact.address}</p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa fa-trash"></i>
            </button>
            <Link
              to={"/edit-contact/" + contactKey}
              type="button"
              className="btn btn-primary mx-2"
            >
              <i className="fa fa-pen"></i>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Borrar contacto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Deseas borrar a {contact.name} ?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  actions.deleteContact(contact.id);
                }}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
