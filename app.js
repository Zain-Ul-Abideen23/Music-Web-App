function openform() {
    const overlay = document.querySelector(".overlay").classList.add("showoverlay");
    const showlogin = document.querySelector(".login-form").classList.add("showlogin");

}
function closemodal() {
    const overlay = document.querySelector(".overlay").classList.remove("showoverlay");
    const showlogin = document.querySelector(".login-form").classList.remove("showlogin");

}
const close = document.querySelector(".login-form span")
close.addEventListener("click",closemodal)

const loginbtn =document.querySelector(".btn-login");
loginbtn.addEventListener("click",openform);


let progress = document.querySelector("#progress");
let music = document.querySelector("#music");
let ControlIco = document.querySelector("#ctrlIcon");


music.onloadedmetadata =function(){
    progress.max = music.duration;
    progress.value = music.currentTime;
}

function playpause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        music.pause(); // this is the method ( by default in JS) used to pause
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }
    else{
        music.play();    // this is the method ( by default in JS) used to play
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


    setInterval(()=>{
        progress.value =music.currentTime;
    },500)

progress.onchange = function(){
    music.play();
    music.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
}

let musicplayer = document.querySelector(".container");
let webpage = document.querySelector(".webpage");

function displaynone(event){
    event.preventDefault();
    webpage.style.display = "none";
    musicplayer.style.display = "flex";
    closemodal();
}




