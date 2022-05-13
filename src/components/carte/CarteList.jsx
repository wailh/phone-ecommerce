import React from 'react'
import CarteItem from './carteItem'

const CartList = ({value}) => {
    const {cart} = value
    console.log(value)
    return ( 
        <div className='container-fluid'>
           {
               cart.map(item => {
                   return <CarteItem key={item.id} item={item} value={value}/>
               })
           }
        </div>
     );
}
 
export default CartList;