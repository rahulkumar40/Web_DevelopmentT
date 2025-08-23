import React, { useContext, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CareerForm from '../UserLogSignCareer/CareerForm';

function ServiceInquery() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-gradient-to-tr to-orange-500 via-neutral-950 from-sky-700 flex flex-col items-center justify-center relative p-6 text-white'>
            <motion.button 
                onClick={() => navigate(-1)} 
                className='flex items-center text-white bg-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-all absolute duration-300 left-0 top-0 m-4 m w-auto'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaArrowLeft className='mr-2' /> Back
            </motion.button>
            
            <motion.div 
                className='mt-6 bg-white bg-opacity-10 backdrop-blur-md px-6  rounded-2xl shadow-2xl w-full max-w-lg'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CareerForm />
            </motion.div>
        </div>
    );
}

export default ServiceInquery;