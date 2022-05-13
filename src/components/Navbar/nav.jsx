import React, {useState, useEffect} from 'react'
import { ButtonContainer } from '../button';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../context'

const Nav = () => {
    const [navback, setNavback] = useState(false)
    const changeNavBack = () => {
        if(window.scrollY > 60) {
            setNavback(true)
        }
        else {
            setNavback(false)
        }
    }
    useEffect(() => {
        changeNavBack()
        window.addEventListener('scroll', changeNavBack)
    })
    return ( 
        <nav className={`header navbar navbar-expand-lg ${navback ? 'sticky' : ''}`}>
          <ProductConsumer>
           {value => {
               return(
             <div className="container-fluid ">      
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle" >
                   <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="toggle">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <Link className={`nav-link me-4 ${navback ? 'sticky' : ''}`} to='/home'>Home</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className={`nav-link ${navback ? 'sticky' : ''}`} to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${navback ? 'sticky' : ''}`} to='/productList'>Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="my-cart">
                   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" >  
                            <Link className="ms-auto" to='/myCart'>
                                <ButtonContainer className={`button ps-2 pe-4 ${navback ? 'sticky' : ''}`} style={{position: 'relative'}}>
                                <i className="fa fa-cart-plus me-1 ms-lg-1"></i>
                                <span className='count'>
                                    {value.itemsCount}
                                    </span>
                                Cart
                                </ButtonContainer>
                            </Link>
                        </li>
                    </ul>                  
                </div>
             </div>
            )}}
          </ProductConsumer>
        </nav>
    );
}
 
export default Nav;
