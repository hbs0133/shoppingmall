import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  justify-content: center;

`

const Container = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  height : 80vh;
`


const Logo = styled.div`
  img{
    width : 400px;
  }
`

const InputBox = styled.div`
  div{
    margin : 15px;
  }
  label{
    width : 90px;
  }
`
const ButtonBox = styled.div`
  button{
    border: none;
    outline: none;
    background: transparent;
    font-family: 'TheJamsil5Bold';
    padding : 20px;
    font-size : 20px;
  }
`

const Login = ({setLogin}) => {
const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setLogin(true);
    console.log(`로그인 완료`);
    navigate('/productAll')
  }

  return (
    <Wrap>
      <Container>
        <Logo>
          <img src='https://contents.lotteon.com/search/brand/P6/89/5/P6895_320_320.jpg'></img>
        </Logo>
        <InputBox>
          <div>
            <label>Email : </label>
            <input type='text' />
          </div>
          <div>
            <label>PassWord : </label>
            <input type='password'></input>
          </div>
        </InputBox>
        <ButtonBox>
          <button onClick={(e) => loginUser(e)}>Login</button>
        </ButtonBox>
      </Container>
    </Wrap>
  )
}

export default Login
