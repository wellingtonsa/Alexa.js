import React, {  useState, useEffect } from 'react';
import * as S from './styles';
import Clock from 'components/Clock';
import VoiceOn from 'features/VoiceOn';
import * as Voice from 'utils/Voice';
import moment from 'moment';
import config from 'config';

const AVS = require('alexa-voice-service');

function Home() {

  const [ voiceOn, setVoiceOn ] = useState(false);


  const avs = new AVS({
    debug: true,
    clientId: 'amzn1.application-oa2-client.0b7df614da91493abb2a49b13861c5f4',
    deviceId: 'AlexaPopOS',
    deviceSerialNumber: '46f663d40c174991a1ea78eb29a2860a',
    redirectUri: `http://${window.location.host}/home`
  });


  useEffect(() => {
    avs.requestMic().then(() => Voice.recognition('Alexa', () => {
      avs.player.playUrl(require('assets/sounds/sound-activate.mp3')).then(() =>{
        avs.startRecording();
        avs.player.stop();
      })
    }))

    avs.getTokenFromUrl()
    .then(() => avs.getToken())
    .then(token => localStorage.setItem('token', token))
    .catch(() => {
      const cachedToken = localStorage.getItem('token');

      if (cachedToken) {
        avs.setToken(cachedToken);
        return avs.requestMic();
      }
    });
    
    avs.on(AVS.EventTypes.TOKEN_INVALID, () => {
      avs.logout()
      .then(avs.login())
    });




    avs.on(AVS.EventTypes.RECORD_START, () => {
      setVoiceOn(true)
      setTimeout(() => {
        avs.stopRecording().then(dataView => {
          avs.sendAudio(dataView)
          .then(({xhr, response}) => {
      
            let audios = Voice.findAudios(xhr, response);
            let promises = [];

            for(let i = 0; i < audios.length; i++){
              console.log(audios[i])
              promises.push(avs.player.enqueue(audios[i]));
            }

            if (promises.length) {
              Promise.all(promises)
             .then(() => {
                avs.player.playQueue().then(() => {
                  avs.requestMic().then(() => Voice.recognition('Alexa', () => {
                    avs.player.playUrl(require('assets/sounds/sound-activate.mp3')).then(() =>{
                      avs.startRecording();
                      avs.player.stop();
                    })
                  }))
                  setVoiceOn(false)
                })
              });
            }          
          })
          .catch(error => {
            avs.player.playUrl(require('assets/sounds/sound-error.mp3')).then(() =>{
              console.error(error);
              Voice.recognition('Alexa', () => {
                avs.player.playUrl(require('assets/sounds/sound-activate.mp3')).then(() =>{
                  avs.startRecording();
                  avs.player.stop();
                })
              })
              setVoiceOn(false)
            })
          });
        })
      }, 2500)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
          <img src={require("assets/icons/settings.svg")} alt="" onClick={() => avs.requestMic().then((stream) => avs.connectMediaStream(stream).then(() => Voice.recognition('Alexa', () => avs.startRecording())))}/>
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