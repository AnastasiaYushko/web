
function randomIntegerTS (min,max) {
    let rand= min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("Задание 1")

let a = randomIntegerTS(-100, 99);
console.log("Число: ", a);

if (a < 0) {
    console.log("Отрицательное? : да");
}
else {
    console.log("Отрицательное? : нет");
}

if (a % 2 == 0){
    console.log("Четное? : да");
}
else {
    console.log("Четное? : нет");
}


//Задание 2
console.log("\nЗадание 2");
let b = randomIntegerTS(50, 5000);
let string_b = String(b);
console.log("Рандомное число :",b);
console.log("Первая цифра: ",string_b[0]);
console.log("Последняя цифра: ",string_b[string_b.length-1]);
console.log("Сумма первой и последней цифры: ",Number(string_b[0]) + Number(string_b[string_b.length-1]));
console.log("Количество цифр в числе: ",string_b.length,"\n") ;

//Задание 3
console.log("\nЗадание 3");
let st = "ятвоястрока";
console.log("Строка : ", st);
console.log("Длина строки : ", st.length);
console.log("Последний символ : ", st[st.length - 1]);
console.log("Все символы с конца: ");
Array.from(st).reverse().forEach((element) => console.log(element));
console.log("\n");

//Задание 4
console.log("Задание 4");
let st_1 = "Первая строка";
let st2 = "Вторая строка";

console.log("Соединение & : " + st_1 + " & " + st2);

if (st_1.length > st2.length) {
    console.log("Самая длинная : " + st_1);
}
else if (st2.length > st_1.length) {
    console.log("Самая длинная : " + st2);
}
else {
    console.log("Самая длинная : --");
}
console.log("\n");

//Задание 5
console.log("Задание 5");
let numb1 = 12;
let numb2 = 121;

console.log("Первое число: " + numb1);
console.log("Второе число : " + numb2);

if (String(numb1)[0] == String(numb2)[0]) {
    console.log("Первые цифры =? : да");
}
else {
    console.log("Первые цифры =? : нет");
}

if (numb2 % numb1 == 0) {
    console.log("Первое делится на второе? : да");
}
else {
    console.log("Первое делится на второе? : нет");
}

if (numb1 > numb2) {
    console.log("Большее число : " + numb1);
}
else if (numb2 > numb1) {
    console.log("Большее число : " + numb2);
}
else {
    console.log("Большее число : --(равны)");
}
console.log("\n");


//Задание 6
console.log("Задание 6");
let number1 = randomIntegerTS(1, 99);
let number2 = randomIntegerTS(1, 99);

console.log("Первое число : " + number1);
console.log("Второе число : " + number2);

console.log("Остаток деления первого на второе : " + (number1 % number2));
console.log("Сумма : " + (number1 + number2));
console.log("Произведение : " + (number1 * number2));
console.log("\n");


//Задание 7
let nb1 = randomIntegerTS(1, 49);
let nb2 = randomIntegerTS(1, 49);
let nb3 = randomIntegerTS(1, 49);

console.log("Задание 7");
console.log("Первое число : " + nb1);
console.log("Второе число : " + nb2);
console.log("Третье число : " + nb3);

console.log("Среднее арифметическое : " + ((nb1 + nb2 + nb3) / 3));
console.log("Сумма квадратов : " + (nb1**2+nb2**2+nb3**2));
console.log("Макимальное число : " +Math.max(nb1,nb2,nb3));
console.log("Минимальное число : " +Math.min(nb1,nb2,nb3));

