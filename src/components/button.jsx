import styled from 'styled-components'

export const ButtonContainer = styled.button`
   text-transform: capitalize;
   font-size: 1.4rem;
   background: transparent;
   border: 0.05rem solid var(--mainYellow);
   border-color: ${props => props.back ? 'var(--mainBlue)' : props.cart ? 'var(--mainOrange)' : props.danger ? 'var(--mainDanger)' : 'var(--mainBlue)' };
   color: ${prop => 
       prop.back ? 'var(--mainBlue)' : prop.cart ? 'var(--mainOrange)' : prop.danger ? 'var(--mainDanger)' : 'var(--mainBlue)' };
   border-radius: 0.5rem;
   padding: 0.2rem 0.5rem;
   cursor: pointer;
   margin: 0.2rem 0.5rem 0.2rem 0;
   transition: all 0.3s ease-in-out;
   &:hover{
       background:  ${props => 
       props.back ? 'var(--mainBlue)' : props.cart ? 'var(--mainOrange)' :props.danger ? 'var(--mainDanger)' : 'var(--mainBlue)' };;
       color: ${prop => prop.back ? 'var(--mainWhite)' : prop.danger ? 'var(--mainWhite)' : 'var(--mainWhite)' }
   }
   &:focus {
       ouline: none
   }
`