import { Fragment } from "react";
import Pageheader from "../../../components/common/pageheader/pageheader";
import {
  Card,
  Col,
  Dropdown,
  ProgressBar,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Allimages from "../../../components/common/imagesdata/imagesdata";
import Chrome from "../../../assets/img/svgicons/chrome.svg";
import Opera from "../../../assets/img/svgicons/opera.svg";
import firefox from "../../../assets/img/svgicons/firefox.svg";
import Safari from "../../../assets/img/svgicons/safari.svg";
import Usbrowser from "../../../assets/img/svgicons/uc-browser.svg";
import Explore from "../../../assets/img/svgicons/edge.svg";
import { Link, NavLink } from "react-router-dom";

function Widgets() {
  return (
    <Fragment>
      <Pageheader titles={"WIDGETS"} active={"Widgets"} Subtite={"Pages"} />

      <Row>
        <Col xl={3} lg={6} md={12}>
          <Card>
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div>
                    <div>
                      <h6 className="mb-2">Orders</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $5,472
                          <span className="tx-primary font-weight-semibold ms-1 tx-11">
                            <i className="fa fa-caret-up ms-2 me-1 tx-primary"></i>
                            +427
                          </span>
                        </h4>
                      </div>
                      <p className="mb-0 tx-muted tx-11">Since Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <div className="ht-50 wd-50 radius-4 bg-primary-transparent tx-primary d-flex align-items-center justify-content-center overflow-hidden ms-auto">
                      <i className="fe fe-shopping-bag tx-17"></i>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={12}>
          <Card>
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div>
                    <div>
                      <h6 className="mb-2">Profit</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $8,943
                          <span className="tx-warning font-weight-semibold ms-1 tx-11">
                            <i className="fa fa-caret-up ms-2 me-1 tx-warning"></i>
                            +788
                          </span>
                        </h4>
                      </div>
                      <p className="mb-0 tx-muted tx-11">Since Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <div className="ht-50 wd-50 radius-4 bg-warning-transparent tx-warning d-flex align-items-center justify-content-center overflow-hidden ms-auto">
                      <i className="fe fe-external-link tx-17"></i>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={12}>
          <Card>
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div>
                    <div>
                      <h6 className="mb-2">Earnings</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $4,589
                          <span className="font-weight-semibold tx-orange ms-1 tx-11">
                            <i className="fa fa-caret-down ms-2 me-1 tx-orange"></i>
                            -453
                          </span>
                        </h4>
                      </div>
                      <p className="mb-0 tx-muted tx-11">Since Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <div className="ht-50 wd-50 radius-4 bg-orange-transparent tx-orange d-flex align-items-center justify-content-center overflow-hidden ms-auto">
                      <i className="fe fe-dollar-sign tx-17"></i>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={12}>
          <Card>
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div>
                    <div>
                      <h6 className="mb-2">Orders</h6>
                    </div>
                    <div className="pb-0 mt-0">
                      <div className="d-flex">
                        <h4 className="tx-20 font-weight-semibold mb-2">
                          $5,472
                          <span className="tx-primary font-weight-semibold ms-1 tx-11">
                            <i className="fa fa-caret-up ms-2 me-1 tx-primary"></i>
                            +427
                          </span>
                        </h4>
                      </div>
                      <p className="mb-0 tx-muted tx-11">Since Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                    <div className="ht-50 wd-50 radius-4 bg-primary-transparent tx-primary d-flex align-items-center justify-content-center overflow-hidden ms-auto">
                      <i className="fe fe-shopping-bag tx-17"></i>
                    </div>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12} xl={4}>
          <Card className="card overflow-hidden">
            <Card.Header className=" pb-0">
              <div className="d-flex justify-content-between button-variant">
                <div className="w-auto">
                  <h3 className="card-title mb-1">My Profile</h3>
                  <p className="tx-11">
                    76% completed.
                    <NavLink to={`${import.meta.env.BASE_URL}pages/profilepage/`} className="text-primary">
                      Info
                    </NavLink>
                  </p>
                </div>
                <Dropdown>
                  <div className="w-auto">
                    <Dropdown.Toggle
                      data-bs-toggle="dropdown"
                      className="toggle-before-none"
                      variant="default"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fe fe-more-vertical tx-gray-600 tx-18"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item >Reply</Dropdown.Item>
                      <Dropdown.Item >Report Spam</Dropdown.Item>
                      <Dropdown.Item >Delete</Dropdown.Item>
                      <Dropdown.Item >Show Original</Dropdown.Item>
                      <Dropdown.Item >Print</Dropdown.Item>
                      <Dropdown.Item >Filter</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="card-body pb-0 px-0">
              <div className="px-3 pb-3 w-100">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className="avatar-xl rounded-circle me-0 mb-1 p-1 bg-blue-light">
                    <NavLink to={`${import.meta.env.BASE_URL}pages/profilepage/`}>
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={Allimages("User2")}
                      />
                    </NavLink>
                  </div>
                  <h6 className="tx-20 mb-0">
                    <NavLink to={`${import.meta.env.BASE_URL}pages/profilepage/`}>Nick Taylor</NavLink>
                  </h6>
                  <span className="tx-11 font-weight-semibold text-muted">
                    <NavLink to={`${import.meta.env.BASE_URL}pages/profilepage/`}>UI / UX Designer</NavLink>
                  </span>
                  <div className="d-flex align-items-center mt-2 border radius-4">
                    <p
                      className="mb-0 p-2 border-end"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Achievements"
                    >
                      <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" version="1.1" > <g> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(30.980392%,71.764706%,89.019608%)', fillOpacity: 1, }} d="M 20 20 C 20 24.140625 16.640625 27.5 12.5 27.5 C 8.359375 27.5 5 24.140625 5 20 C 5 15.859375 8.359375 12.5 12.5 12.5 C 16.640625 12.5 20 15.859375 20 20 Z M 20 20 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(72.156863%,88.627451%,95.294118%)', fillOpacity: 1, }} d="M 23.636719 6.4375 L 17.136719 2.6875 C 17.136719 2.683594 17.136719 2.683594 17.136719 2.683594 C 16.539062 2.339844 15.773438 2.546875 15.429688 3.144531 L 12.503906 8.214844 L 15.296875 13.042969 C 15.292969 13.042969 15.292969 13.042969 15.292969 13.042969 C 16.992188 13.726562 18.375 15.011719 19.195312 16.632812 L 24.09375 8.144531 C 24.441406 7.546875 24.234375 6.78125 23.636719 6.4375 Z M 23.636719 6.4375 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(58.431373%,82.745098%,93.333333%)', fillOpacity: 1, }} d="M 12.5 12.5 C 13.488281 12.5 14.429688 12.695312 15.296875 13.042969 L 9.570312 3.144531 C 9.570312 3.144531 9.570312 3.144531 9.570312 3.140625 C 9.222656 2.542969 8.460938 2.339844 7.863281 2.6875 L 1.363281 6.4375 C 0.765625 6.78125 0.558594 7.546875 0.90625 8.144531 L 5.804688 16.632812 C 7.039062 14.183594 9.570312 12.5 12.5 12.5 Z M 12.5 12.5 " ></path> </g> </svg>
                      24
                    </p>
                    <p
                      className="mb-0 p-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="Teams"
                    >
                      <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" version="1.1" > <g> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(30.980392%,71.764706%,89.019608%)', fillOpacity: 1, }} d="M 22.882812 15.277344 C 21.78125 16.257812 20.34375 16.875 18.75 16.875 C 18.410156 16.875 18.078125 16.84375 17.753906 16.789062 C 17.722656 16.761719 17.679688 16.738281 17.648438 16.710938 C 19.84375 18.542969 21.25 21.289062 21.25 24.375 C 21.25 25.066406 20.691406 25.625 20 25.625 L 27.5 25.625 C 28.191406 25.625 28.75 25.066406 28.75 24.375 C 28.75 20.328125 26.339844 16.851562 22.882812 15.277344 Z M 22.882812 15.277344 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(72.156863%,88.627451%,95.294118%)', fillOpacity: 1, }} d="M 11.25 16.875 C 7.796875 16.875 5 14.078125 5 10.625 C 5 7.171875 7.796875 4.375 11.25 4.375 C 14.703125 4.375 17.5 7.171875 17.5 10.625 C 17.496094 14.074219 14.699219 16.871094 11.25 16.875 Z M 11.25 16.875 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(72.156863%,88.627451%,95.294118%)', fillOpacity: 1, }} d="M 11.25 16.875 C 7.796875 16.875 5 14.078125 5 10.625 C 5 7.171875 7.796875 4.375 11.25 4.375 C 14.703125 4.375 17.5 7.171875 17.5 10.625 C 17.496094 14.074219 14.699219 16.871094 11.25 16.875 Z M 11.25 16.875 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(58.431373%,82.745098%,93.333333%)', fillOpacity: 1, }} d="M 15.382812 15.277344 C 14.28125 16.257812 12.84375 16.875 11.25 16.875 C 9.65625 16.875 8.21875 16.261719 7.113281 15.277344 C 3.65625 16.851562 1.25 20.328125 1.25 24.375 C 1.25 25.066406 1.808594 25.625 2.5 25.625 L 20 25.625 C 20.691406 25.625 21.25 25.066406 21.25 24.375 C 21.25 20.328125 18.839844 16.851562 15.382812 15.277344 Z M 15.382812 15.277344 " ></path> <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(44.705882%,77.254902%,90.980392%)', fillOpacity: 1, }} d="M 18.75 4.375 C 17.335938 4.375 16.046875 4.863281 15 5.652344 C 15.339844 5.910156 15.652344 6.203125 15.933594 6.523438 C 16.011719 6.613281 16.085938 6.707031 16.160156 6.800781 C 16.3125 6.996094 16.457031 7.195312 16.585938 7.410156 C 16.699219 7.597656 16.804688 7.792969 16.902344 7.992188 C 16.953125 8.109375 17.007812 8.21875 17.054688 8.335938 C 17.175781 8.640625 17.273438 8.949219 17.34375 9.273438 C 17.363281 9.351562 17.375 9.429688 17.386719 9.507812 C 17.453125 9.871094 17.5 10.242188 17.5 10.625 C 17.5 11.019531 17.453125 11.398438 17.382812 11.769531 C 17.371094 11.828125 17.367188 11.882812 17.355469 11.9375 C 17.285156 12.25 17.1875 12.554688 17.070312 12.847656 C 17.027344 12.964844 16.980469 13.082031 16.929688 13.199219 C 16.824219 13.421875 16.707031 13.640625 16.578125 13.847656 C 16.25 14.386719 15.847656 14.863281 15.382812 15.277344 C 16.246094 15.671875 17.042969 16.179688 17.753906 16.789062 C 18.078125 16.84375 18.410156 16.875 18.75 16.875 C 22.199219 16.871094 24.996094 14.074219 25 10.625 C 25 7.171875 22.203125 4.375 18.75 4.375 Z M 18.75 4.375 " ></path> </g> </svg>
                      10
                    </p>
                  </div>
                </div>
                <Row className=" mt-3">
                  <div className="col-4 border-end">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span className="tx-20 font-weight-semibold">1,200</span>
                      <div className="text-muted tx-11 text-center">
                        Followers
                      </div>
                    </div>
                  </div>
                  <div className="col-4 border-end">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span className="tx-20 font-weight-semibold">1,053</span>
                      <div className="text-muted tx-11 text-center">
                        Following
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <span className="tx-20 font-weight-semibold">280</span>
                      <div className="text-muted tx-11 text-center">
                        Projects
                      </div>
                    </div>
                  </div>
                  <Col md={12} className="mt-3">
                    <p className="text-muted text-center px-4 mb-0">
                      Nonumy et dolores ut ea sadipscing. Sed ut diam, Lorem sit
                      dolores sanctus vero amet. ea takimata sed sit..
                    </p>
                  </Col>
                  <Col md={12} className="my-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="media me-2">
                        <div className="wd-30 ht-30 d-flex align-items-center justify-content-center radius-40 bg-primary-transparent text-primary">
                          <a
                            
                            className="text-primary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Github"
                          >
                            <i className="icon ion-logo-github tx-16"></i>
                          </a>
                        </div>
                      </div>
                      <div className="media mt-0 me-2">
                        <div className="wd-30 ht-30 d-flex align-items-center justify-content-center radius-40 bg-secondary-transparent">
                          <a
                            
                            className="text-warning"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Twitter"
                          >
                            <i className="fe fe-twitter tx-16"></i>
                          </a>
                        </div>
                      </div>
                      <div className="media mt-0 me-2">
                        <div className="wd-30 ht-30 d-flex align-items-center justify-content-center radius-40 bg-orange-transparent">
                          <a
                            
                            className="text-orange"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Portfolio"
                          >
                            <i className="icon ion-md-link tx-16"></i>
                          </a>
                        </div>
                      </div>
                      <div className="media mt-0">
                        <div className="wd-30 ht-30 d-flex align-items-center justify-content-center radius-40 bg-teal-transparent">
                          <a
                            
                            className="text-teal"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-original-title="Linkedin"
                          >
                            <i className="icon ion-logo-linkedin tx-16"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <div className="col-12">
                    <NavLink
                      to={`${import.meta.env.BASE_URL}pages/profilepage/`}
                      className="btn btn-sm btn-block btn-primary py-2"
                    >
                      View Profile
                    </NavLink>
                  </div>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} lg={12} xl={4}>
          <Card>
            <Card.Header className=" pb-0">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h3 className="card-title mb-0">Recent Activity</h3>
                <a  className="tx-primary">
                  View All
                </a>
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled mb-0 recent-activity">
                <li>
                  <div className="d-flex flex-1 ms-4 activity-item">
                    <div className="avatar avatar-sm rounded-circle bg-primary-gradient shadow">
                      <i className="fe fe-folder"></i>
                    </div>
                    <div className="ms-2 flex-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0"> Created a <a  className="tx-primary"> New Project.</a>
                        </p>
                        <span className="tx-11 tx-muted">08:45</span>
                      </div>
                      <p className="mb-0 tx-12 tx-muted">  Sea ea takimata eirmod ut.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-1 ms-4 activity-item">
                    <div className="avatar avatar-sm rounded-circle shadow">
                      <img
                        src={Allimages("User6")}
                        alt="avatar"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-2 flex-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                          <a  className="font-weight-semibold">Katy Perri</a> commented.
                        </p>
                        <span className="tx-11 tx-muted">yesterday</span>
                      </div>
                      <div className="mt-2 p-2 border br-5">
                        <ul className="list-unstyled tx-muted">
                          <li className="mb-0">
                            <p className="mb-0 tx-12">

                              <a  className="tx-primary">
                                @Json_Taylor
                              </a>
                              Takimata rebum diam kasd sadipscing eirmod.
                            </p>
                          </li>
                        </ul>
                        <div className="input-group input-group-sm mt-2">
                          <input
                            type="text"
                            className="form-control p-3 radius-4"
                            placeholder="@katy_perri"
                          />
                          <a
                            
                            className="btn btn-primary bg-primary text-white border-0 input-group-text"
                          >
                            <i className="fe fe-arrow-up"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-1 ms-4 activity-item">
                    <div className="avatar avatar-sm rounded-circle bg-primary-gradient shadow">
                      <img
                        src={Allimages("User10")}
                        className="rounded-circle"
                        alt="avatar"
                      />
                    </div>
                    <div className="ms-2 flex-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                          <a  className="font-weight-semibold">Neon Tarly</a> shared a link.
                        </p>
                        <span className="tx-11 tx-muted">20 Jan 22</span>
                      </div>
                      <p className="mb-0 tx-12 tx-muted">
                        <a  className="tx-primary">
                          http://Et-Sed-dolor_sed
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-1 ms-4 activity-item">
                    <div className="avatar avatar-sm rounded-circle bg-primary-gradient shadow">
                      <img
                        src={Allimages("User13")}
                        className="rounded-circle"
                        alt="avatar"
                      />
                    </div>
                    <div className="ms-2 flex-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">
                          <a  className="font-weight-semibold">Wanda Rag</a> uploaded 3 files.
                        </p>
                        <span className="tx-11 tx-muted">01 Jan 22</span>
                      </div>
                      <p className="mb-0 tx-12 tx-muted">
                        Sanctus justo magna ipsum clita.
                      </p>
                      <div className="d-sm-flex align-items-center mt-2 p-2 bg-gray-100 br-5 pos-relative">
                        <div className="wd-40">
                          <img src={Allimages("File1")} alt="docx" />
                        </div>
                        <div className="ms-1 tx-11">
                          <p className="mb-0">WORD_Document</p>
                          <span className="small tx-11">
                            35.9mb
                            <a  className="ms-1">
                              <i className="fe fe-download tx-11"></i>
                            </a>
                          </span>
                        </div>
                        <a  className="tx-11 more pos-absolute">
                          +2 More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-0">
                  <div className="d-flex flex-1 ms-4 activity-item">
                    <div className="avatar avatar-sm rounded-circle bg-secondary-gradient shadow">
                      <i className="fe fe-clipboard"></i>
                    </div>
                    <div className="ms-2 flex-1">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">Created a<a  className="tx-primary"> New Task.</a>
                        </p>
                        <span className="tx-11 tx-muted">31 Dec 21</span>
                      </div>
                      <p className="mb-0 tx-12 tx-muted">
                        Aliquyam et dolor et sed labore.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={4} lg={12}>
          <Card>
            <Card.Body className=" iconfont text-start">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-3">Real time users</h4>
              </div>
              <div className="d-flex mb-0">
                <div>
                  <h4 className="mb-1 font-weight-semibold">
                    154<span className="tx-success tx-13 ms-2">(+0.98%)</span>
                  </h4>
                  <p className="mb-1 tx-12 tx-muted">Overview of Last month</p>
                </div>
                <div className="avatar bg-primary-transparent rounded-circle ms-auto mt-0">
                  <i className="fe fe-users tx-primary tx-14"></i>
                </div>
              </div>

              <div className="progress progress-sm mt-1">
                {/* <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-primary wd-70p" role="progressbar"></div> */}
                <ProgressBar
                  variant="primary"
                  now={70}
                  className="progress-bar bg-primary wd-70p"
                  role="progressbar"
                />
              </div>
              <small className="mb-0  tx-muted">
                Monthly<span className="float-end tx-muted">70%</span>
              </small>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" iconfont text-start">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-3">Total visits</h4>
              </div>
              <div className="d-flex mb-0">
                <div>
                  <h4 className="mb-1 font-weight-semibold">
                    5274<span className="tx-danger tx-13 ms-2">(-12.45%)</span>
                  </h4>
                  <p className="mb-1 tx-12 tx-muted">Overview of Last month</p>
                </div>
                <div className="avatar bg-warning-transparent rounded-circle ms-auto mt-0">
                  <i className="fe fe-zap tx-warning tx-14"></i>
                </div>
              </div>

              <div className="progress progress-sm mt-1">
                {/* <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-warning wd-50p" role="progressbar"></div> */}
                <ProgressBar
                  variant="warning"
                  now={70}
                  className="progress-bar bg-warning wd-50p"
                  role="progressbar"
                />
              </div>
              <small className="mb-0  tx-muted">
                Monthly<span className="float-end tx-muted">50%</span>
              </small>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className=" iconfont text-start">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mb-3">Bounce Rate</h4>
              </div>
              <div className="d-flex mb-0">
                <div>
                  <h4 className="mb-1   font-weight-semibold">
                    76.3%
                    <span className="tx-success tx-13 ms-2">(+13.52%)</span>
                  </h4>
                  <p className="mb-1 tx-12 tx-muted">Overview of Last month</p>
                </div>
                <div className="avatar bg-teal-transparent rounded-circle ms-auto mt-0">
                  <i className="fe fe-trending-up tx-teal tx-14"></i>
                </div>
              </div>

              <div className="progress progress-sm mt-1">
                {/* <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" className="progress-bar bg-teal wd-60p" role="progressbar"></div> */}
                <ProgressBar
                  variant="bg-primary"
                  now={60}
                  className="progress-bar bg-primary wd-60p"
                  role="progressbar"
                />
              </div>
              <small className="mb-0  tx-muted">
                Monthly<span className="float-end tx-muted">60%</span>
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row">
        <Col md={4} lg={4}>
          <div className="card bg-primary-gradient">
            <Card.Body>
              <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active flex-column">
                    <i className="si si-social-facebook tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">12th June</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">20% Off</span>on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Trevor Hart</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-google tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">24th July</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">60% Off</span> on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Joseph Vaughan</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-twitter tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">9th Aug</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">90% Off</span> on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Alan Hemmings</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>

        <Col md={4} lg={4}>
          <Card className="card bg-secondary-gradient">
            <Card.Body>
              <div
                id="myCarousel0"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active flex-column">
                    <i className="si si-social-facebook tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">11th June</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">30% Off</span>on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Alan Hemmings</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-google tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">21st July</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">70% Off</span> on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Eric Lee</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-twitter tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">12th Aug</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">80% Off</span> on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Eric Lee</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} lg={4}>
          <Card className="card bg-teal-gradient">
            <Card.Body>
              <div
                id="myCarousel1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active flex-column">
                    <i className="si si-social-facebook tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">25th June</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold me-2">30% Off</span>on
                      buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Eric Lee</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-google tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">6th July</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold">70% Off</span> on buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Eric Lee</i>
                    </div>
                  </div>
                  <div className="carousel-item flex-column">
                    <i className="si si-social-twitter tx-30 text-white mb-2"></i>
                    <p className="text-white mt-2">7th Aug</p>
                    <h3 className="text-white font-light">
                      Now Get <span className="font-bold">80% Off</span> on buy
                    </h3>
                    <div className="text-white m-t-20">
                      <i>- Eric Lee</i>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12}>
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Subscriptions</div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12} className="text-center">
                      <div className="rounded-circle ht-60 wd-60 bg-light bg-light d-flex align-items-center justify-content-center mx-auto">
                        <div className="ht-50 wd-50 rounded-circle bg-primary d-flex align-items-center justify-content-center">
                          <i className="fe fe-shopping-bag tx-17 text-white"></i>
                        </div>
                      </div>
                      <h4 className="tx-24 font-weight-semibold my-2">472K</h4>
                      <p className="tx-11 mb-1">
                        <span className="badge badge-sm bg-success-transparent tx-success me-1">
                          +13%
                        </span>
                        of target
                      </p>
                      <p className="mb-1 tx-13 text-start">Target</p>
                      <div className="progress progress-style ht-5"> <div className="progress-bar bg-primary wd-80p" ></div> </div>

                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Sales</div>
                </Card.Header>
                <Card.Body className=" text-center">
                  <div className="rounded-circle ht-60 wd-60 bg-light bg-light d-flex align-items-center justify-content-center mx-auto">
                    <div className="ht-50 wd-50 rounded-circle bg-secondary d-flex align-items-center justify-content-center">
                      <i className="fe fe-shopping-bag tx-17 text-white"></i>
                    </div>
                  </div>
                  <h4 className="tx-24 font-weight-semibold my-2">572K</h4>
                  <p className="tx-11">
                    <span className="badge badge-sm bg-success-transparent tx-success me-1">
                      +13%
                    </span>
                    of target
                  </p>
                  <p className="mb-1 tx-13 text-start">Sales Target</p>
                  <div className="progress progress-style ht-5"> <div className="progress-bar bg-secondary wd-80p" ></div> </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="card-title">Sessions by Countries</div>
                </Card.Header>
                <Card.Body>
                  <ul className="sales-session mb-0">
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>1. United States </h6>
                        <p className="font-weight-semibold mb-2">
                          $273.12
                          <span className="tx-muted font-weight-normal ms-1">
                            (2.17%)
                          </span>
                        </p>
                      </div>
                      <div className="progress">
                        <ProgressBar
                          variant="primary"
                          now={50}
                          className="progress-bar bg-primary wd-50p ht-5"
                          role="progressbar"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>2. United kingdom</h6>
                        <p className="font-weight-semibold mb-2">
                          $423.10
                          <span className="tx-muted font-weight-normal ms-1">
                            (12.43%)
                          </span>
                        </p>
                      </div>
                      <div className="progress">
                        <ProgressBar
                          variant="info"
                          now={50}
                          className="progress-bar bg-info wd-50p ht-5"
                          role="progressbar"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between">
                        <h6>3. Australia</h6>
                        <p className="font-weight-semibold mb-2">
                          $547.18
                          <span className="tx-muted font-weight-normal ms-1">
                            (3.14%)
                          </span>
                        </p>
                      </div>
                      <div className="progress">
                        <ProgressBar
                          variant="danger"
                          now={60}
                          className="progress-bar bg-danger wd-60p ht-5"
                          role="progressbar"
                        />
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="d-flex justify-content-between">
                        <h6>4. Canada</h6>
                        <p className="font-weight-semibold mb-2">
                          $728.32
                          <span className="tx-muted font-weight-normal ms-1">
                            (7.23%)
                          </span>
                        </p>
                      </div>
                      <div className="progress">
                        <ProgressBar
                          variant="warning"
                          now={50}
                          className="progress-bar bg-warning wd-50p ht-5"
                          role="progressbar"
                        />
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card>
                <Card.Header>
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="card-title mb-0">Tasks</h3>
                    <Link to="#" className="tx-primary">
                      View All
                    </Link>
                  </div>
                </Card.Header>
                <Card.Body className=" pt-3">
                  <ul className="tasks-all mb-0">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-primary-gradient rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-white d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-activity"></i>
                          </a>
                        </div>
                        <div className="ms-2 flex-1 button-variant">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0 tx-13">To Do</p>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-muted toggle-before-none"
                                variant="default"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fe fe-more-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <li>
                                  <Dropdown.Item >
                                    Change Status
                                  </Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Rename</Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Delete</Dropdown.Item>
                                </li>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">

                              <span className="rounded-circle ht-5 wd-5 bg-gray-400 me-1"></span>
                              in progress
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-secondary-gradient rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-white d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-command"></i>
                          </a>
                        </div>
                        <div className="ms-2 flex-1 button-variant">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0 tx-13">Task In Progress</p>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-muted toggle-before-none"
                                variant="default"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fe fe-more-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <li>
                                  <Dropdown.Item >
                                    Change Status
                                  </Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Rename</Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Delete</Dropdown.Item>
                                </li>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">

                              <span className="rounded-circle ht-5 wd-5 bg-gray-400 me-1"></span>
                              started
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm bg-orange-gradient rounded-circle d-flex align-items-center justify-content-center shadow">
                          <a
                            
                            className="text-white d-flex align-items-center justify-content-center"
                          >
                            <i className="fe fe-globe"></i>
                          </a>
                        </div>
                        <div className="ms-2 flex-1 button-variant">
                          <div className="d-flex align-items-center justify-content-between">
                            <p className="mb-0 tx-13">Completed Task</p>
                            <Dropdown>
                              <Dropdown.Toggle
                                className="tx-muted toggle-before-none"
                                variant="default"
                                data-bs-toggle="dropdown"
                              >
                                <i className="fe fe-more-vertical"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu">
                                <li>
                                  <Dropdown.Item >
                                    Change Status
                                  </Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Rename</Dropdown.Item>
                                </li>
                                <li>
                                  <Dropdown.Item >Delete</Dropdown.Item>
                                </li>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <p className="tx-muted mb-0 tx-11 d-flex align-items-center">
                            2m ago
                            <span className="ms-2 d-flex align-items-center">

                              <span className="rounded-circle ht-5 wd-5 bg-gray-400 me-1"></span>
                              completed
                            </span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={6} lg={12}>
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-between">
                <h4 className="card-title">Browser Usage</h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-0">
                Tells you where your visitors originated from, such as search
                engines, social networks or website referrals.
                <a href="">Learn more</a>
              </p>
            </Card.Header>
            <Card.Body className=" p-0">
              <div className="browser-stats">
                <div className="d-flex align-items-center item  border-bottom">
                  <div className="d-flex">
                    <img src={Chrome} alt="img" className="ht-30 wd-30 me-2" />
                    <div>
                      <h6>Chrome</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 my-auto">35,502</span>
                      <span className="tx-success fs-15">
                        <i className="fe fe-arrow-up"></i>12.75%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center item  border-bottom">
                  <div className="d-flex">
                    <img src={Opera} alt="img" className="ht-30 wd-30 me-2" />
                    <div>
                      <h6>Opera</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 my-auto">12,563</span>
                      <span className="tx-danger">
                        <i className="fe fe-arrow-down"></i>15.12%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center item  border-bottom">
                  <div className="d-flex">
                    <img src={Explore} alt="img" className="ht-30 wd-30 me-2" />
                    <div>
                      <h6>Internet Explorer</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 mt-1">25,364</span>
                      <span className="tx-success">
                        <i className="fe fe-arrow-up"></i>24.37%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center item  border-bottom">
                  <div className="d-flex">
                    <img src={firefox} alt="img" className="ht-30 wd-30 me-2" />
                    <div>
                      <h6>Firefox</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 mt-1">14,635</span>
                      <span className="tx-success">
                        <i className="fe fe-arrow-up"></i>15,63%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center item border-bottom">
                  <div className="d-flex">
                    <img
                      src={Usbrowser}
                      alt="img"
                      className="ht-30 wd-30 me-2"
                    />
                    <div>
                      <h6>Ucbrowser</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 mt-1">15,453</span>
                      <span className="tx-danger">
                        <i className="fe fe-arrow-down"></i>23.70%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center item">
                  <div className="d-flex">
                    <img src={Safari} alt="img" className="ht-30 wd-30 me-2" />
                    <div>
                      <h6>Safari</h6>
                      <span className="sub-text">Mozilla Foundation, Inc.</span>
                    </div>
                  </div>
                  <div className="ms-auto my-auto">
                    <div className="d-flex">
                      <span className="me-4 mt-1">35,657</span>
                      <span className="tx-danger">
                        <i className="fe fe-arrow-down"></i>12.54%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xxl={6} xl={12}>
          <Row>
            <Col xl={6} lg={6}>
              <Card className="text-center">
                <Card.Body>
                  <div className="feature widget-2 text-center mt-0 mb-3">
                    <i className="ti-bar-chart project bg-primary-transparent mx-auto tx-primary "></i>
                  </div>
                  <h6 className="mb-1 tx-muted">Total Revenue</h6>
                  <h3 className="font-weight-semibold">$125.465</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card className="text-center">
                <Card.Body>
                  <div className="feature widget-2 text-center mt-0 mb-3">
                    <i className="ti-pie-chart project bg-pink-transparent mx-auto text-pink "></i>
                  </div>
                  <h6 className="mb-1 tx-muted">Marketing Spend</h6>
                  <h3 className="font-weight-semibold">$75.045</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6}>
              <Card className="text-center">
                <Card.Body>
                  <div className="feature widget-2 text-center mt-0 mb-3">
                    <i className="ti-pulse  project bg-teal-transparent mx-auto text-teal "></i>
                  </div>
                  <h6 className="mb-1 tx-muted">Total Profit</h6>
                  <h3 className="font-weight-semibold">$46.352</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6} lg={6}>
              <Card className="text-center">
                <Card.Body>
                  <div className="feature widget-2 text-center mt-0 mb-3">
                    <i className="ti-stats-up project bg-success-transparent mx-auto tx-success "></i>
                  </div>
                  <h6 className="mb-1 tx-muted">Total Investiment</h6>
                  <h3 className="font-weight-semibold">62%</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xxl={6} xl={12}>
          <Row>
            <Col xl={6}>
              <Card>
                <Card.Header className=" pb-3">
                  <div className="card-title">MAIN TASKS</div>
                </Card.Header>
                <Card.Body className=" p-0 customers mt-1">
                  <div>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 me-5 my-auto">
                        sharing the information with clients or stakeholders.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          Today
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" defaultChecked />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 me-5 my-auto">
                        Hearing the information and responding.
                      </span>
                      <span className="ms-auto">
                        <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2 float-end">
                          22 hrs
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 me-5 my-auto">
                        Setting up and customizing your own sales.
                      </span>
                      <span className="ms-auto">

                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          1 Day
                        </span>
                      </span>
                    </label>
                    <label className="p-2 mt-2 d-flex">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 me-5 my-auto">
                        To have a complete 360° overview of sales information,
                        having.
                      </span>
                      <span className="ms-auto">

                        <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                          2 Days
                        </span>
                      </span>
                    </label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="card-title mb-1">Billings</h3>
                      <span className="tx-muted tx-11">204 transactions</span>
                    </div>
                    <a  className="tx-primary">
                      View History
                    </a>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="panel">
                    <div className="panel tabs-style6">
                      <div className="panel-head">
                        <Tabs
                          defaultActiveKey="paid"
                          id="uncontrolled-tab-example"
                          className="mb-3"
                        >
                          <Tab eventKey="received" title="Received">
                            <div className="tab-pane active" id="tab_received">
                              <ul className="list-unstyled mb-0 mt-3">
                                <li>
                                  <div className="d-flex">
                                    <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                      <img
                                        src={Allimages("User10")}
                                        alt="avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-3">
                                      <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                        Joseph Arimathea
                                        <span className="tx-success">
                                          +$5,000
                                        </span>
                                      </p>
                                      <p className="mb-0 d-flex align-items-center justify-content-between">
                                        <NavLink
                                          to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                          className="tx-primary tx-11"
                                        >
                                          15 Invoices
                                        </NavLink>
                                        <span className="tx-muted tx-11">
                                          Today
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex">
                                    <div className="avatar avatar-sm rounded-circle bg-gray-200">
                                      <span className="tx-muted font-weight-normal">
                                        PS
                                      </span>
                                    </div>
                                    <div className="flex-1 ms-3">
                                      <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                        Penelope Smallbone
                                        <span className="tx-success">
                                          +$20,400
                                        </span>
                                      </p>
                                      <p className="mb-0 d-flex align-items-center justify-content-between">
                                        <NavLink
                                          to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                          className="tx-primary tx-11"
                                        >
                                          2 Invoices
                                        </NavLink>
                                        <span className="tx-muted tx-11">
                                          20 Jan 22
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="d-flex">
                                    <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                      <img
                                        src={Allimages("User8")}
                                        alt="avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-3">
                                      <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                        Ruby Bartlett
                                        <span className="tx-success">
                                          +$49,250
                                        </span>
                                      </p>
                                      <p className="mb-0 d-flex align-items-center justify-content-between">
                                        <NavLink
                                          to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                          className="tx-primary tx-11"
                                        >
                                          37 Invoices
                                        </NavLink>
                                        <span className="tx-muted tx-11">
                                          17 Jan 22
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li className="mb-0">
                                  <div className="d-flex">
                                    <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                      <img
                                        src={Allimages("User5")}
                                        alt="avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                    <div className="flex-1 ms-3">
                                      <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                        Sylvia Trench
                                        <span className="tx-success">
                                          +$9,260
                                        </span>
                                      </p>
                                      <p className="mb-0 d-flex align-items-center justify-content-between">
                                        <NavLink
                                          to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                          className="tx-primary tx-11"
                                        >
                                          4 Invoices
                                        </NavLink>
                                        <span className="tx-muted tx-11">
                                          10 Jan 22
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </Tab>
                          <Tab eventKey="paid" title="Paid">
                            <ul className="list-unstyled mb-0 mt-3">
                              <li>
                                <div className="d-flex">
                                  <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                    <img
                                      src={Allimages("User4")}
                                      alt="avatar"
                                      className="rounded-circle"
                                    />
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                      Tiffany Case
                                      <span className="tx-danger">-$6,030</span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-primary tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        15 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex">
                                  <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                    <img
                                      src={Allimages("User5")}
                                      alt="avatar"
                                      className="rounded-circle"
                                    />
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                      Shady Tree
                                      <span className="tx-danger">-$5,800</span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-primary tx-11"
                                      >
                                        7 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        14 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="d-flex">
                                  <div className="avatar avatar-sm rounded-circle bg-gray-200">
                                    <span className="tx-muted font-weight-normal">
                                      KS
                                    </span>
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                      Kissy Suzuki
                                      <span className="tx-danger">
                                        -$42,000
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-primary tx-11"
                                      >
                                        2 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        13 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li className="mb-0">
                                <div className="d-flex">
                                  <div className="avatar avatar-sm rounded-circle bg-gray-200 shadow">
                                    <img
                                      src={Allimages("User11")}
                                      alt="avatar"
                                      className="rounded-circle"
                                    />
                                  </div>
                                  <div className="flex-1 ms-3">
                                    <p className="tx-14 font-weight-semibold mb-0 d-flex align-items-center justify-content-between">
                                      Henry Flex
                                      <span className="tx-danger">
                                        -$68,100
                                      </span>
                                    </p>
                                    <p className="mb-0 d-flex align-items-center justify-content-between">
                                      <NavLink
                                        to={`${import.meta.env.BASE_URL}pages/invoice/`}
                                        className="tx-primary tx-11"
                                      >
                                        7 Invoices
                                      </NavLink>
                                      <span className="tx-muted tx-11">
                                        11 Jan 22
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Widgets;
