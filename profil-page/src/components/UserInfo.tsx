import React from 'react';

interface UserInfoProps {
  name: string;
  age: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, age }) => (
  <div className="user-info">
    <h1>Bonjour, {name}</h1>
    <p>Vous avez {age} ans</p>
  </div>
);

export default UserInfo;
