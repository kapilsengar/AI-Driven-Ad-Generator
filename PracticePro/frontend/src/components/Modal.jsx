import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
        <h3 className="text-lg font-bold">Full Article</h3>
        <p className="text-sm mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Modal;
