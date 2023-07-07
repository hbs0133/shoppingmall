import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';

const Wrap = styled.div`
  margin : 100px 0;
`

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/hbs0133/shoppingmall/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Wrap>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
            ))}
        </Row>
      </Container>
    </Wrap>
  )
}

export default ProductAll
