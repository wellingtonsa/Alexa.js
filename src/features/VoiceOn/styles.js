import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(7, 7, 7, 0.89);
  .voice {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    .close {
      background: #454141;
      padding: 7px;
      height: 50px;
      border-radius: 50%;
      margin: 10px;
      cursor: pointer;
      transition: opacity 0.3s;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export const VoiceBar = styled.div`
  width: 100%;
  height: 15px;
  animation: voice 2s infinite;


  @keyframes voice {
    0% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 0%, #1C69C2 100%);
    }
    5% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 10%, #1C69C2 100%);
    }
    10% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 30%, #1C69C2 100%);
    }
    15% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 35%, #1C69C2 100%);
    }
    20% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 40%, #1C69C2 100%);
    }
    25% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 30%, #1C69C2 100%);
    }
    30% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 20%, #1C69C2 100%);
    }
    35% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 30%, #1C69C2 100%);
    }
    40% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 40%, #1C69C2 100%);
    }
    45% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 50%, #1C69C2 100%);
    }
    50% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 60%, #1C69C2 100%);
    }
    55% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 70%, #1C69C2 100%);
    }
    60% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 80%, #1C69C2 100%);
    }
    65% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 70%, #1C69C2 100%);
    }
    70% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 60%, #1C69C2 100%);
    }
    75% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 50%, #1C69C2 100%);
    }
    80% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 40%, #1C69C2 100%);
    }
    85% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 30%, #1C69C2 100%);
    }
    90% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 20%, #1C69C2 100%);
    }
    95% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 15%, #1C69C2 100%);
    }
    100% {
      background: radial-gradient(50% 50% at 50% 50%, #10E2E2 10%, #1C69C2 100%);
    }
  }
`;

