import { useState, useEffect } from 'react';

interface NetworkInfo {
  isSlowConnection: boolean;
  effectiveType: string;
  saveData: boolean;
}

export const useNetworkOptimization = (): NetworkInfo => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    isSlowConnection: false,
    effectiveType: '4g',
    saveData: false,
  });

  useEffect(() => {
    // Check if the browser supports the Network Information API
    const connection = (navigator as any)?.connection || 
                      (navigator as any)?.mozConnection || 
                      (navigator as any)?.webkitConnection;

    if (connection) {
      const updateNetworkInfo = () => {
        const isSlowConnection = 
          connection.effectiveType === 'slow-2g' || 
          connection.effectiveType === '2g' ||
          connection.effectiveType === '3g' ||
          connection.saveData;

        setNetworkInfo({
          isSlowConnection,
          effectiveType: connection.effectiveType || '4g',
          saveData: connection.saveData || false,
        });
      };

      // Initial check
      updateNetworkInfo();

      // Listen for changes
      connection.addEventListener('change', updateNetworkInfo);

      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    }

    // Fallback for browsers without Network Information API
    // Use a simple bandwidth test or default to fast connection
    setNetworkInfo({
      isSlowConnection: false,
      effectiveType: '4g',
      saveData: false,
    });
  }, []);

  return networkInfo;
};