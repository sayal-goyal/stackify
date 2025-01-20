import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BACKEND_URL;


const TeamsAuth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch(baseURL + '/user/auth/teams', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: 'username', code: queryParams.get('code') })
                });

                const data = await response.json();
                if (response.ok) navigate('/user/teams');
                else console.error('Error response:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        // fetchToken();
    }, [])

    return (
        <div className='flex min-h-screen justify-center items-center text-center text-2xl text-slate-500'>
            Processing Request......
        </div>
    )
}

export default TeamsAuth;