import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';
import UserInfo from '../components/UserInfo';

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  kebab: number;
  pipi: number;
  caca: number;
}

const Profile: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData('12');
        setUserData(data);
      } catch (error) {
        console.error("Erreur chargement", error);
      }
    };
    fetchData();
  }, []);

  if (!userData) return <p>Chargement...</p>;

  return (
    <div className="profile-page">
      <UserInfo name={userData.firstName} age={userData.age} pipi={userData.pipi} caca={userData.caca} kebab={userData.kebab} />
    </div>
  );
};

export default Profile;
