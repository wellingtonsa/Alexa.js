import React, {  useState } from 'react';
import * as S from './styles';
import Clock from 'components/Clock';
import VoiceOn from 'features/VoiceOn';
import moment from 'moment';
import config from 'config';

function Home() {

  const [ voiceOn, setVoiceOn ] = useState(true);

  return (
  <>
    { voiceOn && (<VoiceOn onClose={setVoiceOn}/>)}
    <S.Container wallpaper={"https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg"}>
      <S.Header>
        <div className="time-weather">
          <div className="time">
            <Clock/>
          </div>
          <div className="weather">
            <img src={require("assets/icons/clouds.svg")} alt=""/>
            <h3>32°</h3>
          </div>
        </div>
        <div className="settings">
          <img src={require("assets/icons/settings.svg")} alt=""/>
        </div>
      </S.Header>
      <S.Content>
        <div className="date">
          <h3>{moment().format(config.date_format)}</h3>
        </div>
      </S.Content>
      <S.Footer>
        <div className="tips">
          <h2>Tente "Alexa, que horas são?"</h2>
        </div>
      </S.Footer>
    </S.Container>
  </>)
}

export default Home;