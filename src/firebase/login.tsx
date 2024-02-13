import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Alert, Tab, Nav, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { ThemeChanger } from '../redux/action';
import * as SwitcherData from "../components/common/switcher/switcherdata";
import { Helmet } from "react-helmet";
import { Allimages } from '../components/common/imagesdata/imagesdata';

import logo from '../assets/img/brand/favicon-white.png';

const Login = () => {
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "exozen@gmail.com",
        "password": "Exozen@123",
    });
    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };

    const navigate = useNavigate();

    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboard/index/`;
        navigate(path);
    };

    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); routeChange(); }).catch(err => { console.log(err); setError(err.message); });
    };

    const Login1 = () => {
        if (data.email === "exozen@gmail.com" && data.password === "Exozen@123") {
            routeChange();
        } else {
            setError("The Auction details did not Match");
            setData({
                "email": "exozen@gmail.com",
                "password": "Exozen@123",
            });
        }
    };

    useEffect(() => {
        SwitcherData.LocalStorageBackup(ThemeChanger);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <body className="ltr error-page1 bg-primary"></body>
            </Helmet>
            <div className="square-box"> </div>
            <div className="page bg-primary">
                <div className="page-single">
                    <div className="container" style={{ marginTop: "89px" }}>
                        <Row>
                            <Col lg={5} className="d-block mx-auto login-page">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                                    <Card>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="react">
                                                <div className="card-sigin">
                                                    <div className="main-card-signin d-md-flex">
                                                        <div className="wd-100p">
                                                        <div className="d-flex mb-4 justify-content-center">
                                                       <Link to="#">
                                                       <img
    src={logo}
    className="sign-favicon"
    alt="logo"
    style={{ width: '120px', height: '90px' }} // Adjust the width and height as needed
/>


                                                 </Link>
                                                      </div>

                                                            <div className="">
                                                                <div className="main-signup-header">
                                                                    {/* <h2>Welcome back!</h2> */}
                                                                    <h6 className="font-weight-semibold mb-4">
                                                                        Please sign in to continue.
                                                                    </h6>
                                                                    <div className="panel panel-primary">
                                                                        <div className=" tab-menu-heading mb-2 border-bottom-0">
                                                                            <div className="tabs-menu1">
                                                                                {err && <Alert variant="danger">{err}</Alert>}
                                                                                <Form>
                                                                                    <Form.Group className="form-group">
                                                                                        <Form.Label>Email</Form.Label>
                                                                                        <Form.Control
                                                                                            className="form-control"
                                                                                            placeholder="Enter your email"
                                                                                            name="email"
                                                                                            type='text'
                                                                                            value={email}
                                                                                            onChange={changeHandler}
                                                                                            required
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Form.Group className="form-group">
                                                                                        <Form.Label>Password</Form.Label>
                                                                                        <Form.Control
                                                                                            className="form-control"
                                                                                            placeholder="Enter your password"
                                                                                            name="password"
                                                                                            type='password'
                                                                                            value={password}
                                                                                            onChange={changeHandler}
                                                                                            required
                                                                                        />
                                                                                    </Form.Group>
                                                                                    <Button
                                                                                        variant=""
                                                                                        className="btn btn-primary btn-block"
                                                                                        onClick={Login1}
                                                                                    >
                                                                                        Sign In
                                                                                    </Button>
                                                                                    <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                                                 <a href="https://www.exozen.in/" target="_blank" className="btn btn-icon me-3" type="button">
                                                        <span className="btn-inner--icon">
                                                             www.exozen.in {/* Display the text before the icon */}
                                                        <i className="bx bx-globe tx-18 tx-prime"></i>
                                                                 </span>
                                                                         </a>
                                                      {/* Add other social media icons here */}
                                                                      </div>


                                                                                    <div className="main-signin-footer text-center mt-3">
                                                                                        <p>
                                                                                            <Link
                                                                                                to="#"
                                                                                                className="mb-3 text-primary"
                                                                                            >
                                                                                                Forgot password?
                                                                                            </Link>
                                                                                        </p>
                                                                                        <p>
                                                                                            Don't have an account ?{" "}
                                                                                            <Link
                                                                                                to=""
                                                                                                className="text-primary"
                                                                                            >
                                                                                                Create an Account
                                                                                            </Link>
                                                                                        </p>
                                                                                    </div>
                                                                                </Form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
