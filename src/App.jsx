import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Navbar, Nav, Container, Row, Col,
} from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Forms from './forms/Forms';
import Lists from './lists/Lists';

const App = () => (
  <BrowserRouter>
    <main>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-top">
        <Navbar.Brand href="/">Mobile-First React</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <IndexLinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="forms">
              <Nav.Link>Forms</Nav.Link>
            </LinkContainer>
            <LinkContainer to="lists">
              <Nav.Link>Lists</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          <Col sm={3} md={2} className="sidebar">
            <Nav defaultActiveKey="/" className="flex-column">
              <IndexLinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </IndexLinkContainer>
              <LinkContainer to="forms">
                <Nav.Link>Forms</Nav.Link>
              </LinkContainer>
              <LinkContainer to="lists">
                <Nav.Link>Lists</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col
            sm={{ span: 9, offset: 3 }}
            md={{ span: 10, offset: 2 }}
            className="content"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/forms" component={Forms} />
            <Route exact path="/lists" component={Lists} />
          </Col>
        </Row>
      </Container>

    </main>
  </BrowserRouter>
);

export default App;
