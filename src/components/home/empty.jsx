import React from 'react'
import styled from 'styled-components';

const Empty = () => {
    return ( 
        <ContactUs  
            className='d-flex justify-content-start align-items-center'>
            <div className='container' data-aos='fade-up'>
                You think We're Cool? Let's Work Together
                <Span >
                    CONTACT US
                </Span>
            </div>
        </ContactUs>
     );
}
 
export default Empty;

const ContactUs = styled.div`
   height: 450px;
   background-color: var(--mainWhite);
   font-size: 40px;
   color: var(--mainBlue);
   @media (max-width: 1200px) {
        font-size: 35px;
        height: 300px;
    }    
`

const Span = styled.span`
    font-size:20px;
    font-weight: bold; 
    color: var(--mainBalue);
    float: right;
    border: 1px solid var(--mainDanger);
    padding: 5px 10px;
    :hover {
       background-color: var(--mainDanger);
       color: var(--mainWhite)
    }
     
`