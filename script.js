

 const questionText=document.querySelector(".question-text");
 const optionBox=document.querySelector(".option-box");
 const currentQuestionNum=document.querySelector(".current-question-num");
 const answerDescription=document.querySelector(".answer-description");
 const nextQuestionBtn=document.querySelector(".next-question-btn");
 const correctAnswers=document.querySelector(".correct-answers");
 const seeResultBtn=document.querySelector(".see-result-btn");
 const remainingTime=document.querySelector(".remaining-time");
 const timeUpText=document.querySelector(".time-up-text");
 const quizHomeBox=document.querySelector(".quiz-home-box");
 const quizBox=document.querySelector(".quiz-box");
 const quizOverBox=document.querySelector(".quiz-over-box");
 const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
 const goHomeBtn=document.querySelector(".go-home-btn");
 const startQuizBtn=document.querySelector(".start-quiz-btn");
 let attempt=0;
 let questionIndex=0;
 let score=0;
 let number=0;
 let myArray=[];
 let interval;

 // questions and options and  answer and answer description
 // array of objects
 myApp=[
        {
         question:" H ταχύτητα ενός κινητού που κινείται ευθύγραµµα σε χρονικό διάστηµα 5 s αυξάνεται από 10 m/s σε 30 m/s. H µέση επιτάχυνσή του είναι",
         options:["3 m/s","2 m/s","4 m/s","8 m/s"],
         answer:2,
        },
        {
        question:"Η μάζα είναι διανυσματικό μέγεθος",
        options:["σωστό","λάθος"],
         answer:1,
         description:"Έχει μέτρο αλλά δεν έχει κατεύθυνση"
        },
        {
         question:" Mια διαφορά µεταξύ ταχύτητας και επιτάχυνσης είναι ότι:",
         options:[" το ένα µέγεθος είναι µονόµετρο ενώ το άλλο διανυσµατικό","έχουν πάντα διαφορετική φορά","το ένα εκφράζει το πόσο γρήγορα αλλάζει η θέση, ενώ το άλλο, πόσο γρήγορα αλλάζει η ταχύτητα  ","η ταχύτητα είναι δύναµη ενώ η επιτάχυνση δεν είναι"],
         answer:2,
        },
        {
         question:" Στην ευθύγραµµη οµαλά επιταχυνόµενη κίνηση, η επιτάχυνση του κινητού είναι διάφορη του μηδενός και σταθερή",
         options:["σωστό","λάθος"],
         answer:0,
         description:"Είτε θετική είτε αρνητική η επιτάχυνση , αν είναι σταθερή και μη μηδενική , η κίνηση είναι ευθύγραμμη ομαλά επιταχυνόμενη"
        },
        {
         question:" Στην ευθύγραµµη οµαλή κίνηση",
         options:[" η ταχύτητα είναι σταθερή","η επιτάχυνση είναι σταθερή","το µέτρο της επιτάχυνσης είναι σταθερό","ο ρυθµός µεταβολής της ταχύτητας είναι σταθερός"],
         answer:0,
        },
	      {
         question:" Λέμε ότι ένα σώμα επιβραδύνεται όταν",
         options:[" η επιτάχυνσή του είναι αρνητική","η επιτάχυνση και η ταχύτητα έχουν αντίθετη φορά η μία ως προς την άλλη","η ταχύτητά του είναι αρνητική","κινείται στον αρνητικό ημιάξονα"],
         answer:1,
        },
      	{
         question:" Ένα σώμα κινείται ευθύγραμμα ομαλά. Η εξίσωση της κίνησής του στο σύστημα SI είναι x = 10+2t",
         options:[" Το αρχικό διάνυσμα θέσης έχει μέτρο 10 m και φορά θετική","Το τελικό διάνυσμα θέσης έχει μέτρο 10 m και φορά αρνητική","Η ταχύτητα έχει μέτρο 10 m/s","Σε χρόνο 2 s το κινητό θα βρίσκεται στη θέση 12 m"],
         answer:0,
        },
	      {
         question:" H ταχύτητα ενός σώματος μπορεί να μεταβάλλεται, αν η συνισταμένη δύναμη που ασκείται στο σώμα είναι μηδέν",
         options:["σωστό","λάθος"],
         answer:1,
         description:"Υπό μηδενική συνισταμένη δύναμη η κίνηση είναι ευθύγραμμη και ομαλή , σύμφωνα με τον 1ο νόμο του Newton"
        },
	      {
         question:" Σώμα μάζας m ισορροπεί πάνω σε κεκλιμένο επίπεδο γωνίας θ υπό την επίδραση του βάρους του και της στατικής τριβής . Αν g η επιτάχυνση της βαρύτητας , τότε η στατική τριβή έχει μέτρο mgημθ",
         options:["σωστό","λάθος"],
         answer:0,
         description:"Από την ισορροπία η τριβή έχει το ίδιο μέτρο με την συνιστώσα του βάρους που είναι παράλληλη στο κεκλιμένο "
        },
	      {
         question:" Ένα σώμα μπορεί να ολισθαίνει πάνω σε οριζόντιο τραχύ δάπεδο υπό την επίδραση σταθερής οριζόντιας δύναμης  F. Εάν η  F που ασκείται στο σώμα έχει μέτρο ίσο με την οριακή τριβή, το σώμα",
         options:[" κινείται με σταθερή ταχύτητα","κινείται με σταθερή επιτάχυνση","κινείται με σταθερή επιβράδυvση","παραμένει ακίνητο"],
         answer:3,
        }

       ]

  function load(){
  	number++;
    questionText.innerHTML=myApp[questionIndex].question;
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " + myApp.length;
  }

  function createOptions(){
  	optionBox.innerHTML="";
  	let animationDelay=0.2;
  	 for(let i=0; i<myApp[questionIndex].options.length; i++){
  	   const option=document.createElement("div");
  	         option.innerHTML=myApp[questionIndex].options[i];
  	         option.classList.add("option");
  	         MathJax.Hub.Queue(["Typeset",MathJax.Hub,"option"]);
  	         option.id=i;
  	         option.style.animationDelay=animationDelay + "s";
  	         animationDelay=animationDelay+0.2;
  	         option.setAttribute("onclick","check(this)");
  	         optionBox.appendChild(option);
  	 }
  }

  function generateRandomQuestion(){
      const randomNumber=Math.floor(Math.random() * myApp.length);
      let hitDuplicate=0;
      if(myArray.length == 0){
      	questionIndex=randomNumber;
      }
      else{
         for(let i=0; i<myArray.length; i++){
         	if(randomNumber == myArray[i]){
         		// if duplicate found
         		hitDuplicate=1;
         	}
         }
         if(hitDuplicate == 1){
         	generateRandomQuestion();
         	return;
         }
         else{
           questionIndex=randomNumber;
         }
      }

      myArray.push(randomNumber);
      //console.log(myArray)
      load();
  }

 function check(ele){
 	  const id=ele.id;
 	  if(id==myApp[questionIndex].answer){
 	  	ele.classList.add("correct");
 	  	score++;
 	  	scoreBoard();
 	  }
 	  else{
 	  	ele.classList.add("wrong");
 	  	// show correct option when clicked answer is wrong
 	  	 for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }
 	  }
 	  attempt++;
 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
 	  stopTimer();

 	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function timeIsUp(){
 	  showTimeUpText();
     // when time is up show correct answer
     for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }

 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function startTimer(){
      let timeLimit=20;
      remainingTime.innerHTML=timeLimit;
      remainingTime.classList.remove("less-time");
      interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
        	timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
         remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
        	clearInterval(interval);
        	timeIsUp();
        }
      },1000)
 }

function stopTimer(){
    clearInterval(interval);
}

 function disableOptions(){
 	for(let i=0; i<optionBox.children.length; i++){
 		optionBox.children[i].classList.add("already-answered");
 	}
 }

 function showAnswerDescription(){
 	if(typeof myApp[questionIndex].description !== 'undefined'){
 		 answerDescription.classList.add("show");
         answerDescription.innerHTML=myApp[questionIndex].description;
 	}
 }
 function hideAnswerDescription(){
 	answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
 }
 function showNextQuestionBtn(){
 	nextQuestionBtn.classList.add("show");
 }
 function hideNextQuestionBtn(){
 	nextQuestionBtn.classList.remove("show");
 }
 function showTimeUpText(){
 	timeUpText.classList.add("show");
 }
function hideTimeUpText(){
 	timeUpText.classList.remove("show");

 }
 function scoreBoard(){
 	correctAnswers.innerHTML=score;
 }

 nextQuestionBtn.addEventListener("click",nextQuestion);

 function nextQuestion(){
 	 generateRandomQuestion();
 	 hideNextQuestionBtn();
 	 hideAnswerDescription();
 	 hideTimeUpText();
 	 startTimer();
 }

 function quizResult(){
   document.querySelector(".total-questions").innerHTML=myApp.length;
   document.querySelector(".total-attemp").innerHTML=attempt;
   document.querySelector(".total-correct").innerHTML=score;
   document.querySelector(".total-wrong").innerHTML=attempt-score;
   const percentage=(score/myApp.length)*100;
   document.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "%";
 }
 function resetQuiz(){
   attempt=0;
   // questionIndex=0;
   score=0;
   number=0;
   myArray=[];
 }

 function quizOver(){
     nextQuestionBtn.classList.remove("show");
     seeResultBtn.classList.add("show");
 }

  seeResultBtn.addEventListener("click",()=>{

  	  quizBox.classList.remove("show");
  	  seeResultBtn.classList.remove("show");
      quizOverBox.classList.add("show");
      quizResult();
  })

  startAgainQuizBtn.addEventListener("click",()=>{
  	quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
  })

  goHomeBtn.addEventListener("click",()=>{
  	quizOverBox.classList.remove("show");
  	quizHomeBox.classList.add("show");
    resetQuiz();
  })
  startQuizBtn.addEventListener("click",()=>{
  	 quizHomeBox.classList.remove("show");
  	quizBox.classList.add("show");
     nextQuestion();

  })

  // window.onload=()=>{

  // }
