document.addEventListener('keydown',function(e) {

    if (event.code == "KeyA") {
        let audio = new Audio("white_keys/A.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    } else if (event.code == "KeyS") {
        let audio = new Audio("white_keys/S.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if (event.code == "KeyD") {
        let audio = new Audio("white_keys/D.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if (event.code == "KeyF") {
        let audio = new Audio("white_keys/F.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if (event.code == "KeyG") {
        let audio = new Audio("white_keys/G.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if (event.code == "KeyH") {
        let audio = new Audio("white_keys/H.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    } else if(event.code == "KeyJ") {
        let audio = new Audio("white_keys/J.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);
        /*negras*/
    } else if(event.code == "KeyW") {
        let audio = new Audio("black_keys/W.mp3");

        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if(event.code == "KeyE") {
        let audio = new Audio("black_keys/E.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);
    }else if(event.code == "KeyT") {
        let audio = new Audio("black_keys/T.mp3");

        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if(event.code == "KeyY") {
        let audio = new Audio("black_keys/Y.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    }else if(event.code == "KeyU") {
        let audio = new Audio("black_keys/U.mp3");
        let src = audio.src;
        audio.play();
        console.log(src, audio);

    } else
        console.log("Try another key!");


    /*alternative:
    let nodeKeys = [...document.querySelectorAll("kbd")];
let keys = nodeKeys.map(key => key.innerText);

let getSpecificKey = function (event) {
  let keyCode = event.code;

  return keys.includes(keyCode.substr(keyCode.length - 1));
}

document.addEventListener("keydown", event => {
  if (getSpecificKey(event)) {
    new Audio("audio/" + event.key + ".mp3").play();
  }
     */

});