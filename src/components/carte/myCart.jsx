import React from 'react'
import {ProductConsumer} from '../context'
import CarteColumns from './cartColumns';
import CarteList from './CarteList'
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals'
import styled from 'styled-components';

export default class MyCart extends React.Component {
    render() { 
        return ( 
            <Section>
              <ProductConsumer>
                 {value => {
                     const {cart} = value;
                     if (cart.length > 0) {
                         return (
                            <React.Fragment>
                                <h1 className='text-center'>Your Carte</h1>
                                <CarteColumns />
                                <CarteList value={value} />
                                <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>
                         )
                     }
                     else {
                        return <EmptyCart />
                     }
                 }}
              </ProductConsumer>
            </Section>
         );
    }
}
 
const Section = styled.section`
    margin: 7rem 0 15rem;
    @media (max-width: 1300px){
        margin-bottom: 10rem;
    }
    h1 {
        margin-bottom: 4rem;
        font-family: chloeregular;
        font-weight: bold;
        color: var(--mainBlue)
    }
    @media (max-width: 1300px){
        h1 {
            margin-bottom: 4rem;
            font-family: chloeregular;
            font-weight: bold;
            color: var(--mainBlue);
            font-size: 3rem;
        }
    }
`