import React from 'react' 
import {ProductConsumer} from './context'
import Product from './product'
import styled from 'styled-components';
import ListGroup from './../common/ListGroup';

const ProductList = () => {
    return ( 
        <ItemsWrapper className='home' style={{color: 'var(--mainBlue)'}}>
            <Title>Shop By Brand</Title>
            <ProductConsumer >                
                {({marks, handleBrandSelect, products, filtered, selectedBrand}) => 
                    <>
                        <ListGroup 
                            marks={marks} 
                            onItemSelect={handleBrandSelect}
                            selectedBrand={selectedBrand}
                            />
                        <ProdItems className='container-fluid'>
                            <div className='product-cart row'>  
                                {filtered.map(product => 
                                    <Product key={product.id} product={product} />
                                )}
                            </div>
                        </ProdItems>
                    </>
                }
            </ProductConsumer>
        </ItemsWrapper>
     );
}
 
export default ProductList;

const ItemsWrapper = styled.div`
    margin: 7rem 0 15rem;
    .brands {
        font-weight: bold;
        margin: 0 auto 2rem;
        padding: 0;
    }

    .brands > li {
        cursor: pointer;
        transition: ease-in-out .3s;
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
    }
    @media (max-width: 1500px) {
        .brands > li {
            font-size: 15px;
           padding: 10px;
        }  
    }

    .brands>li:not(:first-child) {
        border-left: 1px solid var(--mainBlue)
    }
    .brands > li:hover {
        color: #dbedf5;
    }
    .brands .active {
        background-color: var(--mainBlue);
        padding: 10px;
    }

    
`

const ProdItems = styled.div`
    overflow: hidden;
    padding: 1rem 2rem;
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 4rem;
    font-family: chloeregular;
    font-weight: bold;
`