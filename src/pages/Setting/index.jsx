import {
  Avatar,
  AvatarForm,
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
  UserForm,
  Withdrawal,
  WithdrawalForm,
} from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();
  const { userName, userTitle, refetch, userAvatar, userId } = useGetClientUser();

  const onUploadHandler = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('avatar', e.target.files[0]);
      fetch(`${process.env.API_SERVER}/api/users/${userId}/avatar/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then(() => refetch())
        .catch((error) => console.error(error));
    },
    [userId, refetch],
  );

  const onRemoveHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (window.confirm('프로필 이미지를 삭제하시겠습니까?')) {
        axios
          .post(`${process.env.API_SERVER}/api/users/${userId}/avatar/remove`)
          .then(() => refetch())
          .catch((error) => console.log(error));
      }
    },
    [userId, refetch],
  );

  const onWithdrawalHandler = useCallback(() => {
    if (window.confirm('계정을 삭제하시겠습니까?')) {
      axios
        .delete(`${process.env.API_SERVER}/api/users/${userId}`, { withCredentials: true })
        .then(() => navigate('/'))
        .catch((error) => console.log(error));
    }
  }, [userId, navigate]);

  return (
    <Container>
      <SettingWrap>
        <ProfileWrap>
          <AvatarForm>
            <Avatar src={userAvatar} alt={userName} />
            <Upload htmlFor='avatar'>
              이미지 업로드
              <input type='file' id='avatar' name='avatar' onChange={onUploadHandler} />
            </Upload>
            <Remove onClick={onRemoveHandler}>이미지 제거</Remove>
          </AvatarForm>
          <UserForm>
            <Name>{userName}</Name>
            <Title>{userTitle}</Title>
            <Edit>수정</Edit>
          </UserForm>
        </ProfileWrap>
        <SettingForm>준비 중입니다.</SettingForm>
        <WithdrawalForm>
          <Menu>회원 탈퇴</Menu>
          <Withdrawal onClick={onWithdrawalHandler}>회원 탈퇴</Withdrawal>
          <Caution>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</Caution>
        </WithdrawalForm>
      </SettingWrap>
    </Container>
  );
};

export default Setting;
