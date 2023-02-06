import { Container, Image, Title, PS, Description } from './styles';
import React from 'react';

const Intro = () => {
  return (
    <Container>

        <Image
          src={'https://www.sentenceu.co.kr/src/assets/images/landing_graphic.gif'}
          alt='poster'
        />

        <Description>
          <Title>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Title>
          <p>
            센텐스유는 짧은 글로 사람들에게 동기부여와 여러 긍정적인 메시지를 담기위해 만들어진
            공간입니다.
          </p>
        </Description>

        <PS>&quot;여러분의 한 마디로 이 공간을 아름답게 빛내주세요.&quot;</PS>
        
    </Container>
  );
};

export default Intro;
