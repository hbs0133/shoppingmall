import React from 'react'
import { styled } from 'styled-components';
import bg from '../Img/21ss.png'
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  height: 100vh;
  background: url(${bg}) center center no-repeat;
  background-size: cover;
  cursor : pointer;
`
const Main = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/productAll')}>
    </Container>
  )
}

export default Main
