import { Button, Container, FormHeader, Form, Input } from './styles';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetRecentPosts } from '@hooks/usePost';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const WriteModal = ({
  userId,
  userAvatar,
  userName,
  setIsBtnActive,
  wirteModalOpen,
  setWirteModalOpen,
}) => {
  const ref = useRef();
  const [content, setContent] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const { refetch } = useGetRecentPosts();

  useEffect(() => {
    content ? setButtonActive(true) : setButtonActive(false);
  }, [content]);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const closeModalHandler = () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  };

  useClickOutsideModal(ref, () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!userName) toast.error('로그인 후 이용하실 수 있습니다.');
      if (!content) toast.error('문장을 적어주세요.');
      if (content && userName && userId) {
        if (content.length > 300) {
          toast.error('최대 글자 수를 초과했습니다.(최대 300자)');
        } else {
          axios
            .post('/api/posts', { userId, userAvatar, userName, content })
            .then((res) => {
              refetch();
              toast.success('작성 성공!');
              setContent('');
              closeModalHandler();
            })
            .catch((error) => {
              console.log(error);
              toast.error('오류가 발생했습니다.');
            });
        }
      }
    },
    [content, userId, refetch, userName, userAvatar],
  );

  return (
    <Container>
      {wirteModalOpen && (
        <Form onSubmit={onSubmit} ref={ref}>
          <ArrowBackIosNewIcon onClick={closeModalHandler} />
          <FormHeader>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </FormHeader>
          <Input
            autoFocus
            autoComplete='off'
            type='text'
            name='post-writeModal'
            id='post-write-label'
            placeholder='들려주고 싶은 한 마디를 적어보세요.'
            value={content}
            onChange={onChangeContent}
          />
          <Button buttonActive={buttonActive} id='Button' type='submit'>
            작성
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default WriteModal;
