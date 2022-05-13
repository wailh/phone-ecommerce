import React from 'react'
import './footer.css'

const Copyright = () => {
    return ( 
        <div className='copyright'>
            <div className='container'>
                <div className='row'>
                    <div className='col text-left text-uppercase' >
                        Copyright 2021 PhooneKing &copy; all right reserved
                    </div>
                    <div className='col text-end'>
                        <ul className='list-unstyled' >
                            <li className='me-3' style={{cursor: 'pointer'}}><i className='fa fa-facebook'></i></li>

                            <li className='me-3' style={{cursor: 'pointer'}}><i className='fa fa-twitter'></i></li>

                            <li className='me-3' style={{cursor: 'pointer'}}><i className='fa fa-youtube'></i></li>

                            <li className='me-3' style={{cursor: 'pointer'}}><i className='fa fa-google-plus'></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Copyright;