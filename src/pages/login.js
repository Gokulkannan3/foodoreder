import React, { useState } from 'react';
import axios from 'axios';
import Lnav from '../components/lnav';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ username, password });

    try {
        const response = await axios.post('https://fbackend-6fbo.onrender.com/login', {
            username: username,
            password: password,
        });

        console.log(response.data.message);

        if (response.data.message === "Login Successful") {
            navigate('/home');
        } else {
            setError('Invalid email or password');
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
        setError('Invalid Credentials');
    }
};

    return (
        <html>
            <body>
                <div>
                    <Lnav />
                    <div className='flex justify-center content-center mt-60'>
                        <div className='for w-96 h-96 flex justify-center items-center bg-black rounded-2xl'>
                            <form>
                                <p className='text-white text-2xl mb-2'>Enter username</p>
                                <input
                                    type='email'
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='bg-red-500 h-10 w-64 font-bold text-white text-center rounded-md'
                                    placeholder='Username'
                                ></input>

                                <p className='text-white text-2xl mt-6 mb-2'>Enter Password</p>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='bg-red-500 h-10 w-64 font-bold text-white text-center rounded-md'
                                    placeholder='password'
                                ></input>
                                <button
                                    type="button"
                                    className="-ml-12 font-semibold focus:outline-none text-white"
                                    onClick={handleTogglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                                <hr></hr>
                                {error && <p className='text-red-500 mt-2'>{error}</p>}
                                <button
                                    type='submit'
                                    className='text-white font-bold text-xl h-12 w-20 rounded-lg bg-red-500 hover:bg-red-400 hover:text-black mt-10 translate-x-20'
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>

                                <p className='con text-white flex justify-center mt-5 gap-2'>
                                    New user??<Link to='/signin' className='text-sky-400'>
                                        Signup
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
