// Static data to replace API calls
export const mockWells = [
  {
    _id: "well_1",
    name: "Well Alpha",
    location: { lat: 34.0522, lng: -118.2437 },
    status: "Active",
    type: "Production",
    depth: 2500,
    createdAt: "2023-01-15T10:30:00Z"
  },
  {
    _id: "well_2", 
    name: "Well Beta",
    location: { lat: 34.0622, lng: -118.2537 },
    status: "Maintenance",
    type: "Injection",
    depth: 3200,
    createdAt: "2023-02-20T14:15:00Z"
  },
  {
    _id: "well_3",
    name: "Well Gamma", 
    location: { lat: 34.0422, lng: -118.2337 },
    status: "Active",
    type: "Production",
    depth: 2800,
    createdAt: "2023-03-10T09:45:00Z"
  }
];

export const mockManifolds = [
  {
    _id: "manifold_1",
    name: "Main Manifold A",
    location: { lat: 34.0522, lng: -118.2437 },
    status: "Operational",
    capacity: 5000,
    connectedWells: ["well_1", "well_2"],
    createdAt: "2023-01-10T08:00:00Z"
  },
  {
    _id: "manifold_2",
    name: "Secondary Manifold B", 
    location: { lat: 34.0622, lng: -118.2537 },
    status: "Maintenance",
    capacity: 3000,
    connectedWells: ["well_3"],
    createdAt: "2023-01-25T11:30:00Z"
  }
];

export const mockPipes = [
  {
    _id: "pipe_1",
    name: "Pipeline North",
    startPoint: { lat: 34.0522, lng: -118.2437 },
    endPoint: { lat: 34.0622, lng: -118.2537 },
    diameter: 12,
    material: "Steel",
    status: "Active",
    length: 1500,
    createdAt: "2023-01-12T13:20:00Z"
  },
  {
    _id: "pipe_2",
    name: "Pipeline South",
    startPoint: { lat: 34.0422, lng: -118.2337 },
    endPoint: { lat: 34.0522, lng: -118.2437 },
    diameter: 8,
    material: "PVC",
    status: "Maintenance",
    length: 2200,
    createdAt: "2023-02-05T16:45:00Z"
  }
];

export const mockInspectionStats = {
  totalInspections: 245,
  completedInspections: 198,
  pendingInspections: 47,
  overdueInspections: 12,
  recentInspections: [
    {
      _id: "insp_1",
      type: "Routine",
      asset: "Well Alpha",
      status: "Completed",
      date: "2024-01-20T10:00:00Z",
      inspector: "John Doe"
    },
    {
      _id: "insp_2", 
      type: "Emergency",
      asset: "Pipeline North",
      status: "In Progress",
      date: "2024-01-22T14:30:00Z",
      inspector: "Jane Smith"
    }
  ]
};

export const mockNotifications = [
  {
    _id: "notif_1",
    message: "New inspection request submitted",
    type: "info",
    timestamp: "2024-01-22T09:15:00Z",
    read: false
  },
  {
    _id: "notif_2",
    message: "Pipeline maintenance completed",
    type: "success", 
    timestamp: "2024-01-21T16:45:00Z",
    read: true
  }
];

export const mockUser = {
  _id: "user_1",
  name: "Demo User",
  email: "demo@example.com",
  role: "ep", // ep = engineer/planner
  department: "Operations",
  createdAt: "2023-01-01T00:00:00Z"
};

export const mockTelemetryData = [
  {
    _id: "tel_1",
    wellId: "well_1",
    pressure: 145.2,
    temperature: 78.5,
    flowRate: 125.8,
    timestamp: "2024-01-22T10:00:00Z"
  },
  {
    _id: "tel_2",
    wellId: "well_1", 
    pressure: 147.1,
    temperature: 79.2,
    flowRate: 128.3,
    timestamp: "2024-01-22T11:00:00Z"
  }
];
