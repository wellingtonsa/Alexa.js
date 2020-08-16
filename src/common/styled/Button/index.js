import React from 'react';
import { Container } from './styles';

const Button = ({ label, onClick, id }) => (
    <Container id={id} onClick={onClick} className="styled-button">
        <span>{label}</span>
    </Container>
);

export default Button;
