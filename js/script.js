console.log("Welcome to Musicorum");

//Initalize the variables
let songIndex = 1;
const audioElement = new Audio("media/05. Barbaadiyan - Shiddat.mp3");
const masterplay = document.getElementById("masterplay");
const myProgressbar = document.getElementById("myProgressbar");
const gif = document.getElementById("gif");
const songitem = Array.from(document.getElementsByClassName("song-item"));
const Mastersongname = document.getElementsByClassName('Mastersongname');


let songs = [
  {
    songname: "na-ja",
    filepath: "media/1.mp3",
    coverpath: "media/cover3.png",
    songtime: "03:28",
  },
  {
    songname: "Chand Sifarish",
    filepath: "media/2.mp3",
    coverpath: "media/cover3.png",
    songtime:"04:37",
  },
  {
    songname: "Haan Tu Hain -KK",
    filepath: "media/3.mp3",
    coverpath: "media/cover3.png",
    songtime:"05:25",
  },
  {
    songname: "Bewafa (Imran Khan)",
    filepath: "media/4.mp3",
    coverpath: "media/cover3.png",
    songtime:"03:42",
  },
  {
    songname: "Barbaadiyan - Shiddat",
    filepath: "media/5.mp3",
    coverpath: "media/cover3.png",
    songtime:"03:50",
  },
  {
    songname: "Manike Mage Hithe - Yohani",
    filepath: "media/6.mp3",
    coverpath: "media/cover3.png",
    songtime:"2:42",
  },
  {
    songname: "Naacho Naacho - RRR",
    filepath: "media/7.mp3",
    coverpath: "media/cover3.png",
    songtime:"03:34",
  },
  {
    songname: "Raataan Lambiyan",
    filepath: "media/8.mp3",
    coverpath: "media/cover3.png",
    songtime:"03:50",
  },
  {
    songname: "Luv Ju - Arijit Singh",
    filepath: "media/9.mp3",
    coverpath: "media/cover3.png",
    songtime:"04:04",
  },
];

songitem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
  element.getElementsByClassName('songtime')[0].innerText = songs[i].songtime;
});

//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    //Play a song
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    masterplay.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-pause-circle");
    audioElement.pause();
    gif.style.opacity = 0;
  }
});

//listen to Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressbar.value = progress;
});

myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
    //   console.log(e.target);
      makeAllplays();
      songIndex=parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src=`media/${songIndex}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
      gif.style.opacity = 1;
      Mastersongname.innerText=songs[songIndex].songname;
    
    });
  });


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=1;
    }
    else{
        songIndex++;
    }
    audioElement.src=`media/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    Mastersongname.innerText=songs[songIndex].songname;

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=9;
    }
    else{
        songIndex--;
    }

    audioElement.src=`media/${songIndex}.mp3`;
    Mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;

})