import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Brain, BarChart2, CircleUserRound } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: Brain },
    { to: '/materials', label: 'Study Materials', icon: BookOpen },
    { to: '/progress', label: 'Progress', icon: BarChart2 },
    { to: '/userprofile', label: 'Profile', icon: CircleUserRound },
  ];
  
  return (
    <div className="flex space-x-8">
      {links.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
            location.pathname === to
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Icon className="h-5 w-5 mr-1" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;