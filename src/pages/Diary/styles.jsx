import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
`;
export const CalendarWrap = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  .react-calendar {
    width: 70%;
    min-width: 350px;
    max-width: 70%;
    max-height: 70%;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 5px 5px 10px #c6c6c6, -5px -5px 10px #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 30px;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
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
    height: 15%;
  }
  .react-calendar__navigation__label {
    font-family: var(--IMB-Rg);
    flex-grow: 0 !important;
    width: 200px;
    min-width: 200px;
  }
  .react-calendar__navigation button {
    font-size: 24px;
    background: none;
    height: 30px !important;
    max-height: min-content !important;
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
    width: 30px;
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none !important;
  }
  .react-calendar__navigation__next-button:enabled:hover,
  .react-calendar__navigation__next-button:enabled:hover,
  .react-calendar__navigation__prev-button:enabled:hover,
  .react-calendar__navigation__prev-button:enabled:hover {
    border-radius: 50%;
    background-color: var(--darkgray) !important;
    color: var(--white) !important;
  }
  .react-calendar__viewContainer {
    cursor: pointer;
    font-family: var(--IMB-Li);
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
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
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--gray);
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 20px 10px;
    background: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    abbr {
      display: inline-block;
      width: 2.5em;
      height: 2.5em;
      min-width: 2.5em;
      min-height: 2.5em;
      line-height: 2.5em;
      border-radius: 50%;
    }
  }
  .react-calendar__tile:disabled abbr {
    background-color: #f0f0f0;
  }
  .react-calendar__century-view__decades__decade:hover,
  .react-calendar__decade-view__years__year:hover,
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
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
export const DiaryWrap = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 100%;
`;
