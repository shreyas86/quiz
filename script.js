const questions=[
    {
        question:"whis is the largest animal in the world?",
        answer:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"girffe", correct:false},
        ]
    },
    {
        question:"which planet is known as red planet?",
        answer:[
            {text:"venus", correct:false},
            {text:"Jupiter", correct:false},
            {text:"Mars", correct:true},
            {text:"Saturn", correct:false},
        ]
    },
    {
        question:"who wrote the play Romeo and Juliet?",
        answer:[
            {text:"Charles dickens", correct:false},
            {text:"William Shakespear", correct:true},
            {text:"Mark Twain", correct:false},
            {text:"Jane Austen", correct:false},
        ]
    },
    {
        question:"whis is the largest ocean on earth?",
        answer:[
            {text:"Atlantic ocean", correct:false},
            {text:"Indaian cean", correct:false},
            {text:"Arctic ocean", correct:false},
            {text:"Pacific ocean", correct:true},
        ]
    } 
]
let question1=document.querySelector('.q')
let answers=document.querySelector(".options")
let next=document.querySelector('.next')


let score=0;
let index=0;
function startquiz(){
     score=0;
     index=0;
    next.innerHTML="next"
    showquestion();
}
function showquestion(){
    reset();
    let currentquestion=questions[index];
    let questionno=index+1;
    question1.innerHTML=questionno+". "+currentquestion.question;

    currentquestion.answer.forEach(answer=>{
       let button= document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",correcta)

    })
}
function  reset() {
    next.style.display="none";
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
    
}

function correcta(e){
    let iscorrect=e.target.dataset.correct === "true";
    if(iscorrect){
        e.target.classList.add("correct");
        score++;

    }else{
        e.target.classList.add("incorrect");
    }
    let options=document.querySelectorAll('.btn')
    options.forEach(button=>{
        button.disabled=true;
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
    })
    next.style.display="block";


}
next.addEventListener("click",()=>{
    if(index < questions.length){
   handlenext();
    }else{
        startquiz();
    }
})
function handlenext(){
    index++;
    if(index<questions.length){
        showquestion();
    }else{
        showscore();
    }
}
function showscore(){
    reset();
    question1.innerHTML=`your score ${score} out of ${questions.length}`;
    next.innerHTML="playagain";
    next.style.display="block";
    
}

startquiz();