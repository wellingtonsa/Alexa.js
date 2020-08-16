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
    deviceSerialNumber: 'cbb5e5eb5e6b4df3b395146563395463',
    redirectUri: `http://${window.location.host}/home`
  });


  useEffect(() => {
    avs.requestMic().then(() => Voice.recognition('Alexa', () => avs.startRecording()))

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

    avs.player.on(AVS.Player.EventTypes.ENDED, () => {
      Voice.recognition('Alexa', () => avs.startRecording());
      setVoiceOn(false)
    });



    avs.on(AVS.EventTypes.RECORD_START, () => {
      setVoiceOn(true)
      setTimeout(() => {
        avs.stopRecording().then(dataView => {
          avs.sendAudio(dataView)
          .then(({xhr, response}) => {
            var promises = [];
            var audioMap = {};
            var directives = null;
            if (response.multipart.length) {
              response.multipart.forEach(multipart => {
                let body = multipart.body;
                if (multipart.headers && multipart.headers['Content-Type'] === 'application/json') {
                  try {
                    body = JSON.parse(body);
                  } catch(error) {
                    console.error(error);
                  }
      
                  if (body && body.messageBody && body.messageBody.directives) {
                    directives = body.messageBody.directives;
                  }
                } else if (multipart.headers['Content-Type'] === 'audio/mpeg') {
                  const start = multipart.meta.body.byteOffset.start;
                  const end = multipart.meta.body.byteOffset.end;
      

                  var slicedBody = xhr.response.slice(start, end);

                  audioMap[multipart.headers['Content-ID']] = slicedBody;
                }
              });
      
              function findAudioFromContentId(contentId) {
                contentId = contentId.replace('cid:', '');
                for (var key in audioMap) {
                  if (key.indexOf(contentId) > -1) {
                    return audioMap[key];
                  }
                }
              }
      
              directives.forEach(directive => {
                if (directive.namespace === 'SpeechSynthesizer') {
                  if (directive.name === 'speak') {
                    const contentId = directive.payload.audioContent;
                    const audio = findAudioFromContentId(contentId);
                    if (audio) {
                      promises.push(avs.player.enqueue(audio));
                    }
                  }
                } else if (directive.namespace === 'AudioPlayer') {
                  if (directive.name === 'play') {
                    const streams = directive.payload.audioItem.streams;
                    streams.forEach(stream => {
                      const streamUrl = stream.streamUrl;
      
                      const audio = findAudioFromContentId(streamUrl);
                      if (audio) {
                        promises.push(avs.player.enqueue(audio));
                      } else if (streamUrl.indexOf('http') > -1) {
                        const xhr = new XMLHttpRequest();
                        const url = `/parse-m3u?url=${streamUrl.replace(/!.*$/, '')}`;
                        xhr.open('GET', url, true);
                        xhr.responseType = 'json';
                        xhr.onload = (event) => {
                          const urls = event.currentTarget.response;
      
                          urls.forEach(url => {
                            avs.player.enqueue(url);
                          });
                        };
                        xhr.send();
                      }
                    });
                  } else if (directive.namespace === 'SpeechRecognizer') {
                    if (directive.name === 'listen') {
                      const timeout = directive.payload.timeoutIntervalInMillis;
                      // enable mic
                    }
                  }
                }
              });
      
              if (promises.length) {
                Promise.all(promises)
              .then(() => {
                  avs.player.playQueue()
                });
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
        })
      }, 5000)
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