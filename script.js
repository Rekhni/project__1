/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
let numberOfFilms;
while (true) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    if (numberOfFilms > 0) {
        break;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let i = 0;
let a, b;
while (i < 2) {
    while (true) {
        a = prompt('Один из последних просмотренных фильмов?');
        if (a != null && a.length!= 0 && a.length <= 50 && !a.match(/[0-9]/g)) {
            break;
        }
    }
    while (true) {
        b = parseFloat(+prompt('На сколько оцените его?'));
        if (b > 0 && b <= 10) {
            break;
        }
    }
    personalMovieDB.movies[a] = b;
    i++;
}


const writeYourGenres = () => {
    let favMovie;
    let n = 1;
    while (n <= 3) {
        while (true) {
            favMovie = prompt(`Ваш любимый жанр под номером ${n}`);
            if (favMovie != null && favMovie.length != 0 && !favMovie.match(/[0-9]/g)) {
                break;
            }
        }
        personalMovieDB.genres.push(favMovie);
        n++;
    }
}


writeYourGenres();

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман")
} else {
    console.log('Произошла ошибка');
}

const showMyDB = () => {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


