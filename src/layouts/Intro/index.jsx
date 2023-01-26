import { Container, Image, Info, Title, PS, Description } from './styles';
import React from 'react';

const Intro = () => {
  return (
    <Container>
      <Info>
        <Image
          src={'https://i.pinimg.com/originals/c0/16/19/c016194b0b2d726ea8d948dd7d7d3ba7.gif'}
          alt='poster'
        />
        <Description>
          <Title>SENTENCE U</Title>
          <p>
            SENTENCE U는 <b>&quot;삶은 한 문장이다.&quot;</b> 라는 문장에서 영감을 얻어 한 문장으로
            사람들에게 동기부여와 여러 긍정적인 메시지를 담기위해 만들어진 공간입니다.
          </p>
        </Description>
      <PS>&quot;여러분의 한 문장으로 이 공간을 아름답게 빛내주세요.&quot;</PS>
      </Info>
    </Container>
  );
};

export default Intro;
