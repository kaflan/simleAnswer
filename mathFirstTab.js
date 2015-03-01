document.addEventListener("DOMContentLoaded", function(event) { 
		var correct = "correct";
		var incorrect = "incorrect";
		var elemIdAnswer = document.getElementById('bool');
		var randAnswer;
		function answer(val) {
		    //проверка 
		    var count = 0;
		    for(var i = 0; i <= cont; i++){
		    if (randAnswer === val) {
		        elemIdAnswer.innerHTML = correct + count;

		    } else {
		        elemIdAnswer.innerHTML = incorrect + count;

	    	}
		}
	}


	var generator = function(e) {
		console.log('i am generator');
		var elemId = document.getElementById('generator');
		var elemMyId = document.getElementById('exam');
		
		//создаем рандомизатор
		var randomZnack = Math.floor(Math.random() * 4);
		//array?
		var arr = ['*', '-', '/', '+'];
		var numbo = arr[randomZnack];
		//теперь создаем попадание рандомизатора 
		var randNum1 = Math.floor(Math.random() * 10)+10;
		var randNum2 = Math.floor(Math.random() * 20)+100;
		var randQuestion = randNum2 + numbo + randNum1;
		randAnswer = eval(randQuestion);
		// добавляем на страничку наш пример(из попадания)
	    elemMyId.innerHTML = randQuestion;
		//прием данных из инпута
	};
	document.getElementById('generator').addEventListener("click", generator);
});