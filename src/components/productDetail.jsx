import React from 'react'
import {ProductConsumer} from './context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './button';
import styled from 'styled-components';

const ProductDetail = () => {
    return ( 
          <ProductConsumer>
           {(product) => { 
                const {id, name, img, price, incart, company, info} = product.detailProduct;
                return (
                <Detail className='container' >
                    <h1 className='text-center mx-auto col-10 text-slanted text-blue my-3'>{name} </h1>
                    <div className='row p-5'>
                        <div className='col-10 mx-auto col-md-6'>
                            <img src={img} className='img-fluid' alt='product'/>
                        </div>
                        <div className='col-10 mx-auto col-md-6 my-3 text-center text-md-start text-capitalize'>
                            <h2>Model : {name}</h2>
                            <h4 className='text-title text-uppercase mt-3 mb-2' style={{color: '#212577'}}>
                               Made By:
                               <span>{company.name}</span></h4>
                            <strong>Price: {price}$</strong>
                            <p className='fw-bold mt-3 mb-0'>
                                Some Info About Product: </p>
                            <p className='lead' style={{color: '#212577'}}>   {info} </p>
                            <Link to='/productList'>
                                <ButtonContainer back>Back To Products</ButtonContainer>
                            </Link>
                            <ButtonContainer
                                cart
                                disabled={(incart) ? true : false}
                                onClick={()=> {
                                    product.addToCart(id)
                                }}
                                >
                                {(!incart) ? <p className='mb-0'>Add To Cart</p> : <p className='mb-0'>In cart</p> }
                            </ButtonContainer>
                        </div>
                    </div>
                </Detail>
                )
                }}
          </ProductConsumer>
     );
}
 
export default ProductDetail;

const Detail = styled.div`
   margin-top: 7rem;
   margin-bottom: 20rem;
   color: var(--mainBlue)
`