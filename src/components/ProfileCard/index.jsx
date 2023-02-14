import React from 'react';

import { CardButton, Container, UserAvatar, UserName, UserTitle } from './styles';

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
