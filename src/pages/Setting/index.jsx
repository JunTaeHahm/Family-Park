import {
  Avatar,
  AvatarForm,
  Caution,
  Title,
  Container,
  Edit,
  Menu,
  UserName,
  Label,
  NameInput,
  UploadButtonBack,
  EditButtonBack,
  TitleInput,
  ProfileWrap,
  Remove,
  UserTitle,
  WithdrawalButtonBack,
  Upload,
  UserForm,
  Withdrawal,
  WithdrawalForm,
} from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const API_SERVER =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://www.sentenceu.co.kr';

const Setting = () => {
  const navigate = useNavigate();

  const { userName, userTitle, refetch, userAvatar, userId } = useGetClientUser();

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(userName);
  const [editTitle, setEditTitle] = useState(userTitle);

  /* 유저 아바타 업로드 함수 */
  const onUploadHandler = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(); // formData생성
      formData.append('avatar', e.target.files[0]); // input(file)에서 받은 파일 formData에 append, name은 'avatar'

      fetch(`${API_SERVER}/api/users/${userId}/avatar/upload`, {
        // POST로 formData 전송
        method: 'POST',
        body: formData,
      })
        .then(() => refetch()) // 변경(업로드)성공 시 클라이언트 유저 정보 리패치
        .catch((error) => console.error(error));
    },
    [userId, refetch],
  );

  /* 유저 아바타 삭제 함수 */
  const onRemoveHandler = useCallback(
    (e) => {
      e.preventDefault();

      Swal.fire({
        title: '이미지를 삭제하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008bf8',
        cancelButtonColor: '#e06c75',
        confirmButtonText: '확인',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`/api/users/${userId}/avatar/remove`)
            .then(() => refetch()) // 삭제 성공 시 유저 정보 리패치
            .catch((error) => console.log(error));
        }
      });
    },
    [userId, refetch],
  );

  /* 유저명 변경 */
  const onChangeEditName = (e) => {
    setEditName(e.target.value);
  };

  /* 유저 타이틀 변경 */
  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };

  /* 유저정보 수정모드 변경 */
  const onEditHandler = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  /* 유저 정보 변경 Submit */
  const onEditUserSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (editName) {
        axios
          .put(`/api/users/${userId}`, {
            userName: userName,
            editName: editName,
            editTitle: editTitle,
          })
          .then(() => {
            refetch(); // 유저정보 변경 성공 시 리패치
            setIsEditing(false); // 수정모드 false
          })
          .catch((error) => {
            console.log(error);
            sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
          });
      }
    },
    [userName, editName, editTitle, userId, refetch],
  );

  /* 계정 삭제 함수 */
  const onWithdrawalHandler = useCallback(() => {
    Swal.fire({
      title: '계정을 삭제하시겠습니까?',
      text: '작성하신 모든 포스트가 삭제되며 복구되지 않습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008bf8',
      cancelButtonColor: '#e06c75',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/users/${userId}`)
          .then(() => navigate('/')) // 삭제 성공 시 홈으로 navigate
          .catch((error) => console.log(error));
      }
    });
  }, [userId, navigate]);

  return (
    <Container>
      <Title>내 정보 수정</Title>
      <ProfileWrap>
        <AvatarForm>
          <Avatar src={userAvatar} alt={userName} />
          <UploadButtonBack>
            <Upload htmlFor='avatar'>
              이미지 변경
              <input type='file' id='avatar' name='avatar' onChange={onUploadHandler} />
            </Upload>
          </UploadButtonBack>
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
              <UserName>{userName}</UserName>
              <UserTitle>{userTitle}</UserTitle>
            </>
          )}
          {isEditing ? (
            <EditButtonBack>
              <Edit onClick={onEditUserSubmit}>저장</Edit>
            </EditButtonBack>
          ) : (
            <EditButtonBack>
              <Edit onClick={onEditHandler}>수정</Edit>
            </EditButtonBack>
          )}
        </UserForm>
      </ProfileWrap>

      <WithdrawalForm>
        <Menu>계정 삭제</Menu>
        <WithdrawalButtonBack>
          <Withdrawal onClick={onWithdrawalHandler}>계정 삭제</Withdrawal>
        </WithdrawalButtonBack>
        <Caution>
          계정 삭제 시 작성하신 <b>모든 포스트</b>가 삭제되며 복구되지 않습니다.
        </Caution>
      </WithdrawalForm>
    </Container>
  );
};

export default Setting;
