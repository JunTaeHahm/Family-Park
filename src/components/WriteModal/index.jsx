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

  const { refetch } = useGetRecentPosts();

  const [content, setContent] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  /* 글 내용 유무에 따라 작성버튼 활성화 */
  useEffect(() => {
    content ? setButtonActive(true) : setButtonActive(false);
  }, [content]);

  /* 글 작성 */
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  /* 모달 창 닫는 함수 */
  const closeModalHandler = () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  };

  /* 모달 창 밖 클릭 시 닫히는 함수 */
  useClickOutsideModal(ref, () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  });

  /* 새 글 Submit */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!content) toast.error('문장을 적어주세요.'); // 빈 칸일 경우
      if (content && userName && userId) {
        if (content.length > 300) {
          toast.error('최대 글자 수를 초과했습니다.(최대 300자)');
        } else {
          axios
            .post('/api/posts', { userId, userAvatar, userName, content })
            .then(() => {
              refetch(); // 최신 글 리패치
              setContent(''); // 글 작성 칸 비우기
              closeModalHandler(); // 모달창 닫기
              toast.success('작성 성공!');
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
        <Form ref={ref}>

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
            type='textarea'
            name='post-writeModal'
            id='post-write-label'
            placeholder='들려주고 싶은 한 마디를 적어보세요.'
            value={content}
            onChange={onChangeContent}
          />

          <Button buttonActive={buttonActive} id='Button' onClick={onSubmit}>
            작성
          </Button>

        </Form>
      )}
    </Container>
  );
};

export default WriteModal;
