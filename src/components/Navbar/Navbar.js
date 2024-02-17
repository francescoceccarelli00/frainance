import React, { useState } from 'react';
import style from './Navbar.module.css'
import logo from '../../assets/images/logo.png'
import {
    Collapse,
    Nav,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';
import Research from '../Research/Research';

const Navbarre = (props) => {

    const {navItems} = props;
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const itemList = navItems.map((item) => {
        return (
            <NavItem key = {item.url} className={style.navItem}>
                <RouterLink
                    exact={item.exact}
                    to={item.url}
                    activeClassName={style.active} 
                    className='nav-link'
                >
                    {item.text}
                </RouterLink>
            </NavItem> 
        )
    });

    

  return (
    // <div className={style.navBar}>
    //     <Navbar expand="md" full light>
    //         <div className='container'>
    //             <NavbarBrand>
    //                 <RouterLink to="/">
    //                     <img src={logo} style={{maxWidth:60}} alt='logo frainance copiato da binance'/>
    //                 </RouterLink>
    //             </NavbarBrand>
    //             <NavbarToggler onClick={toggle}/>
    //             <Collapse isOpen={isOpen} navbar>
    //                 <Nav className='navbar-nav ms-auto gap-5' navbar>
    //                     {itemList}
    //                 </Nav>
    //             </Collapse>
    //         </div>
    //     </Navbar>
    // </div>


        // <nav className="navbar navbar-expand-md" style={{backgroundColor: '#F3BA2F'}} >
        //     <div className="container">
        //         <a className="navbar-brand" href="/"><img src={logo} style={{maxWidth:60}} alt='logo frainance copiato da binance' /></a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav ms-auto gap-5">
        //                 <a className="nav-link active" aria-current="page" href="/"><h2 className={style.h2}>Top 100</h2></a>
        //                 <a className="nav-link" href="/"><h2 className={style.h2}>Favourite</h2></a>
        //                 <a className="nav-link" href="/"><h2 className={style.h2}>My Wallet</h2></a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-md" style={{backgroundColor: '#F3BA2F'}} >
            <div className="container">
                <a className="navbar-brand" href="/"><img className='me-3' src={logo} style={{maxWidth:60}} alt='logo frainance copiato da binance' /></a>
                <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='navbar-nav ms-auto gap-5' navbar>
                            <NavItem>
                                <Research/>
                            </NavItem>
                            {itemList}
                        </Nav>
                    </Collapse>
            </div>
        </nav>
    
  );
}

export default Navbarre;