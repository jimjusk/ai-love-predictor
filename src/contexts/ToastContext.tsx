'use client';

import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => hideToast(id), 3000);
  };

  const hideToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <AnimatePresence>
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`rounded-lg px-4 py-2 text-white ${
                toast.type === 'success' ? 'bg-green-500' :
                toast.type === 'error' ? 'bg-red-500' :
                toast.type === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`}
            >
              {toast.message}
            </div>
          ))}
        </div>
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
} 