import React, { useState } from 'react'

const Slack = () => {
    const [channels, setChannels] = useState();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch(baseURL + '/user/slack/getChannels?username=' + 'username', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                const data = await response.json();
                if (response.ok) setChannels(data.channels);
                else console.error('Error response:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchToken();
    }, [])

    return (
        <div>
            slack
        </div>
    )
}

export default Slack