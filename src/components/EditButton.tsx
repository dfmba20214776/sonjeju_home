import React from 'react';
import { Edit } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

interface EditButtonProps {
  onClick: () => void;
}

function EditButton({ onClick }: EditButtonProps) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      title="편집하기"
    >
      <Edit size={24} />
    </button>
  );
}

export default EditButton;