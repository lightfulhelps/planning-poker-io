import React, { useState, useContext } from 'react';
import { Toast, Toaster } from '../styles/components';

interface Toast {
  id: number;
  message: string;
  variant: 'error' | 'success' | 'primary';
}

type ContextProps = {
  addToast: (variant: Toast['variant'], message: Toast['message']) => void;
};

export const ToasterContext = React.createContext<ContextProps | null>(null);

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (context === null) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};

let toastCount = 0;

export const ToasterProvider: React.FC = ({ children }) => {
  const [toaster, setToaster] = useState<Array<Toast>>([]);

  const addToast = (variant: Toast['variant'], message: Toast['message']) => {
    toastCount += 1;
    const id = toastCount;
    setToaster([...toaster, { id, message, variant }]);
    startTimer(id);
  };
  const startTimer = (id: number) => {
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };
  const removeToast = (id: number) => {
    setToaster((prev) => prev.filter((e) => e.id !== id));
  };
  return (
    <ToasterContext.Provider value={{ addToast }}>
      {children}
      <Toaster>
        {toaster.map(({ id, message, variant }) => (
          <Toast
            key={id}
            id={id}
            handleClose={removeToast}
            message={message}
            variant={variant}
          />
        ))}
      </Toaster>
    </ToasterContext.Provider>
  );
};

export default ToasterContext;
