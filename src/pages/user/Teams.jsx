import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
const baseURL = import.meta.env.VITE_BACKEND_URL;

const Teams = () => {
    const channelsRef = useRef();
    const navigate = useNavigate();
    const [channels, setChannels] = useState([]);


    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await fetch(baseURL + '/user/slack/getChannels?username=username', {
                    method: 'GET', headers: { 'Content-Type': 'application/json' }
                });

                const data = await response.json();
                if (response.ok) setChannels(data.data);
                else console.error('Error response:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchList();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedOptions = channelsRef.current?.getValue() || [];
        const selectedChannelIds = selectedOptions.map(option => option.value);

        try {
            const response = await fetch(baseURL + '/user/slack/updateChannels?username=username', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ channelIds: selectedChannelIds }),
            });

            const data = await response.json();
            if (response.ok) navigate('/dashboard')
            else console.error('Error response:', data);
        } catch (error) {
            console.error('Submit error:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
            <div className='flex flex-col gap-3'>
                <h2 className='text-slate-700'>Select Channels</h2>
                <Select ref={channelsRef} options={channels?.map(({ id, name }) => ({ label: name, value: id }))} isMulti />

                <button type="submit" className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96 mt-3">
                    Submit Channels
                </button>
            </div>
        </form>
    );
};

export default Teams;