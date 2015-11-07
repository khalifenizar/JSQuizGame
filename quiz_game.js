var read = require("read");


var Question =  function(question, answer, idee){
	this.question = question;
	this.answer = answer;
	this.idee = idee;
};

var Quiz = function () {
	this.questions = [];
};

Quiz.prototype.addQuestion = function (quest) {
	this.questions.push(quest);
}

Quiz.prototype.askQuestion = function (quest,pos) {
	read({prompt: quest.question}, function (er, user_answer) {
		if (user_answer === quest.answer) {
			pos++;
			console.log("heelllll yeah")
			this.questionSelector(pos);
		}
	})
}

Quiz.prototype.questionSelector = function(pos) {
	var quest = this.questions[pos];
	this.askQuestion(quest);
}


var question1 = new Question ("whats the capital of New Jersey", "Trenton", 1);
var question2 = new Question("what is 2 + 2", "4", 2);
var game = new Quiz;
game.addQuestion(question1);
game.addQuestion(question2);
// game.startGame(0);
game.questionSelector(0);
