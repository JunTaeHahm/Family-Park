import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      padding-top: 70px;
    }
  }
`;
export const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  .react-calendar {
    width: 70%;
    max-width: 70%;
    max-height: 70%;
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 5px 5px 10px #c6c6c6, -5px -5px 10px #ffffff;
    display: block;
    padding: 2rem;
    gap: 2rem;
    @media screen and (max-width: 375px) {
      & {
        display: block;
        padding: 0.8rem;
      }
    }
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0;
    height: 5%;
    max-height: 5%;
    margin-bottom: 5%;
  }
  .react-calendar__navigation__label {
    font-family: var(--IMB-Rg);
    flex-grow: 0 !important;
    width: 100%;
    max-width: 200px;
    pointer-events: none;
  }
  .react-calendar__navigation button {
    font-size: 1rem;
    background: none;
    height: 2rem !important;
  }
  .react-calendar__navigation__label__labelText--from {
    max-width: min-content;
  }
  .react-calendar__navigation button:disabled {
    background-color: none;
    color: var(--black);
  }
  .react-calendar__navigation button:enabled:hover {
    background-color: none;
  }
  .react-calendar__navigation__next-button,
  .react-calendar__navigation__prev-button {
    width: 1.7rem;
    height: 1.7rem;
    max-width: 1.7rem !important;
    max-height: 1.7rem !important;
    background-color: transparent;
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none !important;
  }
  .react-calendar__viewContainer {
    cursor: pointer;
    font-family: var(--IMB-Li);
    height: 85%;
    max-height: 85%;
  }
  .react-calendar__month-view {
    height: 100%;
    min-height: 100%;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    padding: 0.7rem 0;
  }
  .react-calendar__month-view__weekdays__weekday {
    * {
      text-decoration: none !important;
    }
    &:nth-last-of-type(1) {
      color: var(--red);
    }
    &:nth-last-of-type(2) {
      color: var(--blue);
    }
  }
  .react-calendar__month-view__days {
    height: 100%;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--gray);
  }
  .react-calendar__tile {
    white-space: nowrap;
    max-width: 100%;
    padding: 20px 10px;
    background: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    abbr {
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      min-width: 2.5rem;
      min-height: 2.5rem;
      line-height: 2.5rem;
      border-radius: 50%;
    }
    @media screen and (max-width: 768px) {
      & {
        padding: 0;
      }
    }
    @media screen and (max-width: 375px) {
      & {
        abbr {
          width: 2rem;
          height: 2rem;
          min-width: 2rem;
          min-height: 2rem;
          line-height: 2rem;
        }
      }
    }
  }
  .react-calendar__tile:disabled abbr {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover abbr {
    background: #e6e6e6;
    color: var(--black);
  }
  .react-calendar__tile--now abbr {
    font-family: var(--IMB-Rg);
    color: var(--red);
  }
  .react-calendar__tile--now:enabled:hover abbr {
    background: #e6e6e6;
    color: var(--red);
  }
  .react-calendar__tile--active abbr {
    background: var(--darkgray) !important;
    color: var(--white) !important;
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      height: 45%;
      .react-calendar {
        width: 30rem;
        height: 30rem;
        max-width: none;
        max-height: none;
      }
    }
  }
  @media screen and (max-width: 375px) {
    & {
      height: 50%;
      .react-calendar {
        width: 80vw;
        height: 20rem;
        max-height: 20rem;
      }
    }
  }
`;
export const DiaryWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      height: 55%;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      height: 50%;
    }
  }
`;
