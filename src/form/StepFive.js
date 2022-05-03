import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepFive = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.otherNotes)
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
          <header><h2 className="mb-4 fs-4">Other Notes</h2></header>
          <Form onSubmit={submitFormData}>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                as="textarea"
                style={{ border: error ? "2px solid red" : "", height: '200px' }}
                name="otherNotes"
                id="otherNotes"
                defaultValue={values.otherNotes}
                type="text"
                placeholder="Other Notes"
                onChange={handleFormData("otherNotes")}
              />
              <Form.Label for="otherNotes">Other Notes</Form.Label>
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

export default StepFive;