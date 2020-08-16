import React,{ useState } from 'react';
import Input from 'common/styled/Input';
import Button from 'common/styled/Button';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

function SignUp() {

  const history = useHistory();

  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [amazonId, setAmazonId] = useState("");

  const handleNext = () => {
    history.push('/home');
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