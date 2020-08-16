import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @font-face {
        font-family: 'AmazonEmberLight';
        src: url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Lt.woff2') format('woff2'), url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Lt.woff') format('woff');
    }

    @font-face {
        font-family: 'AmazonEmber';
        src: url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Rg.woff2') format('woff2'), url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Rg.woff') format('woff');
    }

    @font-face {
        font-family: 'AmazonEmberBold';
        src: url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Bd.woff2') format('woff2'), url('https://assets.opendata.aws/fonts/amazon-ember/AmazonEmber_W_Bd.woff') format('woff');
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        color: #FFF;
        
    }

    html, body, #root {
        height: 100%;
        min-height: 100vh;
    }
    body {
        font: 14px 'AmazonEmberLight';
        background: #FFF;
        -webkit-font-smoothing: antialiased !important;
    }
    button {
        cursor: pointer;
    }

    `;