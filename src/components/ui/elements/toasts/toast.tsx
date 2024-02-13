import { Fragment, useState } from "react";
import Pageheader from "../../../common/pageheader/pageheader";
import {
  Button,
  Card,
  Col,
  Collapse,
  Form,
  Row,
  Toast,

} from "react-bootstrap";

function Toasts() {
  const [show, setShow] = useState(true);
  const [Basic, setBasic] = useState(true);
  const [Basiccollapse, setBasiccollapse] = useState(false);
  const [Right, setRight] = useState(true);
  const [Rightcollapse, setRightcollapse] = useState(false);

  const [Listcollapse, setListcollapse] = useState(false);
  function handleRemove(id: any) {
    const newList = list.filter((list: any) => list.id !== id);
    setList(newList);
  }

  const Carouseldata = [
    {
      id: "1",
      TITLE: "bg-primary",
    },
    {
      id: "2",
      TITLE: "bg-secondary",
    },
    {
      id: "3",
      TITLE: "bg-success",
    },
    {
      id: "4",
      TITLE: "bg-info",
    },
  ];
  const [list, setList] = useState(Carouseldata);
  return (
    <Fragment>
      <Pageheader titles={"Toast"} active={"Toast"} Subtite={"Elements"} />
      <div className="row">
        <div className="col-xl-12 col-md-12">
          <Card id="basic">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h6 className="card-title mb-1">Basic Example</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setBasiccollapse(!Basiccollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                    {Basic ? (
                      <Toast
                        aria-atomic="true"
                        aria-live="assertive"
                        className="toast fade show"
                        role="alert"
                        data-bs-autohide="false"
                      >
                        <Toast.Header className="toast-header">
                          <h6 className="mg-b-0 mg-e-auto">Notification</h6>
                          <small className="text-muted ms-auto">11 mins ago</small>
                          <Button
                            variant=""
                            aria-label="Close"
                            className="ms-2 mb-1 close"
                            onClick={() => setBasic(false)}
                            data-bs-dismiss="toast"
                            type="button"
                          >
                            <span aria-hidden="true" className="align-text-bottom">&times;</span>
                          </Button>
                        </Toast.Header>
                        <Toast.Body className="toast-body">
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    ) : null}
                  </div>
                </div>
                <Collapse in={Basiccollapse} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="demo-static-toast">
{Basic ? (
<Toast
aria-atomic="true"
aria-live="assertive"
className="toast fade show"
role="alert"
data-bs-autohide="false"
>
<Toast.Header className="toast-header">
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted ms-auto">11 mins ago</small>
<Button
variant=""
aria-label="Close"
className="ms-2 mb-1 close"
onClick={() => setBasic(false)}
data-bs-dismiss="toast"
type="button"
>
<span aria-hidden="true" className="align-text-bottom">&times;</span>
</Button>
</Toast.Header>
<Toast.Body className="toast-body">
Hello, world! This is a toast message.
</Toast.Body>
</Toast>
) : null}
</div>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-12">
          <Card className="custom-card" id="place">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h6 className="card-title mb-1">Placement</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setRightcollapse(!Rightcollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap mb-3">
                <div className="example">
                  <div className="ht-150 pos-relative mb-3">
                    <div className="demo-static-toast pos-absolute t-10 r-10">
                      {Right ? (
                        <Toast
                          aria-atomic="true"
                          aria-live="assertive"
                          className="toast fade show w-100"
                          role="alert"
                          data-bs-autohide="false"
                        >
                          <Toast.Header className="toast-header">
                            <h6 className="tx-14 mg-b-0 mg-r-auto">
                              Notification
                            </h6>
                            <small className="text-muted ms-auto">
                              11 mins ago
                            </small>
                            <Button
                              variant=""
                              aria-label="Close"
                              className="ms-2 mb-1 close tx-normal"
                              onClick={() => setRight(false)}
                              data-bs-dismiss="toast"
                              type="button"
                            >
                              <span aria-hidden="true" className="align-text-bottom">&times;</span>
                            </Button>
                          </Toast.Header>
                          <Toast.Body className="toast-body">
                            Hello, world! This is a toast message.
                          </Toast.Body>
                        </Toast>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrap mb-3">
                <div className="example">
                  <div className="demo-static-toast d-flex justify-content-center align-items-center">
                    {show ? (
                      <Toast
                        aria-atomic="true"
                        aria-live="assertive"
                        className="toast fade show"
                        role="alert"
                        data-bs-autohide="false"
                      >
                        <Toast.Header className="toast-header">
                          <h6 className="tx-14 mg-b-0 mg-r-auto">
                            Notification
                          </h6>
                          <small className="text-muted ms-auto">11 mins ago</small>
                          <Button
                            variant=""
                            aria-label="Close"
                            className="ms-2 mb-1 close tx-normal"
                            onClick={() => setShow(false)}
                            data-bs-dismiss="toast"
                            type="button"
                          >
                            <span aria-hidden="true" className="align-text-bottom">&times;</span>
                          </Button>
                        </Toast.Header>
                        <Toast.Body className="toast-body">
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    ) : null}
                  </div>
                </div>
                <Collapse in={Rightcollapse} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="demo-static-toast pos-absolute t-10 r-10">
{Right ? (
<Toast
aria-atomic="true"
aria-live="assertive"
className="toast fade show"
role="alert"
data-bs-autohide="false"
>
<Toast.Header className="toast-header">
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="text-muted ms-auto">11 mins ago</small>
<Button
variant=""
aria-label="Close"
className="ms-2 mb-1 close tx-normal"
onClick={() => setRight(false)}
data-bs-dismiss="toast"
type="button"
>
<span aria-hidden="true" className="align-text-bottom">&times;</span>
</Button>
</Toast.Header>
<Toast.Body className="toast-body">
Hello, world! This is a toast message.
</Toast.Body>
</Toast>
) : null}
</div>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </div>

        <Col xl={12}>
          <Card className="custom-card" id="tarns">
            <Card.Header>
              <div className="d-sm-flex justify-content-between">
              <h6 className="card-title mb-1">Color Toasts</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                      type="switch"
                      id="custom-switch"
                      onClick={() => setListcollapse(!Listcollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col xl={12}>
                      <Row>
                        {list.map((playerData, k) => (
                          <Col xl={6} lg={6} md={12} key={k}>
                            <div className="demo-static-toast mb-2 mt-2">
                              <div
                                aria-atomic="true"
                                aria-live="assertive"
                                className="toast fade show"
                                role="alert"
                                data-bs-autohide="false"
                              >
                                <div
                                  className={`toast-header text-white p-2 ${playerData.TITLE}`}
                                >
                                  <h6 className="tx-14 mg-b-0 mg-e-auto">
                                    Notification
                                  </h6>
                                  <small className="me-3">11 mins ago</small>
                                  <Button
                                    variant=""
                                    aria-label="Close"
                                    className="ms-2 mb-1 close tx-normal"
                                    onClick={() => handleRemove(playerData.id)}
                                    data-bs-dismiss="toast"
                                    type="button"
                                  >
                                    <span aria-hidden="true" className="align-text-bottom">&times;</span>
                                  </Button>
                                </div>
                                <div className="toast-body p-3">
                                  Hello, world! This is a toast message.
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Collapse in={Listcollapse} className="mt-2">
                  <pre>
                    <code>
                      {`
<Row>
{list.map((playerData, k) => (
<Col xl={6} lg={6} md={12} key={k}>
<div className="demo-static-toast mb-2 mt-2">
<div
aria-atomic="true"
aria-live="assertive"
className="toast fade show"
role="alert"
data-bs-autohide="false"
>
<div
className={toast-header text-white p-2 {playerData.TITLE}}
>
<i className="fe fe-home me-2"></i>
<h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
<small className="ms-auto">11 mins ago</small>
<Button
variant=""
aria-label="Close"
className="ms-2 mb-1 close tx-normal"
onClick={() => handleRemove(playerData.id)}
data-bs-dismiss="toast"
type="button"
>
<span aria-hidden="true" className="align-text-bottom">&times;</span>
</Button>
</div>
<div className="toast-body p-3">
Hello, world! This is a toast message.
</div>
</div>
</div>
</Col>
))}
</Row>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
}

export default Toasts;
