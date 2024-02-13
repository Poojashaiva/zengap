import { Fragment, useState } from "react";
import { Badge, Card, Col, Row, Form, Collapse } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import { Link } from "react-router-dom";
import Pageheader from "../../../common/pageheader/pageheader";
const Tags = () => {
  // Input Tags
  const [selected, setSelected] = useState([
    "Javascript",
    "ReactJs",
    "AngularJs",
    "VueJs",
    "jQuery",
  ]);
  // input-end
  const [Pillstags, setPillstags] = useState(false);
  const [Tags1, setTags1] = useState(false);

  return (
    <Fragment>
      <Pageheader titles={"TAGS"} active={"Tags"} Subtite={"Elements"} />
      <Row className="row-sm">
        <Col xl={12} lg={12}>
          <Card className=" custom-card" id="pill">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
                <div className="card-title">
                    PILL TAGS
                </div>
              <Form.Check
                className="mb-sm-3 mb-0"
                aria-controls="example-collapse-text"
                onClick={() => setPillstags(!Pillstags)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Badge pill bg="primary " className="mt-1 mb-1 me-1">

                    Primary
                  </Badge>
                  <Badge pill bg="secondary" className=" mt-1 mb-1 me-1">
                    Secondary
                  </Badge>
                  <Badge pill bg="success" className=" mt-1 mb-1 me-1">
                    Success
                  </Badge>
                  <Badge pill bg="danger" className=" mt-1 mb-1 me-1">

                    Danger
                  </Badge>
                  <Badge pill bg="warning" className=" mt-1 mb-1 me-1">
                    Warning
                  </Badge>
                  <Badge pill bg="info" className=" mt-1 mb-1 me-1">
                    Info
                  </Badge>
                  <Badge
                    pill
                    bg="light"
                    text="dark"
                    className=" mt-1 mb-1 me-1"
                  >
                    Light
                  </Badge>
                  <Badge pill bg="dark" className=" mt-1 mb-1 me-1">
                    Dark
                  </Badge>
                </div>
              </div>
              <Collapse in={Pillstags}>
                <pre>
                  <code>
                    {`
<div className="example">
<Badge pill bg="primary " className="mt-1 mb-1"> Primary</Badge>
<Badge pill bg="secondary" className=" mt-1 mb-1">Secondary</Badge>
<Badge pill bg="success" className=" mt-1 mb-1">Success</Badge>
<Badge pill bg="danger" className=" mt-1 mb-1"> Danger</Badge>
<Badge pill bg="warning" text="dark" className=" mt-1 mb-1">Warning</Badge>
<Badge pill bg="info">Info</Badge>
<Badge pill bg="light" text="dark" className=" mt-1 mb-1">Light</Badge>
<Badge pill bg="dark" className=" mt-1 mb-1">Dark</Badge>
</div>

`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card id="default">
            <Card.Header>
              <div className="card-title">DEFAULT TAGS ADDON</div>
            </Card.Header>

            <Card.Body>
              
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag tag-default">
                      One
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Two
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Three
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag tag-default">
                      Four
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="inptags">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div className="card-title">INPUT TAGS</div>
             
              <Form.Check
                className="mb-sm-3 mb-0"
                aria-controls="example-collapse-text"
                onClick={() => setTags1(!Tags1)}
                type="switch"
                label="ShowCode"
              />
           
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="form-group ">
                    <div className="form-group mb-0">
                      <TagsInput value={selected} onChange={setSelected} />
                    </div>
                  </div>
                </div>
                <Collapse in={Tags1}>
                  <pre>
                    <code>
                      {`
export function Popoverbottom() {
import { TagsInput } from "react-tag-input-component";
const [selected, setSelected] = useState([
"Javascript",
"ReactJs",
"AngularJs",
"VueJs",
"jQuery",
]);
return (
<div className="example">
<div className="form-group ">
<div className="form-group mb-0">
<TagsInput className="form-control bg-info" value={selected} onChange={setSelected} name="courses" />
</div>
</div>
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
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
