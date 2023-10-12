import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  const loader = (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      className=' flex flex-col gap-6 items-center justify-center w-screen h-screen bg-primary-purple-light-hover absolute top-0 bottom-0 left-0 right-0 z-50'>
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity }}>
        <img src={logo} alt='logo' className='w-16' />
      </motion.span>
      <span className='text-[1.2rem]'>Retink. Retink.. Retink...</span>
    </motion.div>
  );

  return {
    loading,
    loader,
  };
};

export default useLoader;
