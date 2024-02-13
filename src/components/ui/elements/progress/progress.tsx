import { Fragment, useState } from "react";
import { Card, ProgressBar, Row, Col, Form, Collapse } from "react-bootstrap";
import Pageheader from "../../../common/pageheader/pageheader";
const now = 50;
const Progress = () => {
  const [BasicProgress, setBasicProgress] = useState(false);
  const [StripedProgress, setStripedProgress] = useState(false);
  const [ProgressSizes, setProgressSizes] = useState(false);
  const [ProgressLabel, setProgressLabel] = useState(false);
  const [AnimatedBars, setAnimatedBars] = useState(false);
  const [MultipleBars, setMultipleBars] = useState(false);
  return (
    <Fragment>
      <Pageheader
        titles={"PROGRESS"}
        active={"Progress"}
        Subtite={"Elements"}
      />

      {/* <!-- Row --> */}
      <Row className="row row-sm">
        <Col xl={12} lg={12}>
          <Card className=" custom-card" id="basic">
            <div className="d-sm-flex  justify-content-between align-items-center card-header ">
              <div>
                <h6 className="card-title">BASIC PROGRESS</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicProgress(!BasicProgress)}
                type="switch"
                label="ShowCode"
              />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar
                    variant="primary"
                    now={45}
                    className=" mg-b-20 "
                  />
                  <ProgressBar
                    variant="secondary"
                    now={55}
                    className=" mg-b-20"
                  />
                  <ProgressBar variant="info" now={65} className="mg-b-20" />
                  <ProgressBar variant="warning" now={75} className="mg-b-20" />
                  <ProgressBar
                    variant="success"
                    now={85}
                    className=" mg-b-20"
                  />
                </div>
                <Collapse in={BasicProgress}>
                  <pre>
                    <code>
                      {`

<ProgressBar variant="primary" now={45} className=" mg-b-20 " />
<ProgressBar variant="secondary" now={55} className=" mg-b-20" />
<ProgressBar variant="info" now={65} className="mg-b-20" />
<ProgressBar variant="warning" now={75} className="mg-b-20" />
<ProgressBar variant="success" now={85} className=" mg-b-20" />

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="striped">
            <div className="d-sm-flex  justify-content-between align-items-center card-header">
              <div>
                <h6 className="card-title"> STRIPED PROGRESS</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setStripedProgress(!StripedProgress)}
                type="switch"
                label="ShowCode"
              />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar
                    striped
                    variant="primary"
                    now={45}
                    className="mg-b-20"
                  />
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={55}
                    className="mg-b-20"
                  />
                  <ProgressBar
                    striped
                    variant="info"
                    now={65}
                    className="mg-b-20"
                  />
                  <ProgressBar
                    striped
                    variant="warning"
                    now={75}
                    className="mg-b-20"
                  />
                  <ProgressBar
                    striped
                    variant="success"
                    now={85}
                    className="mg-b-20"
                  />
                </div>
                <Collapse in={StripedProgress}>
                  <pre>
                    <code>
                      {`

<ProgressBar striped variant="primary" now={45} className="mg-b-20"/>
<ProgressBar striped variant="secondary" now={55} className="mg-b-20"/>
<ProgressBar striped variant="info" now={65} className="mg-b-20"/>
<ProgressBar striped variant="warning" now={75} className="mg-b-20"/>
<ProgressBar striped variant="success" now={85} className="mg-b-20"/>

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="sizes">
            <div className="d-sm-flex  justify-content-between align-items-center card-header">
              <div>
                <h6 className="card-title">PROGRESS SIZES</h6>


              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setProgressSizes(!ProgressSizes)}
                type="switch"
                label="ShowCode"
              />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar
                    now={45}
                    className=" ht-2 mg-b-10"
                    variant="default"
                  />
                  <ProgressBar
                    now={55}
                    className=" ht-2 mg-b-10"
                    variant="secondary"
                  />
                  <ProgressBar
                    now={65}
                    className=" ht-2 mg-b-10"
                    variant="info"
                  />
                </div>

                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar now={45} className="mg-b-10" />
                    <ProgressBar
                      now={55}
                      className=" mg-b-10"
                      variant="secondary"
                    />
                    <ProgressBar now={65} className=" mg-b-10" variant="info" />
                  </div>
                </div>

                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar
                      now={25}
                      className="  mg-b-10"
                      variant="default"
                    />
                    <ProgressBar
                      now={35}
                      className=" mg-b-10"
                      variant="secondary"
                    />
                    <ProgressBar
                      now={45}
                      className="  mg-b-10"
                      variant="info"
                    />
                  </div>
                </div>

                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar
                      now={25}
                      className="mg-b-10"
                      variant="default"
                    />
                    <ProgressBar
                      now={35}
                      className=" mg-b-10"
                      variant="secondary"
                    />
                    <ProgressBar now={45} className=" mg-b-10" variant="info" />
                  </div>
                </div>

                <div className="text-wrap">
                  <div className="example">
                    <ProgressBar
                      now={25}
                      className=" mg-b-10"
                      variant="default"
                    />
                    <ProgressBar
                      now={35}
                      className="  mg-b-10"
                      variant="secondary"
                    />
                    <ProgressBar
                      now={45}
                      className="  mg-b-10"
                      variant="info"
                    />
                  </div>
                  <Collapse in={ProgressSizes}>
                    <pre>
                      <code>
                        {`

<div className="example">
<ProgressBar now={45} className=" ht-2 mg-b-10" variant="default" />
<ProgressBar now={55} className=" ht-2 mg-b-10" variant="secondary" />
<ProgressBar now={65} className=" ht-2 mg-b-10" variant="info" />
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Extra Small
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={45} className="mg-b-10" />
<ProgressBar now={55} className=" mg-b-10" variant="secondary" />
<ProgressBar now={65} className=" mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Small
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className="  mg-b-10" variant="default" />
<ProgressBar now={35} className=" mg-b-10" variant="secondary" />
<ProgressBar now={45} className="  mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Normal
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className="mg-b-10" variant="default" />
<ProgressBar now={35} className=" mg-b-10" variant="secondary" />
<ProgressBar now={45} className=" mg-b-10" variant="info" />
</div>
</div>
<span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
Size Large
</span>
<div className="text-wrap">
<div className="example">
<ProgressBar now={25} className=" mg-b-10" variant="default" />
<ProgressBar now={35} className="  mg-b-10" variant="secondary" />
<ProgressBar now={45} className="  mg-b-10" variant="info" />
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
          <Card className=" custom-card" id="label">
            <div className="d-sm-flex  justify-content-between align-items-center card-header ">
              <div>
                <h6 className="card-title">Progress Label</h6>

              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setProgressLabel(!ProgressLabel)}
                type="switch"
                label="ShowCode"
              />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar className="mg-b-10" now={50} label={`${now}%`} />
                  <br />
                  <ProgressBar
                    className=" mg-b-10"
                    variant="secondary"
                    now={75}
                    label={`${now}%`}
                  />
                  <br />
                  <ProgressBar
                    className=" mg-b-10"
                    variant="info"
                    now={95}
                    label={`${now}%`}
                  />
                  <br />
                </div>
                <Collapse in={ProgressLabel}>
                  <pre>
                    <code>
                      {`
export const Landingpageapp = () => {
const now= 50;
return (
<Fragment>
<ProgressBar className="mg-b-10" now={50} label={"${now}%"} />
<br />
<ProgressBar className=" mg-b-10" variant="secondary" now={75} label={"${now}%"} />
<br />
<ProgressBar
className=" mg-b-10"
variant="info"
now={95}
label={"${now}%"}
</Fragment>
notes:In the place of $ before "" replace with backticks symbol.
);
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          <Card className=" custom-card" id="animate">
            <div className="d-sm-flex  justify-content-between align-items-center card-header">
              <div>
                <h6 className="card-title"> ANIMATED BARS</h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setAnimatedBars(!AnimatedBars)}
                type="switch"
                label="ShowCode"
              />
            </div>

            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar animated now={45} className=" mg-b-10" />
                  <ProgressBar
                    animated
                    now={55}
                    className=" mg-b-10"
                    variant="secondary"
                  />
                  <ProgressBar
                    animated
                    now={65}
                    className=" mg-b-10"
                    variant="info"
                  />
                  <ProgressBar
                    animated
                    now={75}
                    className="mg-b-10"
                    variant="danger"
                  />
                  <ProgressBar
                    animated
                    now={85}
                    className=" mg-b-10"
                    variant="warning"
                  />
                  <ProgressBar
                    animated
                    now={95}
                    className=" mg-b-10"
                    variant="success"
                  />
                </div>
                <Collapse in={AnimatedBars}>
                  <pre>
                    <code>
                      {`
<ProgressBar animated now={45} className=" mg-b-10" />
<ProgressBar animated now={55} className=" mg-b-10" variant="secondary" />
<ProgressBar animated now={65} className=" mg-b-10" variant="info" />
<ProgressBar animated now={75} className="mg-b-10" variant="danger" />
<ProgressBar animated now={85} className=" mg-b-10" variant="warning" />
<ProgressBar animated now={95} className=" mg-b-10" variant="success" />
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="multiple">
            <div className="d-sm-flex  justify-content-between align-items-center card-header">
              <div>
                <h6 className="card-title">MULTIPLE BARS </h6>
              </div>
              <Form.Check
                className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setMultipleBars(!MultipleBars)}
                type="switch"
                label="ShowCode"
              />
            </div>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="default" now={15} key={1} />
                    <ProgressBar variant="secondary" now={15} key={2} />
                    <ProgressBar variant="info" now={15} key={3} />
                  </ProgressBar>
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="danger" now={15} key={1} />
                    <ProgressBar variant="success" now={15} key={2} />
                    <ProgressBar variant="warning" now={15} key={3} />
                  </ProgressBar>
                  <ProgressBar className=" mg-b-10">
                    <ProgressBar variant="default" now={15} key={1} />
                    <ProgressBar variant="dark" now={15} key={2} />
                    <ProgressBar />
                  </ProgressBar>
                </div>
                <Collapse in={MultipleBars}>
                  <pre>
                    <code>
                      {`
<ProgressBar className=" mg-b-10">
<ProgressBar variant="default" now={15} key={1} />
<ProgressBar variant="secondary" now={15} key={2} />
<ProgressBar variant="info" now={15} key={3} />
</ProgressBar>
<ProgressBar className=" mg-b-10">
<ProgressBar variant="danger" now={15} key={1} />
<ProgressBar variant="success" now={15} key={2} />
<ProgressBar variant="warning" now={15} key={3} />
</ProgressBar>
<ProgressBar className=" mg-b-10">
<ProgressBar variant="default" now={15} key={1} />
<ProgressBar variant="dark" now={15} key={2} />
<ProgressBar />
</ProgressBar>

`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Progress.propTypes = {};

Progress.defaultProps = {};

export default Progress;
