import React, { createContext, useContext, useState, useEffect } from 'react';

interface PerformanceContextType {
  isLowPerformance: boolean;
  setLowPerformance: (value: boolean) => void;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  return (
    <PerformanceContext.Provider value={{ isLowPerformance, setLowPerformance: setIsLowPerformance }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within PerformanceProvider');
  }
  return context;
};