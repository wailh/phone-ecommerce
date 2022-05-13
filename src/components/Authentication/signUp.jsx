import React,{ useState }  from 'react'
import { useAuth } from './firebase/firebaseContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        passConfirmation:''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {signup} = useAuth()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (state.password !== state.passConfirmation) {
            return setError('passwordd do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(state.email, state.password)
            history.push('/')
        } catch {
            setError('failed to create an account')
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
            <RegisterWrappper className='rounded p-3 d-flex justify-content-center align-items-center'>
              <div className='div-container'>
                    <h1 className='text-center' style={{color: 'var(--mainBlue)', fontFamily: 'chloeregular'}}>Sign Up Form</h1>
                    {error && <div varient='danger'>{error}</div>}
                    <form onSubmit= {handleSubmit} clawss>
                        <label>Email</label>
                        <input 
                            name='email' 
                            className='form-control d-block shadow-none' 
                            type='email' 
                            onChange={handlechange}
                            required
                            />
                        <label>Password</label>
                        <input 
                            name='password' 
                            className='form-control d-block  shadow-none' 
                            type='password'
                            onChange={handlechange}
                            required
                            />
                        <label>Password Confirmation</label>
                        <input 
                            name='passConfirmation' 
                            className='form-control d-block  shadow-none' 
                            type='password'
                            onChange={handlechange}
                            />
                        <button className='btn btn-info' disabled = {loading} type='submit'>Sign Up</button>
                    </form>
                </div>
            </RegisterWrappper>
     );
}
 
export default SignUp;

const RegisterWrappper = styled.div`
     margin: 6rem 0 30rem;
     .div-container {
         width: 28rem
     }
     
     .div-container h1 {
         margin-bottom: 4rem;
         font-weight: bold;
     }

     .div-container form label {
         font-size: 1.2rem;
         color: var(--mainBlue);
         margin-bottom: .3rem;
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
     }

     .div-container form button {
         width: 100%;
         color: var(--mainWhite);
         font-size: 1.2rem;
     }
`
