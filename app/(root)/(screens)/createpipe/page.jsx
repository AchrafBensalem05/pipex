'use client'; // Add this line at the top

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CreatePipeFormContextProvider from '../../../../context/CreatePipeFormContextProvider';
import WellContextProvider from '../../../../context/WellContextProvider';

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
  const icon = "islam.png";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <WellContextProvider>
      <CreatePipeFormContextProvider>
        <div className='flex h-screen w-full'>
          <div className="w-1/2 ">
            <MapComponent icon={icon}/>
          </div>
          <div className="w-1/2 h-screen bg-white overflow-y-auto pb-16">
            <PipeForm/>
          </div>
        </div>
      </CreatePipeFormContextProvider>
    </WellContextProvider>
  );
};

export default Page;