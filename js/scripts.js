console.log('OK');
const player = new Plyr('#player', {
  
    controls : ['play', 'current-time', 'progress'],
    keyboard : { focused: true, global: true },
    seekTime : 5,
    invertTime : false,
   });
   