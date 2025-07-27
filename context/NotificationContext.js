import { createContext, useContext, useEffect, useState } from 'react';
import { mockNotifications } from '@/lib/mockData';
import { useAuth } from './AuthContext';

const NotificationContext = createContext();

export const useNotifications = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();
  
  useEffect(() => {
    // Simulate socket connection - just set mock notifications
    console.log("Using mock notifications");
    setNotifications(mockNotifications);

    // Simulate receiving new notifications periodically
    const interval = setInterval(() => {
      const newNotification = {
        _id: `notif_${Date.now()}`,
        message: `New system alert at ${new Date().toLocaleTimeString()}`,
        type: "info",
        timestamp: new Date().toISOString(),
        read: false
      };
      setNotifications(prev => [newNotification, ...prev]);
    }, 30000); // Add new notification every 30 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        console.log('Using mock notifications data')
        // Use mock data instead of API call
        setNotifications(mockNotifications);
        console.log("Fetched notifications:", response.data); // Debugging
        setNotifications(response.data);
      } catch (error) {
        console.error('Failed to fetch notifications', error.message);
      }
    };

    fetchNotifications();
  }, []);

  console.log('Notifications:', notifications); // Debugging notifications

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
