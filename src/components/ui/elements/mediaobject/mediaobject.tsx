import { Fragment } from "react";
import Allimages from "../../../common/imagesdata/imagesdata";
import Pageheader from "../../../common/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";

function Mediaobject() {
  return (
    <Fragment>
      <Pageheader
        titles={"MEDIA OBJECT"}
        active={"Mediaobject"}
        Subtite={"Elements"}
      />
      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Basic Example</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="d-block d-sm-flex">
                  <img
                    alt="avatar"
                    className="avatar-lg br-5 mg-b-10 mg-sm-b-0"
                    src={Allimages("User4")}
                  />
                  <div className="mg-sm-s-20">
                    <h5 className="mg-b-5">Media heading</h5>
                    <p className="mb-0">
                      Et gubergren eirmod dolor lorem gubergren lorem dolore ut
                      diam, labore sit no tempor rebum sanctus sea aliquyam.
                      Amet sadipscing et et gubergren sit, at diam ipsum at duo
                      sanctus.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Media Object With Date</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="d-block d-sm-flex">
                  <img
                    alt="avatar"
                    className="avatar-lg br-5 mg-b-10 mg-sm-b-0"
                    src={Allimages("User14")}
                  />
                  <div className="mg-sm-s-20">
                    <h5 className="mg-b-5">
                      Media heading
                      <small className="tx-muted font-weight-semibold ms-1">
                        Posted On Jan 11, 2022
                      </small>
                    </h5>
                    <p className="mb-0">
                      No ipsum vero eos et sed takimata accusam eos eos, et sit
                      amet labore vero vero dolores eirmod nonumy. Et duo dolore
                      stet erat et justo erat no. Diam sadipscing.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Nesting</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="d-block d-sm-flex">
                  <img
                    alt="avatar"
                    className="avatar-lg br-5 mg-b-20 mg-sm-b-0"
                    src={Allimages("User9")}
                  />
                  <div className="mg-sm-s-20">
                    <h5 className="mg-b-5">Media heading</h5>
                    <p className="mb-0">
                      Lorem Ipsum generators on the Internet as necessary aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit
                    </p>
                    <div className="d-block d-sm-flex mg-t-25">
                      <img
                        alt=""
                        className="avatar-lg br-5 mg-b-20 mg-sm-b-0"
                        src={Allimages("User8")}
                      />
                      <div className="mg-sm-s-20">
                        <h5 className="mg-b-5">Media heading</h5>
                        Lorem Ipsum generators on the Internet as necessary aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Vertical Alignment</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="d-block d-sm-flex align-items-center">
                  <img
                    alt="avatar"
                    className="avatar-lg br-5 mg-b-20 mg-sm-b-0"
                    src={Allimages("User13")}
                  />
                  <div className="mg-sm-s-20">
                    <h5 className="mg-b-5">
                      Media heading
                      <small className="tx-muted font-weight-semibold ms-1 d-inline-flex">
                        Posted On Jan 16, 2022
                      </small>
                    </h5>
                    Gubergren duo et sed elitr dolor elitr amet vero dolores.
                    Amet est elitr nonumy dolor diam nonumy. Et sed takimata
                    dolor dolores eirmod. Sed sed invidunt takimata nonumy
                    dolores nonumy. Sadipscing sed dolor no aliquyam erat labore
                    accusam duo tempor, gubergren vero sadipscing magna dolores.
                    Et diam duo sit justo rebum lorem, takimata takimata tempor
                    et ut gubergren. Eos dolore takimata at amet lorem. Labore.
                    Kasd aliquyam ipsum ut dolor clita diam. Elitr et diam
                    dolores dolores ut aliquyam, diam dolore diam amet et sit.
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Order</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="d-block d-sm-flex">
                  <img
                    alt="avatar"
                    className="avatar-lg br-5 order-2 mg-b-10 mg-sm-b-0"
                    src={Allimages("User18")}
                  />
                  <div className="order-1 mg-sm-e-20">
                    <h5 className="mg-b-5">
                      Media heading
                      <small className="tx-muted font-weight-semibold ms-1 d-inline-flex">
                        27 Nov, 2022
                      </small>
                    </h5>
                    <p className="mb-0">
                      Et gubergren eirmod dolor lorem gubergren lorem dolore ut
                      diam, labore sit no tempor rebum sanctus sea aliquyam.
                      Amet sadipscing et et gubergren sit, at diam ipsum at duo
                      sanctus. Et gub er gren eirmod dolor lorem guber gren
                      lorem dolore ut diam, labore sit no tempor rebum sanctus
                      sea aliquyam. Amet sadipscing et et gubergren sit, at diam
                      ipsum at duo sanctus.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Media List</div>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <ul className="list-unstyled">
                  <li>
                    <div className="d-block d-sm-flex">
                      <img
                        alt="avatar"
                        className="avatar-lg br-5 mg-b-10 mg-sm-b-0"
                        src={Allimages("User12")}
                      />
                      <div className="mg-sm-s-20">
                        <h5 className="mg-b-5">Media heading</h5>
                        <p className="mb-0">
                          Et gubergren eirmod dolor lorem gubergren lorem dolore
                          ut diam, labore sit no tempor rebum sanctus sea
                          aliquyam. Amet sadipscing et et gubergren sit, at diam
                          ipsum at duo sanctus.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-block d-sm-flex">
                      <img
                        alt="avatar"
                        className="avatar-lg br-5 mg-b-10 mg-sm-b-0"
                        src={Allimages("User19")}
                      />
                      <div className="mg-sm-s-20">
                        <h5 className="mg-b-5">Media heading</h5>
                        <p className="mb-0">
                          Et gubergren eirmod dolor lorem gubergren lorem dolore
                          ut diam, labore sit no tempor rebum sanctus sea
                          aliquyam. Amet sadipscing et et gubergren sit, at diam
                          ipsum at duo sanctus.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-block d-sm-flex">
                      <img
                        alt="avatar"
                        className="avatar-lg br-5 mg-b-10 mg-sm-b-0"
                        src={Allimages("User6")}
                      />
                      <div className="mg-sm-s-20">
                        <h5 className="mg-b-5">Media heading</h5>
                        <p className="mb-0">
                          Et gubergren eirmod dolor lorem gubergren lorem dolore
                          ut diam, labore sit no tempor rebum sanctus sea
                          aliquyam. Amet sadipscing et et gubergren sit, at diam
                          ipsum at duo sanctus.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Mediaobject;
