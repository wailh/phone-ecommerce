import React,{ useState }  from 'react'
import { useAuth } from './firebase/firebaseContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ForgotPassword = () => {
    const [state, setState] = useState({
        email: ''
    })
    const {resetPass} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPass(state.email)
            setMessage('chack your inbox for further instructions')
        } catch {
            setError('failed to reset Password')
        }

        setLoading(false)
    }

    const handlechange = ({currentTarget: input}) => {
        setState({
            ...state,
            [input.name] : input.value
        })
    }

     
    return ( 
        <ResetWrapper className='rounded p-3 d-flex justify-content-center align-items-center'>
            <div className='div-container'>
                <h1 className='text-center'>Reset Password</h1>
                {error && <div varient='danger'>{error}</div>}
                {message && <div varient='success'>{message}</div>}
                <form onSubmit= {handleSubmit}>
                    <label>Username</label>
                    <input 
                        name='email' 
                        className='form-control d-block shadow-none' 
                        type='email' 
                        onChange={handlechange}
                        />
                    <label>Reset Password</label>
                    <button className='btn btn-info' disabled = {loading} type='submit'>Reset Password</button>
                </form>
                <div className='create-account mt-3'>Create an account <Link to='/signup'>Sign Up</Link></div>
            </div>
        </ResetWrapper>
     );
}
 
export default ForgotPassword;


const ResetWrapper = styled.div`
     margin: 6rem 0 30rem;
     .div-container {
         width: 28rem
     }
     
     .div-container h1 {
         margin-bottom: 4rem;
         font-family: chloeregular;
         font-weight: bold;
     }

     .div-container form label {
         font-size: 1.2rem;
         color: var(--mainBlue);
         margin-bottom: .3rem;
     }

     .div-container form .div-forget .forget {
     }

     .div-container form .form-control {
         background-color: transparent;
         border: none;
         margin-bottom: 1.5rem;
         border-bottom: 1px solid var(--mainBlue);
         color: var(--mainBlue);
     }
     .div-container form .form-control:focus {
         outline: none !important;
     }import { styled } from 'styled-components';


     .div-container form button {
         width: 100%;
         color: var(--mainWhite);
         font-size: 1.2rem;
     }
     .create-account{
         font-size: 1.1rem;
     }
`
