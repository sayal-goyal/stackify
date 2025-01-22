import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BACKEND_URL;

const Teams = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [channels, setChannels] = useState({});
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchList = async () => {
            try {
                const teamsResponse = await fetch(baseURL + '/user/teams/getTeams?username=username', {
                    method: 'GET', headers: { 'Content-Type': 'application/json' }
                });
                const channelsResponse = await fetch(baseURL + '/user/teams/getChannels?username=username', {
                    method: 'GET', headers: { 'Content-Type': 'application/json' }
                });

                const teamsData = await teamsResponse.json();
                const channelsData = await channelsResponse.json();
                if (teamsData.success) setTeams(teamsData?.data);
                else console.error('Teams Error response:', teamsData);
                if (channelsData.success) setChannels(channelsData?.data);
                else console.error('Channels Error response:', channelsData);

            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchList();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(baseURL + '/user/teams/updateData?username=username', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ channelId: formData.channel, teamId: formData.team }),
            });

            const data = await response.json();
            if (response.ok) navigate('/dashboard')
            else console.error('Error response:', data);
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    const handleSelectChange = (event) => setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
            <div className='flex flex-col gap-3'>
                <h2 className='text-slate-700'>Select Team and Channel</h2>
                <select id="team" name='team' value={formData?.team ?? ""} onChange={handleSelectChange} aria-placeholder='Select Team' className='h-11 bg-white rounded-md p-1 border-blue-100'>
                    <option value="" disabled>
                        Select Team
                    </option>
                    {teams.map((option, index) => (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <select id="channel" name='channel' value={formData?.channel ?? ""} onChange={handleSelectChange} aria-placeholder='Select Channel' className='h-11 bg-white rounded-md p-1 border-blue-100'>
                    <option value="" disabled>
                        Select Channel
                    </option>
                    {(channels[formData?.team] ?? []).map((option, index) => (
                        <option key={index} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>

                <button type="submit" className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96 mt-3">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Teams;