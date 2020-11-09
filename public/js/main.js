
let btn = document.querySelector('.btn1');
let questions = JSON.parse(btn.dataset.questions);
window.onload = show(0);
var question_count = 0;
let answers = []
async function nextQuestion(){
    let answer = document.querySelector('label.radio input:checked+span').innerText;
    answers[question_count] = answer;
    if(question_count == questions.length-1){
        const data = {answers}
        const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    const response = await fetch('/quizBody',option)
    const result = await response.json();
    console.log(result)
    let remark = '';
    if(result.result>=8 || result.result <=10){
        remark = "EXCELLENT"
    }
    if(result.result>5 || result.result <=7){
        remark = "GOOD"
    }
    if(result.result>=3 || result.result <=5){
        remark = "AVERAGE"
    }
    else{
        remark = "Better Luck Next Time"
    }
    document.getElementById('question').innerHTML = `You score is ${result.result} out of 10 and Remark is ${remark}
    `
    }
    question_count++;
    if(question_count< questions.length){
        show(question_count)
    }
}
function prevQuestion(){
    if(question_count>0){
        question_count--;
    }
    show(question_count);
}
function show(question_count){
    const question = document.getElementById('question');
    question.innerHTML = `<div class="question bg-white p-3 border-bottom">
    <div class="d-flex flex-row align-items-center question-title">
        <h3 class="text-danger">Q.</h3>
        <h5 class="mt-1 ml-2">${questions[question_count].question}
        </h5>
    </div>
    <div class="ans ml-2">
        <label class="radio"> <input type="radio" name="answer${question_count}" value="${questions[question_count].option1}"> <span>${questions[question_count].option1}</span>
        </label>
    </div>
    <div class="ans ml-2">
        <label class="radio"> <input type="radio" name="answer${question_count}" value="${questions[question_count].option2}"> <span>${questions[question_count].option2}</span>
        </label>
    </div>
    <div class="ans ml-2">
        <label class="radio"> <input type="radio" name="answer${question_count}" value="${questions[question_count].option3}"> <span>${questions[question_count].option3}</span>
        </label>
    </div>
    <div class="ans ml-2">
        <label class="radio"> <input type="radio" name="answer${question_count}" value="${questions[question_count].option4}"> <span>${questions[question_count].option4}</span>
        </label>
    </div>
</div>
<div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button class="btn btn-primary d-flex align-items-center btn-danger" type="button" id="prev" onclick="prevQuestion()"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous</button><button class="btn btn-primary border-success align-items-center btn-success" type="button" id="next" onclick="nextQuestion()">Next<i class="fa fa-angle-right ml-2"></i></button><button class="btn btn-primary border-success align-items-center btn-success" type="submit" id="sub" >Submit<i class="fa fa-angle-right ml-2"></i></button></div>
`
if(question_count==questions.length-1){
    document.getElementById('next').hidden=false;
    document.getElementById('sub').hidden=true;
}
else if(question_count != 0 && question_count<questions.length){
    document.getElementById('sub').hidden=true;
    document.getElementById('prev').hidden=false;
}
else{
    document.getElementById('prev').hidden=true;
    document.getElementById('next').hidden=false;
    document.getElementById('sub').hidden=true;
}
}
