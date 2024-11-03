<?php

$array1 = ['Привет', 'мир', '!'];
echo 'Задание 1. Вывод фразы : ';
foreach ($array1 as $str) {
    echo "$str ";
}
echo "\n";

echo 'Задание 2. Вывод нового массива после изменения первого элемента : ';
echo "\n";

$array1[0] = "Пока";
print_r($array1);

$n3 = '023m0df0dfg0';
$n3_arr = str_split($n3);
$array_pos = [];

for ($i = 0; $i < count($n3_arr); $i++) {
    if ($n3_arr[$i] == '0') {
        array_push($array_pos, $i + 1);
    }
}

echo "Задание 3. Массив позиций всех нулей в строке : \n";
echo "Строка : $n3 \n";
print_r($array_pos);

$array_rnd = [];

for ($i1 = 0; $i1 < 10; $i1++) {
    array_push($array_rnd, mt_rand());
}

$array_res = [];

for ($j = 0; $j < count($array_rnd); $j++) {
    if (preg_match('/5/', $array_rnd[$j])) {
        array_push($array_res, $array_rnd[$j]);
    }
}

echo "Задание 4. Массив случайных чисел : \n";
print_r($array_rnd);

echo "Массив чисел, в которых есть цифра 5 : \n";
print_r($array_res);

$array1 = [1, 2, 6];
$array2 = ['один', 'два', 'шесть'];

include 'func_merge_arrays.php';
$array_res = merge_arrays($array1, $array2);

echo "Задание 5. Слияние массивов \n";
echo "Массив 1 : \n";
print_r($array1);
echo "\nМассив 2 : \n";
print_r($array2);
echo "Итоговый массив : \n";
print_r($array_res);


$array_rnd6 = [];

for ($i = 0; $i < 10; $i++) {
    array_push($array_rnd6, mt_rand(1, 100));
}

echo "Задание 6. Сортировка массива по убыванию : \n";
echo "Исходный массив : \n";
print_r($array_rnd6);

rsort($array_rnd6);

echo "Отсортированный массив : \n";
print_r($array_rnd6);
echo "\n";

echo "Задание 7. Сортировка массивов в алфавитном порядке \n";

$array_rus =  ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
$array_en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

sort($array_rus);
sort($array_en);
echo "Отсортированный 1 массив : \n";
print_r($array_rus);
echo "\nОтсортированный 2 массив : \n";
print_r($array_en);

$array8 =  ['orange', 'red', 'green', 'blue'];

echo "Задание 8. Сортировка по длине строки : \n";

for ($j = 0; $j < count($array8) - 1; $j++) {
    for ($i = 0; $i < count($array8) - $j - 1; $i++) {
        if (strlen($array8[$i]) > strlen($array8[$i + 1])) {
            $tmp_var = $array8[$i + 1];
            $array8[$i + 1] = $array8[$i];
            $array8[$i] = $tmp_var;
        }
    }
}
print_r($array8);
echo "\n";


$array_9 = [];

for ($i = 0; $i < 8; $i++) {
    array_push($array_9, mt_rand(1, 50));
}

$sum1 = 0;
$sum2 = 0;
for ($i = 0; $i < 8; $i++) {
    if ($i < 4) {
        $sum1 += $array_9[$i];
    } else {
        $sum2 += $array_9[$i];
    }
}

echo "Задание 9. Частное сумм двух половин массива \n";
echo "Массив : \n";
print_r($array_9);
echo ("\n");
echo "Сумма первой половины : " . $sum1 . "\n" . "Сумма второй половины : " . $sum2 . "\n" . "Частное : " . $sum1 / $sum2;

$array_10 = [];
for ($i = 0; $i < 10; $i++) {
    array_push($array_10, mt_rand(-100, 100));
}

$count_neg = 0;
foreach ($array_10 as $value) {
    if ($value < 0) {
        $count_neg += 1;
    }
}

echo "\n\nЗадание 10. Подсчет количества отрицательных чисел в массиве\n";
echo "Массив : \n";
print_r($array_10);
echo "\n";
echo "Результат : " . $count_neg . "\n";

$array_11 = [];

for ($i = 0; $i < 10; $i++) {
    array_push($array_11, mt_rand(-50, 50));
}

echo "\nЗадание 11. Оставить в массиве только положительные и четные числа \n";
echo "Исходный массив : \n";
print_r($array_11);

foreach ($array_11 as $key => $val) {
    if (!($val % 2 == 0 && $val < 0 &&  (preg_match('/1/', $array_11[$key])))) {
        unset($array_11[$key]);
    }
}

echo "Измененный массив : \n";
print_r($array_11);


echo "\nЗадание 12. Первая и последняя позиция входа цифр в строке \n\n";
$str_12 = "БукваЯИ4Цифры5678Конец";
echo "Строка : $str_12 \n";

foreach (mb_str_split($str_12) as $key => $char) {
    if (is_numeric($char)) {
        echo "Первое вхождение цифры : " .$key+1 ."\n";
        break;
    }
}

foreach (array_reverse(mb_str_split($str_12)) as $key => $char) {
    if (is_numeric($char)) {
        $res = mb_strlen($str_12) - $key;
        echo "Последнее вхождение цифры : $res \n";
        break;
    }
}
