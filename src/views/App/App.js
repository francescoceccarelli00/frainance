import React from 'react'
import MainTemplate from '../../components/MainTemplate/MainTemplate'
import Home from '../Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CryptoDetails from '../CryptoDetails/CryptoDetails'
import Top100 from '../Top100/Top100'
import NotFound from '../NotFound/NotFound'

function App() {

  const nav =[
    {url:"/", text:"Home"},
    {url:"/top100", text:"Top 100", exact: false},
    // {url:"/favourite", text:"Documentation"}
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
          <Route path='/top100' element={<Top100/>}/>
          <Route path='/top100/:cryptoId' element={<CryptoDetails/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </MainTemplate>
    </BrowserRouter>

  )
}

export default App