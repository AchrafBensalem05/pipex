"use client"; // Add this line at the top

import React, { useState, useEffect } from "react";
import CreatePipeFormContextProvider from "../../../../../context/CreatePipeFormContextProvider";
import CoordContextProvider from "../../../../../context/CoordContextProvider";
import WellContextProvider from "../../../../../context/WellContextProvider";
import DataContextProvider from "@/context/DataContextProvider";
import dynamic from "next/dynamic";

// Dynamically import components that use window/browser APIs
const PipeForm = dynamic(() => import("../../../../../components/PipeForm"), {
  ssr: false,
  loading: () => <div>Loading form...</div>
});

const DragModal = dynamic(() => import("../../../../../components/DragModal"), {
  ssr: false,
  loading: () => <div>Loading modal...</div>
});

const Map = dynamic(() => import("../../../../../components/Map"), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const activeLayer = "OpenStreetMap";
  const [activeButton, setActiveButton] = useState("Map");
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted on client
  if (!mounted) {
    return <div className="flex h-screen w-full items-center justify-center">
      <div>Loading drawing interface...</div>
    </div>;
  }
  const [selectedNetworks, setSelectedNetworks] = useState([
    "Gas",
    "Oil",
    "Water",
  ]);
  const [selectedWells, setSelectedWells] = useState([
    "Eruptive",
    "Gas Injector",
    "Gas Lift",
    "Water Injector",
  ]);
  const [selectedLines, setSelectedLines] = useState(["Collect", "Collector"]);
  const [selectedLineSizes, setSelectedLineSizes] = useState([
    '2"',
    '4"',
    '6"',
    '8"',
  ]);

  return (
    <DataContextProvider>
      <CoordContextProvider>
        <WellContextProvider>
          <CreatePipeFormContextProvider>
            <div className="flex h-screen w-full">
              <div className="w-1/2 ">
                <Map
                  activeButton={activeButton}
                  selectedNetworks={selectedNetworks}
                  selectedWells={selectedWells}
                  selectedLines={selectedLines}
                  selectedLineSizes={selectedLineSizes}
                  activeLayer={activeLayer}
                  setTotalDistance={setTotalDistance}
                />
              </div>
              <div className="w-1/2 h-screen bg-white overflow-y-auto pb-16">
                <DragModal totalDistance={totalDistance} />
              </div>
            </div>
          </CreatePipeFormContextProvider>
        </WellContextProvider>
      </CoordContextProvider>
    </DataContextProvider>
  );
};

export default Page;
