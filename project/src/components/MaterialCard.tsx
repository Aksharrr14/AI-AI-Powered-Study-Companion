import React from 'react';
import { FileText, Clock } from 'lucide-react';
import { StudyMaterial } from '../types';

interface MaterialCardProps {
  material: StudyMaterial;
  onClick: () => void;
}

export default function MaterialCard({ material, onClick }: MaterialCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{material.title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FileText className="h-4 w-4 mr-1" />
            <span className="capitalize">{material.type}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>
            {new Date(material.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {material.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}