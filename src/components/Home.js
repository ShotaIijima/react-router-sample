import React from 'react'
import { Link } from 'react-router-dom'
import {
    Panel,
    Button,
    Grid,
    Col,
    Row,
    ButtonToolbar,
    ButtonGroup
} from 'react-bootstrap'

const Home = () => (
    <div>
        <h2>Home</h2>
        <h3>React Routerのサンプルページです。</h3>
        <hr />
        <p>下記メニュー画面から各コンポーネントに遷移します</p>
        <Grid>
            <Row className="show-grid">
                <Col md={2} />
                <Col xs={12} md={8}>
                    <Panel bsStyle="danger">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">メニュー</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <ButtonToolbar>
                                <ButtonGroup bsSize="large">
                                    <Link to='/'><Button>Home</Button></Link>
                                    <Link to='/stopwatch'><Button>Stopwatch</Button></Link>
                                    <Link to='/todo'><Button>Todo</Button></Link>
                                    <Link to='/any'><Button>Any</Button></Link>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col md={2} />
            </Row>
        </Grid>
    </div>
)

export default Home