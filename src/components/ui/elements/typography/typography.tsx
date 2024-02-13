import { Fragment, useState } from "react";
import { Card, Col, Collapse, Form, Row, Table } from "react-bootstrap";
import Pageheader from "../../../common/pageheader/pageheader";

const Typography = () => {
  const [Default, setDefault] = useState(false);
  const [Color, setColor] = useState(false);
  const [Headings, setHeadings] = useState(false);
  const [Inline, setInline] = useState(false);
  const [Fontsize, setFontsize] = useState(false);
  const [Lineheight, setLineheight] = useState(false);
  const [Fontcolor, setFontcolor] = useState(false);
  const [Fontspacing, setFontspacing] = useState(false);
  const [Fontweight, setFontweight] = useState(false);
  return (
    <Fragment>
      <Pageheader titles="TYPOGRAPHY" Subtite="Elements" active="Typography" />
      <Row className="row-sm">
        <Col xl={6} md={12}>
          <Card>
            <Card.Header className="card-header">
              <div className="d-flex">
                <h3 className="card-title mb-2">DEFAULT HEADER TEXT</h3>
                <Form className="ms-auto">
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
            <Card.Body className="pt-0">
              <div className="text-wrap">
                <div className="example">
                  <h1>h1. Heading</h1>
                  <h2>h2. Heading</h2>
                  <h3>h3. Heading</h3>
                  <h4>h4. Heading</h4>
                  <h5>h5. Heading</h5>
                  <h6>h6. Heading</h6>
                </div>
              </div>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<h1>h1. Heading</h1>
<h2>h2. Heading</h2>
<h3>h3. Heading</h3>
<h4>h4. Heading</h4>
<h5>h5. Heading</h5>
<h6>h6. Heading</h6>
</div>
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
            <Card.Header className="card-header">
              <div className="d-flex">
                <h3 className="card-title mb-2">HEADING WITH COLOR TEXT</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setColor(!Color)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="text-wrap">
                <div className="example">
                  <h1 className="text-primary">h1. Heading</h1>
                  <h2 className="text-secondary">h2. Heading</h2>
                  <h3 className="text-success">h3. Heading</h3>
                  <h4 className="text-danger">h4. Heading</h4>
                  <h5 className="text-info">h5. Heading</h5>
                  <h6 className="text-warning">h6. Heading</h6>
                </div>
              </div>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
<div className="example">
<h1 className="text-primary">h1. Heading</h1>
<h2 className="text-secondary">h2. Heading</h2>
<h3 className="text-success">h3. Heading</h3>
<h4 className="text-danger">h4. Heading</h4>
<h5 className="text-info">h5. Heading</h5>
<h6 className="text-warning">h6. Heading</h6>
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

      <Card className=" custom-card" id="display">
        <div className="card-header">
          <h3 className="card-title  mg-b-10">DISPLAY HEADING</h3>
        </div>
        <Card.Body>
          <div>
            <div className="d-flex">
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                  type="switch"
                  id="custom-switch"
                  onClick={() => setHeadings(!Headings)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
            </div>
          </div>
          <div className="text-wrap">
            <div className="example">
              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4">Display 4</h1>
              <h1 className="display-5">Display 5</h1>
              <h1 className="display-6">Display 6</h1>
            </div>
          </div>
          <Collapse in={Headings} className="mt-2">
            <pre>
              <code>
                {`
<div className="text-wrap">
<div className="example">
<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1>
</div>
</div>
`}
              </code>
            </pre>
          </Collapse>
        </Card.Body>
      </Card>
      <Card className=" custom-card" id="linetext">
        <div className="card-header">
          <h3 className="card-title  mg-b-10">INLINE TEXT ELEMENT</h3>
        </div>
        <Card.Body>
          <div>
            <div className="d-flex">
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                  type="switch"
                  id="custom-switch"
                  onClick={() => setInline(!Inline)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
            </div>
          </div>
          <div className="text-wrap">
            <div className="example">
              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
              <p>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
              <p>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
              <p>
                <u>This line of text will render as underlined</u>
              </p>
              <p>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p className="mb-0">
                <em>This line rendered as italicized text.</em>
              </p>
            </div>
          </div>
          <Collapse in={Inline} className="mt-2">
            <pre>
              <code>
                {`
<div className="text-wrap">
<div className="example">
<p>
You can use the mark tag to <mark>highlight</mark> text.
</p>
<p>
<del>
This line of text is meant to be treated as deleted text.
</del>
</p>
<p>
<s>
This line of text is meant to be treated as no longer
accurate.
</s>
</p>
<p>
<ins>
This line of text is meant to be treated as an addition to the
document.
</ins>
</p>
<p>
<u>This line of text will render as underlined</u>
</p>
<p>
<small>
This line of text is meant to be treated as fine print.
</small>
</p>
<p>
<strong>This line rendered as bold text.</strong>
</p>
<p className="mb-0">
<em>This line rendered as italicized text.</em>
</p>
</div>
</div>
`}
              </code>
            </pre>
          </Collapse>
        </Card.Body>
      </Card>

      <Row>
        <Col lg={12} xl={12}>
          <Card className=" mg-b-20" id="typography">
            <div className="card-header">
              <h3 className="card-title  mg-b-10">FONT SIZE</h3>
            </div>
            <Card.Body>
              <div className="d-flex">
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setFontsize(!Fontsize)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[size]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom">
                        <b>Values</b>
                      </td>
                      <td>
                        8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
                        | 24 | ... | 140
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[viewport]-[size]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom">
                        <b>Viewports</b>
                      </td>
                      <td>xs | sm | md | lg | xl</td>
                    </tr>
                    <tr>
                      <td className="bg-custom">
                        <b>Sizes</b>
                      </td>
                      <td>
                        8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
                        | 24 | ... | 140 (step of 2)
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Collapse in={Fontsize} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
<tbody>
<tr>
<td className="bg-custom">
<b>Classes</b>
</td>
<td>
<code>.tx-[viewport]-[size]</code>
</td>
</tr>
<tr>
<td className="bg-custom">
<b>Viewports</b>
</td>
<td>xs | sm | md | lg | xl</td>
</tr>
<tr>
<td className="bg-custom">
<b>Sizes</b>
</td>
<td>
8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
| 24 | ... | 140 (step of 2)
</td>
</tr>
</tbody>
</Table>
</div>
`}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          <Card className=" mg-b-20">
             <div className="card-header">
                  <h3 className="card-title  ">FONT WEIGHT</h3>
                </div>
            <Card.Body>
              <div className="d-flex">
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setFontweight(!Fontweight)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[weight]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom">
                        <b>Weight</b>
                      </td>
                      <td>
                        bold | semibold | medium | normal | light | thin | xthin
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontweight} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
<tbody>
<tr>
<td className="bg-custom">
<b>Classes</b>
</td>
<td>
<code>.tx-[weight]</code>
</td>
</tr>
<tr>
<td className="bg-custom">
<b>Weight</b>
</td>
<td>
bold | semibold | medium | normal | light | thin | xthin
</td>
</tr>
</tbody>
</Table>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" mg-b-20">
            <div className="card-header">
              <h3 className="card-title  mg-b-10">Font Color</h3>
            </div>
            <Card.Body>
              <div className="d-flex">
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setFontcolor(!Fontcolor)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[color]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>
                        primary | success | warning | danger | info | indigo |
                        purple | orange | teal | pink | black | white | inverse
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-gray-[num]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>
                        100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-white-[transparency]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontcolor} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0">
<tbody>
<tr>
<td className="bg-custom wd-20p">
<b>Classes</b>
</td>
<td>
<code>.tx-[color]</code>
</td>
</tr>
<tr>
<td className="bg-custom wd-20p">
<b>Colors</b>
</td>
<td>
primary | success | warning | danger | info | indigo |
purple | orange | teal | pink | black | white | inverse
</td>
</tr>
</tbody>
</Table>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" mg-b-20">
            <div className="card-header">
              <h3 className="card-title  mg-b-10">Font Spacing</h3>
            </div>
            <Card.Body>
              <div className="d-flex">
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setFontspacing(!Fontspacing)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-spacing-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-spacing--[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ( negative spacing result
                        )
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontspacing} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0">
<tbody>
<tr>
<td className="bg-custom wd-20p">
<b>Classes</b>
</td>
<td>
<code>.tx-spacing-[value]</code>
</td>
</tr>
<tr>
<td className="bg-custom wd-20p">
<b>Values</b>
</td>
<td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
</tr>
</tbody>
</Table>
</div>
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card>
               <div className="card-header">
                  <h3 className="card-title  mg-b-10">Line Height</h3>
                </div>
            <Card.Body>
              <div className="d-flex">
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                    type="switch"
                    id="custom-switch"
                    onClick={() => setLineheight(!Lineheight)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.lh-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
                        14 | 15
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.lh-[viewport]-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>View Port</b>
                      </td>
                      <td>xs | sm | md | lg | xl</td>
                    </tr>
                    <tr>
                      <td className="bg-custom wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
                        14 | 15
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Lineheight} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0">
<tbody>
<tr>
<td className="bg-custom wd-20p">
<b>Classes</b>
</td>
<td>
<code>.lh-[value]</code>
</td>
</tr>
<tr>
<td className="bg-custom wd-20p">
<b>Values</b>
</td>
<td>
1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
14 | 15
</td>
</tr>
</tbody>
</Table>
</div>
<div className="table-responsive">
<Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
<tbody>
<tr>
<td className="bg-custom wd-20p">
<b>Classes</b>
</td>
<td>
<code>.lh-[viewport]-[value]</code>
</td>
</tr>
<tr>
<td className="bg-custom wd-20p">
<b>View Port</b>
</td>
<td>xs | sm | md | lg | xl</td>
</tr>
<tr>
<td className="bg-custom wd-20p">
<b>Values</b>
</td>
<td>
1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
14 | 15
</td>
</tr>
</tbody>
</Table>
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
Typography.propTypes = {};

Typography.defaultProps = {};

export default Typography;
