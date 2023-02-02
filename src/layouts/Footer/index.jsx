import { Container } from './styles';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';

const Footer = () => {
  return (
    <Container>
      <div>
        <span>&copy;2023. JunTae Hahm All Rights Reserved.</span>
        <div>
          <a href='https://github.com/JunTaeHahm/sentence-u'>
            <FaGithub />
            GITHUB
          </a>
          <a href='https://velog.io/@ahuuae/series/SENTENCE-U-Log'>
            <ImBlog />
            VELOG
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
