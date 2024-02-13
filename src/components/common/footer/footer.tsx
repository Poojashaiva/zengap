import { Fragment } from 'react'
import { Col, Container } from 'react-bootstrap'


function Footer() {
    return (
        <Fragment>
            <div className="main-footer">
                <Col md={12} sm={12} className="text-center">
                    <Container fluid className=" pd-t-0 ht-100p">
                        Copyright © 2023 <a  className="tx-primary">zem</a>. Designed with <span className="fa fa-heart tx-danger"></span> by <a > Spruko </a> All rights reserved
                    </Container>
                </Col>

            </div>
        </Fragment>
    )
}

export default Footer