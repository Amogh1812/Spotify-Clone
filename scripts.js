console.log("Welcome to spotify");
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar= document.getElementById('myProgressBar');
let mastersong=document.getElementById('mastersong');
let gif= document.getElementById('gif');
let songs=[
    {Songname:"Warriyon-Mortals",filepath:"song/1.mp3", coverpath:"covers/1.jpg"},
    {Songname:"Cielo - Huma-huma",filepath:"song/2.mp3", coverpath:"covers/2.jpg"},
    {Songname:"Deaf key- Invisibles",filepath:"song/3.mp3", coverpath:"covers/3.jpg"},
    {Songname:"Different heaven",filepath:"song/4.mp3", coverpath:"covers/4.jpg"},
    {Songname:"Janji-heroes-tonight",filepath:"song/5.mp3", coverpath:"covers/5.jpg"},
    {Songname:"Rabba",filepath:"song/6.mp3", coverpath:"covers/6.jpg"},
]
// audioElement.play();
//  Handle play/pause click
masterplay.addEventListener('click',()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   //update seekbar
  let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   //to find % of progress = (CT/DURATION) *100 
   console.log(progress);
   myProgressBar.value=progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
  const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
  }
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
         songIndex= parseInt(e.target.id) 
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src=`song/${songIndex+1}.mp3`;
         mastersong.innerHTML=songs[songIndex].Songname;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
    }
    )

})

//previos-next
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersong.innerHTML=songs[songIndex].Songname;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=4;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersong.innerHTML=songs[songIndex].Songname;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
})