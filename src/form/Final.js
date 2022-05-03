import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Final = ({ prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  return (
    <div className="container py-4">
      <Card>
        <Card.Body>
          <header><h2 className="mb-3 fs-4">Review Form</h2></header>

          <p><strong>Property Address: </strong> <br/>&nbsp; {values.formAddress}{" "}</p>
          <p><strong>Boundary Wall / Fences: </strong> <br/>&nbsp; {values.propertyBoundaryWall}{" "}</p>
          <p><strong>Gardens: </strong> <br/>&nbsp; {values.propertyGardens}{" "}</p>
          <p><strong>Paths: </strong> <br/>&nbsp; {values.propertyPaths}{" "}</p>
          <p><strong>Bin Store: </strong> <br/>&nbsp; {values.propertyBins}{" "}</p>
          <p><strong>Roof: </strong> <br/>&nbsp; {values.propertyRoof}{" "}</p>
          <p><strong>Gutters: </strong> <br/>&nbsp; {values.propertyGutters}{" "}</p>
          <p><strong>Brickwork: </strong> <br/>&nbsp; {values.propertyBrickwork}{" "}</p>
          <p><strong>Door Entry: </strong> <br/>&nbsp; {values.propertyDoorEntry}{" "}</p>
          <p><strong>Communal Areas: </strong> <br/>&nbsp; {values.propertyCommunal}{" "}</p>
          <p><strong>Decoration: </strong> <br/>&nbsp; {values.propertyDecoration}{" "}</p>
          <p><strong>Lighting: </strong> <br/>&nbsp; {values.propertyLighting}{" "}</p>
          <p><strong>Alarms: </strong> <br/>&nbsp; {values.propertyAlarms}{" "}</p>
          <p><strong>Lifts: </strong> <br/>&nbsp; {values.propertyLifts}{" "}</p>
          <p><strong>Gas Meter Number: </strong> {values.propertyMeterNumberGas}{" "}</p>
          <p><strong>Gas Meter Reading: </strong> {values.propertyMeterReadingGas}{" "}</p>
          <p><strong>Electric Meter Number: </strong> {values.propertyMeterNumberElec}{" "}</p>
          <p><strong>Electric Meter Reading: </strong> {values.propertyMeterReadingElec}{" "}</p>
          <p><strong>Other Notes: </strong> <br/>&nbsp; {values.otherNotes}{" "}</p>

          <footer>
            <div className="row mx-0 gap-4">
              <button className="btn btn-secondary btn-lg col" id="prevButton" onClick={prevStep}>Back</button>
              <button className="btn btn-success btn-lg col" id="nextButton" type="submit">Submit</button>
            </div>
          </footer>
        </Card.Body>
      </Card>
    </div>
  )
};

export default Final;