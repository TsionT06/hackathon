
//Global Variables
//This is where you will define the variables you will be using in your project.
//Create four variables to track each possible quiz outcome
var questionCount = 0;
var spongebobScore = 0;
var patrickScore = 0;
var planktonScore = 0;
var garyScore = 0;
var restartButton

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
var restart = document.getElementById("restart");

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
    result.appendChild(document.createElement('img')).src = 'https://memestatic1.fjcdn.com/thumbnails/comments/Your+thinking+much+too+small+scale+_4a22c876fc8557e2b16d8e4a58458a97.png';
    result.appendChild(document.createElement('p')).innerHTML = "The main protagonist of the SpongeBob SquarePants series. He has a knack for getting into trouble, and he is known for his optimistic and child-like behavior. He’s a very outgoing and friendly sponge, always willing to lend a helping hand to everybody and anybody. However, SpongeBob is rather clueless when it comes to danger, and though he is quite heroic, he is a bit too naive for his own good. He trusts others very easily and he is a purely innocent fellow. SpongeBob has several awesome qualities to him, such as his loyalty, positivity, dedication, and more.";
  } else if (patrickScore >= 3) {
    result.innerHTML = "Patrick";
    result.appendChild(document.createElement('img')).src = "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png";
    result.appendChild(document.createElement('p')).innerHTML = "Ahhh, we all know Patrick Star. The airhead, hungry starfish of the show, the dumb and funny one, the character who loves eating. Patrick is known for being quite dimwitted and slow. But don’t get him wrong - Patrick may lack common sense, but he is smart in his own ways at times, even if he isn’t being clever intentionally. If you are similar to Patrick, then that means you might be reckless and dense sometimes, but you are intelligent in your own unique ways.";
  }else if (planktonScore >= 3) {
    result.innerHTML = "Plankton";
    result.appendChild(document.createElement('img')).src = 'https://i.pinimg.com/originals/57/87/71/578771f390405e42f16f1dc8eb42e24a.png';
    result.appendChild(document.createElement('p')).innerHTML = " Plankton is extremely goal-oriented, and he sorts out his priorities to make sure nothing stands in his way. Although his schemes never manage to work successfully, they are well-thought-out and designed rather thoroughly, even if there are always some aspects he seems to miss. If you are similar to Plankton, it may not be because you are a villain but because you are remarkably passionate about your goals and will not give up even when you are knocked down repeatedly.";
  } else if (garyScore >= 3) {
    result.innerHTML = "Gary";
    result.appendChild(document.createElement('img')).src = 'https://i.pinimg.com/originals/1c/82/2f/1c822f219720cd56325f48c88fef379a.png';
    result.appendChild(document.createElement('p')).innerHTML = "Gary is not your typical underwater house pet. He is quite an intellectual, spending most of his time reading and entertaining himself. Gary is rather mature and is known to love books and more educational stuff. He’s a major introvert, but Gary is also ridiculously stubborn. Once his mind is set on something, it is very difficult to persuade him otherwise. Just like how he refuses to bathe until he is forced into it. Even then, Gary will put a heck of a fight. If you are similar to Gary, then you may be a very stubborn but intelligent person.";
  } else {
    result.innerHTML = "Hmm.. Try Again.";
  }
}


restart.addEventListener("click", function(e) {
  location.reload();
}, false);

//var spongebobImg = document.getElementById('spongebobImgId');
//if(songebobImg && spongebobImg.style) {
    //spongebobImg.style.height = '100px';
    //spongebobImg.style.width = '200px';
//

