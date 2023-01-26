import { Container } from './styles';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';

const Footer = () => {
  return (
    <Container>
      <span>&copy;2023 JunTae Hahm All Rights Reserved.</span>
      <div>
        <a href='https://github.com/JunTaeHahm/sentence-u'>
          <FaGithub />
          GITHUB
        </a>
        <a href='https://velog.io/@ahuuae/series/LIS-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80'>
          <ImBlog />
          VELOG
        </a>
      </div>
    </Container>
  );
};

export default Footer;
