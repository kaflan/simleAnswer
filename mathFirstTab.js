 document.addEventListener("DOMContentLoaded", function(event) {
 	 var expressions = [];
     var elemIdAnswer = document.getElementById('bool');
     var answerInccorect = document.getElementById('inccorect');
     var formSetting = document.getElementById('settings')
     var randAnswer;
     var an = document.getElementById('question').value;
     //exp
     var generator = function(e) {
         console.log('i am generator');
         var elemId = document.getElementById('generator');
         var elemMyId = document.getElementById('exam');
         var formArray = formSetting.elements;
         //создаем проверку чек бокса 
         for(var i = 0; i < formArray.length; i++){
         	if(formArray[i].checked === true) { // проверяет иф на наличе boolean
         		//array push index checkbox
                expressions.push(formArray[i].value);
                return expressions;  
         	}else{
         		alert('alert checkbox not check');
         	}
         }
         //создаем рандомизатор 
         var randomZnack = Math.floor(Math.random() * expressions.length);
         //рандомизируем то что есть в проверке. 
         var numbo = expressions[randomZnack];
         //теперь создаем попадание рандомизатора
         var randNum1 = Math.floor(Math.random() * 10) + 10;
         var randNum2 = Math.floor(Math.random() * 20) + 100;
         var randQuestion = randNum2 + numbo + randNum1;
         randAnswer = eval(randQuestion);
         // добавляем на страничку наш пример(из попадания)
         elemMyId.innerHTML = randQuestion;
	     console.log(randAnswer);
         //прием данных из инпута
         return randAnswer;
     };
     //проверка ввода 
     console.log(randAnswer);

      var answer = function() {
         //проверка
         var kafka = 0;
         var gavno = 0;
         for (var i = 0; i <= kafka, gavno; i++) {
             if (an == randAnswer) {
               kafka += i;
               elemIdAnswer.innerHTML = kafka;
             }else{
               gavno += i;
               elemMyId.innerHTML = gavno;
             }
         }
     }  
     document.getElementById('generator').addEventListener("click", generator);
     document.getElementById('answer').addEventListener("click", answer);
 });