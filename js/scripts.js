console.log('OK');
const player = new Plyr('#player', {
  
    controls : ['play', 'current-time', 'progress'],
    keyboard : { focused: true, global: true },
    seekTime : 5,
    invertTime : false,
    youtube: { noCookie: false, rel: 0, showinfo: 0, iv_load_policy: 0, modestbranding: 0 },
    
   });


///////////////////         BLINK           //////////////

   window.addEventListener("load", function() {
    var f = document.getElementById('title');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 800);
}, false); 

/////////////////////////////////////////////


