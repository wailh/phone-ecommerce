import React,{ useState, useHistory }  from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './firebase/FirebaseContext';

export function UpdateProfile(e)  {
    const [state, setState] = useState({
        email: '',
        password: '',
        passConfirmation:''
    })
    const [error, setError] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const {currentUser, updatePassword, updateEmail} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (state.password !== state.passConfirmation) {
            return setError('passwordd do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (state.email !== currentUser.email) {
            promises.push(updateEmail(state.email))
        }
        if (state.password) {
            promises.push(updatePassword(state.password))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

    const handlechange = ({currentTarget: input}) => {
        setState({
            ...state,
            [input.name] : input.value
        })
    }

     
    return ( 
            <div className='rounded p-3 d-flex justify-content-center align-items-center' 
                 style={{maxWidth: '400px', backgroundColor: '#ff000063', minHeight: '30vh', marginTop:'70px'} }>
                 <div>
                 <h1 style={{color: '#2005ff'}}>Update Profile</h1>
                {error && <div varient='danger'>{error}</div>}
                <form onSubmit= {handleSubmit}>
                    <label style={{color: '#073af3b3'}}>Username</label>
                    <input 
                        name='email' 
                        className='form-control mb-2 d-block' 
                        type='email' 
                        onChange={handlechange}
                        defaultValue={currentUser.email}
                        placeholder='Leave blank to keep the same'
                        />
                    <label style={{color: '#073af3b3'}}>Password</label>
                    <input 
                        name='password' 
                        className='form-control mb-2 d-block' 
                        type='password'
                        onChange={handlechange}
                        placeholder='Leave blank to keep the same'
                        />
                    <label style={{color: '#073af3b3'}}>Password Confirmation</label>
                    <input 
                        name='passConfirmation' 
                        className='form-control mb-2 d-block' 
                        type='password'
                        onChange={handlechange}
                        placeholder='Leave blank to keep the same'
                        />
                    <button className='btn btn-info' style={{color: '#fff', width: '100%'}} disabled = {loading} type='submit'>Sign Up</button>
                </form>
                <div className='w-100 text-center mt-2'>
                    <Link to='/'>Cancel</Link>
                </div>
                </div>
            </div>
     );
}
