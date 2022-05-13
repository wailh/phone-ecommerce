import React from 'react'
import './footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='site-info'>
                            <h2 className='panel' data-aos='fade-up'>Phoone<span>King</span></h2>
                            <p data-aos='fade-up'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, , Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, </p>
                            <a href="/#" className='footer-link' data-aos='fade-up'>Read more</a>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='helpfullinks'>
                            <h4 className='panel' data-aos='fade-up'>HelpfulLinks</h4>
                            <div className='row'>
                            <div className='col' data-aos='fade-up'>
                                <ul className='list-unstyled'> 
                                    <li>About</li>
                                    <li>Portfolio</li>
                                    <li>Team</li>
                                    <li>Privacy Policy</li>
                                </ul>
                                </div>
                            <div className='col' data-aos='fade-up'>
                                <ul className='list-unstyled'> 
                                    <li>FAQ</li>
                                    <li>Blog</li>
                                    <li>Benefits</li>
                                    <li>Contact</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='contact'>
                            <h4 className='panel' data-aos='fade-up'>Contact Us</h4>
                            <ul className='list-unstyled' data-aos='fade-up'>
                                <li>54958 Levo Road Near Red Fort.U.S</li>
                                <li>Phone: 012-123455687</li>
                                <li>Email: <a href="mailto:info@elitecorp.com?subject='Contact'">info@phooneKing.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
	    </div>

    );
}
 
export default Footer;