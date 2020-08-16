import React,{ useState, useEffect, useCallback } from 'react';
import Input from 'common/styled/Input';
import Button from 'common/styled/Button';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

const AVS = require('alexa-voice-service');

function SignUp() {

  const history = useHistory();

  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [amazonId, setAmazonId] = useState("");

  const avs = new AVS({
    debug: true,
    clientId: 'amzn1.application-oa2-client.0b7df614da91493abb2a49b13861c5f4',
    deviceId: 'AlexaPopOS',
    deviceSerialNumber: 'cbb5e5eb5e6b4df3b395146563395463',
    redirectUri: `http://${window.location.host}/home`
  });

  useEffect(() => {
    const cachedToken = localStorage.getItem('token');

    if (cachedToken) {
      avs.setToken(cachedToken);
      history.push('/home');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleNext = () => {
      return avs.login()
  }


  return (
  <S.Container>
    <S.Header>
      <h3>Bem vindo(a) a Alexa</h3>
    </S.Header>
    <S.Content>
      <Input placeholder="Client ID" value={clientId} onChangeValue={setClientId} />
      <Input placeholder="Client Secret" value={clientSecret} onChangeValue={setClientSecret} />
      <Input placeholder="Amazon ID" value={amazonId} onChangeValue={setAmazonId} />
    </S.Content>
    <S.Footer>
      <Button label="Prosseguir" onClick={handleNext}/>
    </S.Footer>
  </S.Container>);
}

export default SignUp;