import { Col, Container, Row, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
    return (
        <Container>
            <Row>
                <Col><h1>Product Management</h1></Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button>
                            <Link to={'/Products/Search'}></Link>Search
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="mb-2">
                    <Button>
                        <Link to={'/AddProduct'} style={{ color: '#FFF', textDecoration:'none' }}>Add new Product</Link>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th colSpan={2}>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>10</td>
                                <td>100</td>
                                <td>Category 1</td>
                                <td>Image</td>
                                <td>
                                    <Link to={'/Products/Edit/1'}>Edit</Link>
                                </td>
                                <td>
                                    <Link to={'/Products/Delete/1'}>Delete</Link>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}