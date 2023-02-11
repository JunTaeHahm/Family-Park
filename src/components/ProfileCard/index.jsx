import { Container, UserAvatar, UserName, UserTitle, CardButton } from './styles';
import React from 'react';

const ProfileCard = ({ userAvatar, userName, userTitle, isOnline }) => {
  return (
    <Container>
      <UserAvatar isOnline={isOnline} src={userAvatar.replace('http:', 'https:')} alt={userName} />
      <UserName>{userName}</UserName>
      <UserTitle>{userTitle}</UserTitle>
      <CardButton className='card-button'>프로필</CardButton>
    </Container>
  );
};

export default ProfileCard;
