import {
  Avatar,
  AvatarWrap,
  Caution,
  Container,
  Edit,
  Menu,
  Name,
  ProfileWrap,
  Remove,
  SettingForm,
  SettingWrap,
  Title,
  Upload,
  UserWrap,
  Withdrawal,
  WithdrawalWrap,
} from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import React from 'react';

const Setting = () => {
  const { userName, userTitle, userAvatar } = useGetClientUser();
  return (
    <Container>
      <SettingForm>
        <ProfileWrap>
          <AvatarWrap>
            <Avatar src={userAvatar} alt={userName} />
            <Upload>이미지 업로드</Upload>
            <Remove>이미지 제거</Remove>
          </AvatarWrap>
          <UserWrap>
            <Name>{userName}</Name>
            <Title>{userTitle}</Title>
            <Edit>수정</Edit>
          </UserWrap>
        </ProfileWrap>
        <SettingWrap>준비 중입니다.</SettingWrap>
        <WithdrawalWrap>
          <Menu>회원 탈퇴</Menu>
          <Withdrawal>회원 탈퇴</Withdrawal>
          <Caution>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Caution>
        </WithdrawalWrap>
      </SettingForm>
    </Container>
  );
};

export default Setting;
