// Задание 1. Определение функций (Function Declaration)

function greet(name) {
    console.log("Привет, " + name + "!");
}

// Пример вызова функции
greet("Иван");  // При вызове функции greet("Иван"), в консоли отобразится сообщение: "Привет, Иван!".


// Задание 2. Function Expression

let multiply = function(a, b) {
    return a * b;
};

// Пример вызова функции
let result = multiply(3, 4);
console.log(result); // Ожидаемый результат: 12


// Задание 3. Анонимные функции

(function() {
    console.log("Анонимная функция вызвана!");
})();


// Задание 4. Самовызывающаяся функция (IIFE)

(function() {
    console.log("IIFE выполнена");
})();


// Задание 5. Вложенные функции

function outer() {
    function inner() {
        return "Внутренняя функция";
    }
    
    return inner(); // Вызываем функцию inner и возвращаем её результат
}

// Пример вызова функции
let message = outer();
console.log(message); // Ожидаемый результат: "Внутренняя функция"


// Задание 6. Привязка функции к контексту (bind)

let person = {
    name: "Иван",
    sayName: function() {
        console.log(this.name);
    }
};

// Привязываем функцию sayName к объекту person
let boundSayName = person.sayName.bind(person);

// Пример вызова
boundSayName(); // Ожидаемый результат: "Иван"


// Задание 7. Замыкания

function counter() {
    let count = 0; // Инициализируем счетчик

    return function() {
        count++; // Увеличиваем счетчик на 1
        console.log(count); // Выводим текущее значение
    };
}

// Пример использования
let countFunction = counter();
countFunction(); // 1
countFunction(); // 2
countFunction(); // 3


// Задание 8. Передача функции в качестве аргумента

function execute(func, num1, num2) {
    return func(num1, num2); // Выполняем переданную функцию с двумя числами
}

// Пример функции, которую будем передавать
function multiply(a, b) {
    return a * b; // Возвращаем произведение двух чисел
}

// Пример использования
let result = execute(multiply, 2, 5);
console.log(result); // Ожидаемый результат: 10
