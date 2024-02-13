import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import {
  Activemenudata,
  Basicdata1,
  Disabledmenudata,
  Roundedsplitdropdownsdata1,
  dropdowndividerdata,
  dropdownheaderdata,
  dropdownwithiconsdata,
} from "../../../common/elementsdata/elementsdata";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Collapse,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";

function Dropdowns() {
  const [Default, setDefault] = useState(false);
  const [Rounded, setRounded] = useState(false);
  const [Outline, setOutline] = useState(false);
  const [Roundedoutline, setRoundedoutline] = useState(false);
  const [Roundedsplit, setRoundedsplit] = useState(false);
  const [Outlinesplit, setOutlinesplit] = useState(false);
  const [Roundedoutlinesplit, setRoundedoutlinesplit] = useState(false);
  const [Dropdownsoutline, setDropdownsoutline] = useState(false);
  const [Activemenu, setActivemenu] = useState(false);
  const [Disabledmenu, setDisabledmenu] = useState(false);
  const [Dropdownheader, setDropdownheader] = useState(false);
  const [Dropdowndivider, setDropdowndivider] = useState(false);
  const [Icons, setIcons] = useState(false);
  const [Dropright, setDropright] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"DROPDOWN"}
        active={"Dropdowns"}
        Subtite={"Elements"}
      />

      <Row>
        <Col lg={12} md={12} xl={6}>
          <Card className="custom-card" id="basic">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BASIC EXAMPLE</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDefault(!Default)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Basicdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButton"
                          type="button"
                        >
                          Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu tx-13"
                          style={{ margin: "0px" }}
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
                <Collapse in={Default}>
                  <pre>
                    <code>{`
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-primary"
data-bs-toggle="dropdown"
id="dropdownMenuButton"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
className="dropdown-menu tx-13"
style={{ margin: "0px" }}
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-secondary"
data-bs-toggle="dropdown"
id="dropdownMenuButton1"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
`}</code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          {/* </div><!-- col-end --> */}
        </Col>

        <Col lg={12} md={12} xl={6}>
          <Card className="custom-card" id="basic2">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ROUNDED BUTTON DROPDOWNS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setRounded(!Rounded)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Basicdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-rounded btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButton4"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Rounded}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-rounded btn-primary"
data-bs-toggle="dropdown"
id="dropdownMenuButton4"
type="button">
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13">
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-rounded btn-secondary"
data-bs-toggle="dropdown"
id="dropdownMenuButton5"
type="button">
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13">
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* </div><!-- col-end --> */}
        </Col>

        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic3">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">OUTLINE BUTTON DROPDOWNS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setOutline(!Outline)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Basicdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-outline-${idx.color}`}
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButton8"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Outline}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-outline-primary"
data-bs-toggle="dropdown"
id="dropdownMenuButton8"
type="button"
>
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-outline-secondary"
data-bs-toggle="dropdown"
id="dropdownMenuButton9"
type="button"
>
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic4">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ROUNDED OUTLINE BUTTON DROPDOWNS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setRoundedoutline(!Roundedoutline)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Basicdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-rounded btn-outline-${idx.color}`}
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButton12"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Roundedoutline}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-rounded btn-outline-primary"
data-bs-toggle="dropdown"
id="dropdownMenuButton12"
type="button"
>
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-rounded btn-outline-secondary"
data-bs-toggle="dropdown"
id="dropdownMenuButton13"
type="button"
>
Dropdown Menu 
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic6">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">OUTLINE SPLIT BUTTON DROP</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setOutlinesplit(!Outlinesplit)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Roundedsplitdropdownsdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown className="btn-group">
                        <Button
                          variant=""
                          type="button"
                          className={`btn btn-${idx.color}`}
                        >
                          Action
                        </Button>
                        <Dropdown.Toggle
                          variant=""
                          type="button"
                          className={`btn btn-${idx.color} dropdown-toggle split-dropdown`}
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Outlinesplit}>
                <pre>
                  <code>{`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-primary"
>
Action
</Button>
<Dropdown.Toggle
variant=""
type="button"
className="btn btn-primary dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button variant="" type="button" className="btn btn-danger">
Action
</Button>
<Dropdown.Toggle
type="button"
variant=""
className="btn btn-danger dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>  
`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic7">
            <Card.Header>
              <div className="d-flex flex-wrap justify-content-between">
              <div className="card-title">
                ROUNDED SPLIT BUTTONS DROPDOWNS
              </div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() =>
                        setRoundedoutlinesplit(!Roundedoutlinesplit)
                      }
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Roundedsplitdropdownsdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown className="btn-group">
                        <Button
                          variant=""
                          type="button"
                          className={`btn btn-outline-${idx.color} btn-rounded`}
                        >
                          Action
                        </Button>
                        <Dropdown.Toggle
                          variant=""
                          type="button"
                          className={`btn btn-outline-${idx.color}  btn-rounded dropdown-toggle split-dropdown`}
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Roundedoutlinesplit}>
                <pre>
                  <code>
                    {`
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-outline-primary btn-rounded"
>
Action
</Button>
<Dropdown.Toggle
variant=""
type="button"
className="btn btn-outline-primary  btn-rounded dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-outline-danger  btn-rounded"
>
Action
</Button>
<Dropdown.Toggle
variant=""
type="button"
className="btn btn-outline-danger  btn-rounded dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic8">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">OUTLINE SPLIT BUTTONS DROPDOWNS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDropdownsoutline(!Dropdownsoutline)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Roundedsplitdropdownsdata1.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown className="btn-group">
                        <Button
                          variant=""
                          type="button"
                          className={`btn btn-outline-${idx.color}`}
                        >
                          Action
                        </Button>
                        <Dropdown.Toggle
                          variant=""
                          type="button"
                          className={`btn btn-outline-${idx.color} dropdown-toggle split-dropdown`}
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Dropdownsoutline}>
                <pre>
                  <code>{`          
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-outline-primary"
>
Action
</Button>
<Dropdown.Toggle
variant=""
type="button"
className="btn btn-outline-primary dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-outline-danger"
>
Action
</Button>
<Dropdown.Toggle
variant=""
type="button"
className="btn btn-outline-danger dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic5">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ROUNDED SPLIT BUTTON DROPDOWNS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setRoundedsplit(!Roundedsplit)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ButtonGroup className="ms-2 mt-2 mb-2">
                    <Dropdown className="btn-group">
                      <Button
                        variant=""
                        type="button"
                        className="btn btn-primary  btn-rounded"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        type="button"
                        data-bs-toggle="dropdown"
                        className="btn  btn-primary  btn-rounded"
                      >
                        <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ margin: "0px" }}
                        className="dropdown-menu tx-13"
                      >
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >
                          Something else here
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>

                  <ButtonGroup className="ms-2 mt-2 mb-2">
                    <Dropdown className="btn-group">
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-danger  btn-rounded"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        type="button"
                        variant=""
                        className="btn btn-danger  btn-rounded dropdown-toggle split-dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ margin: "0px" }}
                        className="dropdown-menu tx-13"
                      >
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >
                          Something else here
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                  <ButtonGroup className="ms-2 mt-2 mb-2">
                    <Dropdown className="btn-group">
                      <Button
                        variant=""
                        type="button"
                        className="btn btn-info  btn-rounded"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        type="button"
                        variant=""
                        className="btn btn-info  btn-rounded dropdown-toggle split-dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ margin: "0px" }}
                        className="dropdown-menu tx-13"
                      >
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >
                          Something else here
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </div>
              <Collapse in={Roundedsplit}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
variant=""
type="button"
className="btn btn-primary btn-rounded"
>
Action
</Button>
<Dropdown.Toggle
type="button"
data-bs-toggle="dropdown"
className="btn btn-primary btn-rounded"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown className="btn-group">
<Button
type="button"
variant=""
className="btn btn-danger  btn-rounded"
>
Action
</Button>
<Dropdown.Toggle
type="button"
variant=""
className="btn btn-danger  btn-rounded dropdown-toggle split-dropdown"
data-bs-toggle="dropdown"
>
<span className="caret"></span>
<span className="sr-only">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="active">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ACTIVE MENU ITEM</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setActivemenu(!Activemenu)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Activemenudata.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item "
                            active
                            
                          >
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Activemenu}>
                <pre>
                  <code>{`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-warning"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item className="dropdown-item " active >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-teal"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item className="dropdown-item " active >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>                    
`}</code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="disabled">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">DISABLED MENU ITEM</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDisabledmenu(!Disabledmenu)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {Disabledmenudata.map((idx) => (
                    <ButtonGroup className="ms-2 mt-2 mb-2" key={Math.random()}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-item "
                            disabled
                            
                          >
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Disabledmenu}>
                <pre>
                  <code>
                    {` 
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-primary"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item
className="dropdown-item "
disabled

>
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2 mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-teal"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item
className="dropdown-item "
disabled

>
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="header">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">DROPDOWN HEADER </div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDropdownheader(!Dropdownheader)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {dropdownheaderdata.map((idx) => (
                    <ButtonGroup
                      className="ms-2  mt-2 mb-2"
                      key={Math.random()}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          Dropdown 
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                            Dropdown header
                          </h6>
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Dropdownheader}>
                <pre>
                  <code>
                    {`  
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2  mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-secondary"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown header
</h6>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2  mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-primary"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown header
</h6>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="divider">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">DROPDOWN DIVIDER</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDropdowndivider(!Dropdowndivider)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {dropdowndividerdata.map((idx) => (
                    <ButtonGroup
                      className="ms-2  mt-2 mb-2"
                      key={Math.random()}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          aria-expanded="false"
                          aria-haspopup="true"
                          className={`btn ripple btn-${idx.color}`}
                          data-bs-toggle="dropdown"
                          type="button"
                        >
                          Dropdown
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          style={{ margin: "0px" }}
                          className="dropdown-menu tx-13"
                        >
                          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                            Dropdown header
                          </h6>
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                          <Dropdown.Item >Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Dropdowndivider}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<ButtonGroup className="ms-2  mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-info"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown header
</h6>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
<Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
<Dropdown.Item >
Separated link
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
<ButtonGroup className="ms-2  mt-2 mb-2">
<Dropdown>
<Dropdown.Toggle
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-primary"
data-bs-toggle="dropdown"
type="button"
>
Dropdown Menu
</Dropdown.Toggle>
<Dropdown.Menu
style={{ margin: "0px" }}
className="dropdown-menu tx-13"
>
<h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
Dropdown header
</h6>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
<Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
<Dropdown.Item >
Separated link
</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</ButtonGroup>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="basic9">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">DROPDOWN WITH ICONS</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setIcons(!Icons)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  {dropdownwithiconsdata.map((idx) => (
                    <ButtonGroup className="mb-2 mt-2 mx-1" key={Math.random()}>
                      <Dropdown title="" drop="up">
                        <Dropdown.Toggle
                          variant={idx.color}
                          className="dropups"
                        >
                          <i className={`fe fe-${idx.class}`}></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item >Action</Dropdown.Item>
                          <Dropdown.Item >Another action</Dropdown.Item>
                          <Dropdown.Item >
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Item >Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ButtonGroup>
                  ))}
                </div>
              </div>
              <Collapse in={Icons}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Row className="row-xs wd-xl-80p">
<ButtonGroup className="mb-2 mt-2 mx-1">
<DropdownButton
variant=""
title=""
drop="up"
className="dropups  btn btn-danger fe fe-mail"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
<Dropdown.Item >
Separated link
</Dropdown.Item>
</DropdownButton>
</ButtonGroup>
<ButtonGroup className="mb-2 mt-2">
<DropdownButton
title=""
drop="up"
className="dropups  btn btn-info fe fe-more-horizontal"
variant=""
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
<Dropdown.Item >
Separated link
</Dropdown.Item>
</DropdownButton>
</ButtonGroup>
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
        <Col lg={6} md={12} xl={6}>
          <Card className="custom-card" id="right">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">DROPRIGHT & DROPLEFT</div>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setDropright(!Dropright)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-xs">
                    <Col sm={6} md={3} lg={6} xl={4} className="ms-2 mb-2">
                      <DropdownButton
                        variant="info"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="ripple  br-5"
                        data-bs-toggle="dropdown"
                        id="droprightMenuButton"
                        title=" Dropright"
                        drop="end"
                      >
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                    <Col
                      sm={6}
                      md={3}
                      lg={6}
                      xl={4}
                      className="ms-2 mg-t-10 mg-sm-t-0"
                    >
                      <DropdownButton
                        variant="danger"
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="ripple br-5"
                        id="dropleftMenuButton"
                        title="Dropleft"
                        drop="start"
                      >
                        <Dropdown.Item >Action</Dropdown.Item>
                        <Dropdown.Item >Another action</Dropdown.Item>
                        <Dropdown.Item >
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </div>
              </div>
              <Collapse in={Dropright}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<Row className="row-xs">
<Col sm={6} md={3} lg={6} xl={4} >
<DropdownButton
variant=""
aria-expanded="false"
aria-haspopup="true"
className="btn ripple btn-info"
data-bs-toggle="dropdown"
id="droprightMenuButton"
title=" Dropright"
drop="end"
>
<Dropdown.Item >
Action
</Dropdown.Item>
<Dropdown.Item >
Another action
</Dropdown.Item>
<Dropdown.Item >
Something else here
</Dropdown.Item>
</DropdownButton>
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

export default Dropdowns;
