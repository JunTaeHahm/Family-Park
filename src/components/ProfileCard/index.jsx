import { Container, UserAvatar, OnlineLight, UserName, UserTitle, CardButton } from './styles';
import React from 'react';

const ProfileCard = ({ userAvatar, userName, userTitle, isOnline }) => {
  return (
    <Container>
      <UserAvatar src={userAvatar} alt={userName} />
      {isOnline ? <OnlineLight /> : ''}
      <UserName>{userName}</UserName>
      <UserTitle>{userTitle}</UserTitle>
      <CardButton className='card-button'>프로필 보기</CardButton>
    </Container>
  );
};

export default ProfileCard;
