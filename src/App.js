import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import Gnb from './Component/Gnb';
import ProductAll from './Component/ProductAll';
import Login from './Component/Login';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Component/Main';
import Footer from './Component/Footer';
import ProductDetail from './Component/ProductDetail';
import PrivateRouter from './Component/PrivateRouter';


const Container = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard-Regular';
`

function App() {

  const [login, setLogin] = useState(false);
  console.log(login);

  useEffect(() => {
    console.log(`로그인`, login);
  }, [login])

  return (
    <Container>
      <Gnb />
      <Routes>
        <Route path='/' element={ <Main />}/>
        <Route path='/productAll' element={<PrivateRouter login={login} />}/>
        <Route path='/login' element={ <Login setLogin={setLogin} />} />
        <Route path='/ProductAll/ProductDetail/:id'
          element ={<ProductDetail />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
