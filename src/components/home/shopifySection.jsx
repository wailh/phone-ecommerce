import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShopifySection = () => {
    return ( 
        <Section>
            <div className='d-flex justify-content-start hero-text' >
            <div className='container'>
                <h1 className='mb-5 hero-title' data-aos='fade-up'>Simplify everthing</h1>
                <p className='d-inline-block me-3 hero-subtitle' data-aos='fade-up'>New additions in-store and offline.</p>
                <div data-aos='flip-right' className='d-inline-block'><Link className='hero-link' to='/productList'>Shop Now</Link></div>
            </div>
            </div>
        </Section>
     );
}
 
export default ShopifySection;


const Section = styled.section`
    background: url('phones/phone-back.jpg')  no-repeat ;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
    .hero-text {
        padding: 0 55px;
        color: #fff;
        position: relative;
        top: 65%;
    }
    .hero-title {
        font-family: chloeregular;
        font-weight: bold;
        font-size: 80px;
    }
    @media (max-width: 700px) {
        .hero-title {
        margin-bottom: 30px !important;
        }
        .hero-text {
          top: 55%;
        }

    }
    @media (max-width: 1000px) {
        .hero-title {
        font-family: chloeregular;
        font-weight: bold;
        font-size: 50px;
        }

    }
    .hero-subtitle{
        font-weight: bold;
        font-size: 1.1rem;
    }
    @media (max-width: 1000px) {
        .hero-subtitle {
            font-size: 1.1rem;
        }
    }
    .hero-link {
        color: #000;
        font-size: 15px;
        padding: 10px 25px;
        background-color: #fff;
        text-decoration: none;
    }
`