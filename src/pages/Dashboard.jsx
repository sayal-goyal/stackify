import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 h-full">
        <h2 className="text-center text-3xl font-semibold mb-10">Dashboard</h2>
        <ul className="space-y-6">
          <li><a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">Home</a></li>
          <li><a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">Analytics</a></li>
          <li><a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">Reports</a></li>
          <li><a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">Settings</a></li>
          <li><a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <header className="bg-white shadow-lg rounded-lg p-6 mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome back, User</h1>
          <button className="px-4 py-2 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition-all">
            Create New
          </button>
        </header>

        {/* Statistics Section */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Total Users</h3>
            <p className="text-4xl text-red-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Revenue</h3>
            <p className="text-4xl text-green-600">$5,678</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Pending Orders</h3>
            <p className="text-4xl text-orange-600">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Messages</h3>
            <p className="text-4xl text-purple-600">12</p>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="border-b border-gray-200 py-4">
              <p className="font-semibold text-gray-700">User John Doe signed up</p>
              <p className="text-gray-500 text-sm">2 hours ago</p>
            </li>
            <li className="border-b border-gray-200 py-4">
              <p className="font-semibold text-gray-700">Revenue report generated</p>
              <p className="text-gray-500 text-sm">5 hours ago</p>
            </li>
            <li className="border-b border-gray-200 py-4">
              <p className="font-semibold text-gray-700">Order #3456 shipped</p>
              <p className="text-gray-500 text-sm">8 hours ago</p>
            </li>
            <li className="py-4">
              <p className="font-semibold text-gray-700">New message received</p>
              <p className="text-gray-500 text-sm">1 day ago</p>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-500">
          <p>&copy; 2025 Dashboard Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;