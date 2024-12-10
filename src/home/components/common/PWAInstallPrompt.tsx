'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-background rounded-lg shadow-lg p-4 z-50"
        >
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-1">安装应用</h3>
              <p className="text-sm text-muted-foreground">
                将AI Love Predictor添加到主屏幕，获得更好的使用体验
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowPrompt(false)}
                className="px-3 py-1 text-sm hover:bg-muted rounded-md transition-colors"
              >
                稍后
              </button>
              <button
                onClick={handleInstall}
                className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                安装
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 