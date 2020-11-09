const quizController = require('../controller/quizController');
function initRoutes(app){
    console.log('Init routes')
    app.get('/', quizController().index);
    app.get('/quiz', quizController().quiz);
    app.post('/quizBody', quizController().quizBody);
}
module.exports = initRoutes;