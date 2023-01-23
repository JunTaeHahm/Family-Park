import { Button, Container, FormHeader, Form, Input } from './styles';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import { useGetClientUser } from '@hooks/userInfo';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

const WriteModal = ({ onRefetch, setIsBtnActive, wirteModalOpen, setWirteModalOpen }) => {
  const ref = useRef();
  const [title, setTitle] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  const { userId, userName } = useGetClientUser();

  useEffect(() => {
    title ? setButtonActive(true) : setButtonActive(false);
  }, [title]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const closeModalHandler = () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  };

  useClickOutsideModal(ref, () => {
    setWirteModalOpen(false);
    setIsBtnActive(false);
  });

  const handleOk = () => {
    onRefetch();
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const regexp = /^[가-힣.,?;^_!%\s]+$/g;
      if (!userName) toast.error('로그인 후 이용하실 수 있습니다.');
      if (!title) toast.error('문장을 적어주세요.');
      if (title && userName && userId) {
        if (title.length > 30) {
          toast.error('최대 글자 수를 초과했습니다.');
        } else if (!regexp.test(title)) {
          toast.error('한글로 된 문장으로만 작성이 가능합니다.');
        } else {
          axios
            .post('/api/posts', { userId, userName, title })
            .then((res) => {
              toast.success('작성 성공!');
              setTitle('');
              handleOk();
              closeModalHandler();
            })
            .catch((error) => {
              console.log(error);
              toast.error('오류가 발생했습니다.');
            });
        }
      }
    },
    [title, userId, handleOk, userName],
  );

  return (
    <Container>
      {wirteModalOpen && (
        <Form onSubmit={onSubmit} ref={ref}>
          <ArrowBackIosNewIcon onClick={closeModalHandler} />
          <FormHeader>LIFE IS A SENTENCE</FormHeader>
          <Input
            autoFocus
            autoComplete='off'
            type='text'
            name='post-writeModal'
            id='post-write-label'
            placeholder='들려주고 싶은 한 마디를 적어보세요. (최대 30자, 한글만 가능)'
            value={title}
            onChange={onChangeTitle}
          />
          <Button buttonActive={buttonActive} id='Button' type='submit'>
            작성 완료
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default WriteModal;
