import React, { useEffect, useState } from 'react';
import { getMockData, getAPIData, fetchUserData } from './services/api';
import { UserData } from './types/apiTypes';


const App = () => {

  const [data, setData] = useState<UserData|null>(null)
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getAPIData('12');
      setData(response);
    } catch (error) {
      setError(error);
    }
  };
  fetchData();
}, []); 

  const [useMock, setUseMock] = useState(true);

  const fetchData = async () => {
    try {
      const result = useMock 
        ? await getMockData() 
        : await getAPIData("12") || fetchUserData("12");
      setData(result);
    } catch (error) {
      console.error("Erreur de récupération des données :", error);
    }
  };

  console.log(data);

  return (
    <div className='container-all'>

      {data ? (
        <div>
          <h1>Bonjour <span className="username">{data.userInfos.firstName || "Utilisateur inconnu prout"}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default App;
