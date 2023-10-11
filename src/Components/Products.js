import { Col, Container, Row, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product() {
    const ProductList = [
        {
            "id": 1,
            "name": "apple",
            "price": "10$",
            "quantity": "1",
            "categories": "1",
            "create-date": "19/8",
            "status": "Yes"
        },
        {
            "id": 2,
            "name": "pineapple",
            "price": "10$",
            "quantity": "1",
            "categories": "1",
            "create-date": "19/8",
            "status": "no"
        }
    ]
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
                        <Link to={'/AddProduct'} style={{ color: '#FFF', textDecoration: 'none' }}>Add new Product</Link>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th colSpan={2}>Function</th>
                            </tr>
                        </thead>


                        <tbody>
                            {
                                ProductList.map(({ id, name, price, quantity, categories, status }) => (
                                    <tr>
                                        <th>{id}</th>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        <td>{categories} </td>
                                        <td>{status}</td>
                                        <td>
                                            <Link to={'/Products/Edit'}>Edit</Link>
                                        </td>
                                        <td>
                                            <Link to={'/Products/Delete'}>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>


            </Row>
        </Container>
    )
}