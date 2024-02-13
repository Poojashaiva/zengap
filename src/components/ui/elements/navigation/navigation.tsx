import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import { Card, Col, Collapse, Form, Nav, Row, Tab } from "react-bootstrap";

function Navigation() {
  const [Basic, setBasic] = useState(false);
  const [PillBasic, setPillBasic] = useState(false);
  const [Vertical, setVertical] = useState(false);
  const [ICON, setICON] = useState(false);
  const [Horizontal, setHorizontal] = useState(false);
  const [Iconnav, setIconnav] = useState(false);
  const [Colored, setColored] = useState(false);
  const [Simple, setSimple] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"NAVIGATION"}
        active={"Navigation"}
        Subtite={"Elements"}
      />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BASIC NAVIGATION</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setBasic(!Basic)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5 border">
                    <Nav variant="tabs" defaultActiveKey="#">
                      <Nav.Item>
                        <Nav.Link >Active</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                          Disabled
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5 border">
<Nav variant="tabs" defaultActiveKey="#">
<Nav.Item>
<Nav.Link >Active</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-1">Option 2</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="disabled" disabled>
Disabled
</Nav.Link>
</Nav.Item>
</Nav>
</div>                 

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card id="basic">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">BASIC NAVIGATION</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setPillBasic(!PillBasic)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5 border">
                    <Nav variant="pills" defaultActiveKey="#">
                      <Nav.Item>
                        <Nav.Link >Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-1"> About</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2">Pages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-3">Custom</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={PillBasic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5 border">
<Nav variant="pills" defaultActiveKey="#">
<Nav.Item>
<Nav.Link >Home</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-1"> About</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-2" >
Pages
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-3" >
Custom
</Nav.Link>
</Nav.Item>
</Nav>
</div>                 

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card id="vertical">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">VERTICAL NAVIGATION</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setVertical(!Vertical)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5  border">
                    <Nav
                      defaultActiveKey="home"
                      className="nav main-nav-column"
                    >
                      <Nav.Link eventKey="home" className="nav-link " >
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="link-4" className="nav-link" >
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="link-5" className="nav-link" >
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="link-6" className="nav-link" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Vertical} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5  border">
<Nav defaultActiveKey="home" className="nav main-nav-column">
<Nav.Link eventKey="home" className="nav-link " >
Home
</Nav.Link>
<Nav.Link eventKey="link-4" className="nav-link" >
About
</Nav.Link>
<Nav.Link eventKey="link-5" className="nav-link" >
Pages
</Nav.Link>
<Nav.Link eventKey="link-6" className="nav-link" >
Custom
</Nav.Link>
</Nav>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} md={12}>
          <Card id="pill">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ICON NAVIGATION</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setICON(!ICON)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-2 br-5 ">
                    <Nav
                      className="nav nav-pills nav-pills-circle"
                      defaultActiveKey="link-9"
                      id="tabs_2"
                      role="tablist"
                    >
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-7"
                          className="nav-link border py-2 px-3 m-2"
                          id="tab1"
                          data-bs-toggle="tab"
                          href="#tabs_2_1"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-home"></i> Home
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-8"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab2"
                          data-bs-toggle="tab"
                          href="#tabs_2_2"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-unlock"></i> Lock
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-9"
                          className="nav-link py-2 px-3  border show m-2"
                          id="tab3"
                          data-bs-toggle="tab"
                          href="#tabs_2_3"
                          role="tab"
                          aria-selected="true"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-play"></i> Videos
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-10"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab4"
                          data-bs-toggle="tab"
                          href="#tabs_2_3"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-layers"></i> Severs
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-11"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab5"
                          data-bs-toggle="tab"
                          href="#tabs_2_4"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-image"></i> Gallery
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={ICON} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-2 br-5 ">
<Nav
className="nav nav-pills nav-pills-circle"
defaultActiveKey="link-9"
id="tabs_2"
role="tablist"
>
<Nav.Item className="nav-item">
<Nav.Link
eventKey="link-7"
className="nav-link border py-2 px-3 m-2"
id="tab1"
data-bs-toggle="tab"
href="#tabs_2_1"
role="tab"
aria-selected="false"
>
<span className="nav-link-icon d-block">
<i className="fe fe-home"></i> Home
</span>
</Nav.Link>
</Nav.Item>
<Nav.Item className="nav-item">
<Nav.Link
eventKey="link-8"
className="nav-link border py-2 px-3  m-2"
id="tab2"
data-bs-toggle="tab"
href="#tabs_2_2"
role="tab"
aria-selected="false"
>
<span className="nav-link-icon d-block">
<i className="fe fe-unlock"></i> Lock
</span>
</Nav.Link>
</Nav.Item>
</Nav>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">ICON NAVBAR</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setIconnav(!Iconnav)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example icon-navbar">
                  <Nav
                    defaultActiveKey="link-26"
                    className="nav nav-pills nav-pills-circle"
                    id="tabs_3"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-24"
                        className="nav-link border text-center  m-2"
                        id="tab21"
                        data-bs-toggle="tab"
                        href="#tabs_2_1"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-home fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-25"
                        className="nav-link border  m-2"
                        id="tab22"
                        data-bs-toggle="tab"
                        href="#tabs_2_2"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-unlock fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-26"
                        className="nav-link border show  m-2"
                        id="tab23"
                        data-bs-toggle="tab"
                        href="#tabs_2_3"
                        role="tab"
                        aria-controls="tab3"
                        aria-selected="true"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-play fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-27"
                        className="nav-link border  m-2"
                        id="tab24"
                        data-bs-toggle="tab"
                        href="#tabs_2_3"
                        role="tab"
                        aria-controls="tab4"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-layers fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-28"
                        className="nav-link border m-2"
                        id="tab25"
                        data-bs-toggle="tab"
                        href="#tabs_2_4"
                        role="tab"
                        aria-controls="tab5"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-image fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Collapse in={Iconnav} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example icon-navbar">
<Nav
defaultActiveKey="link-26"
className="nav nav-pills nav-pills-circle"
id="tabs_3"
role="tablist"
>
<Nav.Item className="nav-item">
<Nav.Link
eventKey="link-24"
className="nav-link border text-center  m-2"
id="tab21"
data-bs-toggle="tab"
href="#tabs_2_1"
role="tab"
aria-controls="tab1"
aria-selected="false"
>
<span className="nav-link-icon d-block text-center mx-auto">
<i className="fe fe-home fs-20"></i>
</span>
</Nav.Link>
</Nav.Item>
<Nav.Item className="nav-item">
<Nav.Link
eventKey="link-25"
className="nav-link border  m-2"
id="tab22"
data-bs-toggle="tab"
href="#tabs_2_2"
role="tab"
aria-controls="tab2"
aria-selected="false"
>
<span className="nav-link-icon d-block text-center mx-auto">
<i className="fe fe-unlock fs-20"></i>
</span>
</Nav.Link>
</Nav.Item>

<Nav.Item className="nav-item">
<Nav.Link
eventKey="link-27"
className="nav-link border  m-2"
id="tab24"
data-bs-toggle="tab"
href="#tabs_2_3"
role="tab"
aria-controls="tab4"
aria-selected="false"
>
<span className="nav-link-icon d-block text-center mx-auto">
<i className="fe fe-layers fs-20"></i>
</span>
</Nav.Link>
</Nav.Item>

</Nav>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">HORIZONTAL ALIGNMENT</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setHorizontal(!Horizontal)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5 border mb-3">
                    <Nav
                      defaultActiveKey="link-16"
                      className="nav main-nav flex-column flex-md-row justify-content-center"
                    >
                      <Nav.Link
                        eventKey="link-16"
                        className="nav-link "
                        
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-17"
                        className="nav-link"
                        
                      >
                        About
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-18"
                        className="nav-link"
                        
                      >
                        Pages
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-19"
                        className="nav-link"
                        
                      >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5  border">
                    <Nav
                      defaultActiveKey="link-20"
                      className="nav main-nav flex-column flex-md-row justify-content-end"
                    >
                      <Nav.Link
                        eventKey="link-20"
                        className="nav-link "
                        
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-21"
                        className="nav-link"
                        
                      >
                        About
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-22"
                        className="nav-link"
                        
                      >
                        Pages
                      </Nav.Link>
                      <Nav.Link
                        eventKey="link-23"
                        className="nav-link"
                        
                      >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Horizontal} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5 border mb-3">
<Nav
defaultActiveKey="link-16"
className="nav main-nav flex-column flex-md-row justify-content-center"
>
<Nav.Link eventKey="link-16" className="nav-link " >
Home
</Nav.Link>
<Nav.Link eventKey="link-17" className="nav-link" >
About
</Nav.Link>
<Nav.Link eventKey="link-18" className="nav-link" >
Pages
</Nav.Link>
<Nav.Link eventKey="link-19" className="nav-link" >
Custom
</Nav.Link>
</Nav>
<div className="p-3 br-5  border">
<Nav
defaultActiveKey="link-20"
className="nav main-nav flex-column flex-md-row justify-content-end"
>
<Nav.Link
eventKey="link-20"
className="nav-link "

>
Home
</Nav.Link>
<Nav.Link eventKey="link-21" className="nav-link" >
About
</Nav.Link>
<Nav.Link eventKey="link-22" className="nav-link" >
Pages
</Nav.Link>
<Nav.Link eventKey="link-23" className="nav-link" >
Custom
</Nav.Link>
</Nav>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className=" custom-card" id="colored">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">COLORED NAV VARIATIONS</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setColored(!Colored)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-default br-5 mb-3">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-danger mb-3">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-light mb-3">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-dark mb-3">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-secondary mb-3">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-info">
                    <Nav
                      className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row"
                      defaultActiveKey="first"
                    >
                      <Nav.Link className="nav-link" eventKey="first" >
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="second" >
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="third" >
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" eventKey="fourth" >
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Colored} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
<div className="p-3 bg-primary br-5 mb-3">
<Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
<Nav.Link className="nav-link " active >
Home
</Nav.Link>
<Nav.Link className="nav-link" >
About
</Nav.Link>
<Nav.Link className="nav-link" >
Pages
</Nav.Link>
<Nav.Link className="nav-link" >
Custom
</Nav.Link>
</Nav>
</div>
<div className="p-3 br-5 bg-secondary mb-3">
<Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
<Nav.Link className="nav-link " active >
Home
</Nav.Link>
<Nav.Link className="nav-link" >
About
</Nav.Link>
<Nav.Link className="nav-link" >
Pages
</Nav.Link>
<Nav.Link className="nav-link" >
Custom
</Nav.Link>
</Nav>
</div>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card className=" custom-card simple-navigation" id="tab">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <div className="card-title">SIMPLE TAB NAVIGATION</div>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setSimple(!Simple)}
                      className="showcode d-flex ms-auto"
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-secondary radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="bg-secondary nav-bg">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-success radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="bg-success nav-bg">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-info radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="bg-info nav-bg">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-warning radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="bg-warning nav-bg">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-danger radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="bg-danger nav-bg">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border border-dark radius-3  mt-3">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="link-29"
                    >
                      <div className="dark-nav-tab">
                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29">Home</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30">About</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31">Contact</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                      <Tab.Content className="card-body">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <Collapse in={Simple} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
<div className="border">
<Tab.Container id="left-tabs-example" defaultActiveKey="link-29">
<div className="bg-gray-100 nav-bg">
<Nav className="nav nav-tabs">
<Nav.Item>
<Nav.Link eventKey="link-29" >
Home
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-30" >
About
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="link-31" >
Contact
</Nav.Link>
</Nav.Item>
</Nav>
</div>
<Tab.Content className="card-body ">
<Tab.Pane eventKey="link-29">
Nam libero tempore, cum soluta nobis est eligendi optio
cumque nihil impedit quo minus id quod maxime placeat
facere possimus, omnis voluptas assumenda est, omnis dolor
repellendus.
</Tab.Pane>
<Tab.Pane eventKey="link-30">
At vero eos et accusamus et iusto odio dignissimos ducimus
qui blanditiis praesentium voluptatum deleniti atque
corrupti quos dolores et quas molestias excepturi sint
occaecati cupiditate non provident, similique sunt in
culpa qui officia deserunt mollitia animi, id est laborum
et dolorum fuga.
</Tab.Pane>
<Tab.Pane eventKey="link-31">
At vero eos et accusamus et iusto odio dignissimos ducimus
qui blanditiis praesentium voluptatum deleniti atque
corrupti quos dolores et quas molestias excepturi sint
occaecati cupiditate non provident, similique sunt in
culpa qui officia deserunt mollitia animi, id est laborum
et dolorum fuga.
</Tab.Pane>
</Tab.Content>
</Tab.Container>
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

export default Navigation;
