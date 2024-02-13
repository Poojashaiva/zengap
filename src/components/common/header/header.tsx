import { Fragment, useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Modal,
  Row,
  Col,
  Dropdown,
  Form,
} from "react-bootstrap";
import logowhite from "../../../assets/img/brand/logo-white.png";
import logowhite1 from "../../../assets/img/brand/logo-white-1.png";
import { Link, NavLink } from "react-router-dom";
import Allimages from "../imagesdata/imagesdata";
import { ThemeChanger } from "../../../redux/action";
import { connect } from "react-redux";
import store from "../../../redux/store";

function Header({ local_varaiable, ThemeChanger, }: { local_varaiable: any; ThemeChanger: any; }) {
  const [Lang, setLang] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const elem: any = document.documentElement;
  const theme :any = local_varaiable;

  const handleFullscreen = () => {
    switch (isFullscreen) {
      case false:
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
        setIsFullscreen(true);
        break;
      case true:
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.exitFullscreen) {
          /* Safari */
          document.exitFullscreen();
        } else if (document.exitFullscreen) {
          /* IE11 */
          document.exitFullscreen();
        }
        setIsFullscreen(false);
        break;
    }
  };
  function Swicherbutton() {
    let Demochnager = document.querySelector(".demo_changer") as HTMLElement;
    Demochnager.classList.toggle("active");
    Demochnager.style.insetInlineEnd = "0px";
  }
  const openCloseSidebar = () => {
    const theme :any = store.getState();
    console.log("theme",theme);
    ThemeChanger({...theme, body:{'class' : theme.body.class.includes('sidenav-toggled') ? "main-body app sidebar-mini index" : "main-body app sidebar-mini index sidenav-toggled" }})
    console.log("theme",theme);
    
    // document.body.classList.toggle("sidenav-toggled");
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        const body = document.querySelector("body");
        const innerWidth = window.innerWidth;
        if (body !== null) {
          // Check if body is not null
          if (innerWidth >= 992) {
            document.querySelector("body")?.classList.toggle("992");
            document
              .querySelector("body")
              ?.classList.remove("main-sidebar-show");
          } else {
            document.querySelector("body")?.classList.toggle("sidebar-gone");
            document.querySelector("body")?.classList.remove("sidenav-toggled");
          }
        }
      }
    });
  }, []);
  //rightside
  const Rightsidebar = () => {
    document.querySelector(".sidebar-right")?.classList.add("sidebar-open");
  };

  // responsivesearch
  const responsivesearch = () => {
    document.querySelector(".navbar-form")?.classList.toggle("active");
  };
  return (
    <Fragment>
      <Navbar
        className="main-header side-header sticky nav nav-item"
        style={{ marginBottom: "-63px" }}
      >
        <div className={`main-container ${theme.datalayout == 'horizontal' ? 'container' : 'container-fluid'} px-3`}>
          <div className="main-header-left">
            <div className="responsive-logo">
              <Link
                to={`${import.meta.env.BASE_URL}dashboard/index/`}
                className="header-logo"
              >
                <img
                  src={logowhite}
                  className="mobile-logo dark-logo-1"
                  alt="logo"
                />
                <img
                  src={logowhite1}
                  className="mobile-logo-1 dark-logo-1"
                  alt="logo"
                />
              </Link>
            </div>
            <div
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              onClick={() => openCloseSidebar()}
            >
              <a className="open-toggle" >
                <i className="header-icon fe fe-align-left"></i>
              </a>
              <a className="close-toggle" >
                <i className="header-icon fe fe-x"></i>
              </a>
            </div>
            <div className="logo-horizontal">
              <Link
                to={`${import.meta.env.BASE_URL}dashboard/index/`}
                className="header-logo"
              >
                <img
                  src={logowhite}
                  className="mobile-logo dark-logo-1"
                  alt="logo"
                />
                <img
                  src={logowhite1}
                  className="mobile-logo-1 dark-logo-1"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="main-header-center ms-4 d-sm-none d-md-none d-lg-block form-group">
              <Form.Control
                className="form-control"
                placeholder="Search..."
                type="search"
              />

              <Button className="btn br-te-4 br-be-4" variant="default border-0">
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </div>
          <div className="main-header-right">
            <Navbar.Toggle
              className="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
              type="button"
            >
              <span className="navbar-toggler-icon fe fe-more-vertical"></span>
            </Navbar.Toggle>
            <div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
              <Navbar.Collapse className="collapse ">
                <ul className="nav nav-item header-icons navbar-nav-right">
                  <li className="dropdown nav-item">
                    <Link
                      className="new nav-link"
                      data-bs-target="#country-selector"
                      data-bs-toggle="modal"
                      to="#"
                      onClick={() => setLang(true)}
                    >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                      >
                        <title>Language</title>
                        <path
                          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        />
                        <path
                          d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        />
                        <path
                          d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 48v416M464 256H48"
                        />
                      </svg>
                    </Link>
                    <Modal
                      show={Lang}
                      onHide={() => setLang(false)}
                      centered
                      id="country-selector"
                    >
                      <Modal.Header closeButton>
                        <h6 className="modal-title">Choose Country</h6>
                      </Modal.Header>
                      <Modal.Body className="pb-0">
                        <Row as="ul" className=" p-3 mb-0">
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block active"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Usflag")}
                                  className="me-3 language"
                                />
                              </span>
                              Usa
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2 mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Italy")}
                                  className="me-3 language"
                                />
                              </span>
                              Italy
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Spain")}
                                  className="me-3 language"
                                />
                              </span>
                              Spain
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("India")}
                                  className="me-3 language"
                                />
                              </span>
                              India
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("French")}
                                  className="me-3 language"
                                />
                              </span>
                              France
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Mexico")}
                                  className="me-3 language"
                                />
                              </span>
                              Mexico
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Singapore")}
                                  className="me-3 language"
                                />
                              </span>
                              Singapore
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Poland")}
                                  className="me-3 language"
                                />
                              </span>
                              Poland
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Austria")}
                                  className="me-3 language"
                                />
                              </span>
                              Austria
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Russia")}
                                  className="me-3 language"
                                />
                              </span>
                              Russia
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Germany")}
                                  className="me-3 language"
                                />
                              </span>
                              Germany
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Argentina")}
                                  className="me-3 language"
                                />
                              </span>
                              Argentina
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Brazil")}
                                  className="me-3 language"
                                />
                              </span>
                              Brazil
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Uae")}
                                  className="me-3 language"
                                />
                              </span>
                              U.A.E
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("China")}
                                  className="me-3 language"
                                />
                              </span>
                              China
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Uk")}
                                  className="me-3 language"
                                />
                              </span>
                              U.K
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Malaysia")}
                                  className="me-3 language"
                                />
                              </span>
                              Malaysia
                            </Link>
                          </Col>
                          <Col lg={6} as="li" className="mb-2">
                            <Link
                              to="#"
                              className="btn btn-country btn-lg btn-block"
                            >
                              <span className="country-selector">
                                <img
                                  alt=""
                                  src={Allimages("Canada")}
                                  className="me-3 language"
                                />
                              </span>
                              Canada
                            </Link>
                          </Col>
                        </Row>
                      </Modal.Body>
                    </Modal>
                  </li>
                  <Dropdown className="dropdown nav-item  main-header-shop">
                    <Dropdown.Toggle
                      className="new nav-link no-caret"
                      variant="default"
                      data-bs-toggle="dropdown"
                      
                    >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                      >
                        <title>Cart</title>
                        <circle
                          cx="176"
                          cy="416"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <circle
                          cx="400"
                          cy="416"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M48 80h64l48 272h256"
                        />
                        <path
                          d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                      </svg>
                      <span className="badge bg-secondary-transparent tx-secondary header-badge">
                        2
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <div className="p-3 text-start border-bottom">
                        <div className="d-flex align-items-center">
                          <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                            Shopping Cart
                          </h6>
                          <Link
                            to={`${import.meta.env.BASE_URL
                              }pages/e-commerce/cart/`}
                            className="btn btn-sm ms-auto my-auto float-end tx-13"
                          >
                            View All
                          </Link>
                        </div>
                        <p className="mb-0 font-weight-semibold tx-muted tx-12">
                          Total items: 2
                        </p>
                      </div>
                      <ul className="list-unstyled main-message-list shopping-scroll">
                        <li className="mb-0 pos-relative">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
                              className="masked-link"
                            ></Link>
                            <div className="avatar-lg">
                              <img
                                src={Allimages("Ecomerce2")}
                                alt="img"
                                className="radius-4"
                              />
                            </div>
                            <div className="flex-1 ms-2">
                              <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                Bluetooth Earbuds
                              </p>
                              <div className="d-flex justify-content-between">
                                <div className="mt-1">
                                  <p className="mb-0 tx-default tx-12">
                                    <span className="me-1 tx-muted">
                                      Color:
                                    </span>
                                    Blue
                                  </p>
                                  <p className="mb-0 tx-default tx-12">
                                    <span className="me-1 tx-muted">
                                      Quantity:
                                    </span>
                                    2
                                  </p>
                                </div>
                                <p className="mb-0 font-weight-semibold tx-14 align-self-end">
                                  Price:
                                  <span className="tx-secondary">$23</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="pos-absolute t-10 r-10">
                            <a href="#;" className="tx-muted">
                              <i className="fe fe-trash-2 tx-danger tx-15"></i>
                            </a>
                          </div>
                        </li>
                        <li className="mb-0 pos-relative">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL
                                }pages/e-commerce/cart/`}
                              className="masked-link"
                            ></Link>
                            <div className="avatar-lg">
                              <img
                                src={Allimages("Ecomerce4")}
                                alt="img"
                                className="radius-4"
                              />
                            </div>
                            <div className="flex-1 ms-2">
                              <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                              Modern chair
                              </p>
                              <div className="d-flex justify-content-between">
                                <div className="mt-1">
                                  <p className="mb-0 tx-default tx-12">
                                    <span className="me-1 tx-muted">
                                      Color:
                                    </span>
                                    Pink
                                  </p>
                                  <p className="mb-0 tx-default tx-12">
                                    <span className="me-1 tx-muted">
                                      Quantity:
                                    </span>
                                    1
                                  </p>
                                </div>
                                <p className="mb-0 font-weight-semibold tx-14 align-self-end">
                                  Price:
                                  <span className="tx-secondary">$12</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="pos-absolute t-10 r-10">
                            <a href="#;" className="tx-muted">
                              <i className="fe fe-trash-2 tx-danger tx-15"></i>
                            </a>
                          </div>
                        </li>


                      </ul>
                      <div className="text-center dropdown-footer">
                        <NavLink
                          className=" btn-block text-center"
                          to={`${import.meta.env.BASE_URL
                            }pages/e-commerce/checkout/`}
                        >
                          Proceed to checkout
                        </NavLink>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown nav-item  main-header-message">
                    <Dropdown.Toggle
                      className="new nav-link no-caret"
                      variant="default"
                      data-bs-toggle="dropdown"
                      
                    >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                      >
                        <title>Messages</title>
                        <rect
                          x="48"
                          y="96"
                          width="416"
                          height="320"
                          rx="40"
                          ry="40"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M112 160l144 112 144-112"
                        />
                      </svg>
                      <span className="badge bg-secondary-transparent tx-secondary header-badge">
                        5
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <div className="p-3 text-start border-bottom">
                        <div className="d-flex align-items-center">
                          <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                            Messages
                          </h6>
                          <Link
                            to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                            className="btn btn-sm ms-auto my-auto float-end tx-13"
                          >
                            View All
                          </Link>
                        </div>
                        <span className="tx-muted tx-11">
                          You have 5 unread messages
                        </span>
                      </div>
                      <ul className="list-unstyled main-message-list chat-scroll overflow-auto">
                        <li className="mb-0">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                              className="masked-link"
                            ></Link>
                            <div className="mg-e-10">
                              <span className="avatar-sm">
                                <img
                                  alt=""
                                  src={Allimages("User5")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                  Socrates Itumay
                                </p>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 hr
                                </span>
                              </div>
                              <p className="mb-0 tx-12 tx-muted">
                                Consetetur sanctus consetetur amet amet stet,.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-0">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                              className="masked-link"
                            ></Link>
                            <div className="mg-e-10">
                              <span className="avatar-sm avatar-status">
                                <img
                                  alt=""
                                  src={Allimages("User1")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                  Sadipscing Et
                                </p>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  1 D
                                </span>
                              </div>
                              <p className="mb-0 tx-12 tx-muted">
                                Accusam amet ea voluptua labore ipsum.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-0">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                              className="masked-link"
                            ></Link>
                            <div className="mg-e-10">
                              <span className="avatar-sm avatar-status">
                                <img
                                  alt=""
                                  src={Allimages("User9")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                  Ea Labore
                                </p>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 D
                                </span>
                              </div>
                              <p className="mb-0 tx-12 tx-muted">
                                Diam ea nonumy kasd eirmod sed..
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-0">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                              className="masked-link"
                            ></Link>
                            <div className="mg-e-10">
                              <span className="avatar-sm">
                                <img
                                  alt=""
                                  src={Allimages("User8")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                  Kasd Ipsum
                                </p>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  1 W
                                </span>
                              </div>
                              <p className="mb-0 tx-12 tx-muted">
                                Et diam aliquyam ut dolor labore consetetur.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="mb-0">
                          <div className="d-flex pd-x-13 py-2 pos-relative">
                            <Link
                              to={`${import.meta.env.BASE_URL}app/mail/chat/`}
                              className="masked-link"
                            ></Link>
                            <div className="mg-e-10">
                              <span className="avatar-sm">
                                <img
                                  alt=""
                                  src={Allimages("User6")}
                                  className="rounded-circle"
                                />
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex-between mb-1">
                                <p className="mb-0 tx-default tx-13 font-weight-semibold mb-0">
                                  Eirmod Emet
                                </p>
                                <span className="tx-muted tx-11 align-self-start min-w-fit-content">
                                  2 W
                                </span>
                              </div>
                              <p className="mb-0 tx-12 tx-muted">
                                Est sea accusam no ea sea ea.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="text-center dropdown-footer">
                        <a className=" btn-block text-center" >
                          MARK ALL AS READ
                        </a>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="dropdown nav-item main-header-notification d-flex">
                    <Dropdown.Toggle
                      className="new nav-link no-caret"
                      variant="default"
                      
                      data-bs-toggle="dropdown"
                    >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                      >
                        <title>Shortcuts</title>
                        <path
                          d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <div className="p-3 text-start border-bottom">
                        <div className="d-flex align-items-center">
                          <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                            Shortcuts
                          </h6>
                          <ul className="ah-actions actions align-items-center ms-auto d-flex">
                            <li>
                              <a  className="header-icon-svgs">
                                <i className="fe fe-edit"></i>
                              </a>
                            </li>
                            <li>
                              <a  className="header-icon-svgs">
                                <i className="fe fe-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <span className="tx-muted tx-11">
                          At nonumy duo dolores ipsum.
                        </span>
                      </div>
                      <ul className="list-unstyled main-shortcut-list text-center p-2">
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL}app/calendar/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="calendar"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>calendar</title>
                              <rect
                                x="48"
                                y="80"
                                width="416"
                                height="384"
                                rx="48"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL}app/contacts/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="contacts"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>contacts</title>
                              <path
                                d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                              />
                              <path
                                d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL
                              }app/filemanagers/filemanager/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="file-manager"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>file-manager</title>
                              <path
                                d="M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h75.89a40 40 0 0122.19 6.72l27.84 18.56a40 40 0 0022.19 6.72H440a40 40 0 0140 40v240a40 40 0 01-40 40zM32 192h448"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL}app/mail/inbox/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="mail"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>mail</title>
                              <rect
                                x="48"
                                y="96"
                                width="416"
                                height="320"
                                rx="40"
                                ry="40"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M112 160l144 112 144-112"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/gallery/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="gallery"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>gallery</title>
                              <rect
                                x="48"
                                y="80"
                                width="416"
                                height="352"
                                rx="48"
                                ry="48"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <circle
                                cx="336"
                                cy="176"
                                r="32"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit="10"
                                strokeWidth="32"
                              />
                              <path
                                d="M304 335.79l-90.66-90.49a32 32 0 00-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0143.11-2L464 368"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL}pages/blog/blog/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="blog"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>blog</title>
                              <path
                                d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
                              />
                              <path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL
                              }pages/e-commerce/shop/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="shop"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>shop</title>
                              <circle
                                cx="176"
                                cy="416"
                                r="16"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <circle
                                cx="400"
                                cy="416"
                                r="16"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M48 80h64l48 272h256"
                              />
                              <path
                                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                            </svg>
                          </Link>
                        </li>
                        <li className="d-inline-block m-1">
                          <Link
                            to={`${import.meta.env.BASE_URL
                              }pages/form/formelements/`}
                            className="p-3 dropdown-item border radius-4"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="forms"
                          >
                            <svg
                              className="ionicon header-icon-svgs"
                              viewBox="0 0 512 512"
                            >
                              <title>forms</title>
                              <path
                                d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                              <path
                                d="M256 56v120a32 32 0 0032 32h120"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                      <div className="dropdown-footer">
                        <Link
                          to={`${import.meta.env.BASE_URL}app/calendar/`}
                          className="btn btn-outline-primary btn-block"
                          id="openAllBtn"
                        >
                          OPEN ALL
                        </Link>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                  <li className="nav-item full-screen fullscreen-button">
                    <a className="new nav-link full-screen-link" >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                        onClick={handleFullscreen}
                      >
                        <title>Full Width</title>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="dropdown right-toggle">
                    <a
                      className="new nav-link nav-link pe-0"
                      data-bs-toggle="sidebar-right"
                      onClick={Rightsidebar}
                      data-bs-target=".sidebar-right"
                    >
                      <svg
                        className="ionicon header-icon-svgs"
                        viewBox="0 0 512 512"
                      >
                        <title>Side Menu</title>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M80 160h352M80 256h352M80 352h352"
                        />
                      </svg>
                      <span className="pulse"></span>
                    </a>
                  </li>
                  <li className="nav-link search-icon d-lg-none d-block p-0">
                    <Form
                      className="navbar-form"
                      role="search"
                      onClick={() => responsivesearch()}
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="input-group-btn">
                          <Button
                            variant=""
                            type="reset"
                            className="btn btn-default"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                          <Button
                            variant="secondary"
                            className="btn btn-default nav-link resp-btn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              className="header-icon-svgs"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                          </Button>
                        </span>
                      </div>
                    </Form>
                  </li>

                  <Dropdown className=" main-profile-menu nav nav-item nav-link ps-lg-2 m-0">
                    <Dropdown.Toggle
                      className="new nav-link profile-user rounded-circle shadow d-flex no-caret"
                      variant=""
                    >
                      <img
                        alt=""
                        src={Allimages("User11")}
                        className="rounded-circle"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="bg-primary p-3 br-ts-5 br-te-5 ">
                        <div className="d-flex wd-100p">
                          <div className="avatar">
                            <img
                              alt="avatar"
                              className="rounded-circle"
                              src={Allimages("User11")}
                            />
                          </div>
                          <div className="ms-3 my-auto">
                            <h6 className="tx-15 text-black font-weight-semibold mb-0">
                              Json Taylor
                            </h6>
                            <span className="text-black op-8 tx-11">
                              Web Designer
                            </span>
                          </div>
                        </div>
                      </div>
                      <Dropdown.Item
                        className="dropdown-item"
                        href={`${import.meta.env.BASE_URL}pages/profilepage/ `}
                      >
                        <i className="fe fe-user"></i>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href={`${import.meta.env.BASE_URL}app/mail/inbox/`}
                      >
                        <i className="fe fe-mail"></i>
                        Inbox
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href={`${import.meta.env.BASE_URL}pages/settings/`}
                      >
                        <i className="fe fe-settings"></i>
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href={`${import.meta.env.BASE_URL
                          }pages/authentication/signup/`}
                      >
                        <i className="fe fe-power"></i>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </Navbar.Collapse>
            </div>
            <div className="d-flex">
              <a
                className="switcher-icon new nav-link "
                href="#;"
                onClick={() => Swicherbutton()}
              >
                <svg
                  className="ionicon header-icon-svgs fa-spin"
                  viewBox="0 0 512 512"
                >
                  <title>Switcher</title>
                  <path
                    d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Navbar>
      <div className="jumps-prevent" style={{ paddingTop: 63 }}></div>
    </Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Header);