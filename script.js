// **1
class Student {
    students; // список фамилий студентов

    constructor(students) {
        this.students = students;
    }

    // метод получения студента по id
    get(idx) {
        return this.students[idx];
    }

    // реализация итератора
    [Symbol.iterator]() {
        return new StudentIterator(this); // разберем ниже
    }
}

class StudentIterator {
    _student; // доступ до итерируемого объекта
    _nextIdx; // указатель следующего значения

    constructor(student) {
        this._student = student;
        this._nextIdx = 0;
    }

    next() {
        if (this._nextIdx === this._student.students.length) {
            return { done: true } // проверка на последний элемент
        }

        const result = {
            value: this._student.get(this._nextIdx),
            done: false
        }

        this._nextIdx++;

        return result;
    }
}

const stud = new Student(['Иванов', 'Сидоров', 'Петров'])

for (let item of stud) {
    console.log(item);
}
