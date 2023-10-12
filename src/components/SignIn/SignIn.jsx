import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import google from '../../assets/google.svg';

const SignIn = () => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // Update the user data in the auth context with the data returned by Firebase
      setUser(result.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col gap-8 items-center justify-center min-h-screen px-4 bg-primary-purple-light-hover'>
      <p className='text-lg md:text-3xl font-moranga max-w-2xl text-center'>
        Hey, to access this internship assessment, please click the button
        below.
      </p>
      <button
        onClick={handleSignInWithGoogle}
        className='flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-all duration-300 ease-in-out'>
        <img src={google} alt='google' className='w-6 h-6 mr-4' />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SignIn;
