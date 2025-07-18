import React , {useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import  { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/UserContext';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');

    const { updateUser } = useContext(UserContext);


    const navigate = useNavigate();

    const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)) {
        setError('Please enter a valid email address');
        return;
    }

    if(!password) {
        setError('Please enter your password');
        return;
    }

    setError('');
     // login Api call
     try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password
      });
      const {token, user } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(user); // Update user context with the logged-in user data
        navigate('/dashboard'); // Redirect to dashboard on successful login
      }
     } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message || 'Login failed, please try again');
      } else {
        setError('An unexpected error occurred, please try again later');
      }
    }
  }
  return (
    <AuthLayout>
        <div className="lg:w-[70%] h-3/7 md:h-full flex flex-col justify-center">
          <h3 className='text-xl font-semibold text-black'>
            Welcome Back</h3>
            <p className='text-xs text-slate-700 mt-[5px mb-6'>
                please enter your details to login to your account
            </p>

            <form onSubmit={handleLogin}>
                <Input
                   value={email}
                   onChange = {({target}) => setEmail(target.value)}
                   label = " Email Address"
                   placeholder='Enter your email address'
                   type='email'
                />

                <Input
                   value={password}
                   onChange = {({target}) => setPassword(target.value)}
                   label = "Password"
                   placeholder='Enter your password'
                   type='password'
                />
              { error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

              <button
                type='submit'
                className="btn-primary">
                Login
              </button>

                <p className='text-13px text-slate-800 mt-3'>
                    Don't have an account? 
                   <Link className='font-medium text-primary underline' to = "/signup">
                   SignUp
                   </Link> 
                </p>
              
            </form>    
        </div>
    </AuthLayout>
  )
}

export default Login