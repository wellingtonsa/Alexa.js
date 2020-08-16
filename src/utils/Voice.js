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
            };
          }
        }
      };
    };
  }