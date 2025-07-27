"use client";
import { useEffect, useState } from 'react';

// Higher-order component to handle client-side only components
export function withClientOnly(Component) {
  return function ClientOnlyWrapper(props) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
    }, []);

    if (!hasMounted) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}

// Hook to check if we're on the client side
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
