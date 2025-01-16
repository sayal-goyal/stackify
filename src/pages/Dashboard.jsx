import React, { useEffect, useState } from 'react';

const clientId = import.meta.env.VITE_CLIENT_ID;

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Please enter your name!');
      return;
    }
    // Set the cookie with a 1-day expiration
    document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + new Date(Date.now() + 86400 * 1000).toUTCString() + "; path=/";

    const redirectUri = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&scope=chat:write,channels:read&redirect_uri=https://stackify.vercel.app/user/auth/slack`;
    window.location.href = redirectUri;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-96"
      />
      <button
        type="submit"
        className="px-8 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:brightness-105 w-96"
      >
        Integrate with Slack
      </button>
    </form>
  );
};

export default Dashboard;