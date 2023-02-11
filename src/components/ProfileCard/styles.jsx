import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 210px;
  max-width: 350px;
  max-height: 210px;
  border: 0.13rem solid var(--primary-grey);
  border-radius: 1rem;
  background-color: var(--background);
  cursor: pointer;
  .card-button {
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    width: auto;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--primary-blue);
    color: #fff;
    font-size: 1rem;
    white-space: nowrap;
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
  object-fit: cover;
  border: 0.2rem solid transparent;
  border-radius: 50%;
  background-image: ${(props) =>
    props.isOnline
      ? 'linear-gradient(#fff, #fff), linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'
      : 'none'};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const UserName = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;
export const UserTitle = styled.div`
  @media screen and (max-width: 767px) {
    & {
      overflow: hidden;
      max-width: 90%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const CardButton = styled.button``;
