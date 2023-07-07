import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';


const Container = styled.div`
  display : flex;
  justify-content : center;
  gap : 50px;
  padding : 100px;
`
const Img = styled.div`
  img {
    width : 600px;
  }
`

const Info = styled.div`
  padding-left : 50px;
  border-left : 1px solid #000;
  display: flex;
  flex-direction: column;
  gap : 12px;
`
const Brand = styled.div`
  margin-top : 50px;
  font-family: 'TheJamsil5Bold';
  font-size : 12px;
`
const Title = styled.div`
  font-size : 35px;
  font-family: 'TheJamsil5Bold';
`
const Price = styled.div`
  font-weight : 100;
  font-size : 18px;
  font-style: italic;
`
const Size = styled.div`
  margin-top : 12px;
    select {
      background: transparent;
      padding : 8px 20px;
      border : 1px solid #000;
      font-weight : bold;
    }
`

const ButtonBox = styled.div`
  display : flex;
  gap : 20px;
  margin-top : 12px;
    button {
      background: transparent;
      padding : 12px 80px;
      font-size : 18px;
      outline: none;
      border : 1px solid #000;
      transition: 0.3s;
    }
    button:last-child {
      background-color: #000;
      color : #fff;
    }
    button:hover {
      background-color: #ccc;
      color : #fff;
      border : 1px solid #ccc;
    }
`

const InfoText = styled.div`
  display : flex;
  flex-direction : column;
  gap : 45px;
`

const InfoTextTop =styled.div`
  margin-top : 45px;
  font-size : 25px;
  width : 500px;
`
const InfoTextMiddle =styled.div`
  font-size : 20px;
  font-weight : 100;
  font-style: italic;
`
const InfoTextBottom =styled.div`
  font-family: 'TheJamsil5Bold';
`

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hbs0133/shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) return <h1>Loading</h1>;
  return (
    <Container>
      <Img>
        <img src={product.img} />
      </Img>
      <Info>
        <Brand>Raf Simons</Brand>
        <Title>{product.title}</Title>
        <Price> &#8361;  {product.price}</Price>
        <Size>
          <select>
            {product.size.map((it) => <option>{it}</option>)}
          </select>
        </Size>
        <ButtonBox>
          <button>Buy</button>
          <button>Cart</button>
        </ButtonBox>
        <InfoText>
          <InfoTextTop>
            Soft jacquard-woven beach towel with iconic blown-up Raf Simons label design.Comes in two colorways: black-yellow and light blue-navy.
          </InfoTextTop>
          <InfoTextMiddle>
            Length: 180 cm<br />
            Width: 100 cm
          </InfoTextMiddle>
          <InfoTextBottom>
            Price is exclusive import duties and taxes
            Free Shipping
          </InfoTextBottom>
        </InfoText>
      </Info>
    </Container>
  );
}

export default ProductDetail
