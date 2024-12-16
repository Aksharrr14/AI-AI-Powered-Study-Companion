import React from 'react';
import { UserCircle, Mail, Calendar } from 'lucide-react';

export default function UserProfile() {
  // Mock user data (replace with actual user data from your store or backend)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joined: 'January 1, 2023',
    studyHours: 120,
    quizzesCompleted: 15,
    profilePicture: '', // Optional: URL for profile picture
  };

  const stats = [
    {
      label: 'Total Study Hours',
      value: user.studyHours,
      icon: Calendar,
      color: 'bg-indigo-500',
    },
    {
      label: 'Quizzes Completed',
      value: user.quizzesCompleted,
      icon: Mail,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full max-w-4xl mx-auto">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 pt-4">Your Profile</h1>
          <p className="mt-2 text-gray-600">
            Manage your account and view your progress.
          </p>
        </div>

        {/* User Information Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about your account.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.joined}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* User Statistics Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-8">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${color} rounded-md p-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
                      <dd className="text-lg font-semibold text-gray-900">{value}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Picture Section */}
        <div className="bg-white shadow sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6 text-center">
            {user.profilePicture ? (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="inline-block h-32 w-32 rounded-full"
              />
            ) : (
              <UserCircle className="inline-block h-32 w-32 text-gray-300" />
            )}
            <h3 className="mt-4 text-lg font-medium text-gray-900">{user.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
            <button
              type="button"
              className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
