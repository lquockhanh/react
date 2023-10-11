import { Container, Row, Col, Button, Form, Table, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import AddProduct from './AddProduct';
function Header() {
    return (
        <Container>
            <BrowserRouter>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ textAlign: 'center' }}>Front end web development with React</h1>
                    </Col>
                </Row>
                <Row >
                    <Navbar className="bg-body-tertiary">
                        <Navbar.Brand><Link to="/Home">Home</Link></Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar>
                </Row>
                <Row>
                    <Routes >
                        <Route path='/Home' element={<Home />}></Route>
                        <Route path='/AddProduct' element={<AddProduct />}></Route>
                    </Routes>
                </Row>

            </BrowserRouter>
        </Container >
    );
}

export default Header;
