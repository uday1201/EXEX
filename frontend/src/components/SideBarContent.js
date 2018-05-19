import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-grid-system'
import { Link } from 'react-router-dom';

export default class SideBarContent extends Component {

    render() {
        return(
            <div fluid style={{ lineHeight: '32px' }}>
                <Row>
                    <Col>
                        <video width="400" controls style={{ width: '100%' }}>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={8}>
                            <h2> Some Title </h2>
                        </Col>
                        <Col sm={12} md={4}>
                            <h5> Fucking shit </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p
                                style={{
                                    maxHeight: '250px',
                                    overflowX: 'scroll'
                                }}
                            >
                                Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text. Some fuckingly great and motivating text.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center>
                                <Link to='/'> Read More </Link>
                            </center>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={6} offset={{ sm:6 }}>
                            <p
                                style={
                                    {
                                        float: 'right'
                                    }
                                }
                            >
                                Fucking Author
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}