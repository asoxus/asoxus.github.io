import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.userName) ||
      validator.isEmpty(values.formAddress)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div className="container py-4">
      <Card>
        <Card.Body>
          <header><h2 className="mb-4 fs-4">Your Details</h2></header>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-4 form-floating">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="userName"
                id="userName"
                defaultValue={values.userName}
                type="text"
                placeholder="Your Name"
                onChange={handleFormData("userName")}
              />
              <Form.Label for="userName">Your Name</Form.Label>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="userEmail"
                id="userEmail"
                defaultValue={values.userEmail}
                type="email"
                placeholder="Your Email"
                onChange={handleFormData("userEmail")}
              />
              <Form.Label for="userEmail">Your Email</Form.Label>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                as="textarea"
                style={{ border: error ? "2px solid red" : "", height: '150px' }}
                name="formAddress"
                id="formAddress"
                defaultValue={values.formAddress}
                placeholder="Property Address"
                onChange={handleFormData("formAddress")}
              />
              <Form.Label for="formAddress">Property Address</Form.Label>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <footer>
              <div className="row mx-0 gap-4">
                <div className="col">&nbsp;</div>
                <button className="btn btn-success btn-lg col" id="nextButton" type="submit">Next</button>
              </div>
            </footer>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

export default StepOne;