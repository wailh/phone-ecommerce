import React from 'react'
import styled from 'styled-components';

const About = () => {
    return ( 
        <DivWrapper>
            <Title>Hello to About us Section</Title>
            <p className='lead text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat aliquam, dolorum blanditiis, reprehenderit sed quam perferendis omnis cumque maxime sit minima natus rerum? Labore minima eveniet alias accusamus atque, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi a iusto exercitationem ducimus iste, ipsum quod saepe eaque, ullam sed in? Consequatur labore magnam repellat nulla, ipsa iste tempora deleniti, Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ad unde nam mollitia. Ex officiis, saepe sint corporis dolorem exercitationem! Placeat, consequatur distinctio laborum esse suscipit laboriosam aliquid aperiam corporis.</p>
        </DivWrapper>
     );
}
 
export default About;

const DivWrapper = styled.div`
   margin-top: 8rem;
   margin-bottom: 25rem;
   @media (max-width: 1200px) {
      margin-bottom: 8rem;
   }
   p {
       margin: 1rem 17rem;
       font-size: 1.5rem;
   }
   @media (max-width: 1200px) {
        p {
            margin: .7rem 3rem;
            font-size: 1.2rem;
        }  
   }
`
const Title = styled.h1`
    text-align: center;
    color: var(--mainBlue);
    margin-bottom: 4rem;
    font-family: chloeregular;
    font-weight: bold;
    @media (max-width: 1200px) {
     margin-bottom: 2rem;
   }
`