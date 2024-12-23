export const getMockData = async () => {
  return {
    user: {
      name: "Anthony Dupuis",
      activity: [
        { age: 26, date: "09/12/2024", kebab: 1, pipi: 2, caca: 1 }
      ],
    },
  };
};

export const fetchUserData = async (userId: string ) => {
  const apiUrl = `http://localhost:3000/api/user/${userId}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }
  return await response.json();
};

export const getAPIData = async (userId: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${userId}`);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur API:", error);
    return null;
  }
};
