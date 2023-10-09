import { Container, Row, Col, ListGroup} from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {Home,Products,Categories,AddProduct} from './Components/index'
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Row>
          <Col xs={12}>
            <h1 style={{ textAlign: 'center' }}>Header</h1>
          </Col>
        </Row>
        <Row>
          {/* co dinh */}
          <Col xs={12} md={2}>
            <ListGroup>
              <ListGroup.Item><Link  to={'/'} style={{textDecoration:'none'}}>Home</Link></ListGroup.Item>
              <ListGroup.Item><Link to={'/Categories'} style={{textDecoration:'none'}} >Categories</Link></ListGroup.Item>
              <ListGroup.Item><Link to={'/Products'} style={{textDecoration:'none'}}>Products</Link></ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={10}>
            <Routes >
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Categories' element={<Categories/>}></Route>
              <Route path='/Products' element={<Products/>}></Route>
              <Route path='/Products/Search' element={<Products/>}></Route>
              <Route path='/AddProduct' element={<AddProduct/>}></Route>
              <Route path='/Products/Delete' element={<Products/>}></Route>
              <Route path='/Products/Edit' element={<Products/>}></Route>
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
