import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.propertyBoundaryWall) ||
      validator.isEmpty(values.propertyGardens) ||
      validator.isEmpty(values.propertyPaths) ||
      validator.isEmpty(values.propertyBins) ||
      validator.isEmpty(values.propertyRoof) ||
      validator.isEmpty(values.propertyGutters) ||
      validator.isEmpty(values.propertyBrickwork)
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
          <header><h2 className="mb-4 fs-4">Building Exterior</h2></header>
          <Form onSubmit={submitFormData}>

            <Form.Group className="mb-4 form-floating">
              <Form.Control
                as="textarea"
                style={{ border: error ? "2px solid red" : "", height: '120px' }}
                name="propertyBoundaryWall"
                id="propertyBoundaryWall"
                defaultValue={values.propertyBoundaryWall}
                type="text"
                placeholder="Boundary Wall / Fence"
                onChange={handleFormData("propertyBoundaryWall")}
              />
              <Form.Label for="propertyBoundaryWall">Boundary Wall / Fence</Form.Label>
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
                name="propertyGardens"
                id="propertyGardens"
                defaultValue={values.propertyGardens}
                type="text"
                placeholder="Gardens"
                onChange={handleFormData("propertyGardens")}
              />
              <Form.Label for="propertyGardens">Gardens (grass/flower beds/weeds/moss/litter)</Form.Label>
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
                name="propertyPaths"
                id="propertyPaths"
                defaultValue={values.propertyPaths}
                type="text"
                placeholder="Paths"
                onChange={handleFormData("propertyPaths")}
              />
              <Form.Label for="propertyPaths">Paths (uneven/crack/weeds)</Form.Label>
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
                name="propertyBins"
                id="propertyBins"
                defaultValue={values.propertyBins}
                type="text"
                placeholder="Bin Store"
                onChange={handleFormData("propertyBins")}
              />
              <Form.Label for="propertyBins">Bin Store</Form.Label>
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
                name="propertyRoof"
                id="propertyRoof"
                defaultValue={values.propertyRoof}
                type="text"
                placeholder="Roof"
                onChange={handleFormData("propertyRoof")}
              />
              <Form.Label for="propertyBins">Roof</Form.Label>
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
                name="propertyGutters"
                id="propertyGutters"
                defaultValue={values.propertyGutters}
                type="text"
                placeholder="Gutters and Downpipes"
                onChange={handleFormData("propertyGutters")}
              />
              <Form.Label for="propertyGutters">Gutters and Downpipes</Form.Label>
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
                name="propertyBrickwork"
                id="propertyBrickwork"
                defaultValue={values.propertyBrickwork}
                type="text"
                placeholder="Render / Brickwork"
                onChange={handleFormData("propertyBrickwork")}
              />
              <Form.Label for="propertyBrickwork">Render / Brickwork</Form.Label>
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

export default StepTwo;