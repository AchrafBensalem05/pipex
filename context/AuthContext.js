"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { mockUser } from "@/lib/mockData";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decodeTokenAndSetUser = async () => {
      console.log("Using mock authentication");
      
      // Simulate checking for authentication - in this case we'll just set the mock user
      // You can modify this logic based on your needs
      const cookies = document.cookie.split("; ");
      const jwtCookie = cookies.find((row) => row.startsWith("jwt="));
      const token = jwtCookie?.split("=")[1];
  
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Math.floor(Date.now() / 1000);
  
          if (decodedToken.exp > currentTime) {
            console.log("Token is still valid, using mock user");
            setUser(mockUser);
          } else {
            console.log("Token has expired");
            setUser(null);
          }
        } catch (error) {
          console.error("Error decoding token:", error);
          // Fallback to mock user for demo purposes
          setUser(mockUser);
        }
      } else {
        console.log("No token found, using mock user for demo");
        // For demo purposes, always set mock user
        setUser(mockUser);
        setUser(null);
      }
    };
  
    decodeTokenAndSetUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
