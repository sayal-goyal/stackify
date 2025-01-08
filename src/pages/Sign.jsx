import React, { useState } from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';

function Sign() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {isSignUp ? (
                    <Signup />
                ) : (
                    <Signin />
                )}

                <div className="mt-6 text-center">
                    <button
                        onClick={toggleForm}
                        className="text-blue-600 hover:underline focus:outline-none"
                    >
                        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sign;