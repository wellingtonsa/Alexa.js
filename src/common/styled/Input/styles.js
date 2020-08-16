import styled from "styled-components";

export const Container = styled.div`
    position: relative;
  > .input-placeholder {
    position: absolute;
    z-index: 5;
    top: -7.5px;
    left: 20px;
    color: #396F94;
    background: #153953;
    font-family: 'AmazonEmberLight';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 16px;
    height: 14px;
    padding: 0 5px;
    transition: opacity 0.4s;
    opacity: ${(({ placeholderEnabled }) => placeholderEnabled?1:0)};

  }
  .styled-input {

    display: flex;
    align-items: center;
    position: relative;
    outline: none;
    width: 100%;
    background: #ECECEC;
    border-radius: 10px;
    margin-top:10px;

      > input {
        outline: none;
        border: 0px;
        width: 100%;
        height: 50px;
        font-family: 'AmazonEmberLight' !important;
        line-height: 21px;
        font-size: 15px;
        color: #FFF;
        border-radius: 6px;
        background: #ECECEC;
        padding: 5px 10px;

        ::placeholder {
          color: #396F94;
          font-family: 'AmazonEmberLight';
        }
      }
  }
`;
