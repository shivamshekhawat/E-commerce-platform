import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import MainComp from './components/home/MainComp';
import Footer from './components/Footer/Footer.js';
import SignUp from './components/signup_sign/SignUp.js';
import Sign_in from './components/signup_sign/Sign_in.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    < Navbaar />
    < Newnav />
    <Routes>
      <Route path='/' element= {<MainComp />} />
      <Route path='/login' element= {<Sign_in />} />
      <Route path='/register' element= {<SignUp />} />
    </Routes>
   
    < Footer />
  
   
    </>
  );
}

export default App;
