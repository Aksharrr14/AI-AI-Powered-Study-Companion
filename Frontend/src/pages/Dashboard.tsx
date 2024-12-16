import React from 'react';
import { useStore } from '../store/useStore';
import { PlusCircle, BookOpen, Award } from 'lucide-react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import NestedModal from '../components/UploadPopup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function Dashboard() {
  const { materials, progress } = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const stats = [
    {
      label: 'Study Materials',
      value: materials.length,
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      label: 'Completed',
      value: Object.values(progress).filter((p) => p.completed).length,
      icon: Award,
      color: 'bg-green-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to AI Study Hub</h1>
        <p className="mt-2 text-gray-600">
          Your personalized learning assistant powered by AI
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${color} rounded-md p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {label}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Start Learning
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Upload your study materials or create a new quiz to begin.</p>
          </div>
          <div className="mt-5">
            <button
              
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              <NestedModal/>
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}