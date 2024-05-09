import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing Axios
import * as s from './style';
import { NavLink } from 'react-router-dom';

// Define an interface for user information
interface UserInfo {
  name: string;
  description?: string; // Optional
  endereco?: string; // Optional
}

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // Fetch user data on component mount
  useEffect(() => {
    const id = localStorage.getItem('id:id');
    axios.get<UserInfo>(`http://localhost:8080/users/${id}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <s.Page>
      <s.Content>
        <div className='icone'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            alt='User Icon'
          />
        </div>
        <div className='info'>
          <div className='profileInfo'>
            <h1>{userInfo.name}</h1>
            <h1>Sobre mim</h1>
            <h2>{userInfo.description || 'No description provided.'}</h2>
            <h1>Endereço</h1>
            <h2>{userInfo.endereco || 'Address not provided.'}</h2>
          </div>
        </div>

        <div className='editButton'>
          <button>Edit</button> {/* You may add NavLink or other functionality here */}
        </div>
      </s.Content>
    </s.Page>
  );
};

export default Profile;
