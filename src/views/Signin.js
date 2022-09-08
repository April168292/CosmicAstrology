import React,{ useState} from 'react';
import './AuthStyle.css';
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate('/')
      } catch (e) {
        setError(e.message)
        console.log(e.message)
      }
    };




    return (
        <div className='main'>

        <div className='signin-box'>
            <h1 className='header1'>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='enter email' />
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='enter password' />
                <button className='submit '>Sign in</button>
                <p>Don't have an account?{''} </p>
                <Link to='/createAccount' className='underline'>
                    Create Account.
                </Link>
            </form>
        </div>
    </div>
    );
}

export default Signin