import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.propertyMeterNumberGas) ||
      validator.isEmpty(values.propertyMeterReadingGas) ||
      validator.isEmpty(values.propertyMeterNumberElec) ||
      validator.isEmpty(values.propertyMeterReadingElec)
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
          <header><h2 className="mb-4 fs-4">Meter Readings</h2></header>

          <h3 className="mb-4 fs-5">Gas</h3>
          <Form onSubmit={submitFormData}>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="propertyMeterNumberGas"
                id="propertyMeterNumberGas"
                defaultValue={values.propertyMeterNumberGas}
                type="text"
                placeholder="Meter Number"
                onChange={handleFormData("propertyMeterNumberGas")}
              />
              <Form.Label for="propertyMeterNumberGas">Meter Number</Form.Label>
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
                name="propertyMeterReadingGas"
                id="propertyMeterReadingGas"
                defaultValue={values.propertyMeterReadingGas}
                type="text"
                placeholder="Meter Reading"
                onChange={handleFormData("propertyMeterReadingGas")}
              />
              <Form.Label for="propertyMeterReadingGas">Meter Reading</Form.Label>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <h3 className="mb-4 fs-5">Electricity</h3>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="propertyMeterNumberElec"
                id="propertyMeterNumberElec"
                defaultValue={values.propertyMeterNumberElec}
                type="text"
                placeholder="Meter Number"
                onChange={handleFormData("propertyMeterNumberElec")}
              />
              <Form.Label for="propertyMeterNumberElec">Meter Number</Form.Label>
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
                name="propertyMeterReadingElec"
                id="propertyMeterReadingElec"
                defaultValue={values.propertyMeterReadingElec}
                type="text"
                placeholder="Meter Reading"
                onChange={handleFormData("propertyMeterReadingElec")}
              />
              <Form.Label for="propertyMeterReadingElec">Meter Reading</Form.Label>
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

export default StepFour;