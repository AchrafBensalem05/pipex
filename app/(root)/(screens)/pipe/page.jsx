'use client'; // Add this line at the top

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CreatePipeFormContextProvider from '../../../../context/CreatePipeFormContextProvider';

// Dynamic imports for components that might use window
const MapComponent = dynamic(() => import('../../../../components/MapComponent'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});
const PipeForm = dynamic(() => import('../../../../components/PipeForm'), {
  ssr: false,
  loading: () => <div>Loading form...</div>
});

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <CreatePipeFormContextProvider>
      <div className='flex h-screen w-full'>
        <div className="w-1/2 ">
          <MapComponent />
        </div>
        <div className="w-1/2 h-screen bg-white overflow-y-auto pb-16">
          <PipeForm/>
        </div>
      </div>
    </CreatePipeFormContextProvider>
  );
};

export default Page;