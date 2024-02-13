import { Fragment, useState } from "react";
import {
  Card,
  Col,
  Collapse,
  Form,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Pageheader from "../../../common/pageheader/pageheader";
const Tabss = () => {
  const [Basic, setBasic] = useState(false);
  const [Vertical, setVertical] = useState(false);
  const [Horizontal, setHorizontal] = useState(false);
  const [Style2, setStyle2] = useState(false);
  const [Style3, setStyle3] = useState(false);
  return (
    <Fragment>
      <Pageheader titles="TABS" Subtite="Elements" active="Tabs" />
      <Row className="row-sm">
        <Col lg={12} md={12}>
          <Card id="basic-alert">
          <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div className="card-title">BASIC STYLE TABS</div>
              <Form className=" ms-4 mg-sm-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-1">
                    <div className=" tab-menu-heading">
                      <div className="tabs-menu1">
                        <Tabs
                          defaultActiveKey="Tab 01"
                          id="uncontrolled-tab-example"
                          className="panel-tabs"
                          transition={false}
                        >
                          <Tab eventKey="Tab 01" title="Tab 01">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                              id="tab1"
                            >
                              <p className="tx-normal tx-13 mb-0">
                                aborum et dolorum fuga. Et harum quidem rerum
                                facilis est et expedita distinctio cupiditate
                                non provident praesentium
                              </p>
                              <p className="mb-0 tx-normal tx-13">
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio.similique sunt in culpa
                                qui officia Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor
                                repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab eventKey="Tab 02" title="Tab 02">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                              id="tab2"
                            >
                              <p className="mb-0 tx-normal tx-13">
                                cum soluta nobis est eligendi optio cumque nihil
                                Et harum quidem rerum facilis est et expedita
                                distinctio., similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga.
                              </p>
                              <p className="mb-0 tx-normal tx-13">
                                Nam libero tempore, cum soluta nobis est
                                eligendi optio cumque nihil Et harum quidem
                                rerum facilis est et expedita distinctio.
                                impedit quo minus id quod maxime
                              </p>
                              <p className="mb-0 tx-normal tx-13">
                                placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab eventKey="Tab 03" title="Tab 03">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right border-top-0 border"
                              id="tab3"
                            >
                              <p className="mb-0 tx-normal tx-13">
                                aborum et dolorum fuga. Et harum quidem rerum
                                facilis est et expedita distinctio cupiditate
                                non provident praesentium
                              </p>
                              <p className="mb-0 tx-normal tx-13">
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio.similique sunt in culpa
                                qui officia Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime placeat facere possimus,
                                omnis voluptas assumenda est, omnis dolor
                                repellendus.
                              </p>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <Collapse in={Basic} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="panel panel-primary tabs-style-1">
<div className=" tab-menu-heading">
<div className="tabs-menu1">

<Tabs
defaultActiveKey="Tab 01"
id="uncontrolled-tab-example"
className="panel-tabs main-nav-line"
transition={false}
>

<Tab eventKey="Tab 01" title="Tab 01">
<div
className="panel-body tabs-menu-body main-content-body-right border-top-0 border"
id="tab1"
>
<p>aborum et dolorum fuga. Et harum quidem rerum facilis est 
et expedita distinctio cupiditate non provident praesentium</p>
<p className="mb-0">deserunt mollitia animi, id est laborum et
dolorum fuga. Et harum quidem rerum facilis est et expedi.</p>
</div>
</Tab>
</Tabs>
</div>
</div>
</div>`}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card className="card mg-b-20" id="tabs-style2">
          <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div className="card-title">BASIC STYLE2 TABS</div>
              <Form className=" ms-4 mg-sm-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setStyle2(!Style2)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-2">
                    <div className=" tab-menu-heading">
                      <div className="tabs-menu1">
                        <Tabs
                          defaultActiveKey="Tab 01"
                          className=" panel-tabs bd-b-0 mb-1"
                        >
                          <Tab eventKey="Tab 01" title="Tab 01">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right"
                              id="tab4"
                            >
                              <p className="tx-normal mb-0 tx-13">
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio. Nam libero tempore, cum
                                soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat facere
                                possimus, omnis voluptas assumenda est, omnis
                                dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab eventKey="Tab 02" title="Tab 02">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right "
                              id="tab5"
                            >
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas atque
                                corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga.
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                Et harum quidem rerum facilis est et expedita
                                distinctio. Nam libero tempore, cum soluta nobis
                                est eligendi optio cumque nihil impedit quo
                                minus id quod maxime
                              </p>
                              <p className="mb-0 tx-normal tx-13">
                                placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab eventKey="Tab 03" title="Tab 03">
                            <div
                              className="panel-body tabs-menu-body main-content-body-right "
                              id="tab6"
                            >
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas sint
                                occaecati cupiditate non provident,
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                scupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas dolorum
                                fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum
                                soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat facere
                                possimus, omnis voluptas assumenda est, omnis
                                dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <Collapse in={Style2} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="panel panel-primary tabs-style-2">
<div className=" tab-menu-heading">
<div className="tabs-menu1">

<Tabs
defaultActiveKey="Tab 01"
className=" panel-tabs main-nav-line "
>
<Tab eventKey="Tab 01" title="Tab 01">
<div
className="panel-body tabs-menu-body main-content-body-right"
id="tab4"
>
voluptatum deleniti atque corrupti quos dolores et
quas molestias excepturi sint occaecati cupiditate
non provident voluptatum deleniti atque corrupti
</div>
</Tab>
<Tab eventKey="Tab 02" title="Tab 02">
<div
className="panel-body tabs-menu-body main-content-body-right "
id="tab5"
>
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas atque corrupti quos
dolores et quas molestias excepturi sint occaecati
cupiditate non provident, similique sunt in culpa
</p>
</div>
</Tab>
<Tab eventKey="Tab 03" title="Tab 03">
<div
className="panel-body tabs-menu-body main-content-body-right "
id="tab6"
>
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas sint occaecati
cupiditate non provident,
</p>
</div>
</Tab>
</Tabs>
</div>
</div>
</div>
`}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card className=" mg-b-20" id="tabs-style3">
          <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div className="card-title">BASIC STYLE3 TABS</div>
              <Form className=" ms-4 mg-sm-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setStyle3(!Style3)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="panel panel-primary tabs-style-3">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu ">
                        <Tabs
                          defaultActiveKey=" Tab Style 01"
                          className="nav panel-tabs"
                        >
                          <Tab
                            eventKey=" Tab Style 01"
                            className="panel-body tabs-menu-body"
                            title=" Tab Style 01"
                          >
                            <div className="tab-pane active" id="tab11">
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas atque
                                corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia
                                deserunt mollitia animi, id est laborum et
                                dolorum fuga.
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas eligendi
                                optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab
                            eventKey=" Tab Style 02"
                            className="panel-body tabs-menu-body"
                            title=" Tab Style 02"
                          >
                            <div className="tab-pane" id="tab12">
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas est eligendi
                                optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus.
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas et quas
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga.
                              </p>
                            </div>
                          </Tab>
                          <Tab
                            eventKey=" Tab Style 03"
                            className="panel-body tabs-menu-body"
                            title="Tab Style 03"
                          >
                            <div className="tab-pane" id="tab13">
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas repudiandae
                                sint et molestiae non recusandae
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas nobis est
                                eligendi optio cumque nihil impedit quo minus id
                                quod maxime placeat facere possimus, omnis
                                voluptas assumenda est, omnis dolor repellendus.
                              </p>
                            </div>
                          </Tab>
                          <Tab
                            eventKey=" Tab Style 04"
                            className="panel-body tabs-menu-body"
                            title="Tab Style 04"
                          >
                            <div className="tab-pane" id="tab14">
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas and
                                demoralized by the charms of pleasure of the
                                moment, so blinded by desire
                              </p>
                              <p className="tx-normal mb-0 tx-13">
                                cupiditate non provident voluptatum deleniti
                                atque corrupti quos dolores et quas minus id
                                quod maxime placeat facere possimus, omnis
                                voluptas assumenda est, omnis dolor repellendus.
                                Temporibus autem quibusdam et aut officiis
                                debitis aut rerum necessitatibus
                              </p>
                            </div>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <Collapse in={Style3} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="panel panel-primary tabs-style-3">
<div className="tab-menu-heading">
<div className="tabs-menu ">

<Tabs
defaultActiveKey=" Tab Style 01"
className="nav panel-tabs"
>
<Tab
eventKey=" Tab Style 01"
className="panel-body tabs-menu-body"
title=" Tab Style 01"
>
<div className="tab-pane active" id="tab11">
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas atque corrupti quos
dolores et quas molestias excepturi sint occaecati
</p>
</div>
</Tab>
<Tab
eventKey=" Tab Style 02"
className="panel-body tabs-menu-body"
title=" Tab Style 02"
>
<div className="tab-pane" id="tab12">
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas est eligendi optio
cumque nihil impedit quo minus id quod maxime
</p>
</div>
</Tab>
<Tab
eventKey=" Tab Style 03"
className="panel-body tabs-menu-body"
title="Tab Style 03"
>
<div className="tab-pane" id="tab13">
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas repudiandae sint et
molestiae non recusandae
</p>
</div>
</Tab>
<Tab
eventKey=" Tab Style 04"
className="panel-body tabs-menu-body"
title="Tab Style 04"
>
<div className="tab-pane" id="tab14">
<p>
cupiditate non provident voluptatum deleniti atque
corrupti quos dolores et quas and demoralized by
the charms of pleasure of the moment, so blinded
by desire
</p>
</div>
</Tab>
</Tabs>
</div>
</div>
</div>
`}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card id="tabs-style4">
          <Card.Header className="d-sm-flex justify-content-between align-items-center">
                <div className="card-title">Vertical Tabs</div>
              <Form className=" ms-4 mg-sm-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setVertical(!Vertical)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="d-md-flex">
                    <div className="">
                      <div className="panel panel-primary ">
                        <div className="tab-menu-heading tabs-style-4">
                          <div className="tabs-menu ">
                            <Tab.Container
                              id="left-tabs-example"
                              defaultActiveKey="TabStyle01"
                            >
                              <Row>
                                <Col sm={3}>
                                  <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                      <Nav.Link eventKey="TabStyle01">
                                       
                                        Tab Style 01
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="TabStyle02">
                                       
                                        Tab Style 02
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="TabStyle03">
                                       
                                        Tab Style 03
                                      </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                      <Nav.Link eventKey="TabStyle04">
                                       
                                        Tab Style 04
                                      </Nav.Link>
                                    </Nav.Item>
                                  </Nav>
                                </Col>
                                <Col sm={9}>
                                  <Tab.Content className="tabs-style-4">
                                    <Tab.Pane eventKey="TabStyle01">
                                      <div
                                        className="panel-body tabs-menu-body"
                                        id="tab21"
                                      >
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas praesentium voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas molestias excepturi sint
                                          occaecati cupiditate non provident,
                                          similique sunt in culpa qui officia
                                          deserunt mollitia animi, id est
                                          laborum et dolorum fuga.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas praesentium voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas molestias excepturi sint
                                          occaecati cupiditate non provident,
                                          similique sunt in culpa qui officia
                                          deserunt mollitia animi, id est
                                          laborum et dolorum fuga.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas Nam libero tempore, cum soluta
                                          nobis est eligendi optio cumque nihil
                                          impedit quo minus id quod maxime
                                          placeat facere possimus, omnis
                                          voluptas assumenda est, omnis dolor
                                          repellendus.
                                        </p>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="TabStyle02">
                                      <div
                                        className="panel-body tabs-menu-body"
                                        id="tab22"
                                      >
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas praesentium voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas molestias excepturi sint
                                          occaecati cupiditate non provident,
                                          similique sunt in culpa qui officia
                                          deserunt mollitia animi, id est
                                          laborum et dolorum fuga.
                                        </p>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="TabStyle03">
                                      <div
                                        className="panel-body tabs-menu-body"
                                        id="tab23"
                                      >
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas praesentium voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas molestias excepturi sint
                                          occaecati cupiditate non provident,
                                          similique sunt in culpa qui officia
                                          deserunt mollitia animi, id est
                                          laborum et dolorum fuga.
                                        </p>
                                      </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="TabStyle04">
                                      <div
                                        className="panel-body tabs-menu-body"
                                        id="tab24"
                                      >
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          Cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas, cum soluta nobis est eligendi
                                          optio cumque nihil impedit quo minus
                                          id quod maxime placeat facere
                                          possimus, omnis voluptas assumenda
                                          est, omnis dolor repellendus.
                                        </p>
                                        <p className="tx-normal mb-0 tx-13">
                                          cupiditate non provident voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas praesentium voluptatum
                                          deleniti atque corrupti quos dolores
                                          et quas molestias excepturi sint
                                          occaecati cupiditate non provident,
                                          similique sunt in culpa qui officia
                                          deserunt mollitia animi, id est
                                          laborum et dolorum fuga.
                                        </p>
                                      </div>
                                    </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                              </Row>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Collapse in={Vertical} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="d-md-flex">
<div className="">
<div className="panel panel-primary ">
<div className="tab-menu-heading tabs-style-4">
<div className="tabs-menu ">
<Tab.Container
id="left-tabs-example"
defaultActiveKey="TabStyle01"
>
<Row>
<Col sm={2}>
<Nav variant="pills" className="flex-column">
<Nav.Item>
<Nav.Link eventKey="TabStyle01">
Tab Style 01
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="TabStyle02">
Tab Style 02
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="TabStyle03">
Tab Style 03
</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="TabStyle04">
Tab Style 04
</Nav.Link>
</Nav.Item>
</Nav>
</Col>
<Col sm={10}>
<Tab.Content className="tabs-style-4">
<Tab.Pane eventKey="TabStyle01">
<div
className="panel-body tabs-menu-body"
id="tab21"
>
<p>
Cupiditate non provident voluptatum
deleniti atque corrupti quos dolores et
quas praesentium voluptatum deleniti
</p>
</div>
</Tab.Pane>
<Tab.Pane eventKey="TabStyle02">
<div
className="panel-body tabs-menu-body"
id="tab22"
>
<p>
Cupiditate non provident voluptatum
deleniti atque corrupti quos dolores et
quas, cum soluta nobis est eligendi
</p>
</div>
</Tab.Pane>
<Tab.Pane eventKey="TabStyle03">
<div
className="panel-body tabs-menu-body"
id="tab23"
>
<p>
Cupiditate non provident voluptatum
deleniti atque corrupti quos dolores et
quas, cum soluta nobis est eligendi

</p>
</div>
</Tab.Pane>
<Tab.Pane eventKey="TabStyle04">
<div
className="panel-body tabs-menu-body"
id="tab24"
>

<p className="mb-0">
cupiditate non provident voluptatum
deleniti atque corrupti quos dolores et
</p>
</div>
</Tab.Pane>
</Tab.Content>
</Col>
</Row>
</Tab.Container>
</div>
</div>
</div>
</div>
</div>
`}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Col xl={12}>
        <Card id="tabs-style5"> 
        <Card.Header className="d-sm-flex justify-content-between align-items-center">
            <div className="card-title">HORIZONTAL TABS-RIGHT-SIDE</div>
              <Form className=" ms-4 mg-sm-l-0">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                  onClick={() => setHorizontal(!Horizontal)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
            </Card.Header>
          <Card.Body>
            <div className="text-wrap">
              <div className="example">
                <div className="panel panel-primary">
                  <div className="tab_wrapper right_tab right_side d-flex row">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="Tab1"
                    >
                      <Tab.Content className="col-sm-9">
                        <Tab.Pane eventKey="Tab1">
                          <div className="content_wrapper">
                            <p className="mb-1 p-3">
                              Circumstances occur in which toil and pain can
                              procure him some great pleasure. To take a trivial
                              example, which of us ever undertakes laborious
                              physical exercise, Nor again is there anyone who
                              loves or pursues or desires to obtain pain of
                              itself, because it is pain, but because
                              occasionally except to obtain some advantage from
                              it? But who has any right to find fault with a man
                              who chooses to enjoy a pleasure that has no
                              annoying consequences,To take a trivial example,
                              which of us ever undertakes laborious physical
                              exercise, Nor again is there anyone who loves or
                              pursues or desires to obtain pain of itself,
                              because it is pain, but because occasionally
                              except to obtain some advantage from it? But who
                              has any right to find fault with a man who chooses
                              to enjoy a pleasure that has no annoying
                              consequences, or one ?
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tab2">
                          <div className="content_wrapper">
                            <p className="mb-1 p-3">
                              Circumstances occur in which toil and pain can
                              procure him some great pleasure. To take a trivial
                              example, which of us ever undertakes laborious
                              physical exercise, Nor again is there anyone who
                              loves or pursues or desires to obtain pain of
                              itself, because it is pain, but because
                              occasionally except to obtain some advantage from
                              it? But who has any right to find fault with a man
                              who chooses to enjoy a pleasure that has no
                              annoying consequences,To take a trivial example,
                              which of us ever undertakes laborious physical
                              exercise, Nor again is there anyone who loves or
                              pursues or desires to obtain pain of itself,
                              because it is pain, but because occasionally
                              except to obtain some advantage from it? But who
                              has any right to find fault with a man who chooses
                              to enjoy a pleasure that has no annoying
                              consequences, or one ?
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tab3">
                          <div className="content_wrapper">
                            <p className="mb-1 p-3">
                              Circumstances occur in which toil and pain can
                              procure him some great pleasure. To take a trivial
                              example, which of us ever undertakes laborious
                              physical exercise, Nor again is there anyone who
                              loves or pursues or desires to obtain pain of
                              itself, because it is pain, but because
                              occasionally except to obtain some advantage from
                              it? But who has any right to find fault with a man
                              who chooses to enjoy a pleasure that has no
                              annoying consequences,To take a trivial example,
                              which of us ever undertakes laborious physical
                              exercise, Nor again is there anyone who loves or
                              pursues or desires to obtain pain of itself,
                              because it is pain, but because occasionally
                              except to obtain some advantage from it? But who
                              has any right to find fault with a man who chooses
                              to enjoy a pleasure that has no annoying
                              consequences, or one ?
                            </p>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>

                      <Nav
                        variant="pills"
                        className="flex-column tab_list broder ms-auto col-sm-3"
                      >
                        <Nav.Item className="">
                          <Nav.Link eventKey="Tab1">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Tab2">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="Tab3">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Tab.Container>
                  </div>
                </div>
                <Collapse in={Horizontal} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="panel panel-primary">
<div className="tab_wrapper right_tab right_side">
<Tab.Container
id="left-tabs-example"
className="tab_list"
defaultActiveKey="Tab1"
>
<Row>
<Col sm={9}>
<Tab.Content>
<Tab.Pane eventKey="Tab1">
<div className="content_wrapper">
<p className="mb-1 ">
Circumstances occur in which toil and pain can
procure him some great pleasure. To take a

</p>
</div>
</Tab.Pane>
<Tab.Pane eventKey="Tab2">
<div className="content_wrapper">
<p className="mb-1 ">
Circumstances occur in which toil and pain can
procure him some great pleasure. To take a

</p>
</div>
</Tab.Pane>
<Tab.Pane eventKey="Tab3">
<div className="content_wrapper">
<p className="mb-1 ">
Circumstances occur in which toil and pain can
procure him some great pleasure. To take a

</p>
</div>
</Tab.Pane>
</Tab.Content>
</Col>
<Col sm={3}>
<Nav
variant="pills"
className="flex-column tab_list broder"
>
<Nav.Item className="">
<Nav.Link eventKey="Tab1">Tab 1</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="Tab2">Tab 2</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="Tab3">Tab 3</Nav.Link>
</Nav.Item>
</Nav>
</Col>
</Row>
</Tab.Container>
</div>
</div>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

Tabss.propTypes = {};

Tabss.defaultProps = {};

export default Tabss;
