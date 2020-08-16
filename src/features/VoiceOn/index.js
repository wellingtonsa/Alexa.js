import React from 'react';
import * as S from './styles';

function VoiceOn({ onClose }) {

  const handleClick = () => {
    onClose(false);
  }

  return (
    <S.Container>
      <div className="voice">
        <div className="close">
          <img src={require('assets/icons/close.svg')} alt="" onClick={handleClick}/>
        </div>
        <S.VoiceBar/>
      </div>
    </S.Container>
  )
}

export default VoiceOn;