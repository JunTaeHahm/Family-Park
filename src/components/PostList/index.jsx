import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import dayjs from 'dayjs';
import Scrollbars from 'react-custom-scrollbars-2';
import { FaHeart, FaRegCommentDots, FaRegHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';

import {
  ActionWrap,
  Actions,
  Avatar,
  Button,
  Comment,
  CommentButton,
  CommentList,
  CommentWrap,
  Container,
  Content,
  ContentWrap,
  Date,
  DateWrap,
  EditButton,
  EditForm,
  EditInput,
  EditLabel,
  Form,
  Input,
  Label,
  LikeButton,
  Name,
  NoComment,
  PostAction,
  PostWrap,
} from './styles';

const PostList = ({ postId, postContent, postUser, postLike, comments, createdAt, updatedAt }) => {
  // 댓글만 모아놓은 배열:
  let commentArr = [];

  if (comments) commentArr = Object.entries(comments).map(([, comment]) => comment);

  const { userName, role } = useGetClientUser();

  const sendBtnRef = useRef(null);
  const containerRef = useRef(null);
  const commentWrapRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [postAvatar, setPostAvatar] = useState('');
  const [editContent, setEditContent] = useState(postContent);
  const [likeCount, setLikeCount] = useState(postLike.length);
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(commentArr.length);
  const [commentList, setCommentList] = useState(commentArr);
  const [comment, setComment] = useState('');

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
          Post 클릭 시 'open' 클래스 추가
  ============================================*/
  const handleClickPost = useCallback(
    (e) => {
      if (
        e.target.className !== 'like-count' && // 좋아요 버튼 아닐 것
        e.target.tagName !== 'svg' && // svg 아닐 것
        e.target.tagName !== 'path' && // path 아닐 것
        !isEditing // 수정모드 아닐 것
      ) {
        if (containerRef.current.classList.contains('open')) {
          containerRef.current.classList.remove('open');
          commentWrapRef.current.classList.remove('open');
        } else {
          containerRef.current.classList.add('open');
          commentWrapRef.current.classList.add('open');
        }
      }
    },
    [isEditing],
  );

  /*============================================
                    수정모드 변경
  ============================================*/
  const handlePostEditMode = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  // 포스트 밖 클릭 시 수정모드 false
  useClickOutsideModal(containerRef, () => {
    containerRef.current.classList.remove('open');
    commentWrapRef.current.classList.remove('open');
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
            commentWrapRef.current.classList.remove('open');
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
    commentWrapRef.current.classList.remove('open');
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

  /*============================================
                    댓글 작성
  ============================================*/
  const handleWriteComment = (e) => {
    setComment(e.target.value);
    sendBtnRef.current.classList.add('active'); // 댓글 작성 시 등록 버튼에 acitve 클래스 추가
    if (!e.target.value) sendBtnRef.current.classList.remove('active'); // 댓글 빈 칸일 경우 등록 버튼 active 클래스 삭제
  };

  if (comment) sendBtnRef.current.classList.add('active');

  const handleSubmitNewComment = useCallback(
    (e) => {
      e.preventDefault();
      if (!userName) {
        sweetAlert('warning', '로그인 후 이용 가능합니다.');
      } // 로그인 후에 이용 가능하도록
      if (comment && userName) {
        axios
          .post(`/api/posts/${postId}/comments`, { postId, userName, comment })
          .then((res) => {
            sweetAlert('success', '작성 성공');
            setCommentList(res.data.comments); // 추가된 최신 댓글리스트로 갱신
            setCommentCount(res.data.comments.length); // 추가된 최신 댓글 개수로 갱신
            setComment(''); // 댓글창 초기화
            setIsEditing(false); // 수정모드 false
          })
          .catch((error) => {
            console.error(error);
            sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
          });
      }
    },
    [comment, postId, userName],
  );

  /*============================================
                    댓글 삭제
  ============================================*/
  const handleDeleteComment = useCallback(
    (e) => {
      // 댓글 작성자가 클라이언트 유저인 경우에만 삭제 가능하도록
      if (e.target.parentElement.children[0].innerHTML === userName) {
        Swal.fire({
          title: '댓글을 삭제하시겠습니까?',
          text: '삭제 한 댓글은 복구되지 않습니다.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#008bf8',
          cancelButtonColor: '#e06c75',
          confirmButtonText: '확인',
          cancelButtonText: '취소',
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`/api/posts/${containerRef.current.id}/comments/${e.target.id}`)
              .then((res) => {
                setCommentList(res.data.comments); // 삭제된 최신 댓글리스트로 갱신
                setCommentCount(res.data.comments.length); // 삭제된 최신 댓글 개수로 갱신
                setIsEditing(false); // 수정모드 false
                sweetAlert('success', '삭제 성공');
              })
              .catch((error) => {
                console.error(error);
                sweetAlert('error', '에러가 발생했습니다.', '관리자에게 문의바랍니다.');
              });
          }
        });
      }
    },
    [userName],
  );

  return (
    <Container id={postId} ref={containerRef}>
      <PostWrap onClick={handleClickPost}>
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
            <CommentButton>
              <FaRegCommentDots />
              <span>{commentCount}</span>
            </CommentButton>
          </Actions>
          <Link to={`/${postUser}`}>
            <Avatar src={postAvatar.replace('http:', 'https:')} />
            <Name>{postUser}</Name>
          </Link>
        </ActionWrap>
      </PostWrap>

      <CommentWrap ref={commentWrapRef}>
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

        <CommentList>
          <Scrollbars className='scroll-bar' autoHide autoHideTimeout={500} autoHideDuration={200}>
            {commentList.length === 0 ? (
              <NoComment>작성된 댓글이 없습니다.</NoComment>
            ) : (
              commentList.map((comment, i) => (
                <Comment key={i}>
                  <span>{comment.commentUser}</span>
                  <span id={comment.commentId} onClick={handleDeleteComment}>
                    {comment.comment}
                  </span>
                </Comment>
              ))
            )}
          </Scrollbars>
        </CommentList>

        <Form onSubmit={handleSubmitNewComment}>
          <Label htmlFor='comment-label'>
            <Input
              autoFocus
              autoComplete='off'
              type='text'
              name='comment'
              id='comment-label'
              placeholder='댓글을 작성해보세요.'
              value={comment}
              onChange={handleWriteComment}
            />
          </Label>

          <Button ref={sendBtnRef} id='Button' type='submit'>
            등록
          </Button>
        </Form>
      </CommentWrap>
    </Container>
  );
};

export default PostList;
