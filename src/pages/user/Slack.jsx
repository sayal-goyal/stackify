import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BACKEND_URL;

const Slack = () => {
    const navigate = useNavigate();
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState('');

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

        try {
            const response = await fetch(baseURL + '/user/slack/updateChannels?username=username', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ channel: selectedChannel }),
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
                <select id="channel" name='channel' value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)} aria-placeholder='Select Channel' className='h-11 bg-white rounded-md p-1 border-blue-100'>
                    <option value="" disabled>
                        Select Channel
                    </option>
                    {channels.map((option, index) => (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>

                <button type="submit" className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96 mt-3">
                    Submit Channels
                </button>
            </div>
        </form>
    );
};

export default Slack;