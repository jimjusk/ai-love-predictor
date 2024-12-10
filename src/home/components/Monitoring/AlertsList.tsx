'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  timestamp: string;
  resolved?: boolean;
}

export default function AlertsList() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/alerts/stream');
    
    eventSource.onmessage = (event) => {
      const newAlert = JSON.parse(event.data);
      setAlerts(prev => [newAlert, ...prev].slice(0, 50)); // 保留最近50条
    };

    return () => eventSource.close();
  }, []);

  const resolveAlert = async (id: string) => {
    try {
      await fetch(`/api/alerts/${id}/resolve`, { method: 'POST' });
      setAlerts(prev =>
        prev.map(alert =>
          alert.id === id ? { ...alert, resolved: true } : alert
        )
      );
    } catch (error) {
      console.error('Failed to resolve alert:', error);
    }
  };

  return (
    <div className="space-y-4 max-h-[400px] overflow-y-auto">
      <AnimatePresence>
        {alerts.map(alert => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`p-4 rounded-lg ${
              alert.resolved
                ? 'bg-muted/50'
                : alert.type === 'error'
                ? 'bg-red-100 dark:bg-red-900/20'
                : alert.type === 'warning'
                ? 'bg-yellow-100 dark:bg-yellow-900/20'
                : 'bg-blue-100 dark:bg-blue-900/20'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
              {!alert.resolved && (
                <button
                  onClick={() => resolveAlert(alert.id)}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  标记已解决
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 