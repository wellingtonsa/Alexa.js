export function recognition(text, callback){
  
   if (window.hasOwnProperty('webkitSpeechRecognition')) {

     const recognition = new window.webkitSpeechRecognition();
     recognition.interimResults = true;
     recognition.lang = "PT-BR";
     recognition.continuous = true;
     recognition.start();
     
     recognition.onresult = function(event) {
       for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
           const content = event.results[i][0].transcript.trim();
           if(text.includes(content)) {
             recognition.stop();
             callback();
          }
        }
       }
     }
    }
  }

  
  export function findAudios(xhr, response){
      if(response.body){
        let content = new TextDecoder().decode(response.body);
        
        let externalaudio = content.search('AudioPlayer')
        
        if (externalaudio > 0){
          let urlstart = content.search('streamUrl')
          let urlend = content.search('offsetInMilliseconds')
          if (urlstart > 0){
            let url = content.substring(urlstart + 12, urlend - 3)
            return url;
          }
        }
      }else if(response.multipart.length){
        let audios = [];
        response.multipart.forEach(multipart => {
          if(multipart.headers['Content-Type'] === 'audio/mpeg') {
            const start = multipart.meta.body.byteOffset.start;
            const end = multipart.meta.body.byteOffset.end;

            let  content = xhr.response.slice(start, end);

            console.log(new TextDecoder().decode(content))
            let blob = new  Blob([content], { type: "audio/mp3" });
            
            audios.push(window.URL.createObjectURL(blob))
          }
        });

        return audios[0];
      }
  }
