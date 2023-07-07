import React from 'react'
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top : 1px solid #000;
`
const Logo = styled.div`

`
const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display : flex;
  }
`
const FooterTextTop = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom : 1px solid #000;
  padding-bottom : 8px;
  h5{
    font-weight : bold;
  }
`
const FooterTextBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top : 8px;
  h5{
    font-weight : bold;
  }
`


const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src='https://contents.lotteon.com/search/brand/P6/89/5/P6895_320_320.jpg'></img>
      </Logo>
      <FooterText>
        <FooterTextTop>
          <h5>Notice Cs Center </h5>
          <div>
            E-mail : hbs0133@naver.com<br/>
            Social : @h.b.sun_
          </div>
        </FooterTextTop>
        <FooterTextBottom>
          <h5>Agreement Policy Guides</h5>
          <div>
            Representative : Hwang Byeong Sun<br />
            Address :  Seoul, Republic of Korea <br />
            Corporate Registration Number : 010-2349-0133 <br />
            - Hwang
          </div>
        </FooterTextBottom>
      </FooterText>
    </Container>
  )
}

export default Footer
