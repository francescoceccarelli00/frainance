import React from 'react'
import MainTemplate from '../../components/MainTemplate/MainTemplate'
import Home from '../Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourite from '../Favourite/Favourite'
import MyWallet from '../MyWallet/MyWallet'
import CryptoDetails from '../CryptoDetails/CryptoDetails'

function App() {

  const nav =[
    {url:"/top100", text:"Top100"},
    {url:"/favourite", text:"Favourite"},
    {url:"/mywallet", text:"MyWallet"}
  ];

  return (
    <BrowserRouter>
      <MainTemplate 
        footerCourseName1="Applicazioni Web 2023/2024"
        footerCourseName2="Francesco Ceccarelli"
        footerCourseLink1="https://elearning.unimib.it/course/info.php?id=51512"
        navItems={nav}
      >
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='favourite' element={<Favourite/>}/>
          <Route path='/mywallet' element={<MyWallet/>}/>
          <Route path='/top100' element={<CryptoDetails/>}>
            <Route path=':coinId' element={<CryptoDetails/>}/>
          </Route>
        </Routes>
      </MainTemplate>
    </BrowserRouter>

  )
}

export default App