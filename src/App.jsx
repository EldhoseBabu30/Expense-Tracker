import styled from "styled-components";
import Tracker from "./components/Tracker/Tracker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";




const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Set the minimum height of the viewport */
`;

const Content = styled.div`
  flex: 1; /* This will make the content take up the available space */
`;

const FooterContainer = styled.div`
  margin-top: auto; /* Push the footer to the bottom of the container */
`;
const App = () => {
  return (
    <BrowserRouter >
    <Header/>
    <Main>
    <Routes>
    <Route path='/landing-page' element={<LandingPage/>}/>

      <Route path='/home' element={<Tracker/>}/>
     
      <Route path='/' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

    </Routes>
   <Footer/>

     
    </Main>
    </BrowserRouter>
  );
};

export default App;
