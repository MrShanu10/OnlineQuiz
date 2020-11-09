const Questions = require('../models/question');
function quizController(){
    return {
        index: (req, res) => {
            return res.render('homepage')
        },
        quiz: async (req, res) => {
            const questions = await Questions.find();
            return res.render('quiz',{questions: questions});
        },
        quizBody: async (req, res) => {
            let [answer1 , answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10 ] = req.body.answers;
            const getAllAnswers = await Questions.find({})
            let result = 0;
            let dbAnswer1 = getAllAnswers[0].answer
            let dbAnswer2 = getAllAnswers[1].answer
            let dbAnswer3 = getAllAnswers[2].answer
            let dbAnswer4 = getAllAnswers[3].answer
            let dbAnswer5 = getAllAnswers[4].answer
            // const dbAnswer6 = getAllAnswers[5].answer
            // const dbAnswer7 = getAllAnswers[6].answer
            // const dbAnswer8 = getAllAnswers[7].answer
            // const dbAnswer9 = getAllAnswers[8].answer
            // const dbAnswer10 = getAllAnswers[9].answer
            if(answer1 == dbAnswer1){
                result++;
            }
            if(answer2 == dbAnswer2){
                result++;
            }
            if(answer3 == dbAnswer3){
                result++;
            }
            if(answer4 == dbAnswer4){
                result++;
            }
            if(answer5 == dbAnswer5){
                result++;
            }
            // if(answer6 == dbAnswer6){
            //     result++;
            // }
            // if(answer7 == dbAnswer7){
            //     result++;
            // }
            // if(answer8 == dbAnswer8){
            //     result++;
            // }
            // if(answer9 == dbAnswer9){
            //     result++;
            // }
            // if(answer10 == dbAnswer10){
            //     result++;
            // }
             return res.json({result: result});
        }
    }
}

module.exports = quizController