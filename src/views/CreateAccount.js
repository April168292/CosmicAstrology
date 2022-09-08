import { UserAuth } from '../context/AuthContext';
import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import './AuthStyle.css';



const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
            e.preventDefault()
            setError('')
            try{
                await createUser(email,password)
                navigate('/signin'
                )
            } catch (e) {
                setError(e.message)
                console.log(e.message)
            }

    }

    return (
        <div className='main'>
        <div className='signin-box'>
        <h1 className='header1'>Create Account</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' placeholder='enter name' />
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='enter email' />
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='enter password' />
            <button className='submit'>Sign in</button>
            <p>Already have a account?{''} </p>
            <Link to='/Signin' className='underline'>
          Sign in.
        </Link>
        </form>
    </div>
    </div>

    );
}

export default CreateAccount