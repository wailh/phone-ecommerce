import React,{ useState }  from 'react'
import { useAuth } from './firebase/firebaseContext';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {login} = useAuth()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(state.email, state.password)
            history.push('/myCart')
        } catch {
            setError('failed to login')
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
        <LoginWrapper className='p-3 d-flex justify-content-center align-items-center'>
            <div className='div-container'>
                <h1 className='text-center'>Login Form</h1>
                {error && <div varient='danger'>{error}</div>}
                <form onSubmit= {handleSubmit}>
                    <label >Username</label>
                    <input 
                        name='email' 
                        className='form-control d-block shadow-none' 
                        type='email' 
                        onChange={handlechange}
                        />
                    <label style={{float: 'left'}}>Password</label>
                    <div >
                    <Link  className='text-decoration-none forget d-flex' style={{justifyContent: 'flex-end'}} to='/forgot-password'>Forget?</Link>
                    </div>
                    <input 
                        name='password' 
                        className='form-control d-block shadow-none' 
                        type='password'
                        onChange={handlechange}
                        />
                    <button className='btn btn-info' disabled = {loading} type='submit'>login</button>
                </form>
                <div className='create-account mt-3'>Create an account 
                    <Link to='/signup' className='text-decoration-none ms-2'>Sign Up</Link>
                </div>
            </div>
        </LoginWrapper>
     );
}
 
export default Login;


const LoginWrapper = styled.div`
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