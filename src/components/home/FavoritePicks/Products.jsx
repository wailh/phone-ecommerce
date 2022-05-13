import React from 'react'
import {ProductConsumer} from '../../context'
import Product from '../../product';
import styled from 'styled-components';

const Products = (props) => {
    return ( 
        <DivWrapper className='product-cart row ' data-aos='fade-up'>              
            {props.items.map(product => 
                <Product className='item' key={product.id} product={product}/>
            )}

        </DivWrapper>
     );
}
 
export default Products;

const DivWrapper = styled.div`
    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        .item{
           flex: 0 0 auto;
        }
    }
`