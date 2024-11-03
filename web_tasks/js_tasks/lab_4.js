
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// Задание 1
var arr1 = ["Привет", "мир", "!"];
console.log("Задание 1. Фраза : " + arr1[0] + " " + arr1[1] + " " + arr1[2] + "\n");

// Задание 2
arr1[0] = "Пока";
console.log("Задание 2. Массив после изменений : ");
console.log(arr1);
console.log("\n");

// Задание 3
var str1 = "023m0df0dfg0";
console.log("Задание 3. Строка : " + str1);
console.log("Задание 3. Массив позиций 0 :");
var arr2 = [];
Array.from(str1).forEach((s, index) => {
    if (s == "0") {
        arr2.push(index + 1);
    }
}
);
console.log(arr2);
console.log("\n");

// Задание 4

var arr3 = [];
var arr3_res = [];
for (let i = 0; i <= 10; i++) {
    arr3.push(randomInteger(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));
}
console.log("Задание 4. Массив рандомных чисел : ");
console.log(arr3);

arr3.forEach((item) => {
    if (item.toString().includes("5")) {
        arr3_res.push(item);
    }
})
console.log("Задание 4. Массив, в чсилах которых есть цифра 5 :");
console.log(arr3_res);
console.log("\n");

//Задание 5

function merge_arrays_js(arr1, arr2) {
    var array_res = [];

    for (let i = 0; i < arr1.length; i++) {
        array_res.push(arr1[i]);
        array_res.push(arr2[i]);
    }

    return array_res;
}

var arr_5_1 = [1, 2, 3];
var arr_5_2 = ['a', 'b', 'c'];

console.log("Задание 5. Первый массив : ");
console.log(arr_5_1);
console.log("Второй массив :");
console.log(arr_5_2);
console.log("Слияние :");
var arr_r = merge_arrays_js(arr_5_1, arr_5_2);
console.log(arr_r);
console.log("\n");

// Задание 6
var arr_6 = [];

for (let i = 0; i <= 10; i++) {
    arr_6.push(Math.random());
}
console.log("Задание 6. Массив :");
console.log(arr_6);
console.log("Задание 6. Массив по убыванию :");
console.log(arr_6.sort().reverse());
console.log("\n");

var array_rus = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var array_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log("Задание 7. Сортировка массивов по алфавиту :");
console.log("Первый массив : ");
console.log(array_rus.sort());
console.log("Второй массив : ");
console.log(array_en.sort());
console.log("\n");

// Задание 8
array8 = ['orange', 'red', 'green', 'blue'];

console.log("Задание 8. Сортировка по длине строки : ");

for (let j = 0; j < array8.length - 1; j++) {
    for (let i = 0; i < array8.length - j - 1; i++) {
        if ((array8[i].length) > (array8[i + 1].length)) {
            var tmp_var = array8[i + 1];
            array8[i + 1] = array8[i];
            array8[i] = tmp_var;
        }
    }
}

console.log(array8);
console.log("\n");

// Задание 9

var array9 = [];

for (let i = 0; i < 8; i++) {
    array9.push(randomInteger(0, 49));
}

var sum1 = 0;
var sum2 = 0;
for (let i = 0; i < 8; i++) {
    if (i < 4) {
        sum1 -= array9[i];
    } else {
        sum2 -= array9[i];
    }
}

console.log("Задание 9. Частное сумм двух половин массива");
console.log("Массив : ");
console.log(array9);
console.log("Сумма первой половины : " + sum1 + "\n" + "Сумма второй половины : " + sum2 + "\n" + "Частное : " + sum1 * sum2);
console.log("\n");

// Задание 10
console.log("Задание 10. Подсчет количества отрицательных чисел в массиве");

var arr_10 = [];
for (let i = 0; i < 10; i++) {
    arr_10.push(randomInteger(-100, 100));
}
console.log("Массив:");
console.log(arr_10);

var count_neg = 0;
arr_10.forEach((value) => {
    if (value < 0) {
        count_neg += 1;
    }
});

console.log("Результат : " + count_neg);
console.log("\n");

// Задание 11
console.log("Задание 11. Оставить только четные и положительные ");

var arr_11 = [];
for (let i = 0; i < 10; i++) {
    arr_11.push(randomInteger(-50, 50));
}

console.log(arr_11);

arr_11 = arr_11.filter(value => value > 0 && value % 2 == 0);

console.log(arr_11);
console.log("\n");

// Задание 12
console.log("Задание 12. Позиции первой и последней цифры");

var str_12 = "БукваЯИ4Цифры5678Конец";
console.log("Строка : " + str_12);

var arr_12 =Array.from(str_12);

for (let i=0;i<=arr_12.length;i++){
    if (!isNaN(Number(arr_12[i]))){
        console.log("Позиция первой цифры : " + (i+1));
        break;
    }
}

for (let i=arr_12.length-1;i>0;i--){
    if (!isNaN(Number(arr_12[i]))){
        console.log("Позиция последней цифры : " + (i+1));
        break;
    }
}
