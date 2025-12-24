import React from 'react';

interface PerformancePopupProps {
  show: boolean;
  onClose: () => void;
}

const PerformancePopup: React.FC<PerformancePopupProps> = ({ show, onClose }) => {
  const [isMinimized, setIsMinimized] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setIsMinimized(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out ${isMinimized ? 'w-10 h-10' : 'max-w-sm'
        }`}
      onMouseEnter={() => setIsMinimized(false)}
      onMouseLeave={() => setIsMinimized(true)}
    >
      {isMinimized ? (
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <span className="text-black font-bold text-xl">!</span>
        </div>
      ) : (
        <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Low Spec Device Detected</p>
              <p className="text-sm">Animations have been limited for better performance.</p>
            </div>
            <button
              onClick={onClose}
              className="ml-2 text-black hover:text-gray-700 font-bold text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformancePopup;
