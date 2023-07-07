import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'


// ------------------- 스타일

const Container = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  gap : 200px;
  border-bottom : 1px solid #000;
  font-family: 'TheJamsil5Bold';
`
const Logo = styled.div`
  cursor : pointer;
  img {
    width : 250px;
  }
`

const GnbMenu = styled.div`
  display: flex;
  gap: 60px;
  &:hover a:not(:hover){
    scale : 0.8;
  }
  a{
    color : #000;
    text-decoration: none;
    font-size : 22px;
    transition: scale 0.3s;
    &:hover {
      scale : 1.2;
    }
  }
`

const SearchBox = styled.div`
  input{
    border: none;
    border-bottom : 2px solid #000;
    width : 100px;
    margin-left : 8px;
    &::placeholder{
      color : #000;
      font-family: 'Pretendard-Regular';
      font-size : 16px;
      font-weight : bold;
    }
    &:focus{
      outline : none;
    }
    &:focus::placeholder{
      opacity : 0;
    }
  }
`

const LoginBox = styled.div`
  font-family: 'Pretendard-Regular';
  cursor : pointer;
`


const Gnb = () => {
  const menuList = [
    `All`,
    `New`,
    `Outer`,
    `Top`,
    `Bottom`
  ] 
  
const search = (e) => {
  if(e.key === `Enter`){
    let searchWord = e.target.value;
    console.log(searchWord);
  }
}

const navigate = useNavigate()

  return (
    <Container>
      <Logo onClick={() => navigate('/')}>
        <img src='https://contents.lotteon.com/search/brand/P6/89/5/P6895_320_320.jpg'></img>
      </Logo>
      <GnbMenu>
        {menuList.map((menu) => (
          <a href='#'>{menu}</a>
        ))}
      </GnbMenu>
      <SearchBox>
        <input type='text' placeholder='Search' onKeyPress={search}></input>
      </SearchBox>
      <LoginBox onClick={() => navigate('/login')}>
        <span>Login</span>
      </LoginBox>
    </Container>
  )
}

export default Gnb
