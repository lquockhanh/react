import { Col, Container, FormControl, FormLabel, Row, Form, Button } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function AddProduct() {
    return (
        <Container>
            <Form id="addproductForm" >
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control disabled type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3required-label" >
                            <Form.Label>Title<span className="text-danger">(*)</span></Form.Label>
                            <Form.Control required type="text" id="Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3required-label" >
                            <Form.Label>Price<span className="text-danger">(*)</span></Form.Label>
                            <Form.Control required type="number" id="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3required-label" >
                            <Form.Label>Discount<span className="text-danger">(*)</span></Form.Label>
                            <Form.Control required type="number" id="Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3required-label" >
                            <Form.Label>Rating</Form.Label>
                            <Form.Control required type="text" id="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3required-label" >
                            <Form.Label>Stock</Form.Label>
                            <Form.Control required type="text" id="Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option hidden>Apple</option>
                                <option value="1">Samsung</option>
                                <option value="2">Oppo</option>
                                <option value="3">Huawei</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control required type="text" />

                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                            />

                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit">Add </Button>
                <Button type="reset" variant='secondary' className="m-2"><Link to={'/Home'} style={{ color: '#FFF', textDecoration: 'none' }}>Back to Home</Link></Button>


            </Form>
        </Container>
    )
}