console.log('hi');
var firstSentence = 'go to atlantis';
var secondSentence = 'go to alien planet';
var thirdSentence = 'be friendly';
var fourthSentence = 'be destructive';
var fifthSentence = 'leave the world';
var sixthSentence = 'live in the world';
var seventhSentence = 'make family with alien';
var eighthSentence = 'go solo';
window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');
  var firstChoice = document.getElementById('choice-one');
  var secondChoice = document.getElementById('choice-two');
  var thirdChoice = document.getElementById('choice-three');
  var fourthChoice = document.getElementById('choice-four');
  var fifthChoice = document.getElementById('choice-five');
  var sixhChoice = document.getElementById('choice-six');
  var seventhChoice = document.getElementById('choice-seven')
  var eighthChoice = document.getElementById('choice-eight')

  firstChoice.onclick = function(event) {
    creatRow(firstSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  secondChoice.onclick = function(event) {
    creatRow(secondSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  thirdChoice.onclick = function(event) {
    creatRow(thirdSentence);
    document.getElementById('third-step').style.display = 'none';

  }
  fourthChoice.onclick = function(event) {
  creatRow(fourthSentence);
  document.getElementById('fourth-step').style.display = 'none';

  }
  fifthChoice.onclick = function(event) {
  creatRow(fifthSentence);
  document.getElementById('fifth-step').style.display = 'none';

  }
  sixthChoice.onclick = function(event) {
  creatRow(fourthSentence);
  document.getElementById('fourth-step').style.display = 'none';

  }
  seventhChoice.onclick = function(event) {
  creatRow(seventhChoiceSentence);
  document.getElementById('seventh-step').style.display = 'none';
}

  eighthChoice.onclick = function(event) {
  creatRow(eighthChoice);
  document.getElementById('eighth-step').style.display = 'none';
  }



  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
    creatRow('welcome aboard,' + nameInput.value);
  }

  console.log(nameInput, nameBtn);
}

//this function creates and adds rows to our app
function creatRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}
