/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

for (let i = 0; i < movieDB.movies.length; i++) {
  console.log(`${i + 1} ${movieDB.movies[i]}`);
}// number of movies in console



let sort = movieDB.movies.sort();

console.log(sort);// Movies names has sorted




let ad = document.querySelector('.promo__adv')

function deleteADS() {
  ad.style.display = "none"
}
deleteADS()// delete adds




let element = document.querySelectorAll('.promo__interactive-item');
     element.forEach((e, i) => {
        e.innerHTML =`${ i+1 }. ${e.innerHTML}`
      }) // number of movies in html window

      
     // for (let i = 0; i < element.length; i++) {
    //   element[i].innerHTML += (i+1) ;

     
   


      let bg = document.querySelector('#bg')
    
      function changeBgImg(){
          bg.style.backgroundImage = "url('../img/bg.jpg')";
      }
      
      changeBgImg();// Change Background



      let genre = document.querySelector('.promo__genre')
      function changeName(){
        genre.innerHTML = 'Драмма';
    }
    
    changeName();// Change Genre