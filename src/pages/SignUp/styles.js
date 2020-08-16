import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #153953;
`;

export const Header = styled.div`
  display: flex;
  padding: 7.5rem 0;
  width: 100%;
  flex-direction: column;
  align-items: center;

  h3 {
    font-weight: 100;
    text-align: center;
    font-size: 48px;
  }
`;

export const Content = styled.div`
    width: 40%;
  .styled-input {
    background: transparent;
    margin: 5rem 0;
    input {
      border-radius: 0px;
      background: transparent;
      border: 2px solid #396F94;
    }
  }

`;

export const Footer = styled.div`
    width: 40%;
    margin: 7em 0 1em 0;

  .styled-button {
    background: #2C5E7F;
    border-radius: 0px;
    input {
      border-radius: 0px;
      background: transparent;
      border: 2px solid #396F94;
    }
  }

`;
