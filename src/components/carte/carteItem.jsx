import React from 'react'
import styled from 'styled-components';

const CarteItem = ({item, value}) => {
    const {id, name, img, price, total, count} = item
    const {increment, decrement, removeItem} = value 
    return ( 
        <DivWrapper className="row mt-2 mb-4 text-capitalize text-center">
            <div className=" mx-auto col-10 col-md-6 col-lg-2">
                <img src={img}  alt="product" className="img-fluid img" />
            </div>
            <div className=" mx-auto col-10 col-lg-2 name">
               <span className='d-lg-none sm-only'>product : </span>
               {name}
            </div>
            <div className=" mx-auto col-10 col-lg-2 price">
            <span className='d-lg-none sm-only'>price : </span>
               {price}$
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-md-0 add'>
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1"
                              onClick={() => decrement(id)
                        }>
                         -
                        </span>
                        <span className="count btn btn-black mx-1" >
                         {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)
                        }>
                         +
                        </span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className=" mx-auto col-lg-2">
                <div className="cart-icon trash">
                    <i className="fa fa-trash" onClick={()=> removeItem(id)}></i>
                </div>
            </div>
            <div className=" mx-auto col-lg-2 total">
                <strong>item total : {total}$</strong>
            </div>
        </DivWrapper>
     );
}
 
export default CarteItem;

const DivWrapper = styled.div`
    @media (max-width: 990px) {
        padding-top: 1rem;
        padding-bottom: 3rem;
        border: 1px solid #fff;
        width: 400px;
        margin: 0 auto;
        box-shadow: 4px 4px #fff;
        background-color: #a6c7c1;
    }
    .img{
        width: 5rem;
        height: 5rem;
    }
    @media (max-width: 1300px) {
        .img{
            width: 8rem;
            height: 8rem;
            margin-bottom: 1rem;
        }
        .price, .trash, .add{
            margin-bottom: 10px;
        }
        .trash {
            font-size: 2rem;
        }
        .name, .price, .total {
            font-size: 1.5rem;
        }
        .sm-only{
            font-weight: bold;
        }
    }
`