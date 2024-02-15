import React from 'react'
import MainTemplate from '../../components/MainTemplate/MainTemplate'
import Home from '../Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourite from '../Favourite/Favourite'
import CryptoDetails from '../CryptoDetails/CryptoDetails'
import Top100 from '../Top100/Top100'

function App() {

  const nav =[
    {url:"/", text:"Home"},
    {url:"/top100", text:"Top 100", exact: false},
    {url:"/favourite", text:"Favourite"}
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
          <Route path='/favourite' element={<Favourite/>}/>
          <Route path='/top100' element={<Top100/>}/>
          <Route path='/top100/:cryptoId' element={<CryptoDetails/>}/>
        </Routes>
      </MainTemplate>
    </BrowserRouter>

  )
}

export default App