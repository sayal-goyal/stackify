import React from 'react';
import { Link } from 'react-router-dom';
const clientId = process.env.REACT_APP_CLIENT_ID;

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link to={`https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=chat:write,channels:read&redirect_uri=https://stackify.vercel.app/user/auth/slack`}
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105">Integrate to Slack</Link>
    </div >
  );
};


export default Dashboard;