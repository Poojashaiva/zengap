import { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  Row,
  Form,
  Collapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Pageheader from "../../../common/pageheader/pageheader";
import Allimages from "../../../common/imagesdata/imagesdata";

const ListGroups = () => {
  const [Basic, setBasic] = useState(false);
  const [Listgroupbutton, setListgroupbutton] = useState(false);
  const [Basicdisabled, setBasicdisabled] = useState(false);
  const [Basicgroup, setBasicgroup] = useState(false);
  const [Listgroup, _setListgroup] = useState(false);
  const [Numbered, setNumbered] = useState(false);
  const [paragraph, setparagraph] = useState(false);
  const [Listgroupflush, setListgroupflush] = useState(false);
  const [Numberedlistgroup, setNumberedlistgroup] = useState(false);
  const [Contextual, setContextual] = useState(false);
  const [Checkboxes, setCheckboxes] = useState(false);
  const [Horizontal, setHorizontal] = useState(false);
  const [Orderunorder, setOrderunorder] = useState(false);
  const [Order, setOrder] = useState(false);
  const [Customcontent, setCustomcontent] = useState(false);
  const [Userlist, setUserlist] = useState(false);

  return (
    <Fragment>
      <Pageheader titles="LIST GROUP" Subtite="Elements" active="List Group" />
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">Basic List group</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroup.Item className="list-group-item">
                  An item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A second item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A third item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A fourth item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  And a fifth one
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
<ListGroup.Item className="list-group-item">An item</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A fourth item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
And a fifth one
</ListGroup.Item>
</ListGroup>                    
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="list-group-link">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">
                  Basic List group with Active item
                </h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setBasicgroup(!Basicgroup)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroup.Item
                  className="list-group-item "
                  active
                  aria-current="true"
                >
                  An active item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A second item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A third item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A fourth item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  And a fifth one
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Basicgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
<ListGroup.Item
className="list-group-item "
active
aria-current="true"
>
An active item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A fourth item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
And a fifth one
</ListGroup.Item>
</ListGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">
                  Basic List group with Disabled item
                </h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setBasicdisabled(!Basicdisabled)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroup.Item
                  className="list-group-item "
                  disabled
                  aria-disabled="true"
                >
                  A disabled item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A second item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A third item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  A fourth item
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  And a fifth one
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Basicdisabled} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
<ListGroup.Item
className="list-group-item "
disabled
aria-disabled="true"
>
A disabled item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A fourth item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
And a fifth one
</ListGroup.Item>
</ListGroup>                  

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="list-group-link">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">List group </h3>
               <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => _setListgroup(!Listgroup)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroup.Item
                
                
                  className="list-group-item list-group-item-action "
                
                  aria-current="true"
                >
                  The current link item
                </ListGroup.Item>
                <ListGroup.Item
                
                
                  className="list-group-item list-group-item-action"
                  aria-disabled="true"

                >
                  A second link item
                </ListGroup.Item>
                <ListGroup.Item
                  
                
                  className="list-group-item list-group-item-action"
                >
                  A third link item
                </ListGroup.Item>
                <ListGroup.Item
              
                
                  className="list-group-item list-group-item-action"
                  aria-disabled="true"

                >
                  A fourth link item
                </ListGroup.Item>
                <ListGroup.Item
              
                  action
                  className="list-group-item list-group-item-action "
                  disabled
                  // tabIndex={-1}
                  aria-disabled="true"
                >
                  A disabled link item
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Listgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
<ListGroup.Item
 action
className="list-group-item list-group-item-action "
active
aria-current="true"
>
The current link item
</ListGroup.Item>
<ListGroup.Item
 action
className="list-group-item list-group-item-action"
>
A second link item
</ListGroup.Item>
<ListGroup.Item
 action
className="list-group-item list-group-item-action"
>
A third link item
</ListGroup.Item>
<ListGroup.Item
 action
className="list-group-item list-group-item-action"
>
A fourth link item
</ListGroup.Item>
<ListGroup.Item
 action
className="list-group-item list-group-item-action "
disabled
tabIndex={-1}
aria-disabled="true"
>
A disabled link item
</ListGroup.Item>
</ListGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="list-group-link">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">List group with Buttons</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setListgroupbutton(!Listgroupbutton)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action active br-bl-0 br-br-0"
                  aria-current="true"
                >
                  The current button
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action rounded-0"
                >
                  A second item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action rounded-0"
                >
                  A third button item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action rounded-0"
                >
                  A fourth button item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action br-tl-0 br-tr-0 border bd-t-0"
                  disabled
                >
                  A disabled button item
                </Button>
              </ListGroup>
              <Collapse in={Listgroupbutton} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
<Button
variant=""
type="button"
className="list-group-item list-group-item-action active"
aria-current="true"
>
The current button
</Button>
<Button
variant=""
type="button"
className="list-group-item list-group-item-action"
>
A second item
</Button>
<Button
variant=""
type="button"
className="list-group-item list-group-item-action"
>
A third button item
</Button>
<Button
variant=""
type="button"
className="list-group-item list-group-item-action"
>
A fourth button item
</Button>
<Button
variant=""
type="button"
className="list-group-item list-group-item-action"
disabled
>
A disabled button item
</Button>
</ListGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">Numbered list group</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setNumbered(!Numbered)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup
                as="ol"
                // numbered
                className="list-group list-group-numbered"
              >
                <ListGroup.Item as="li" className="list-group-item">
                
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item">
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item">
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item">
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li" className="list-group-item">
                  Cras justo odio
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Numbered} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup as="ol" numbered className="list-group list-group-numbered" >
<ListGroup.Item as="li" className="list-group-item">
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li" className="list-group-item">
Cras justo odio
</ListGroup.Item>
</ListGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title  mg-b-10">LIST GROUP WITH FLUSH</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setListgroupflush(!Listgroupflush)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>

              <div>
                <ListGroup className="list-group list-group-flush">
                  <ListGroup.Item className="list-group-item">
                    An item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A second item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A third item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A fourth item
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Collapse in={Listgroupflush} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
<ListGroup className="list-group list-group-flush">
<ListGroup.Item className="list-group-item">An item</ListGroup.Item>
<ListGroup.Item className="list-group-item">A second item</ListGroup.Item>
<ListGroup.Item className="list-group-item">A third item</ListGroup.Item>
<ListGroup.Item className="list-group-item">A fourth item</ListGroup.Item>
</ListGroup>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">
                  NUMBER LIST GROUP WITH CUSTOM CONTENT
                </h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setNumberedlistgroup(!Numberedlistgroup)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup
                as="ol"
                numbered
                className="list-group list-group-numbered"
              >
                <ListGroup.Item
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroup.Item>
              </ListGroup>
              <Collapse in={Numberedlistgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup
as="ol"
numbered
className="list-group list-group-numbered"
>
<ListGroup.Item
as="li"
className="list-group-item d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<span className="badge bg-primary rounded-pill">14</span>
</ListGroup.Item>
<ListGroup.Item
as="li"
className="list-group-item d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<span className="badge bg-primary rounded-pill">14</span>
</ListGroup.Item>
<ListGroup.Item
as="li"
className="list-group-item d-flex justify-content-between align-items-start"
>
<div className="ms-2 me-auto">
<div className="fw-bold">Subheading</div>
Cras justo odio
</div>
<span className="badge bg-primary rounded-pill">14</span>
</ListGroup.Item>
</ListGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title  mg-b-10">HORIZONTAL LIST GROUP</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setHorizontal(!Horizontal)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>

              <div>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal mb-3"
                >
                  <ListGroup.Item className="list-group-item">
                    An item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A second item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A third item
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-sm mb-3"
                >
                  <ListGroup.Item className="list-group-item">
                    An item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A second item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A third item
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-md mb-3"
                >
                  <ListGroup.Item className="list-group-item">
                    An item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A second item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A third item
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-lg mb-3"
                >
                  <ListGroup.Item className="list-group-item">
                    An item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A second item
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    A third item
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Collapse in={Horizontal} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
<ListGroup
horizontal
className="list-group list-group-horizontal mb-3"
>
<ListGroup.Item className="list-group-item">
An item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
</ListGroup>
<ListGroup
horizontal
className="list-group list-group-horizontal-sm mb-3"
>
<ListGroup.Item className="list-group-item">
An item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
</ListGroup>
<ListGroup
horizontal
className="list-group list-group-horizontal-md mb-3"
>
<ListGroup.Item className="list-group-item">
An item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
</ListGroup>
<ListGroup
horizontal
className="list-group list-group-horizontal-lg mb-3"
>
<ListGroup.Item className="list-group-item">
An item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A second item
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
A third item
</ListGroup.Item>
</ListGroup>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title  mg-b-10">
                  LIST GROUP WITH CHECKBOXES
                </h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setCheckboxes(!Checkboxes)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>

              <div>
                <ListGroup className="list-group">
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">First checkbox</span>
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Second checkbox</span>
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Third checkbox</span>
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Fourth checkbox</span>
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Fifth checkbox</span>
                    </label>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Sixth checkbox</span>
                    </label>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Collapse in={Checkboxes} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
<ListGroup className="list-group">
<ListGroup.Item className="list-group-item">
<label className="d-flex align-items-center mb-0">
<span className="check-box mb-0 ms-2">
<span className="ckbox">
<input type="checkbox" />
<span></span>
</span>
</span>
<span className="ms-3 my-auto">First checkbox</span>
</label>
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
<label className="d-flex align-items-center mb-0">
<span className="check-box mb-0 ms-2">
<span className="ckbox">
<input type="checkbox" />
<span></span>
</span>
</span>
<span className="ms-3 my-auto">Third checkbox</span>
</label>
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
<label className="d-flex align-items-center mb-0">
<span className="check-box mb-0 ms-2">
<span className="ckbox">
<input type="checkbox" />
<span></span>
</span>
</span>
<span className="ms-3 my-auto">Fourth checkbox</span>
</label>
</ListGroup.Item>
</ListGroup>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title  mg-b-10">
                  LIST GROUP WITH CONTEXTUAL CLASSES
                </h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setContextual(!Contextual)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>

              <div>
                <ListGroup className="list-group">
                  <ListGroup.Item variant="" className="list-group-item">
                    A simple default list group item
                  </ListGroup.Item>

                  <ListGroup.Item
                    variant=""
                    className="list-group-item list-group-item-primary"
                  >
                    A simple primary list group item
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=""
                    className="list-group-item list-group-item-secondary"
                  >
                    A simple secondary list group item
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=""
                    className="list-group-item list-group-item-success"
                  >
                    A simple success list group item
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=""
                    className="list-group-item list-group-item-warning"
                  >
                    A simple warning list group item
                  </ListGroup.Item>
                  <ListGroup.Item
                    variant=""
                    className="list-group-item list-group-item-info"
                  >
                    A simple info list group item
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Collapse in={Contextual} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
<ListGroup className="list-group">
<ListGroup.Item variant="" className="list-group-item">
A simple default list group item
</ListGroup.Item>
<ListGroup.Item
variant=""
className="list-group-item list-group-item-primary"
>
A simple primary list group item
</ListGroup.Item>
<ListGroup.Item
variant=""
className="list-group-item list-group-item-success"
>
A simple success list group item
</ListGroup.Item>
</ListGroup>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">LIST STYLE WITH PARAGRAPH</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setparagraph(!paragraph)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, fuga veniam alias ab nemo nesciunt aperiam vero rem
                  enim ,Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Quos obcaecati velit earum suscipit possimus quaerat
                  similique eos quod distinctio commodi dicta fuga veniam alias
                  ab nemo nesciunt aperiam vero rem enim ,Lorem ipsum dolor sit
                  amet consectetur, ?
                </p>
                <ul className="paragraph-list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
              </div>
              <Collapse in={paragraph} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
<p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
fuga veniam alias ab nemo nesciunt aperiam vero rem enim ,Lorem
ipsum dolor sit amet consectetur, adipisicing elit. Quos
obcaecati velit earum suscipit possimus quaerat similique eos
quod distinctio commodi dicta fuga veniam alias ab nemo nesciunt
aperiam vero rem enim ,Lorem ipsum dolor sit amet consectetur, ?
</p>
<ul className="paragraph-list">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
</ul>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">ORDER LIST</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setOrder(!Order)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol className="order-list">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
              <Collapse in={Order} className="mt-2">
                <pre>
                  <code>
                    {`
<ol className="order-list">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>
Nulla volutpat aliquam velit
<ol className="order-list">
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ol>
</li>
<li>Faucibus porta lacus fringilla vel</li>
<li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li>
</ol>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">ORDER WITH UNORDER</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setOrderunorder(!Orderunorder)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul className="list-style4 ps-5">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
              <Collapse in={Orderunorder} className="mt-2">
                <pre>
                  <code>
                    {`
<ol className="order-list">
<li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li>
<li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>
Nulla volutpat aliquam velit
<ul className="list-style4 ps-5">
<li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li>
<li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li>
</ul>
</li>
<li>Faucibus porta lacus fringilla vel</li>
<li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li>
</ol>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">CUSTOM CONTENT</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setCustomcontent(!Customcontent)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="example">
                  <div className="list-group">
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start active"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small>3 days ago</small>
                      </div>

                      <small>Donec id elit non mi porta.</small>
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>

                      <small>
                        Donec id elit non mi porta.
                      </small>
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>

                      <small>
                        Donec id elit non mi porta.
                      </small>
                    </Link>
                  </div>
                </div>
              </div>
              <Collapse in={Customcontent} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
<div className="list-group">
<Link
className="list-group-item list-group-item-action flex-column align-items-start active"
to="#"
>
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2 tx-14">List group item heading</h5>
<small>3 days ago</small>
</div>
<p className="mb-1 tx-13">
Donec id elit non mi porta gravida at eget metus. Maecenas
sed diam eget risus varius blandit.
</p>
<small>Donec id elit non mi porta.</small>
</Link>
<Link
className="list-group-item list-group-item-action flex-column align-items-start"
to="#"
>
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2 tx-14">List group item heading</h5>
<small className="text-muted">3 days ago</small>
</div>
<p className="mb-1 tx-13">
Donec id elit non mi porta gravida at eget metus. Maecenas
sed diam eget risus varius blandit.
</p>
<small className="text-muted">
Donec id elit non mi porta.
</small>
</Link>
<Link
className="list-group-item list-group-item-action flex-column align-items-start"
to="#"
>
<div className="d-flex w-100 justify-content-between">
<h5 className="mb-2 tx-14">List group item heading</h5>
<small className="text-muted">3 days ago</small>
</div>
<p className="mb-1 tx-13">
Donec id elit non mi porta gravida at eget metus. Maecenas
sed diam eget risus varius blandit.
</p>
<small className="text-muted">
Donec id elit non mi porta.
</small>
</Link>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
                <h3 className="card-title">USER LIST</h3>
                <Form className="ms-3 mg-xs-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    onClick={() => setUserlist(!Userlist)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="">
                  <div className="list-group">
                    <div className="list-group-item pd-y-20">
                      <div className="media">
                        <div className="d-flex mg-r-10 wd-50">
                          <img
                            className="me-4 rounded-circle avatar-md"
                            src={Allimages("User5")}
                            alt="avatar"
                          />
                        </div>
                        <div className="media-body">
                          <div className="media-body d-flex">
                            <h6 className="tx-15 mb-2">Blake Vanessa</h6>
                            <span className="tx-12 float-end ms-auto text-muted">
                              4 hours ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item pd-y-20">
                      <div className="media">
                        <div className="d-flex mg-r-10 wd-50">
                          <img
                            className="me-4 rounded-circle avatar-md"
                            src={Allimages("User6")}
                            alt="avatar"
                          />
                        </div>
                        <div className="media-body">
                          <div className="media-body d-flex">
                            <h6 className="tx-15 mb-2">Elizabeth Parsons</h6>
                            <span className="tx-12 float-end ms-auto text-muted">
                              8 hours ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Collapse in={Userlist}>
                <pre>
                  <code>
                    {`
<div className="list-group">
<div className="list-group-item pd-y-20">
<div className="media">
<div className="d-flex mg-r-10 wd-50">
<img
className="me-4 rounded-circle avatar-md"
src={Allimages('User67')}
alt="avatar"
/>
</div>
<div className="media-body">
<div className="media-body d-flex">
<h6 className="tx-15 mb-2">Blake Vanessa</h6>
<span className="tx-12 float-end ms-auto text-muted">
4 hours ago
</span>
</div>
<p className="tx-13 mg-b-10 text-muted mb-0">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's .
</p>
</div>
</div>
</div>
<div className="list-group-item pd-y-20">
<div className="media">
<div className="d-flex mg-r-10 wd-50">
<img
className="me-4 rounded-circle avatar-md"
src={Allimages('User5')}
alt="avatar"
/>
</div>
<div className="media-body">
<div className="media-body d-flex">
<h6 className="tx-15 mb-2">Elizabeth Parsons</h6>
<span className="tx-12 float-end ms-auto text-muted">
8 hours ago
</span>
</div>
<p className="tx-13 mg-b-10 text-muted mb-0">
Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's .
</p>
</div>
</div>
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
};
ListGroups.propTypes = {};

ListGroups.defaultProps = {};

export default ListGroups;
