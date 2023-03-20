import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import dayjs from 'dayjs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  ActionWrap,
  Actions,
  Avatar,
  Container,
  Content,
  ContentWrap,
  Date,
  DateWrap,
  EditButton,
  EditForm,
  EditInput,
  EditLabel,
  LikeButton,
  Name,
  PostAction,
  PostWrap,
} from './styles';

const PostList = ({ postId, postContent, postUser, postLike, createdAt, updatedAt }) => {
  const { userName, role } = useGetClientUser();

  const containerRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [postAvatar, setPostAvatar] = useState('');
  const [editContent, setEditContent] = useState(postContent);
  const [likeCount, setLikeCount] = useState(postLike.length);
  const [isLiked, setIsLiked] = useState(false);

  /*============================================
              글 작성자 아바타 가져오기
  ============================================*/
  useEffect(() => {
    axios
      .get(`/api/users/${postUser}`)
      .then((res) => {
        if (res.data.userAvatar) {
          setPostAvatar(res.data.userAvatar);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [postUser]);

  /*============================================
                    수정모드 변경
  ============================================*/
  const handlePostEditMode = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  // 포스트 밖 클릭 시 수정모드 false
  useClickOutsideModal(containerRef, () => {
    containerRef.current.classList.remove('open');
    setIsEditing(false);
  });

  /*============================================
                    포스트 수정
  ============================================*/
  const handleEditPostContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleSubmitEditedPost = useCallback(
    (e) => {
      e.preventDefault();
      const editCheck = postContent !== editContent; // 기존 글에서 수정 했는지 확인

      if (!editCheck) {
        setIsEditing(false); // 수정모드 false
      } else {
        axios
          .put(`/api/posts/${postId}`, {
            postId,
            postContent: editContent,
          })
          .then(() => {
            sweetAlert('success', '수정 성공');
            setIsEditing(false); // 수정모드 false
          })
          .catch((error) => {
            console.error(error);
            sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
          });
      }
    },
    [postId, editContent, postContent],
  );

  /*============================================
                    포스트 삭제
  ============================================*/
  const handleDeletePost = useCallback(() => {
    Swal.fire({
      title: '포스트를 삭제하시겠습니까?',
      text: '삭제 한 포스트는 복구되지 않습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#008bf8',
      cancelButtonColor: '#e06c75',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/posts/${postId}`)
          .then(() => {
            sweetAlert('success', '삭제 성공');
            // 삭제 성공 시 removed클래스 추가, open클래스 삭제 (화면에서 사라지도록)
            containerRef.current.classList.add('removed');
            containerRef.current.classList.remove('open');
            setIsEditing(false); // 수정모드 false
          })
          .catch((error) => {
            console.error(error);
            sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
          });
      }
    });
  }, [postId]);

  /*============================================
                    좋아요 버튼
  ============================================*/
  useEffect(() => {
    // postLike에 클라이언트 userName 유무에 따라 하트 보여주기
    if (postLike.indexOf(userName) !== -1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    containerRef.current.classList.remove('open');
  }, [postLike, userName, postId]);

  const handleClickLikeButton = useCallback(() => {
    if (userName) {
      axios
        .patch('api/posts/like', { postId, userName })
        .then((res) => {
          setIsLiked((prev) => !prev); // 이미 좋아요 눌렀다면 해제, 안눌렀다면 설정
          setLikeCount(res.data.post.postLike.length); // 좋아요 카운트 DB의 postLike의 length로 설정
        })
        .catch((error) => console.log(error));
    } else {
      sweetAlert('warning', '로그인 후 이용 가능합니다.');
    }
  }, [postId, userName]);

  return (
    <Container id={postId} ref={containerRef}>
      <PostWrap>
        <ContentWrap>
          {isEditing ? (
            <EditForm onSubmit={handleSubmitEditedPost}>
              <EditLabel htmlFor='editContent-label'>
                <EditInput
                  autoFocus
                  autoComplete='off'
                  type='textarea'
                  name='editContent'
                  id='editContent-label'
                  value={editContent}
                  onChange={handleEditPostContent}
                />
              </EditLabel>
              <EditButton id='Button' type='submit' />
            </EditForm>
          ) : (
            <Content>{editContent ? editContent : postContent}</Content>
          )}
        </ContentWrap>

        <DateWrap>
          <Date>
            {updatedAt
              ? `${dayjs(updatedAt).format('MM월 DD일')} 수정`
              : dayjs(createdAt).format('MM월 DD일')}
          </Date>
        </DateWrap>

        <ActionWrap>
          <Actions>
            <LikeButton onClick={handleClickLikeButton}>
              {isLiked ? <FaHeart className='heart' /> : <FaRegHeart className='likeBtn' />}
              <span className='like-count'>{likeCount}</span>
            </LikeButton>
          </Actions>
          <Link to={`/${postUser}`}>
            <Avatar src={postAvatar.replace('http:', 'https:')} />
            <Name>{postUser}</Name>
          </Link>
        </ActionWrap>

        {postUser === userName || role === 1 ? (
          <PostAction>
            {isEditing ? (
              <span onClick={handleSubmitEditedPost}>확인</span>
            ) : (
              <span onClick={handlePostEditMode}>수정</span>
            )}
            <span onClick={handleDeletePost}>삭제</span>
          </PostAction>
        ) : (
          ''
        )}
      </PostWrap>
    </Container>
  );
};

export default PostList;
