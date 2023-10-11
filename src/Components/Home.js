import { Container, Row, Col, Button, Form, Table, Navbar } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function Home() {
    return (
        <Container>
                <Row >
                    <Col xs={12} md={2} className='mt-3'>
                        <Form.Group className="mb-3">
                            <Form.Label><h4>Filter by: Brand </h4></Form.Label>
                            <div className="p-2">
                                <Form.Check

                                    label="Apple"
                                    name="Apple"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Samsung"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Samsung"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Oppo"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Huawei"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Microsoft Surface"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                                <Form.Check

                                    label="Infinix"
                                    name="Samsung"
                                    type="radio"
                                    id='Status'
                                />
                            </div>

                        </Form.Group>
                    </Col>
                    <Col xs={12} md={10}>
                        <Row className="text-center mt-3 mb-3">
                            <h1>List of Product</h1>
                        </Row>
                        <Row>
                            <Form className="d-flex  justify-content-center">
                                <Form.Control
                                    type="search"
                                    placeholder="Enter title to search..."
                                    className="me-2 w-50"
                                    aria-label="Search"
                                />
                            </Form>
                        </Row>
                        <Row>
                            <Col xs={12} md={10}>
                            </Col>
                            <Col xs={12} md={2} className='mt-3 mb-3'>
                                <Button>
                                    <Link to={'/AddProduct'} style={{ color: '#FFF', textDecoration: 'none' }}>Create Product</Link>
                                </Button>
                            </Col>
                        </Row>
                        <Row className='mx-4 my-4'>
                            <Table >
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Brand</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Iphone 9</td>
                                        <td>An apple mobile which is nothing like apple</td>
                                        <td>549</td>
                                        <td>12,96 </td>
                                        <td>Apple</td>
                                        <td>smartphones</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Iphone X</td>
                                        <td>An apple mobile which is nothing like apple</td>
                                        <td>899</td>
                                        <td>17,94 </td>
                                        <td>Apple</td>
                                        <td>smartphones</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>    
                        </Row>
                    </Col>
                </Row>
            
        </Container >
    );
}

export default Home;
