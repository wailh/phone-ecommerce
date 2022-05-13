import React from 'react'

const CarteColumns = () => {
    return ( 
        <div className='container-fluid text-center d-none d-lg-block'>
            <div className='row text-center'>
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>product</h5>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>name</h5>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>Price</h5>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>quantity</h5>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>Remove</h5>
                </div> 
                <div className='col-10 mx-auto col-lg-2'>
                    <h5 className='text-uppercase mb-4'>Total</h5>
                </div>
            </div>
        </div>
     );
}
 
export default CarteColumns;