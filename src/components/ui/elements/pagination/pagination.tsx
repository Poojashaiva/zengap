import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import {
  Card,
  Col,
  Form,
  Row,
  Pagination,
  Collapse,
  Nav,
} from "react-bootstrap";

function Paginations() {
  const [Basic, setBasic] = useState(false);
  const [Circle, setCircle] = useState(false);
  const [Dark, setDark] = useState(false);
  const [Color, setColor] = useState(false);
  const [Sizes, setSizes] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"PAGINATION"}
        active={"Pagination"}
        Subtite={"Elements"}
      />
      <Row>
        <Col xl={12} lg={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h3 className="card-title  mg-b-10">BASIC PAGINATION</h3>
                  <Form className="d-flex ms-auto">
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
                  <Pagination className=" mb-0">
                    <Pagination.Item className="page-item">
                      <i className="icon ion-ios-arrow-back"></i>
                    </Pagination.Item>
                    <Pagination.Item className="page-item active">
                      1
                    </Pagination.Item>
                    <Pagination.Item className="page-item">2</Pagination.Item>
                    <Pagination.Item className="page-item">3</Pagination.Item>
                    <Pagination.Item className="page-item">
                      <i className="icon ion-ios-arrow-forward"></i>
                    </Pagination.Item>
                  </Pagination>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Pagination className=" mb-0">
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-back"></i>
</Pagination.Item>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-forward"></i>
</Pagination.Item>
</Pagination>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className="card custom-card">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h3 className="card-title  mg-b-10">CIRCLED PAGINATION</h3>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setCircle(!Circle)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Pagination className=" pagination-circled mb-0">
                    <Pagination.Item className="page-item">
                      <i className="icon ion-ios-arrow-back"></i>
                    </Pagination.Item>
                    <Pagination.Item className="page-item active">
                      1
                    </Pagination.Item>
                    <Pagination.Item className="page-item">2</Pagination.Item>
                    <Pagination.Item className="page-item">3</Pagination.Item>
                    <Pagination.Item className="page-item">
                      <i className="icon ion-ios-arrow-forward"></i>
                    </Pagination.Item>
                  </Pagination>
                </div>
              </div>
              <Collapse in={Circle} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Pagination className=" pagination-circled mb-0">
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-back"></i>
</Pagination.Item>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-forward"></i>
</Pagination.Item>
</Pagination>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card className="card custom-card">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h3 className="card-title  mg-b-10">
                PAGINATION FOR DARK BACKGROUND
              </h3>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDark(!Dark)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example  bg-dark">
                  <div className="pd-5 bg-gray-800">
                    <Pagination className=" pagination-dark mb-0 mg-b-0">
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-back"></i>
                      </Pagination.Item>
                      <Pagination.Item className="page-item active">
                        1
                      </Pagination.Item>
                      <Pagination.Item className="page-item">2</Pagination.Item>
                      <Pagination.Item className="page-item">3</Pagination.Item>
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-forward"></i>
                      </Pagination.Item>
                    </Pagination>
                  </div>
                </div>
              </div>
              <Collapse in={Dark} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example  bg-dark">
<div className="pd-20 bg-gray-800">
<Pagination className=" pagination-dark mb-0 mg-b-0">
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-back"></i>
</Pagination.Item>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-forward"></i>
</Pagination.Item>
</Pagination>
</div>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card className="card custom-card">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h3 className="card-title  mg-b-10">COLOR VARIANT PAGINATION</h3>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setColor(!Color)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm">
                    <Col sm={6} lg={4} className="">
                      <Pagination className=" pagination-primary mg-sm-b-0">
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-back"></i>
                        </Pagination.Item>
                        <Pagination.Item className="page-item active">
                          1
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          2
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          3
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-forward"></i>
                        </Pagination.Item>
                      </Pagination>
                    </Col>

                    <Col sm={6} lg={4} className=" mg-sm-t-0">
                      <Pagination className=" pagination-success mb-0">
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-back"></i>
                        </Pagination.Item>
                        <Pagination.Item className="page-item active">
                          1
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          2
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          3
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-forward"></i>
                        </Pagination.Item>
                      </Pagination>
                    </Col>
                  </Row>
                </div>
              </div>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Row className="row-sm">
<Col sm={6}lg={4} className="">
<Pagination className=" pagination-primary mg-sm-b-0">
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-back"></i>
</Pagination.Item>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-forward"></i>
</Pagination.Item>
</Pagination>
</Col>
<Col sm={6}lg={4} className=" mg-sm-t-0">
<Pagination className=" pagination-success mb-0">
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-back"></i>
</Pagination.Item>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
<Pagination.Item className="page-item">
<i className="icon ion-ios-arrow-forward"></i>
</Pagination.Item>
</Pagination>
</Col>
</Row>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card className="card custom-card">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h3 className="card-title  mg-b-10"> PAGINATION SIZES</h3>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setSizes(!Sizes)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm">
                    <Col sm={6} md={4}>
                      <Nav>
                        <Pagination
                          size="lg"
                          className=" pagination-lg mb-2 mt-2"
                        >
                          <Pagination.Item className="page-item active">
                            1
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            2
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            3
                          </Pagination.Item>
                        </Pagination>
                      </Nav>
                    </Col>
                    <Col sm={6} md={4}>
                      <Nav>
                        <Pagination className="  mb-2 mt-2">
                          <Pagination.Item className="page-item active">
                            1
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            2
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            3
                          </Pagination.Item>
                        </Pagination>
                      </Nav>
                    </Col>
                    <Col sm={6} md={4} className="mg-t-10 mg-sm-t-0">
                      <Nav>
                        <Pagination
                          size="sm"
                          className=" pagination-sm mb-2 mt-2"
                        >
                          <Pagination.Item className="page-item active">
                            1
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            2
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            3
                          </Pagination.Item>
                        </Pagination>
                      </Nav>
                    </Col>
                  </Row>
                </div>
              </div>
              <Collapse in={Sizes} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Row className="row-sm">
<Col sm={6}md={4}>
<Nav>
<Pagination
size="lg"
className=" pagination-lg mb-2 mt-2"
>
<Pagination.Item className="page-item active">
1
</Pagination.Item>
<Pagination.Item className="page-item">
2
</Pagination.Item>
<Pagination.Item className="page-item">
3
</Pagination.Item>
</Pagination>
</Nav>
</Col>
</Row>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Paginations;
