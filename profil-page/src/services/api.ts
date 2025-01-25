import { mockUserData } from '../mock/userData.ts';

// Configuration pour activer/désactiver les données mockées
const isMocked = false;

export const getUserByUserId = async (userId: number) => {
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
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

export const getActivityByUserId = async (userId: number) => {
  //adapt to use mock activity
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
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

export const getAverageSessionByUserId = async (userId: number) => {
  //adapt to use mock activity
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
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

export const getPerfSessionByUserId = async (userId: number) => {
  //adapt to use mock activity
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
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

export const getUserScoreByUserId = async (userId: number) => {
  //adapt to use mock activity
  if (isMocked) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
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