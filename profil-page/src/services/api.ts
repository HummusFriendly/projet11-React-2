import { mockUserData } from '../mock/userData.ts';
import { ResponseWrapper, UserActivity, UserAverageSessions, UserData, UserPerformance } from '../types/apiTypes.ts';

// Set to true or false to use api or mock
const isMocked = true;

const wrapData = (data: any) => {

  return { data }; 
};

export const getUserByUserId = async (userId: number): Promise<ResponseWrapper<UserData> | null> => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = mockUserData.mainData.find((user) => user.id === userId);
        if (!userData) {
          console.error(`User with ID ${userId} not found in mock data`);
          resolve(null);
        } else {
          resolve(wrapData(userData));
        }
      }, 500);
    });
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const getActivityByUserId = async (userId: number): Promise<ResponseWrapper<UserActivity> | null> => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activityData = mockUserData.activity.find((item) => item.userId === userId);
        if (!activityData) {
          console.error(`Activity data not found for user ID ${userId}`);
          resolve(null);
        } else {
          resolve(wrapData(activityData));
        }
      }, 500);
    });
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const getAverageSessionByUserId = async (userId: number): Promise<ResponseWrapper<UserAverageSessions> | null> => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const averageSessionData = mockUserData.averageSessions.find((item) => item.userId === userId);
        if (!averageSessionData) {
          console.error(`Average session data not found for user ID ${userId}`);
          resolve(null);
        } else {
          resolve(wrapData(averageSessionData));
        }
      }, 500);
    });
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const getPerfSessionByUserId = async (userId: number): Promise<ResponseWrapper<UserPerformance> | null> => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const performanceData = mockUserData.performance.find((item) => item.userId === userId);
        if (!performanceData) {
          console.error(`Performance data not found for user ID ${userId}`);
          resolve(null);
        } else {
          resolve(wrapData(performanceData));
        }
      }, 500);
    });
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const getUserScoreByUserId = async (userId: number): Promise<ResponseWrapper<number> | null>  => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = mockUserData.mainData.find((user) => user.id === userId);
        if (!userData) {
          console.error(`User score not found for user ID ${userId}`);
          resolve(null);
        } else {
          const score = userData.todayScore ?? userData.score ?? null;
          resolve(wrapData({ userId, score }));
        }
      }, 500);
    });
  }

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/score`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};