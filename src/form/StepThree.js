import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.propertyDoorEntry) ||
      validator.isEmpty(values.propertyCommunal) ||
      validator.isEmpty(values.propertyDecoration) ||
      validator.isEmpty(values.propertyLighting) ||
      validator.isEmpty(values.propertyAlarms) ||
      validator.isEmpty(values.propertyLifts) ||
      validator.isEmpty(values.formAddress) ||
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
          <header><h2 className="mb-4 fs-4">Building Interior</h2></header>
          <Form onSubmit={submitFormData}>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                as="textarea"
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyDoorEntry"
                id="propertyDoorEntry"
                defaultValue={values.propertyDoorEntry}
                type="text"
                placeholder="Door Entry"
                onChange={handleFormData("propertyDoorEntry")}
              />
              <Form.Label for="propertyDoorEntry">Door Entry</Form.Label>
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
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyCommunal"
                id="propertyCommunal"
                defaultValue={values.propertyCommunal}
                type="text"
                placeholder="Communal Areas"
                onChange={handleFormData("propertyCommunal")}
              />
              <Form.Label for="propertyCommunal">Communal Areas</Form.Label>
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
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyDecoration"
                id="propertyDecoration"
                defaultValue={values.propertyDecoration}
                type="text"
                placeholder="Interior Decoration"
                onChange={handleFormData("propertyDecoration")}
              />
              <Form.Label for="propertyDecoration">Interior Decoration</Form.Label>
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
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyLighting"
                id="propertyLighting"
                defaultValue={values.propertyLighting}
                type="text"
                placeholder="Lighting (fixtures, bulbs)"
                onChange={handleFormData("propertyLighting")}
              />
              <Form.Label for="propertyLighting">Lighting (fixtures, bulbs)</Form.Label>
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
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyAlarms"
                id="propertyAlarms"
                defaultValue={values.propertyAlarms}
                type="text"
                placeholder="Fire Alarms"
                onChange={handleFormData("propertyAlarms")}
              />
              <Form.Label for="propertyAlarms">Fire Alarms</Form.Label>
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
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyLifts"
                id="propertyLifts"
                defaultValue={values.propertyLifts}
                type="text"
                placeholder="Lifts"
                onChange={handleFormData("propertyLifts")}
              />
              <Form.Label for="propertyLifts">Lifts</Form.Label>
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
                <button className="btn btn-secondary btn-lg col" id="prevButton" onClick={prevStep}>Back</button>
                <button className="btn btn-success btn-lg col" id="nextButton" type="submit">Next</button>
              </div>
            </footer>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

export default StepThree;