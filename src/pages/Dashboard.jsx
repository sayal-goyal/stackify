import React, { useState } from 'react';

const slackClientId = import.meta.env.VITE_SLACK_CLIENT_ID;
const teamsClientId = import.meta.env.VITE_TEAMS_CLIENT_ID;
const baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [username, setUsername] = useState('');

  const handleSlackSubmit = (e) => {

    const redirectUri = `https://slack.com/oauth/v2/authorize?client_id=${slackClientId}&scope=channels:manage,channels:read,channels:write.invites,chat:write,groups:read,groups:write,groups:write.invites,im:read,incoming-webhook,users:read,channels:join&redirect_uri=${baseURL}/user/auth/slack`;
    window.location.href = redirectUri;
  };

  const handleTeamsSubmit = (e) => {

    const redirectUri = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${teamsClientId}&response_type=code&scope=https://graph.microsoft.com/ChannelMessage.Read.All%20Chat.ReadWrite.All%20ChatMember.ReadWrite.All%20Group.Read.All%20Group.ReadWrite.All%20Team.ReadBasic.All%20User.Read.All%20User.ReadBasic.All%20User.ReadWrite.All&response_mode=query&redirect_uri=${baseURL}/user/auth/teams`;
    window.location.href = redirectUri;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your name" className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-96" />
      <button onClick={handleSlackSubmit} className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96">
        Integrate with Slack
      </button>
      <button onClick={handleTeamsSubmit} className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96">
        Integrate with Teams
      </button>
    </div>
  );
};

export default Dashboard;