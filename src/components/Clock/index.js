import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import config from 'config';
import moment from 'moment';

function Clock() {

  const [time, setTime]  = useState(moment().format(config.clock_format));

  useEffect(() => {
    runTime();
  }, [])

const runTime = () => {
  setInterval(() => {
    setTime(moment().format(config.clock_format));
  }, 1000);
}

  return (
  <Container>
    <h3>{time}</h3>
  </Container>
  );
}

export default Clock;