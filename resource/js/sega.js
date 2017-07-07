let timer = 0;
let targetD = document.getElementById('sega');
let sound = document.getElementById('logo_sound');
targetD.style.opacity = 1;
let fadeEffect = setInterval(()=>{
    console.log("timer: ", timer);
    if(timer == 15){
        sound.play();
        timer++;
    }else if(timer < 20){
        timer++;
    } else{
        if (targetD.style.opacity <= 0)
        {
          clearInterval(fadeEffect);
        }
        else
        {
          targetD.style.opacity -= 0.03;
        }
    }
}, 100);
