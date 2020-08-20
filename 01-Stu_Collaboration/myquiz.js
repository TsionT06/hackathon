
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var spongebobScore = 0;
var patrickScore = 0;
var planktonScore = 0;
var garyScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a4.addEventListener("click", spongebob);
q2a4.addEventListener("click", spongebob);
q3a1.addEventListener("click", spongebob);
q4a2.addEventListener("click", spongebob);

q1a2.addEventListener("click", patrick);
q2a1.addEventListener("click", patrick);
q3a3.addEventListener("click", patrick);
q4a1.addEventListener("click", patrick);

q1a3.addEventListener("click", plankton);
q2a3.addEventListener("click", plankton);
q3a4.addEventListener("click", plankton);
q4a3.addEventListener("click", plankton);

q1a1.addEventListener("click", gary);
q2a2.addEventListener("click", gary);
q3a2.addEventListener("click", gary);
q4a4.addEventListener("click", gary);

//#TODO: Define quiz functions here
function spongebob() {
  spongebobScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function patrick() {
  patrickScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function plankton() {
  planktonScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function gary() {
  garyScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (spongebobScore >= 3) {
    result.innerHTML = "Spongebob";
    result.appendChild(document.createElement('img')).src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/200px-SpongeBob_SquarePants_character.svg.png';
    result.appendChild(document.createElement('p')).innerHTML = "SpongeBob: The main protagonist of the SpongeBob SquarePants series. He has a knack for getting into trouble, and he is known for his optimistic and child-like behavior. He’s a very outgoing and friendly sponge, always willing to lend a helping hand to everybody and anybody. However, SpongeBob is rather clueless when it comes to danger, and though he is quite heroic, he is a bit too naive for his own good. He trusts others very easily and he is a purely innocent fellow. SpongeBob has several awesome qualities to him, such as his loyalty, positivity, dedication, and more. It’s great to be similar to this particular yellow sponge.";
    style.height = '100px'
    style.width = '100px'
  } else if (patrickScore >= 3) {
    result.innerHTML = "Patrick";
    result.appendChild(document.createElement('img')).src = 'https://img.etimg.com/thumb/msid-77480658,width-650,imgsize-186246,,resizemode-4,quality-100/untitled-2.jpg';
  } else if (planktonScore >= 3) {
    result.innerHTML = "Plankton";
    result.appendChild(document.createElement('img')).src = 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/121024981/original/973e1c3b779166ca18762fd7e7e77fe7a0b93949.jpg';
  } else if (garyScore >= 3) {
    result.innerHTML = "Gary";
    result.appendChild(document.createElement('img')).src = 'https://i.redd.it/oy0mk77qhdp41.png';
  } else {
    result.innerHTML = "Hmm.. Try Again.";
  }
}

//var spongebobImg = document.getElementById('spongebobImgId');
//if(songebobImg && spongebobImg.style) {
    //songebobImg.style.height = '100px';
    //spongebobImg.style.width = '200px';
//}

