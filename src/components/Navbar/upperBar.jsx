import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../Authentication/firebase/firebaseContext"
import styled from 'styled-components'
import { Alert } from "react-bootstrap"

const UpperBar = () => {
    const { currentUser: user, logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
        localStorage.clear();

      } catch {
        setError("Failed to log out")
      }
    }

    return ( 
        <nav className="navbar navbar-expand-lg p-0" style={{backgroundColor: 'var(--mainBlue)'}}>
            <div className="container-fluid px-xs-1 px-sm-3 px-md-3 px-lg-5">
                <Link className="navbar-brand p-0" to='/home'>
                    <LogoImg src='phones/logo.png' alt='img not found' />
                </Link>
                <div className="collapse navbar-collapse" >
                    <div className="navbar-nav m-auto mb-2 mb-lg-0">
                        <form className="d-flex" style={{width: '500px'}}>
                            <input className="form-control me-2" type="search" placeholder="Search Not Available yet" />
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle me-2"
                               href="/#" 
                               id="navbarDropdown" 
                               data-bs-toggle="dropdown"
                               style={{color:'var(--mainWhite)'}}>
                                All Categories
                            </a>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="/#">Apple</a></li>
                                <li><a className="dropdown-item" href="/#">Huawei</a></li>
                                <li><a className="dropdown-item" href="/#">Showme</a></li>
                                <li><a className="dropdown-item" href="/#">Oppo</a></li>
                                <li><a className="dropdown-item" href="/#">Sumsung</a></li>
                            </ul>
                            </li>
                            {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
                            <button className="btn btn-outline-light">Search</button>
                        </form> 
                    </div>
                </div>
                <div className="nav-item ms-auto">
                    {
                        (user) ?
                          <div className='dropdown'>
                            <a className="nav-link" href="#" id="navbarDropdown" data-bs-toggle="dropdown">
                                <UserIcon className="fa fa-user"></UserIcon>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">your profile</a></li>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <li onClick={handleLogout}><a className="dropdown-item" href="#">Logout 
                                           <i className="fa fa-sign-out ms-2" aria-hidden="true" style={{color: 'darkorange'}}></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        :
                        <Link className="nav-link d-inline-block" to='/login' style={{color:'var(--mainWhite)'}}>
                            Login
                            <i className='fa fa-sign-in ms-1'
                                style={{color:'var(--mainWhite)'}}
                                ></i>
                        </Link>
                    }
                </div>                 
            </div>
        </nav>
     );
}
 
export default UpperBar;

const LogoImg = styled.img`
    width: 100px;
    height: 100px;
    @media (max-width: 500px) {
        width: 70px;
        height: 70px;
    }
`
const LogoutBtn = styled.div`
    width: 120px;
    height: 150px;
    position: fixed;
    right: 3rem;
    z-index: 100;
    background-color:var(--mainWhite);
    @media (max-width: 500px) {
        width: 40px;
        height: 100px;
    }
`
const UserIcon = styled.i`
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`