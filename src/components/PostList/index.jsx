import {
  LikeButton,
  Container,
  First,
  Second,
  Third,
  Actions,
  CommentWrap,
  Title,
  CommentButton,
  NoComment,
  Name,
  Form,
  Label,
  Input,
  EditForm,
  CommentList,
  Comment,
  PostAction,
  EditLabel,
  EditInput,
  EditButton,
  Button,
  PostWrap,
  Date,
} from './styles';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { toast } from 'react-hot-toast';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { FaHeart, FaRegHeart, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostList = ({
  postId,
  postTitle,
  postUser,
  postDate,
  postUpdateDate,
  postLike,
  comments,
}) => {
  let commentArr = [];
  if (comments) commentArr = Object.entries(comments).map(([, comment]) => comment);

  const sendBtnRef = useRef(null);
  const containerRef = useRef(null);
  const commentWrapRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(postTitle);
  const [likeCount, setLikeCount] = useState(postLike.length);
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(commentArr.length);
  const [commentList, setCommentList] = useState(commentArr);
  const [comment, setComment] = useState('');

  const { userName } = useGetClientUser();

  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const onPostClick = useCallback(
    (e) => {
      if (
        e.target.className !== 'like-count' &&
        e.target.tagName !== 'svg' &&
        e.target.tagName !== 'path' &&
        !isEditing
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

  const onEditHandler = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const onEditPostSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const regexp = /^[가-힣.,?;^_!%\s]+$/g;
      const editCheck = postTitle !== editTitle;
      if (!editCheck) toast.error('수정 한 내용이 없습니다.');
      if (editCheck) {
        if (editTitle.length > 30) {
          toast.error('최대 글자 수를 초과했습니다.');
        } else if (!regexp.test(editTitle)) {
          toast.error('한글로 된 문장으로만 작성이 가능합니다.');
        } else {
          axios
            .put(
              `/api/posts/${postId}`,
              {
                postId: postId,
                postTitle: editTitle,
              },
              { withCredentials: true },
            )
            .then((res) => {
              toast.success('수정 성공');
              setIsEditing(false);
            })
            .catch((error) => {
              console.log(error);
              toast.error('오류가 발생했습니다.');
            });
        }
      }
    },
    [postId, editTitle, postTitle],
  );

  const onDeletePost = useCallback(() => {
    if (window.confirm('포스트를 삭제하시겠습니까?')) {
      axios
        .delete(`/api/posts/${postId}`, { withCredentials: true })
        .then((res) => {
          toast.success('삭제 성공');
          containerRef.current.classList.add('removed');
          containerRef.current.classList.remove('open');
          commentWrapRef.current.classList.remove('open');
          setIsEditing(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error('오류가 발생했습니다.');
        });
    }
  }, [postId]);

  useClickOutsideModal(containerRef, () => {
    containerRef.current.classList.remove('open');
    commentWrapRef.current.classList.remove('open');
    setIsEditing(false);
  });

  /* Like */
  useEffect(() => {
    if (postLike.indexOf(userName) !== -1) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
    containerRef.current.classList.remove('open');
    commentWrapRef.current.classList.remove('open');
  }, [postLike, userName, postId]);

  const onLikeClick = useCallback(() => {
    if (userName) {
      axios
        .patch('api/posts/like', { postId: postId, userName: userName }, { withCredentials: true })
        .then((res) => {
          setIsLiked((prev) => !prev);
          setLikeCount(res.data.post.postLike.length);
        })
        .catch((error) => console.log(error));
    } else {
      toast.error('로그인 후 이용 가능합니다.');
    }
  }, [postId, userName]);

  /* Comment */
  const onChangeComment = (e) => {
    setComment(e.target.value);
    sendBtnRef.current.classList.add('active');
    if (!e.target.value) sendBtnRef.current.classList.remove('active');
  };
  if (comment) sendBtnRef.current.classList.add('active');

  const onCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!userName) toast.error('로그인 후 이용하실 수 있습니다.');
      if (!comment) toast.error('댓글을 적어주세요.');
      if (comment && userName) {
        if (comment.length > 30) {
          toast.error('최대 글자 수를 초과했습니다.');
        } else {
          axios
            .post(`/api/posts/${postId}/comments`, { postId, userName, comment })
            .then((res) => {
              toast.success('작성 성공!');
              setCommentList(res.data.comments);
              setCommentCount(res.data.comments.length);
              setComment('');
              setIsEditing(false);
            })
            .catch((error) => {
              console.log(error);
              toast.error('오류가 발생했습니다.');
            });
        }
      }
    },
    [comment, postId, userName],
  );

  const onDeleteComment = useCallback((e) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      axios
        .delete(`/api/posts/${containerRef.current.id}/comments/${e.target.id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setCommentList(res.data.comments);
          setCommentCount(res.data.comments.length);
          toast.success('삭제 성공');
          setIsEditing(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error('오류가 발생했습니다.');
        });
    }
  }, []);

  return (
    <Container id={postId} ref={containerRef}>
      <PostWrap onClick={onPostClick}>
        <First>
          {isEditing ? (
            <EditForm onSubmit={onEditPostSubmit}>
              <EditLabel htmlFor='editTitle-label'>
                <EditInput
                  autoFocus
                  autoComplete='off'
                  type='text'
                  name='editTitle'
                  id='editTitle-label'
                  value={editTitle}
                  onChange={onChangeEditTitle}
                />
              </EditLabel>
              <EditButton id='Button' type='submit' />
            </EditForm>
          ) : (
            <Title>{editTitle ? editTitle : postTitle}</Title>
          )}
        </First>
        <Second>
          <Date>{postUpdateDate ? `${postUpdateDate} 수정됨` : postDate}</Date>
        </Second>
        <Third>
          <Actions>
            <LikeButton onClick={onLikeClick}>
              {isLiked ? <FaHeart className='heart' /> : <FaRegHeart className='likeBtn' />}
              <span className='like-count'>{likeCount}</span>
            </LikeButton>
            <CommentButton>
              <FaRegCommentDots />
              <span>{commentCount}</span>
            </CommentButton>
          </Actions>
          <Link to={`/${postUser}`}>
            <Name>{postUser}</Name>
          </Link>
        </Third>
      </PostWrap>
      <CommentWrap ref={commentWrapRef}>
        {postUser === userName ? (
          <PostAction>
            <span onClick={onEditHandler}>{isEditing ? '취소' : '수정'}</span>
            <span onClick={onDeletePost}>삭제</span>
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
                  <span>{comment.comment}</span>
                  <span>
                    {comment.commentDate}
                    {comment.commentUser === userName || postUser === userName ? (
                      <b id={comment.commentId} onClick={onDeleteComment}>
                        X
                      </b>
                    ) : (
                      ''
                    )}
                  </span>
                </Comment>
              ))
            )}
          </Scrollbars>
        </CommentList>
        <Form onSubmit={onCommentSubmit}>
          <Label htmlFor='comment-label'>
            <Input
              autoFocus
              autoComplete='off'
              type='text'
              name='comment'
              id='comment-label'
              placeholder='댓글을 작성해보세요.'
              value={comment}
              onChange={onChangeComment}
            />
          </Label>
          <Button ref={sendBtnRef} id='Button' type='submit'>
            <BsArrowReturnLeft />
          </Button>
        </Form>
      </CommentWrap>
    </Container>
  );
};

export default PostList;
