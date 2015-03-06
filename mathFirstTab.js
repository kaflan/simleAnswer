 document.addEventListener("DOMContentLoaded", function(event) {
     var expressions = [];
     var formSetting = document.getElementById('settings')
     var randAnswer;
     var toGavno;
     //exp
     var kafka = 0;
     var gavno = 0;
     var generator = function(e) {
         console.log('i am generator');
         var elemId = document.getElementById('generator');
         var elemMyId = document.getElementById('exam');
         var formArray = formSetting.elements;
         //создаем проверку чек бокса 
         for (var i = 0; i < formArray.length; i++) {
             if (formArray[i].checked === true) { // проверяет иф на наличе boolean
                 //array push index checkbox
                 expressions.push(formArray[i].value);
             } else {
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
         console.log(randQuestion);
         randAnswer = eval(randQuestion);
         toGavno = randAnswer + "";
         console.log(toGavno);
         // добавляем на страничку наш пример(из попадания)
         elemMyId.innerHTML = randQuestion;
         expressions = [];
     };
     //проверка ввода     
     var answer = function() {
         var an = document.getElementById('question').value;
         var correctEl = document.getElementById('correct');
         var incorrectEl = document.getElementById('incorrect');
         console.log(an, "lala");
         console.log(typeof(an));
         //проверка

         for (var i = 0; i < kafka, gavno; i++) {
             if (an === toGavno) {
                 console.log("lala");
                 kafka += i;
                 correctEl.innerHTML = kafka;
             } else {
                 console.log('nuff said');
                 gavno += i;
                 incorrectEl.innerHTML = gavno;
             }
         }
     }
     document.getElementById('generator').addEventListener("click", generator);
     document.getElementById('answer').addEventListener("click", answer);
 });
