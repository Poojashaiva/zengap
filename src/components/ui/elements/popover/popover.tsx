import { Fragment, useState } from "react";
import {
  // Breadcrumb,
  Button,
  Card,
  Col,
  // ProgressBar,
  Row,
  Form,
  Collapse,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Pageheader from "../../../common/pageheader/pageheader";

const Popovers = () => {
  const [DefaultPopoverexample, setDefaultPopoverexample] = useState(false);
  const [ColoredHeadPopover, setColoredHeadPopover] = useState(false);
  const [FullColoredPopover, setFullColoredPopover] = useState(false);

  const datas = [
    {
      color: "primary",
      name: "top",
    },
    {
      color: "secondary",
      name: "top",
    },
  ];
  return (
    <Fragment>
      <Pageheader titles={"POPOVER"} active={"Popover"} Subtite={"Elements"} />

      <Row className="row-sm">
        <Col xl={12} lg={12}>
          <Card className="custom-card" id="static">
            <div className="card-header">
              <div className="card-title">STATIC EXAMPLE</div>
            </div>

            <Card.Body>
              <div className="popover-static-demo">
                <Row>
                  <Col md={6}>
                    <div className="popover bs-popover-top default">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className=" mg-t-30 mg-md-t-0">
                    <div className="popover bs-popover-bottom default">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className=" mg-t-30">
                    <div className="popover bs-popover-start default">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Right</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} className=" mg-t-30">
                    <div className="popover bs-popover-end default">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover left</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="default">
            <Card.Header className="d-sm-flex  justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Default Popover</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDefaultPopoverexample(!DefaultPopoverexample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row className="text-center mb-2">
                    {["top", "right", "left", "bottom"].map(
                      (placement: any) => (
                        <Col
                          sm={12}
                          lg={3}
                          className="mg-t-30 mg-lg-t-0"
                          key={placement}
                        >
                          <OverlayTrigger
                            placement={placement}
                            trigger="click"
                            overlay={
                              <Popover style={{ margin: "0px" }}>
                                <Popover.Header as="h3">
                                  Popover {placement}
                                </Popover.Header>
                                <Popover.Body>
                                  Sed posuere consectetur est at lobortis.
                                  Aenean eu leo quam. Pellentesque ornare sem
                                  lacinia quam venenatis vestibulum.
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button variant="" className="btn btn-primary">
                              Click me
                            </Button>
                          </OverlayTrigger>
                        </Col>
                      )
                    )}
                  </Row>
                </div>
                <Collapse in={DefaultPopoverexample}>
                  <pre>
                    <code>
                      {`
<Row className="text-center">
{["top", "right", "left", "bottom"].map(
(placement: any) => (
<Col
sm={12}
lg={3}
className="mg-t-30 mg-lg-t-0"
key={placement}
>
<OverlayTrigger
placement={placement}
trigger="click"
overlay={
<Popover style={{ margin: "0px" }}>
<Popover.Header as="h3">
Popover {placement}
</Popover.Header>
<Popover.Body>
Sed posuere consectetur est at lobortis.
Aenean eu leo quam. Pellentesque ornare sem
lacinia quam venenatis vestibulum.
</Popover.Body>
</Popover>
}
>
<Button variant="" className="btn btn-primary">
Click me
</Button>
</OverlayTrigger>
</Col>
)
)}
</Row>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col lg={12}>
              <Card className="custom-card" id="color">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">
                      COLORED HEAD POPOVER POPOVER
                    </h6>
                  </div>
                  <Form.Check
                    className="mb-3 mb-sm-0"
                    aria-controls="example-collapse-text"
                    onClick={() => setColoredHeadPopover(!ColoredHeadPopover)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body>
                  <div className="text-wrap">
                    <div className="example">
                      <div className="btn btn-list d-flex border-0 justify-content-around">
                        {datas.map((placement) => (
                          <OverlayTrigger
                            trigger="click"
                            key={Math.random()}
                            overlay={
                              <Popover
                                id={`popover-positioned-${placement.name}`}
                                style={{ margin: 0 }}
                              >
                                <Popover.Header
                                  className={`bg-${placement.color} popover-${placement.color} `}
                                  as="h3"
                                >{`popover ${placement.name}`}</Popover.Header>
                                <Popover.Body>
                                  Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus.
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button
                              variant={`${placement.color}`}
                              className="me-2"
                            >
                              Header Color
                            </Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </div>

                    <Collapse in={ColoredHeadPopover}>
                      <pre>
                        <code>
                          {`
export function Popoverheader1() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
setShow(!show);
setTarget(event.target);
};

return (
<div ref={ref}>
<Button onClick={handleClick} variant="primary" className="me-2">
Color Header
</Button>

<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained">
<Popover.Header as="h3" variant="primary" className="head-secondary">
POPOVER TOP
</Popover.Header>
<Popover.Body>
<strong>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</strong>
</Popover.Body>
</Popover>
</Overlay>
</div>
);
}
`}
                        </code>
                      </pre>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12}>
              <Card className="custom-card" id="full">
                <Card.Header className="d-sm-flex  justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">
                      FULL COLORED POPOVER
                    </h6>
                  </div>
                  <Form.Check
                    className="mb-3 mb-sm-0"
                    aria-controls="example-collapse-text"
                    onClick={() => setFullColoredPopover(!FullColoredPopover)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body>
                  <div className="text-wrap">
                    <div className="example">
                      <div className="btn btn-list d-flex border-0 justify-content-around">
                        {datas.map((placement) => (
                          <OverlayTrigger
                            trigger="click"
                            key={Math.random()}
                            overlay={
                              <Popover
                                id={`popover-positioned-${placement.name}`}
                                style={{ margin: 0 }}
                                className={`bg-${placement.color} popover-${placement.color} `}
                              >
                                <Popover.Header as="h3">{`popover ${placement.name}`}</Popover.Header>
                                <Popover.Body
                                  className={`bg-${placement.color}`}
                                >
                                  Vivamus sagittis lacus vel augue laoreet
                                  rutrum faucibus.
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button
                              variant={`${placement.color}`}
                              className="me-2 "
                            >
                              Full Color
                            </Button>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </div>
                    <Collapse in={FullColoredPopover}>
                      <pre>
                        <code>
                          {`
export function Popoverscreen2() {
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
setShow(!show);
setTarget(event.target);
};

return (
<div ref={ref}>
<Button onClick={handleClick} variant="primary" className="me-2 popover-body">
Color Header
</Button>

<Overlay
show={show}
target={target}
placement="top"
container={ref}
containerPadding={20}
>
<Popover id="popover-contained" className="bg-primary popover-primary">
<Popover.Body className="bg-primary">
<p>POPOVER TOP</p>
<strong>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</strong>
</Popover.Body>
</Popover>
</Overlay>
</div>
);
}
`}
                        </code>
                      </pre>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Popovers.propTypes = {};

Popovers.defaultProps = {};

export default Popovers;
