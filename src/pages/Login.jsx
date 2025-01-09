import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { users } from '../data/users'; // Import the mock user data

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the email and password match any user in the mock database
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            setError('');
            await sdk.triggerWorkflowAndRedirect('pGkT5cmtlp', email, password);
            navigate('/dashboard');
        } else setError('Invalid email or password!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-full max-w-md gap-3">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>
                <Link to='/signup' className="text-blue-600 hover:underline focus:outline-none text-center">Need an account? Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;