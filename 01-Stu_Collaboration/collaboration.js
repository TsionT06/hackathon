// GLOBAL VARIABLES
//start question count by zero
//start character score count by zero 
var questionCount = 0;
var spongebobScore = 0;
var patrickScore = 0;
var squidwardScore = 0;
var planktonScore = 0;
var garyScore = 0;
var mrkrabsScore = 0;


//Question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//Question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//Question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//Question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//var result = document.getElementById("result");

document.getElementById("q1a1").addEventListener("click", gary())
garyScore += 1;
questionCount += 1;
//alert("One Point to Gary");
if (questionCount >= 4) {
    updateResult(); {
    };
    //#TODO: Add Event Listeners to your answer choice variables.
    q1a1.addEventListener("click", gary);
    q1a2.addEventListener("click", squidward);
    q1a3.addEventListener("click", plankton);
    q1a4.addEventListener("click", spongebob);
    //Question 2
    q2a1.addEventListener("click", patrick);
    q2a2.addEventListener("click", squidward);
    q2a3.addEventListener("click", mrkrabs);
    q2a4.addEventListener("click", spongebob);
    //Question 3
    q3a1.addEventListener("click", spongebob);
    q3a2.addEventListener("click", gary);
    q3a3.addEventListener("click", mrkrabs);
    q3a4.addEventListener("click", plankton);
    //Question 4
    q4a1.addEventListener("click", patrick);
    q4a2.addEventListener("click", mrkrabs);
    q4a3.addEventListener("click", squidward);
    q4a4.addEventListener("click", gary);


    //Define quiz functions here
    function spongebob() {
        spongebobScore += 1;
        questionCount += 1;
        //alert("One Point to Spongebob");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function patrick() {
        patrickScore += 1;
        questionCount += 1;
        //alert("One Point to Patrick");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function squidward() {
        squidwardScore += 1;
        questionCount += 1;
        //alert("One Point to Squidward");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function plankton() {
        planktonScore += 1;
        questionCount += 1;
        //alert("One Point to Plankton");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function gary() {
        garyScore += 1;
        questionCount += 1;
        //alert("One Point to Gary");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function mrkrabs() {
        mrkrabsScore += 1;
        questionCount += 1;
        //alert("One Point to Mr. Krabs");
        if (questionCount >= 4) {
            updateResult();
        }
    }
    function updateResult() {
        if (spongebobScore >= 3) {
            result.innerHTML = "SpongeBob!";
        } else if (patrickScore >= 3) {
            result.innerHTML = "Patrick!";
        } else if (squidwardScore >= 3) {
            result.innerHTML = "Squidward!";
        } else if (planktonScore >= 3) {
            result.innerHTML = "Plankton!";
        } else if (garyScore >= 3) {
            result.innerHTML = "Gary!";
        } else if (mrkrabsScore >= 3) {
            result.innerHTML = "Mr. Krabs!";
        } else {
            result.innerHTML = "Hmm... Try Again later :/";
        }
    }
}