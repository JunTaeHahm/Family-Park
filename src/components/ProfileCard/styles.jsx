import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 210px;
  max-width: 350px;
  max-height: 210px;
  background-color: var(--background);
  border: 0.13rem solid var(--primary-grey);
  border-radius: 1rem;
  cursor: pointer;
  .card-button {
    position: absolute;
    transform: translate(-50%, 125%);
    width: auto;
    border-radius: 1rem;
    border: none;
    background-color: var(--primary-blue);
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover {
    border-color: var(--primary-blue);
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.3s;
    .card-button {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 85vw;
      height: max-content;
      padding: 1.5rem 0;
    }
  }
`;

export const UserAvatar = styled.img`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const OnlineLight = styled.span`
  position: relative;
  top: -1rem;
  left: 1.8rem;
  width: 1rem;
  height: 1rem;
  border: 0.13rem solid var(--background);
  border-radius: 50%;
  background-color: var(--primary-blue);
`;

export const UserName = styled.div`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.2rem;
`;
export const UserTitle = styled.div``;

export const CardButton = styled.button``;
