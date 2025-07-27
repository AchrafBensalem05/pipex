// Mock API service to replace external API calls
import { mockUser, mockWells, mockManifolds, mockPipes, mockInspectionStats, mockNotifications, mockTelemetryData } from './mockData';

// Mock authentication functions
export const mockSignIn = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: mockUser,
          token: 'mock_jwt_token_' + Date.now()
        }
      });
    }, 1000);
  });
};

export const mockSignUp = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: mockUser,
          token: 'mock_jwt_token_' + Date.now()
        }
      });
    }, 1000);
  });
};

// Mock data fetching functions
export const mockApiService = {
  get: async (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        
        if (url.includes('/well/get-wells')) {
          data = mockWells;
        } else if (url.includes('/manifold/getAll')) {
          data = mockManifolds;
        } else if (url.includes('/pipe/getAll')) {
          data = mockPipes;
        } else if (url.includes('/inspection/stats')) {
          data = mockInspectionStats;
        } else if (url.includes('/notifications/user/')) {
          data = mockNotifications;
        } else if (url.includes('/telemetry/getAll')) {
          data = mockTelemetryData;
        } else if (url.includes('/auth/')) {
          data = { user: mockUser };
        } else {
          data = [];
        }
        
        resolve({ data });
      }, 500);
    });
  },
  
  post: async (url, postData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        
        if (url.includes('/auth/users/signin') || url.includes('users/signin')) {
          data = { user: mockUser, token: 'mock_jwt_token_' + Date.now() };
        } else if (url.includes('/auth/users/signup') || url.includes('users/signUp')) {
          data = { user: mockUser, token: 'mock_jwt_token_' + Date.now() };
        } else if (url.includes('/result/create')) {
          data = { success: true, id: 'mock_result_' + Date.now() };
        } else {
          data = { success: true };
        }
        
        resolve({ data });
      }, 500);
    });
  }
};
