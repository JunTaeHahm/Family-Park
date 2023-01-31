import {
  Avatar,
  AvatarForm,
  Caution,
  Container,
  Edit,
  Menu,
  Name,
  Label,
  NameInput,
  TitleInput,
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
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();

  const { userName, userTitle, refetch, userAvatar, userId } = useGetClientUser();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [editTitle, setEditTitle] = useState(userTitle);

  const onChangeEditName = (e) => {
    setEditName(e.target.value);
  };
  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };

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

  const onEditHandler = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const onEditUserSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const regexp = /^[가-힣.,?;^_!%\s]+$/g;
      if (editName) {
        if (editName.length > 5 || editName.length < 2 || !regexp.test(editName)) {
          toast.error('유저명은 최소 2자, 최대 5자의 한글만 가능합니다.');
        } else {
          axios
            .put(
              `/api/users/${userId}`,
              {
                userName: userName,
                editName: editName,
                editTitle: editTitle,
              },
              { withCredentials: true },
            )
            .then(() => {
              refetch();
              setIsEditing(false);
            })
            .catch((error) => {
              console.log(error);
              toast.error('오류가 발생했습니다.');
            });
        }
      }
    },
    [userName, editName, editTitle, userId, refetch],
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
          <UserForm onSubmit={onEditUserSubmit}>
            {isEditing ? (
              <>
                <Label htmlFor='editName-label'>
                  <NameInput
                    autoComplete='off'
                    type='text'
                    name='editName'
                    id='editName-label'
                    value={editName}
                    onChange={onChangeEditName}
                  />
                </Label>
                <Label htmlFor='editTitle-label'>
                  <TitleInput
                    autoFocus
                    autoComplete='off'
                    type='text'
                    name='editTitle'
                    id='editTitle-label'
                    value={editTitle}
                    onChange={onChangeEditTitle}
                  />
                </Label>
              </>
            ) : (
              <>
                <Name>{userName}</Name>
                <Title>{userTitle}</Title>
              </>
            )}
            {isEditing ? (
              <Edit onClick={onEditUserSubmit}>저장</Edit>
            ) : (
              <Edit onClick={onEditHandler}>수정</Edit>
            )}
          </UserForm>
        </ProfileWrap>
        <SettingForm>준비 중입니다.</SettingForm>
        <WithdrawalForm>
          <Menu>계정 삭제</Menu>
          <Withdrawal onClick={onWithdrawalHandler}>계정 삭제</Withdrawal>
          <Caution>계정 삭제 시 작성하신 모든 포스트가 삭제되며 복구되지 않습니다.</Caution>
        </WithdrawalForm>
      </SettingWrap>
    </Container>
  );
};

export default Setting;
