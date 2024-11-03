
// Задание 1

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

var rnd_num = randomInteger(-100, 99);
console.log("Задание 1");
console.log("Число :", rnd_num);
if (rnd_num < 0) {
    console.log("Орицательное? : да");
} else {
    console.log("Отрицательное? : нет");
}

if (rnd_num % 2 == 0) {
    console.log("Четное? : да \n");
} else {
    console.log("Четное? : нет \n");
}


// Задание 2

var num_2 = randomInteger(10, 49);
console.log("Задание 2");
console.log("Число : ", num_2);
num_2 = String(num_2);
var ind_1 = num_2[0];
console.log("Первая цифра : ", ind_1);
var ind_end = num_2[num_2.length - 1];
console.log("Последняя цифра : ", ind_end);
var sum = Number(ind_1) + Number(ind_end);
console.log("Сумма первой и последней : ", sum);
console.log("Количество цифр : ", num_2.length, "\n");

// Задание 3
var str = "ятвоястрока";
console.log("Задание 3");
console.log("Строка : ", str);
console.log("Длина строки : ", str.length);
console.log("Последний символ : ", str[str.length - 1]);

console.log("Все символы с конца: ");
Array.from(str).reverse().forEach((element) => console.log(element));
console.log("\n");

//Задание 4
console.log("Задание 4");
var str1 = "Первая строка";
var str2 = "Вторая строчка";

console.log("Соединение & : " + str1 + " & " + str2);

if (str1.length > str2.length) {
    console.log("Самая длинная : " + str1);
}
else if (str2.length > str1.length) {
    console.log("Самая длинная : " + str2);
}
else {
    console.log("Самая длинная : --");
}
console.log("\n");

//Задание 5
console.log("Задание 5");
var num1 = 11;
var num2 = 121;

console.log("Первое число: " + num1);
console.log("Второе число : " + num2);

if (String(num1)[0] == String(num2)[0]) {
    console.log("Первые цифры =? : да");
}
else {
    console.log("Первые цифры =? : нет");
}

if (num2 % num1 == 0) {
    console.log("Первое делится на второе? : да");
}
else {
    console.log("Первое делится на второе? : нет");
}

if (num1 > num2) {
    console.log("Большее число : " + num1);
}
else if (num2 > num1) {
    console.log("Большее число : " + num2);
}
else {
    console.log("Большее число : --(равны)");
}
console.log("\n");

//Задание 6
console.log("Задание 6");
var n_1 = randomInteger(1, 99);
var n_2 = randomInteger(1, 99);

console.log("Первое число : " + n_1);
console.log("Второе число : " + n_2);

console.log("Остаток деления первого на второе : " + (n_1 % n_2));
console.log("Сумма : " + (n_1 + n_2));
console.log("Произведение : " + (n_1 * n_2));
console.log("\n");

//Задание 7
var n1 = randomInteger(1, 49);
var n2 = randomInteger(1, 49);
var n3 = randomInteger(1, 49);

console.log("Задание 7");
console.log("Первое число : " + n1);
console.log("Второе число : " + n2);
console.log("Первое число : " + n3);

console.log("Среднее арифметическое : " + ((n1 + n2 + n3) / 3));
console.log("Сумма квадратов : " + (n1**2+n2**2+n3**2));
console.log("Макимальное число : " +Math.max(n1,n2,n3));
console.log("Минимальное число : " +Math.min(n1,n2,n3));