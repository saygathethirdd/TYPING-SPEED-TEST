import { easyPassageObj, mediumPassageObj, hardPassageObj } from "./obj.js";

 const timeSetButton=document.querySelector('.time-set');
 const restartButton=document.querySelector('.restart');
 const timedHtml=document.querySelector('.time-para');
 const passageParagraph=document.querySelector('.passage-para');
 const passageButton=document.querySelector('.passage-changer');
 const easyDificultyButton=document.querySelector('.easy-button');
 const mediumDificultyButton=document.querySelector('.medium-button');
 const hardDificultyButton=document.querySelector('.hard-button');
 const choosen=document.querySelectorAll('.choose');
 const textInput=document.getElementById('text-input');
 const accuracySpan=document.querySelector('.accuracy-span');
 const wordPMspan=document.querySelector('.word-per-min-span');
 const toggleBody=document.querySelector('.toggle');


 restartButton.addEventListener('click',startTimer);
 timeSetButton.addEventListener('click',toggleTimeSet);
 passageButton.addEventListener('click',randomPassage);
 easyDificultyButton.addEventListener('click',()=>{
  difiCultyLevel('easy')
 });
 mediumDificultyButton.addEventListener('click',()=>{
  difiCultyLevel('medium');
 });
 hardDificultyButton.addEventListener('click',()=>{
  difiCultyLevel('hard')
 });
 toggleBody.addEventListener('click',toggleBacground);



  let interval;
function startTimer(){
  textInput.value='';
  clearInterval(interval);
      let time;
    if(timeSetButton.classList.contains('first')){
        time=30;
      }else{
        time=60;
      }
    interval=setInterval(()=>{
      if(time < 0){
    comparePassageAndInput();
    clearInterval(interval);
      }else{
        timedHtml.innerHTML=Math.round(time--).toFixed(2); 
        console.log(1);
      }
      },1000)
};



function comparePassageAndInput(){
    let passageVal=passageParagraph.innerHTML.split(' ');
    let passageLength=passageVal.length;
    let inputVal=textInput.value.split(' ');
    let count=0;
    for(let i=0; i < passageLength; i++){
      if(passageVal[i] === inputVal[i]){
        count++;
      }
    }

    let percent=Math.round((count / passageLength) * 100).toFixed(2);
    let wordPerMin;
    if(timeSetButton.classList.contains('first')){
     wordPerMin=textInput.value.length / 5 ;
    wordPMspan.innerHTML=`${wordPerMin * 2}`;
    }else{
     wordPerMin=textInput.value.length / 5;
     wordPMspan.innerHTML=`${wordPerMin}`;
    }
    
    return accuracySpan.innerHTML=`${percent}%`;
};



function toggleTimeSet(){
    timeSetButton.classList.toggle('first');
    if(timeSetButton.classList.contains('first')){
      timeSetButton.innerHTML=`Timed (30s)`
    }else{
      timeSetButton.innerHTML=`Timed (60s)`
    }
}



let count=1;
function randomPassage(){
  let easy=easyPassageObj;
  let hard=hardPassageObj;
  let medium=mediumPassageObj;
    let thisFunction=dificultyChosen();
    if(thisFunction === 'Easy'){
      passageGenerator(easy);
    }else if(thisFunction === 'Medium'){
      passageGenerator(medium)
    }else if(thisFunction === 'Hard'){
      passageGenerator(hard);
    }
};




function passageGenerator(para){
   if(count === 1 && passageParagraph.innerHTML !== para[1]) {
        passageParagraph.innerHTML=para[1];
        count++;
      }else if(count === 2 && passageParagraph.innerHTML !== para[2]){
      passageParagraph.innerHTML=para[2];
      count++;
      }else if(count === 3 && passageParagraph.innerHTML !== para[3]){
        passageParagraph.innerHTML=para[3];
        count=1;
      }
}




function difiCultyLevel(para){
  if(para === 'easy'){
     easyDificultyButton.classList.add('added');
    hardDificultyButton.classList.remove('added');
    mediumDificultyButton.classList.remove('added');
    dificultyChosen();
  }else if(para === 'medium'){
     mediumDificultyButton.classList.add('added');
    hardDificultyButton.classList.remove('added');
    easyDificultyButton.classList.remove('added');
    dificultyChosen();
  }else if(para === 'hard'){
     hardDificultyButton.classList.add('added');
    easyDificultyButton.classList.remove('added');
    mediumDificultyButton.classList.remove('added');
    dificultyChosen();
  }
}




function dificultyChosen(){
    let thisButton;
    choosen.forEach(butt => {
      if(butt.classList.contains('added')){
        thisButton=butt.innerHTML;
      }
    });
    return thisButton;
 }


 function toggleBacground(){
  document.body.classList.toggle('light');
 }
/*

function hardPassageGen(){
  if(count === 1 && passageParagraph.innerHTML !== hardPassageObj[1]) {
        passageParagraph.innerHTML=hardPassageObj[1];
        count++;
      }else if(count === 2 && passageParagraph.innerHTML !== hardPassageObj[2]){
      passageParagraph.innerHTML=hardPassageObj[2];
      count++;
      }else if(count === 3 && passageParagraph.innerHTML !== hardPassageObj[3]){
        passageParagraph.innerHTML=hardPassageObj[3];
        count=1;
      }
}



function mediumPassageGen(){
  if(count === 1 && passageParagraph.innerHTML !== mediumPassageObj[1]) {
        passageParagraph.innerHTML=mediumPassageObj[1];
        count++;
      }else if(count === 2 && passageParagraph.innerHTML !== mediumPassageObj[2]){
      passageParagraph.innerHTML=mediumPassageObj[2];
      count++;
      }else if(count === 3 && passageParagraph.innerHTML !== mediumPassageObj[3]){
        passageParagraph.innerHTML=mediumPassageObj[3];
        count=1;
        }
}



function easyPassageGen(){
 if(count === 1 && passageParagraph.innerHTML !== easyPassageObj[1]) {
      passageParagraph.innerHTML=easyPassageObj[1];
      count++;
    }else if(count === 2 && passageParagraph.innerHTML !== easyPassageObj[2]){
    passageParagraph.innerHTML=easyPassageObj[2];
    count++;
    }else if(count === 3 && passageParagraph.innerHTML !== easyPassageObj[3]){
      passageParagraph.innerHTML=easyPassageObj[3];
      count=1;
    }
}




function difiCultyLevelEasy(){
    easyDificultyButton.classList.add('added');
    hardDificultyButton.classList.remove('added');
    mediumDificultyButton.classList.remove('added');
    console.log(choosen);
    dificultyChosen();
};



function difiCultyLevelMedium(){
    mediumDificultyButton.classList.add('added');
    hardDificultyButton.classList.remove('added');
    easyDificultyButton.classList.remove('added');
    console.log(choosen);
    dificultyChosen();
};



function difiCultyLevelHard(){
    hardDificultyButton.classList.add('added');
    easyDificultyButton.classList.remove('added');
    mediumDificultyButton.classList.remove('added');
    console.log(choosen);
    console.log(dificultyChosen());
};

*/
