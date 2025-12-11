import React from 'react';

interface PerformancePopupProps {
  show: boolean;
  onClose: () => void;
}

const PerformancePopup: React.FC<PerformancePopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg max-w-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Low Spec Device Detected</p>
          <p className="text-sm">Animations have been limited for better performance.</p>
        </div>
        <button
          onClick={onClose}
          className="ml-2 text-black hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PerformancePopup;