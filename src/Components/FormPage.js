import React, { useState } from "react";
import { addshop } from "../Actions/index";
import { useDispatch } from "react-redux";
import Nav from "./Nav";

import "./Component css/formPage.css";
import { Link } from "react-router-dom";
import Form from "./Form";

const FormPage = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    shopName: "",
    area: "",
    category: "",
    openingDate: "",
    closingDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitFormData(e) {
    e.preventDefault();

    dispatch(addshop(formData));
    setFormData(initialFormData);
  }

  return (
    <>
      <Nav />
      <div className="section formPage">
        <div className="formPage-container">
          <div className="content-flx-center">
            <h1 className="heading-h2">
              Post your shop into{" "}
              <span className="purple-txt">5k+ qualified</span> Shop List
            </h1>
          </div>
          <div className="form-container">
            <h2 className="form-title">Shop Information</h2>
            <div className="form-wrapper">
              <Form
                formData={formData}
                validate={validate}
                setFormInputs={setFormInputs}
                submitFormData={submitFormData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
