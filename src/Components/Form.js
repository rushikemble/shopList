import React from "react";

function Form({ formData, validate, setFormInputs, submitFormData }) {
  return (
    <>
      <form onSubmit={submitFormData}>
        <div className="form-field-w">
          <label className="form-field-label">Shop Name *</label>
          <input
            type="text"
            name="shopName"
            onKeyUp={validate}
            value={formData.shopName}
            onChange={setFormInputs}
            className="form-input-field in-form w-input"
            required
          />
        </div>

        <div className="form-field-w">
          <label className="form-field-label">Shop Area *</label>
          <select
            name="area"
            value={formData.area}
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
            value={formData.category}
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
            value={formData.openingDate}
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
            min={formData.openingDate}
            value={formData.closingDate}
            onChange={setFormInputs}
            className="form-input-field w-input in-form"
            required
          />
        </div>

        <div>
          <input type="submit" className="btn is-yellow w-inline-block" />
        </div>
      </form>
    </>
  );
}

export default Form;
