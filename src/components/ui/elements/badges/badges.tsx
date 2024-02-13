import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import { Badge, Button, Card, Col, Collapse, Form, Row } from "react-bootstrap";
import {
  Badgesdata,
  Badgesdata1,
  Borderbuttonsdata,
  Borderbuttonswithroundedbadgesdata,
  Buttonswithroundedbadgesdata,
  Linkbadgesdata,
} from "../../../common/elementsdata/elementsdata";

function Badges() {
  const [Bordersqure, setBordersqure] = useState(false);
  const [Buttonrounded, setButtonrounded] = useState(false);
  const [Borderrounded, setBorderrounded] = useState(false);
  const [Borderrounded1, setBorderrounded1] = useState(false);
  const [Linkbadges, setLinkbadges] = useState(false);
  const [Simplebadgs, setSimplebadgs] = useState(false);
  const [Colorbadges, setColorbadges] = useState(false);
  const [Badges, setBadges] = useState(false);
  const [Badgespills, setBadgespills] = useState(false);
  return (
    <Fragment>
      <Pageheader titles={"BADGES"} active={"Badges"} Subtite={"Elements"} />

      <Row>
        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">SIMPLE BADGES</div>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setSimplebadgs(!Simplebadgs)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <h1>
                    Heading 1 <Badge bg="secondary">New</Badge>
                  </h1>
                  <h2>
                    Heading 2 <Badge bg="secondary">New</Badge>
                  </h2>
                  <h3>
                    Heading 3 <Badge bg="secondary">New</Badge>
                  </h3>
                  <h4>
                    Heading 4 <Badge bg="secondary">New</Badge>
                  </h4>
                  <h5>
                    Heading 5 <Badge bg="secondary">New</Badge>
                  </h5>
                  <h6>
                    Heading 6 <span className="badge bg-light ">New</span>
                  </h6>
                </div>
              </div>
              <Collapse in={Simplebadgs} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<h1>
Heading 1 <Badge bg="secondary">New</Badge>
</h1>
<h2>
Heading 2 <Badge bg="secondary">New</Badge>
</h2>
<h3>
Heading 3 <Badge bg="secondary">New</Badge>
</h3>
<h4>
Heading 4 <Badge bg="secondary">New</Badge>
</h4>
<h5>
Heading 5 <Badge bg="secondary">New</Badge>
</h5>
<h6>
Heading 6 <Badge bg="secondary">New</Badge>
</h6>
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

        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge1">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">COLORED BADGES</div>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setColorbadges(!Colorbadges)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <h1 className="text-primary">
                    Heading 1 <Badge bg="primary" className="badge ">New</Badge>
                  </h1>
                  <h2 className="text-danger">
                    Heading 2 <Badge bg="danger" className="badge">New</Badge>
                  </h2>
                  <h3 className="text-warning">
                    Heading 3 <Badge bg="warning" className="badge ">New</Badge>
                  </h3>
                  <h4 className="text-success"> Heading 4 <Badge bg="success" className="badge ">New</Badge>
                  </h4>
                  <h5 className="text-info">
                    Heading 5 <Badge bg="info" className="badge ">New</Badge>
                  </h5>
                  <h6 className="text-secondary">
                    Heading 6 <Badge bg="secondary" className="badge ">New</Badge>
                  </h6>
                </div>
              </div>
              <Collapse in={Colorbadges} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<h1 className="text-primary">
Heading 1 <Badge bg="primary" className="badge ">New</Badge>
</h1>
<h2 className="text-danger">
Heading 2 <Badge bg="danger" className="badge">New</Badge>
</h2>
<h3 className="text-warning">
Heading 3 <Badge bg="warning" className="badge ">New</Badge>
</h3>
<h4 className="text-success">
Heading 4 <Badge bg="success" className="badge ">New</Badge>
</h4>
<h5 className="text-info">
Heading 5 <Badge bg="info" className="badge ">New</Badge>
</h5>
<h6 className="text-secondary">
Heading 6 <Badge bg="secondary" className="badge ">New</Badge>
</h6>
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

        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BADGES</div>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBadges(!Badges)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Badgesdata.map((idx) => (
                    <Badge
                      bg={idx.color}
                      className="badge me-1 my-2"
                      key={Math.random()}
                    >
                      {idx.text}
                    </Badge>
                  ))}
                </div>
              </div>
              <Collapse in={Badges} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<span className="badge bg-primary me-1 my-2">Primary</span>
<span className="badge bg-secondary me-1">Secondary</span>
<span className="badge bg-success me-1">Success</span>
<span className="badge bg-danger me-1">Danger</span>
<span className="badge bg-warning me-1">Warning</span>
<span className="badge bg-info me-1">Info</span>
<span className="badge bg-light me-1">Light</span>
<span className="badge bg-dark me-1">Dark</span>
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
        {/* <!-- col-end --> */}

        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">PILL BADGES</div>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBadgespills(!Badgespills)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Badgesdata1.map((idx) => (
                    <Badge
                      bg={idx.color}
                      className="badge badge-pill me-1 my-2"
                      key={Math.random()}
                    >
                      {idx.text}
                    </Badge>
                  ))}
                </div>
              </div>
              <Collapse in={Badgespills} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<span className="badge badge-pill bg-primary me-1 my-2">Primary</span>
<span className="badge badge-pill bg-secondary me-1">Secondary</span>
<span className="badge badge-pill bg-success me-1">Success</span>
<span className="badge badge-pill bg-danger me-1">Danger</span>
<span className="badge badge-pill bg-warning me-1">Warning</span>
<span className="badge badge-pill bg-info me-1">Info</span>
<span className="badge badge-pill bg-light me-1">Light</span>
<span className="badge badge-pill bg-dark me-1">Dark</span>
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

        <Col xl={6} lg={12} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">
                BORDER BUTTONS WITH SQUARE BADGES
              </div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBordersqure(!Bordersqure)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Borderbuttonsdata.map((idx) => (
                    <Button
                      variant=""
                      type="button"
                      className={`btn btn-outline-${idx.color} mt-1 mb-1 me-3`}
                      key={Math.random()}
                    >
                      <span>Notifications</span>
                      <Badge bg={idx.color} className="ms-1">
                        {idx.class}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Bordersqure} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<Button
variant=""
type="button"
className="btn btn-primary mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge  bg-white ms-1">2</span>
</Button>
<Button
variant=""
type="button"
className="btn btn-secondary  mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge bg-white ms-1">1</span>
</Button>
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

        <Col xl={6} lg={12} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BUTTONS WITH SQUARE BADGES</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setButtonrounded(!Buttonrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Buttonswithroundedbadgesdata.map((idx) => (
                    <Button
                      variant={idx.color}
                      type="button"
                      className="btn  mt-1 mb-1 me-3"
                      key={Math.random()}
                    >
                      <span>Notifications</span>
                      <Badge bg="white" className="badgerounded-pill ms-1">
                        {idx.class}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Buttonrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
{Buttonswithroundedbadgesdata.map((idx)=>(
<Button variant={idx.color} type="button" className="btn  mt-1 mb-1 me-3" key={Math.random()}>
<span>Notifications</span>
<span className="badge bg-white rounded-pill ms-1">{idx.class}</span>
</Button>
))}`}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-end --> */}

        <Col xl={6} lg={12} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">
                BORDER BUTTONS WITH ROUNDED BADGES
              </div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBorderrounded(!Borderrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Borderbuttonswithroundedbadgesdata.map((idx) => (
                    <Button
                      variant=""
                      type="button"
                      className={`btn btn-outline-${idx.color} mt-1 mb-1 me-3`}
                      key={Math.random()}
                    >
                      <span>Notifications</span>
                      <Badge
                        bg={idx.color}
                        className={`badge rounded-pill ms-1`}
                      >
                        {idx.class}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Borderrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<Button
variant=""
type="button"
className="btn btn-outline-primary mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge  bg-primary rounded-pill ms-1">2</span>
</Button>
<Button
variant=""
type="button"
className="btn btn-outline-success mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge bg-success rounded-pill ms-1">65</span>
</Button>
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

        {/* <!-- col-end --> */}

        <Col xl={6} lg={12} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BORDER WITH SQUARE BADGES</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBorderrounded1(!Borderrounded1)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Borderbuttonswithroundedbadgesdata.map((idx) => (
                    <Button
                      variant=""
                      type="button"
                      className={`btn btn-outline-${idx.color} mt-1 mb-1 me-3`}
                      key={Math.random()}
                    >
                      <span>Notifications</span>
                      <Badge
                        bg={idx.color}
                        className={`badge ms-1`}
                      >
                        {idx.class}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Borderrounded1} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<Button
variant=""
type="button"
className="btn btn-outline-primary mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge  bg-primary rounded-pill ms-1">2</span>
</Button>
<Button
variant=""
type="button"
className="btn btn-outline-success mt-1 mb-1 me-3"
>
<span>Notifications</span>
<span className="badge bg-success rounded-pill ms-1">65</span>
</Button>
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

        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">LINK BADGES</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setLinkbadges(!Linkbadges)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Linkbadgesdata.map((idx) => (
                    <Button
                      variant=""
                      type="button"
                      className={`btn btn-${idx.color} mt-1 mb-1 me-3`}
                      key={Math.random()}
                    >
                      {idx.text}
                      <Badge bg="light" className={`badge  ms-1 ${idx.class2}`}>
                        {idx.class1}
                        <i className={idx.class}></i>
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
              <Collapse in={Linkbadges} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
<div className="example">
<Button
variant=""
type="button"
className="btn btn-primary mt-1 mb-1 me-3"
>
Primary <span className="badge bg-light ms-1">22</span>
</Button>
<Button
variant=""
type="button"
className="btn btn-success mt-1 mb-1 me-3"
>
Success <span className="badge bg-light  ms-1">New</span>
</Button>
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

export default Badges;
