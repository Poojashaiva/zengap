import { Fragment, useState } from "react";
import {
  Spinner,
  Button,
  Row,
  Col,
  Card,
  Form,
  Collapse,
} from "react-bootstrap";
import Pageheader from "../../../common/pageheader/pageheader";
const Spinners = () => {
  const [BorderSpinners, setBorderSpinners] = useState(false);
  const [BorderColors, setBorderColors] = useState(false);
  const [GrowingSpinner, setGrowingSpinner] = useState(false);
  const [Spinnersize, setSpinnersize] = useState(false);
  const [ButtonwithSpinners, setButtonwithSpinners] = useState(false);
  const [Spinnergrow, setSpinnergrow] = useState(false);
  const [SpinnerAlign, setSpinnerAlign] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"SPINNERS"}
        active={"Spinners"}
        Subtite={"Elements"}
      />
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={12} lg={12}>
          <Card className="custom-card" id="bspinner">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title"> BORDER SPINNNERS </h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBorderSpinners(!BorderSpinners)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
                <Collapse in={BorderSpinners}>
                  <pre>
                    <code>
                      {`
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="bcolor">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">BORDER COLORES</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBorderColors(!BorderColors)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="border" className="me-2" variant="primary" />
                  <Spinner animation="border" className="me-2" variant="secondary" />
                  <Spinner animation="border" className="me-2" variant="success" />
                  <Spinner animation="border" className="me-2" variant="danger" />
                  <Spinner animation="border" className="me-2" variant="warning" />
                  <Spinner animation="border" className="me-2" variant="info" />
                  <Spinner animation="border" className="me-2" variant="light" />
                  <Spinner animation="border" className="me-2" variant="dark" />
                </div>
                <Collapse in={BorderColors}>
                  <pre>
                    <code>
                      {`
<Spinner animation="border" className="me-2" variant="primary"/>
<Spinner animation="border" className="me-2" variant="secondary"/>
<Spinner animation="border" className="me-2" variant="success" />
<Spinner animation="border" className="me-2" variant="danger" />
<Spinner animation="border" className="me-2" variant="warning" />
<Spinner animation="border" className="me-2" variant="info" />
<Spinner animation="border" className="me-2" variant="light" />
<Spinner animation="border" className="me-2" variant="dark" />


`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col lg={6} sm={6}>
              <Card className="custom-card" id="loaders">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">CIRCLE LOADER</h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-circle">
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} sm={6}>
              <Card className="custom-card" id="loaders1">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">RING LOADER</h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-dual-ring"></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col lg={} sm={4}>
<Card className="custom-card" id="loaders2">
<Card.Header className="d-sm-flex  justify-content-between align-items-center">
<div>
<h6 className="card-title">LINE LOADER</h6>
</div>
</Card.Header>
<Card.Body>
<div className="text-center">
<div className="lds-facebook">
<div></div>
<div></div>
<div></div>
</div>
</div>
</Card.Body>
</Card>
</Col> */}
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders3">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">HEART LOADER</h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-heart">
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders4">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">RIPPLE LOADER</h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} sm={4}>
              <Card className="custom-card" id="loaders5">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="card-title">SIPNNER LOADER</h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="text-center">
                    <div className="lds-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Card className="custom-card" id="gspinner">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">GROWING SPINNER</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setGrowingSpinner(!GrowingSpinner)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="grow" />
                </div>
                <Collapse in={GrowingSpinner}>
                  <pre>
                    <code>
                      {`

<div className="example">
<Spinner animation="grow" />
</div>

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="gcolor">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">GROWING COLORS</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnergrow(!Spinnergrow)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="dark" />
                </div>
                <Collapse in={Spinnergrow}>
                  <pre>
                    <code>
                      {`
<Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="light" />
<Spinner animation="grow" variant="dark" />

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="align">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">ALIGNMENT</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnerAlign(!SpinnerAlign)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="row">
                    <div className="text-start mg-b-20 col-6">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                    <div className="text-start col-6">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </div>
                </div>
                <Collapse in={SpinnerAlign}>
                  <pre>
                    <code>
                      {`

<div className="text-center mg-b-20">
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
</div>
<div className="text-end">
<Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner>
</div>

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="size">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">SIZE</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setSpinnersize(!Spinnersize)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div>
                    <Spinner
                      animation="border"
                      role="status"
                      className="spinner-border spinner-border-sm"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <Spinner
                      animation="grow"
                      className="spinner-grow spinner-grow-sm"
                    />
                  </div>
                </div>
                <Collapse in={Spinnersize}>
                  <pre>
                    <code>
                      {`
<div>
<Spinner
animation="border"
role="status"
className="spinner-border spinner-border-sm"
>
<span className="visually-hidden">Loading...</span>
</Spinner>
<Spinner
animation="grow"
className="spinner-grow spinner-grow-sm"
/>
</div>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="buton">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="card-title">BUTTON WITH SPINNER</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setButtonwithSpinners(!ButtonwithSpinners)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Loading...</span>
                    </Button>

                    <Button variant="secondary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </Button>
                  </div>
                </div>
                <Collapse in={ButtonwithSpinners}>
                  <pre>
                    <code>
                      {`

<div className="btn-list">
<Button variant="primary" disabled>
<Spinner
as="span"
animation="border"
size="sm"
role="status"
aria-hidden="true"
/>
<span className="visually-hidden">Loading...</span>
</Button>

<Button variant="secondary" disabled>
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button>
</div>

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Spinners.propTypes = {};

Spinners.defaultProps = {};

export default Spinners;
