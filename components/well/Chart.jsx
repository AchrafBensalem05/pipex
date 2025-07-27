"use client";
import { mockTelemetryData } from "@/lib/mockData";
import WellContext from "@/context/WellContext";
import React, { useContext, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend,
} from "recharts";
const dataaa = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Chart({ indice2,indice1 }) {
  const [data, setData] = useState([]);
  const [dataa, setDataa] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use mock data instead of API call
        console.log("Using mock telemetry data");
        setData(mockTelemetryData.reverse());
        if (mockTelemetryData.length > 0) {
          const lastItem = mockTelemetryData[mockTelemetryData.length - 1];
        } else {
          console.log('No telemetry data available');
        }
      } catch (error) {
        console.error("Error setting mock telemetry data", error);
      }
    };

    fetchData();

    setDataa(data.reverse());
    const interval = setInterval(fetchData, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

   
  }, [data, dataa]);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        width={500}
        height={400}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={indice1} stroke="#8884d8" />
        <Line type="monotone" dataKey={indice2} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
