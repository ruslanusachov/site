// var items = [
//   {
//     id: 1,
//     question: 'Почему я?',
//     description: 'Потому что ты самый умный студент и должен это все затащить',
//   },
//   {
//     id: 2,
//     question: 'Как я сюда попал?',
//     description: 'Я давно хотел пытать людей и по-этому пришел сюда замучать каждого студента до полусмерти!',
//   },
//   {
//     id: 3,
//     question: 'Кто сильнее Супермен или Пикачу?',
//     description: 'Проведя некоторые исследования, английские ученые дошли до результата, что сильнее всё таки тот, у кого больше денег',
//   },
//   {
//     id: 4,
//     question: 'Почему такое плохое чувство юмора у вашего тренера?',
//     description: 'Он просто долго не думал над вопросами и пытается шутить...',
//   }
// ]

// document.createElement
// document.getElementById
// document.getElementsByClassName
// for (var i = 0; i < ; i++)
// function()
// addEventListener
// if else
// var
// appendChild


// var ul = document.body.getElementsByClassName('menu')[0];

// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   var link = document.createElement('a');
//   var block = document.createElement('div');
//   link.classList.add('button');
//   link.innerHTML = item.question;
//   block.innerHTML = item.description;
//   var li = document.createElement("li");
//   li.appendChild(link);
//   li.appendChild(block);
//   ul.appendChild(li);

//   link.addEventListener('click', function(){
//     var item = link.target
//     if( link.classList.contains('button') ){
//       var elem = link.getElementsByClassName('button');
//       for (var j = 0; j < elem.length; j++) {
//         if ()
//       this.classList.toggle('active');
//     }

//   } );

// }
// var img = document.getElementsByTagName('IMG')[0];
// var position = img.getBoundingClientRect().bottom + pageYOffset;

// window.addEventListener('scroll', function(){
//   if (position > ) {
//     img.style.position = 'fixed';
//     img.style.top = '0';
//     img.style.left = '0';
//   }
// });
// function makeBuffer () { //объявили функцию
//   var text = '';  // задали переменной пустую строку, чтобы было, что туда добавить.


//   return function(piece) { // возвращаем функцию пис
//    if (arguments.length == 0) { //если нет аргументов
//      return text;  // вернуть пустую строку
//    }
//    text += piece; // пустая строка = пустая строка + то, что передали в функцию(если ничего не передали, то просто пустая строка)
//   };

// };

// var buffer = makeBuffer(); //объявили переменную, в которую записали общую функцию.
// buffer('Замыкания'); // передаем в функцию значения.
// buffer(' Использовать'); // передаем в функцию значения.
// buffer(' Нужно!');// передаем в функцию значения.
// alert( buffer() );  // выводим значения на экран.

// var buffer2 = makeBuffer(); // новая переменная,ЛО независимое от старого.
// buffer2(0); // передаем в функцию значения(которые продбразовывются в строку из за переменной текст).
// buffer2(1); // передаем в функцию значения.
// buffer2(0);// передаем в функцию значения.

// alert( buffer2() ); // выводим значения на экран.

// function makeBuffer ()  {
//   var text = "";

//    return function (func) {
//     if(arguments.length == 0) {
//       return text;
//     }
//     text = text + func;
//   };
// };

// var buffer = makeBuffer();

// buffer('Замыкания'); // передаем в функцию значения.
// buffer(' Использовать'); // передаем в функцию значения.
// buffer(' Нужно!');
// alert(buffer());
// buffer.clear();
// alert(buffer());
// function printNumbersInterval() {
// var num = 1;
//  setTimeout(function pognali (){
//     if (num < 20) {
//     console.log(num);
//       num++;
//     }

//   }, 100);
// }

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// var max = 0;
// var maxName = '';

// for (var name in salaries) {
//   if(max < salaries[name]) {
//     max = salaries[name];
//     maxName = name; 
//   }
// }
// alert( maxName || "нет сотрудников" );
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(obj) {
//   for(var key in obj) {
//     if(!NaN) {
//       menu[key] *= 2;
//     } else { 
//       alert(menu[key]);
//     }
//   }
// }
// multiplyNumeric(menu);
// alert('width:' + menu.width + 'height:' + menu.height + 'title:' + menu.title);


function loadPhones() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.github.com/users?since=135', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.innerHTML = 'Готово!';

    if (xhr.status != 200) {
      // обработать ошибку
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      // вывести результат
      alert(xhr.responseText);
    }

  }

  xhr.send();

  button.innerHTML = 'Загружаю...';
  button.disabled = true;
  xhr.forEach(function(){
    alert();
  });

}
