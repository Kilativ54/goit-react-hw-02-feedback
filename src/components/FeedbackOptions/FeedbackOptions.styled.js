import styled from '@emotion/styled';

export const BtnFeedback = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:focus {
    color: #171e29;
  }
  &:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }
  &:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }
  &:nth-of-type(even) {
    margin: auto 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
