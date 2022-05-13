import React from 'react'
import styled from 'styled-components';

const FavoriteProd = () => {
    return ( 
        <FeatureWrap className='featured-one container-fluid' >
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <div className='prod-text h-100 d-flex justify-content-center align-items-center px-5'>
                      <div className='text-center'>
                        <h2 className='mb-2 mb-lg-4' style={{fontFamily: 'chloeregular'}} data-aos='fade-up'>Homegrown</h2>
                        <p className='mb-4' data-aos='fade-up'>We love all of our beautiful brands here at Crebe but there is a special place in our heart for the American brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special.</p>
                        <div data-aos='btn flip-left'><span >Find out more</span></div>
                      </div>
                    </div>
                </div>
                <div className='div-img col-12 col-lg-6' data-aos='fade-up'>
                    <img src='phones/iphone 13.jpg' alt='img not found'/>
                </div>
            </div>
        </FeatureWrap>
     );
}
 
export default FavoriteProd;

const FeatureWrap = styled.div`
    padding: 5rem 0;
    background-color:white;
    @media (max-width: 800px) {
       padding: 2rem 0;
    }
    @media (min-width: 800px) and (max-width: 1200px) {
       padding: 5rem 0;
    }
    h2, p{
      color: var(--mainBlue)
    }
    span{
        background-color: rgb(68, 68, 68);
        color: #fff;
        padding: 10px 20px;
    }
    .div-img {
          display: flex;
          justify-content: center;
          align-items: center
        }
    img {
        height: 500px;
        width: 80%;
    }
    @media (max-width: 1200px) {
        img {
          height: 250px;
          width: 50%;
          margin-top: 20px;
        }
    }
`
