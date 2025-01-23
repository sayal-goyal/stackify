import React, { useState } from 'react';

const slackClientId = import.meta.env.VITE_SLACK_CLIENT_ID;
const teamsClientId = import.meta.env.VITE_TEAMS_CLIENT_ID;
const baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [username, setUsername] = useState('');

  const handleSlackSubmit = (e) => {
    const redirectUri = `https://slack.com/oauth/v2/authorize?client_id=${slackClientId}&scope=channels:manage,channels:read,channels:write.invites,chat:write.public,chat:write,groups:read,groups:write,groups:write.invites,im:read,incoming-webhook,users:read,channels:join&redirect_uri=${baseURL}/user/auth/slack&state=${username}`;
    window.location.href = redirectUri;
  };

  const handleTeamsSubmit = (e) => {
    const redirectUri = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize
      ?client_id=${teamsClientId}&response_type=code&response_mode=query&redirect_uri=${baseURL}/user/auth/teams&state=${username}
      &scope=openid offline_access https://graph.microsoft.com/ChannelMessage.Read.All https://graph.microsoft.com/Chat.ReadWrite.All https://graph.microsoft.com/Group.Read.All https://graph.microsoft.com/Group.ReadWrite.All https://graph.microsoft.com/Team.ReadBasic.All https://graph.microsoft.com/User.Read.All https://graph.microsoft.com/User.ReadBasic.All https://graph.microsoft.com/User.ReadWrite.All
    `;
    window.location.href = redirectUri;
  };

  return (
    <form className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
      <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-96" />
      <button type='submit' onClick={handleSlackSubmit} className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96">
        Integrate with Slack
      </button>
      <button type='submit' onClick={handleTeamsSubmit} className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96">
        Integrate with Teams
      </button>
    </form>
  );
};

export default Dashboard;