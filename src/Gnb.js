import React from 'react'
import { styled } from 'styled-components'


// ------------------- 스타일

const Container = styled.div`
  display : flex;
  
`
const Logo = styled.div`
  img {
    width : 200px;
  }
`

const GnbMenu = styled.div`

`

const SearchBox = styled.div`

`

const LoginBox = styled.div`

`


const Gnb = () => {
  return (
    <Container>
      <Logo>
        <img src='https://contents.lotteon.com/search/brand/P6/89/5/P6895_320_320.jpg'></img>
      </Logo>
      <GnbMenu>
        <a href='#'>All</a>
        <a href='#'>New</a>
        <a href='#'>Outer</a>
        <a href='#'>Top</a>
        <a href='#'>Bottom</a>
      </GnbMenu>
      <SearchBox>
        <input type='text' placeholder='Search'></input>
      </SearchBox>
      <LoginBox>
        <span>Login</span>
      </LoginBox>
    </Container>
  )
}

export default Gnb
