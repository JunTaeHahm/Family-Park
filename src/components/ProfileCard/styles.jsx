import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  max-width: 350px;
  height: 210px;
  max-height: 210px;
  border: 0.13rem solid var(--primary-grey);
  border-radius: 1rem;
  background-color: var(--background);
  cursor: pointer;
  .card-button {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: auto;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    white-space: nowrap;
    color: #fff;
    opacity: 0;
    background-color: var(--primary-blue);
    transform: translate(-50%, 125%);
    transition: all 0.2s;
  }
  &:hover {
    border-color: var(--primary-blue);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.2s;
    .card-button {
      opacity: 1;
      transform: translate(-50%, 50%);
    }
  }
  @media screen and (max-width: 1023px) {
    & {
      width: 30vw;
      height: max-content;
      padding: 1.5rem 0;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 40vw;
      height: 30vh;
      padding: 1.5rem 0;
    }
  }
`;

export const UserAvatar = styled.img`
  position: relative;
  width: 5rem;
  height: 5rem;
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: ${(props) =>
    props.isOnline
      ? 'linear-gradient(#fff, #fff), linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
      : 'none'};
  background-clip: content-box, border-box;
  background-origin: border-box;
  object-fit: cover;
`;

export const UserName = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const UserTitle = styled.div`
  @media screen and (max-width: 767px) {
    & {
      overflow: hidden;
      max-width: 90%;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const CardButton = styled.button``;
