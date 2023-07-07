import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'


const Container = styled.div`
  font-family: 'Pretendard-Regular';
  display: flex;
  flex-direction: column;
  gap : 5px;
  img{
    width: 300px;
  }
`
const Brand = styled.div`
  font-size : 20px;
  text-align: center;
  font-family: 'TheJamsil5Bold';
`
const Season = styled.div`
  font-size : 14px;
  text-align: center;
  font-weight: bold;
  border-bottom : 1px solid #000;
  padding-bottom : 8px;
`

const Title = styled.div`
  font-size : 16px;
  font-weight: 600;
  margin-top : 5px;
`

const Price = styled.div`
  font-size : 14px;
`
const New = styled.div`
  padding-bottom: 10px;
  font-size : 5px;
`

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`productDetail/${item.id}`)
  };
  return (
    <Container onClick={showDetail}>
      <img src={item.img} />
      <Brand>Raf Simons</Brand>
      <Season>`21 Spring/Summer</Season>
      <Title>{item.title}</Title>
      <Price> &#8361; {item.price}</Price>
      <New>{item.new == true ? 'New' : ''}</New>
    </Container>
  );
};

export default ProductCard
