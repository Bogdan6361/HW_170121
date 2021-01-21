class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

}

class Stud extends User {

    // Подсчет студентов
    static count = 0;
    _id = ++Stud.count;

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        // Текущий год
        let current_year = new Date().getFullYear();

        // Пять лет назад (1 курс)
        let max_year = new Date(new Date().getFullYear(new Date().getFullYear() - 5));

        // Год поступления студента
        let user_year = this.year;

        // user_year не меньше max_year и не больше current_year

        try {
            if (user_year == "") throw "год не указан";
            if (isNaN(user_year)) throw "год не является числом";
            if (user_year < max_year) throw "студент окончил ВУЗ более 5 лет назад (указан " + user_year + " год)";
            if (user_year > current_year) throw "студент еще не поступил на 1 курс";
            return current_year - user_year;
        }
        catch (err) {
            console.log('Error: ' + err);
        }

    }
}

let student = new Stud('Ivan', 'Mironov', 2018);
let student2 = new Stud('Makar', 'Petrov', 2017);

console.log('getFullName(): ' + student.getFullName());
console.log('getCourse(): ' + student.getCourse());

// 2* подсчитать количество студентов (через static)
console.log('Создано студентов: ' + Stud.count);

/**
 * 4 добыть 1-цу из массива [7,7,7,1,7,7,7,7,7,7]
 */
const array = [7, 7, 7, 1, 7, 7, 7, 7, 7, 7];

function findNum(num) {
    return num == 1;
}

console.log('1 имеет позицию ' + array.findIndex(findNum) + ' в массиве [7, 7, 7, 1, 7, 7, 7, 7, 7, 7]');