import { mockSignIn, mockSignUp, mockApiService } from "@/lib/mockApi";

// Use mock functions instead of real API calls
export const SignIn = mockSignIn;
export const SignUp = mockSignUp;

// Mock axios instance
export const axiosInstance = mockApiService;