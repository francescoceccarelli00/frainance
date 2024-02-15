import React from 'react'
import Footer from '../Footer/Footer'
import Navbarre from '../Navbar/Navbar'


function MainTemplate(props1) {

    const {
        children,
        footerCourseName1, footerCourseName2, footerCourseLink1,
        navItems
    } = props1

  return (
    <>
        <Navbarre 
            navItems={navItems}
        />
        {children}
        <Footer 
            courseName1 = {footerCourseName1}
            courseName2 = {footerCourseName2}
            courseLink1 = {footerCourseLink1}
        />
    </>
    
  )
}

export default MainTemplate