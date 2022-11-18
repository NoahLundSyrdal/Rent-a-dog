let sekunder = 10;
// TIMER-FUNCTION THAT STARTS AT 10 SECONDS WITH 1000ms INTERVALS
    const countdown =setInterval(()=> {
        sekunder--;
        //EVERY 2 SECONDS, THE SOURCE FOR THE PICTURE SWITCHES
        if (sekunder == 10) {
          document.getElementById("homedog").src="../img/dog_1.jpg"
        } else if (sekunder == 8) {
          document.getElementById("homedog").src="../img/dog_3.jpg"
        } else if (sekunder == 6) {
          document.getElementById("homedog").src="../img/dog_4.jpg"
        }else if (sekunder == 4) {
          document.getElementById("homedog").src="../img/dog_8.jpg"
        // WHEN THE TIMER HITS 2 SECONDS, IT RESTARTS AT 10 SECONDS
        } else if (sekunder == 2) {
          document.getElementById("homedog").src="../img/dog_5.jpg"
          sekunder = 10
        }
      },1000)