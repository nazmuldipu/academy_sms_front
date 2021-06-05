import "./confirmModal.css";

import React from "react";
import { Modal } from "react-bootstrap";

const ConfirmModal = ({ show, onConfirm, onClose }) => {
  return (
    <>
      <Modal show={show} onHide={onClose} animation={false}>
        <div className="container py-4">
          <div className="text-center">
            <i className="fa fa-check text-center" aria-hidden="true"></i>
          </div>
          <h2 className="modal-title text-center">Are you sure?</h2>
          <p className="text-center m-4 text-black-50">
            Do you really want to delete these records? This process cannot be
            undone.
          </p>
          <div class="d-flex justify-content-evenly">
            <button className="btn btn-secondary rounded-0" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-success  rounded-0" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
