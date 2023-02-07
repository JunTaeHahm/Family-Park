import { Container } from './styles';
import React from 'react';

const Spinner = () => {
  return (
    <Container>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Spinner;
