import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: grid;
    padding: 40px;
    grid-auto-rows: 35% 55% 10%;
    width: 100%;
    height: 100%;
    background-image: ${({ wallpaper }) =>  wallpaper ? 
    css `
    url(${wallpaper})
    ` : 
    css`
     url(https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg)
    `};
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #153953;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    .time-weather {
        margin-top: 15px;
        .time {

        }

        .weather {
            display: flex;
            align-items: center;

            h3 {
                font-size: 3.25em;
                font-weight: 100;
                margin-left: 10px;
            }
        }
    }

    .settings {
        img {
            cursor: pointer;
            opacity: 0.4;
            transition: opacity 0.5s;

            :hover {
                opacity: 1;
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;


    .date {
        display: flex;
        justify-content: center;

        h3 {
            font-size: 4em;
            font-weight: 100;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .tips {
        display: flex;
        justify-content: center;

        h2 {
            font-size: 2.5em;
            font-weight: 100;
        }
    }
`;