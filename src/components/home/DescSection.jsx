import React from 'react'
import styled from 'styled-components'

const DescSection = () => {
    return ( 
        <Desc>
            <div className='text-center' data-aos='fade-up'>
              <em className='lead' style={{fontSize: '24px'}}>Curators of high class and New Zealand designed.</em> PhooneKing is a destination for phone seekers. 
              Located in Masterton's boutique Kuripuni.
            </div>
        </Desc>
     );
}
 
export default DescSection;


const Desc = styled.div`
    font-size: 1.5rem;
    padding: 8rem 13rem;
    background: #fff;
    @media (max-width: 1000px) {
        font-size: 1.5rem;
        padding: 6rem 4rem;
    }
`