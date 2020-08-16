import styled from 'styled-components';

export const Container = styled.button`  

    display: flex;
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    background: #396F94;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    outline: none;
    border: 0;
    transition: opacity 0.2s;

        span {
            font-family: 'AmazonEmberLight';
            font-size: 24px;
            color: #FFF;
        }

    :hover {
        opacity: 0.8;
    }
`;
