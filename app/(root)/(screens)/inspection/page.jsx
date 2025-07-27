"use client";
import React, { memo, useContext, useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { mockWells, mockManifolds, mockPipes, mockInspectionStats } from "@/lib/mockData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import dynamic from "next/dynamic";

// Dynamic imports for components that might use window
const LeftSideBar = dynamic(() => import("@/components/shared/LeftSideBar"), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
const DemandeInspection = dynamic(() => import("@/components/Inspection/Demande"), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
const CreateInspection = dynamic(() => import("@/components/Inspection/CreateInspection").then(mod => ({ default: mod.CreateInspection })), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
const ConstructionRaportStatus = dynamic(() => import("@/components/Inspection/ConstructionRaportStatus").then(mod => ({ default: mod.ConstructionRaportStatus })), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
const CreatePeriodicInspection = dynamic(() => import("@/components/Inspection/CreatePeriodicInspection").then(mod => ({ default: mod.CreatePeriodicInspection })), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const page = () => {
  const { user } = useAuth();
  const [wells, setWells] = useState([]);
  const [manifolds, setManifolds] = useState([]);
  const [pipes, setPipes] = useState([]);
  const [stats, setStats] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try {
        // Use mock data instead of API calls
        console.log("Using mock data for inspection page");
        setWells(mockWells);
        setManifolds(mockManifolds);
        setPipes(mockPipes);
        setStats(mockInspectionStats);
      } catch (error) {
        console.error("Error setting mock data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("iloveeeeeeeeee u", stats);
  }, [stats]);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  console.log("hate uuuuuuuuuuu");

  const router = useRouter();
  const handleDirection = () => {
    router.push("/inspection/upload");
  };
  return (
    <div className="flex flex-row bg-gray-100 overflow-y-auto h-screen w-full no-scrollbar">
      <div className="bg-white w-[20%] h-screen sticky top-0">
        <div className="flex flex-col justify-between my-4">
          <Link href={"/inspection/todo"}>
            <div className="relative flex gap-4 justify-start  py-3 px-5 rounded-md cursor-pointer hover:bg-blue-900 hover:text-white mx-3">
              <AutoAwesomeIcon className="h-8 w-8" />
              <h1 className="text-xl font-semibold">Requests</h1>
            </div>
          </Link>
          <Link href={"/inspection"}>
            <div className="flex flex-row gap-4 items-center justify-start py-3 px-5 rounded-md cursor-pointer hover:bg-blue-900 hover:text-white mx-3">
              <AutoAwesomeIcon className="h-8 w-8" />
              <h1 className="text-xl font-semibold">Program</h1>
            </div>
          </Link>
          {}
          {user.role === "ep" && (
            <>
              <CreateInspection
                wells={wells}
                pipes={pipes}
                manifolds={manifolds}
              />
              <Link href={"/inspection/upload"}>
                <div
                  onClick={handleDirection}
                  className="flex flex-row gap-4 items-center justify-start py-3 px-5 rounded-md cursor-pointer hover:bg-blue-900 hover:text-white mx-3"
                >
                  <AutoAwesomeIcon className="h-8 w-8" />
                  <h1 className="text-xl font-semibold">Upload</h1>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col mx-4 my-3 gap-4 w-full overflow-y-auto no-scrollbar">
        <div className="flex items-center space-x-2">
          <Image
            src={"/pngarrow.png"}
            alt={"Add"}
            height={35}
            width={35}
            className="cursor-pointer"
          />
          <h1 className="text-4xl font-bold">Inspection</h1>
        </div>
        <DemandeInspection stats={stats} />
      </div>
    </div>
  );
};

export default page;
