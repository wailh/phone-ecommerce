import React from 'react'
import styled from 'styled-components';

const Companies = () => {
    return ( 
        <div style={{backgroundColor: 'transparent'}}>
          <DivWrapper className='container d-flex justify-content-center'>
            <div className='row px-4'>
                <div className='col-4 text-center p-2 overflow-hidden'  data-aos='zoom-in'>
                    <img src='marks/apple.png' className='height' alt='img not found'></img>
                </div>
                <div className='col-4 text-center p-2 overflow-hidden'  data-aos='zoom-in'>
                    <img src='marks/huawei.png' className='width'  alt='img not found' ></img>
                </div>
                <div className='col-4 text-center p-2 overflow-hidden' data-aos='zoom-in'>
                    <img src='marks/mi.png' className='height'  alt='img not found'></img>
                </div>
                <div className='col-4 text-center p-2 overflow-hidden' data-aos='zoom-in'>
                    <img src='marks/oppo.png' className='width' alt='img not found'></img>
                </div>
                <div className='col-4 text-center p-2 overflow-hidden' data-aos='zoom-in'>
                    <img src='marks/samsung.png' className='height' alt='img not found'></img>
                </div>
                <div className='col-4 text-center p-2 overflow-hidden' data-aos='zoom-in'>
                    <img src='marks/xiaomi.png' className='width' alt='img not found'></img>
                </div>
            </div>
          </DivWrapper>
        </div>
     );
}
 
export default Companies;

const DivWrapper = styled.div`
    padding: 7rem 0;
    @media (max-width: 1200px) {
        padding: 4rem 0;
    }
    img.height {
        height: 150px;
        width: 300px;
    }
    @media (max-width: 800px) {
        img.height {
            height: 140px;
            width: 150px;
        } 
    }
    @media (min-width: 800px) and (max-width: 1200px) {
        img.height {
            height: 150px;
            width: 200px;
        } 
    }
    img.width {
        height: 90px;
        width: 300px
    }
    @media (max-width: 800px) {
        img.width {
            height: 100px;
            width: 150px;
        } 
    }
    @media (min-width: 800px) and (max-width: 1200px) {
        img.width {
            height: 100px;
            width: 200px;
        } 
    }
`