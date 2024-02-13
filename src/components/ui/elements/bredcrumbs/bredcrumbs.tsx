import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import { Breadcrumb, Card, Col, Collapse, Form, Row } from "react-bootstrap";

function Bredcrumbs() {
  const [Basic, setBasic] = useState(false);
  const [Custom, setCustom] = useState(false);
  const [Icon, setIcon] = useState(false);
  const [Center, setCenter] = useState(false);
  const [Right, setRight] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"BREDCRUMBS"}
        active={"Bredcrumbs"}
        Subtite={"Elements"}
      />
      <Row>
        <Col lg={6} md={12}>
          <Card className="custom-card" id="basic">
            <Card.Header>
              <div className="d-flex justify-content-between">
              <div className="card-title"> BASIC STYLING</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div aria-label="breadcrumb">
                    <Breadcrumb className="breadcrumb-style mg-b-0">
                      <Breadcrumb.Item >Home</Breadcrumb.Item>
                      <Breadcrumb.Item >Library</Breadcrumb.Item>
                      <Breadcrumb.Item  active>
                        Data
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<div aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-style mg-b-0">
<Breadcrumb.Item >
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>
Data
</Breadcrumb.Item>
</Breadcrumb>
</div>
</div>
</div>
`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col lg={6} md={12}>
          <Card className="custom-card" id="custom">
            <Card.Header>
              <div className="d-flex flex-wrap justify-content-between">
              <div className="card-title">BREADCRUMB STYLE-02 </div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setCustom(!Custom)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div aria-label="breadcrumb">
                    <Breadcrumb className=" breadcrumb-style2 mb-0">
                      <Breadcrumb.Item >Home</Breadcrumb.Item>
                      <Breadcrumb.Item >Library</Breadcrumb.Item>
                      <Breadcrumb.Item  active>
                        Data
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Collapse in={Custom} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<div aria-label="breadcrumb">
<Breadcrumb className=" breadcrumb-style2 mb-0">
<Breadcrumb.Item >
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
</div>
</div>
</div>
`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col lg={6} md={12}>
          <Card className="custom-card" id="divider">
            <Card.Header>
              <div className="d-flex flex-wrap justify-content-between">
              <div className="card-title">BREADCRUMB STYLE-03</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setIcon(!Icon)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div aria-label="breadcrumb">
                    <Breadcrumb className="  breadcrumb-style mb-2">
                      <Breadcrumb.Item >
                        <svg
                          className="svg-icon mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                      </Breadcrumb.Item>
                      <Breadcrumb.Item >Library</Breadcrumb.Item>
                      <Breadcrumb.Item  active>
                        Data
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Collapse in={Icon} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<div aria-label="breadcrumb">
<Breadcrumb className="  breadcrumb-style mb-2">
<Breadcrumb.Item >
<svg
className="svg-icon mb-1"
xmlns="http://www.w3.org/2000/svg"
width="17"
height="17"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinejoin="round"
strokeLinecap="round"
>
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb className=" breadcrumb-style2 mb-0">
<Breadcrumb.Item >
<svg
className="svg-icon mb-1"
xmlns="http://www.w3.org/2000/svg"
width="17"
height="17"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
strokeWidth="2"
strokeLinejoin="round"
strokeLinecap="round"
>
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
</div>
</div>
</div>
`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col lg={6} md={12}>
          <Card className="custom-card" id="right">
            <Card.Header>
              <div className="d-flex flex-wrap justify-content-between">
              <div className="card-title">BREADCRUMBS-RIGHT ALIGN</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setRight(!Right)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="breadcrumb-end">
                    <Breadcrumb className=" breadcrumb-style1 mb-0">
                      <Breadcrumb.Item >Home</Breadcrumb.Item>
                      <Breadcrumb.Item >Library</Breadcrumb.Item>
                      <Breadcrumb.Item  active>
                        Data
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Collapse in={Right} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<div className="breadcrumb-end">
<Breadcrumb className=" breadcrumb-style1 mb-0">
<Breadcrumb.Item >
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
</div>
</div>
</div>
`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col lg={6} md={12}>
          <Card className="custom-card" id="center">
            <Card.Header>
              <div className="d-flex flex-wrap justify-content-between">
              <div className="card-title">BREADCRUMBS-CENTER ALIGN</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setCenter(!Center)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="breadcrumb-center">
                    <Breadcrumb className="breadcrumb-style1 mb-0">
                      <Breadcrumb.Item  className="me-2">
                        Home
                      </Breadcrumb.Item>
                      <Breadcrumb.Item  className="me-2">
                        Library
                      </Breadcrumb.Item>
                      <Breadcrumb.Item  className="me-2" active>
                        Data
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>
              </div>
              <Collapse in={Center} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<div className="breadcrumb-center">
<Breadcrumb className=" breadcrumb-style1 mb-0">
<Breadcrumb.Item >
Home
</Breadcrumb.Item>
<Breadcrumb.Item >
Library
</Breadcrumb.Item>
<Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
</div>
</div>
</div>
`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}
      </Row>
    </Fragment>
  );
}

export default Bredcrumbs;
