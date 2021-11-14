import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { editShop } from "../Actions/index";
import { useSelector } from "react-redux";
import "./Component css/modal.css";

import { useDispatch } from "react-redux";

Modal.setAppElement("#root");
function EditModal({ modalIsOpen, setModalIsOpen, modalId }) {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state?.shopReducer);

  const customStyle = {
    content: {},
  };

  const initialFormData = {
    shopName: "",
    area: "",
    category: "",
    openingDate: "",
    closingDate: "",
  };

  const [editformData, setEditFormData] = useState([]);

  useEffect(() => {
    const editShopDetails = shops.find((element) => element.id === modalId);
    const shopData = editShopDetails?.data;
    setEditFormData(shopData);
  }, [modalId]);

  function validate(e) {
    const regex = /[A-Za-z ]/;
    const chars = e.target.value.split("");
    const char = chars.pop();
    if (!regex.test(char)) {
      e.target.value = chars.join("");
      console.log(`${char} is not a valid character.`);
    }
  }

  function setFormInputs(e) {
    e.preventDefault();
    setEditFormData({ ...editformData, [e.target.name]: e.target.value });
  }

  function submitFormData(e) {
    e.preventDefault();

    dispatch(editShop(editformData, modalId));
    setEditFormData(initialFormData);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyle}
      >
        <form onSubmit={submitFormData}>
          <div className="form-field-w">
            <label className="form-field-label">Shop Name *</label>
            <input
              type="text"
              name="shopName"
              onKeyUp={validate}
              value={editformData?.shopName}
              onChange={setFormInputs}
              className="form-input-field in-form w-input"
              required
            />
          </div>

          <div className="form-field-w">
            <label className="form-field-label">Shop Area *</label>
            <select
              name="area"
              value={editformData?.area}
              onChange={setFormInputs}
              className="form-input-field in-form is-select w-select"
              required
            >
              <option value="Thane">Thane</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai Suburban">Mumbai Suburban</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Solapur">Solapur</option>
            </select>
          </div>

          <div className="form-field-w">
            <label className="form-field-label">Shop Category *</label>
            <select
              name="category"
              value={editformData?.category}
              onChange={setFormInputs}
              className="form-input-field in-form is-select w-select"
              required
            >
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="StationeryShop">Stationery Shop</option>
            </select>
          </div>

          <div className="form-field-w">
            <label className="form-field-label">Shop Opening Date *</label>
            <input
              type="date"
              name="openingDate"
              value={editformData?.openingDate}
              onChange={setFormInputs}
              className="form-input-field w-input in-form"
              required
            />
          </div>
          <div className="form-field-w">
            <label className="form-field-label">Shop Closing Date *</label>
            <input
              type="date"
              name="closingDate"
              min={editformData?.openingDate}
              value={editformData?.closingDate}
              onChange={setFormInputs}
              className="form-input-field w-input in-form"
              required
            />
          </div>

          <div>
            <input type="submit" className="btn is-yellow w-inline-block" />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default EditModal;
