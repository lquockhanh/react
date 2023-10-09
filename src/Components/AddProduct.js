import { Col, Container, FormControl, FormLabel, Row, Form, Button } from "react-bootstrap";
export default function AddProduct() {

    return (
        <Container>
            <Form >
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control required type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" >
                            <Form.Label>Name *</Form.Label>
                            <Form.Control required type="text" />

                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="number" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control required type="number" />

                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Categories</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option hidden>Choose Categories Here</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Created date</Form.Label>
                            <Form.Control required type="date" />

                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Categories</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option hidden>Choose Categories Here</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status </Form.Label>
                            <Form.Check type="radio">1</Form.Check>
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="submit">Add new</Button>
            </Form>

        </Container>
    )
}