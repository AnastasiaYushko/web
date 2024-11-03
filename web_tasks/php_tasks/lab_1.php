<?php

$n1 = mt_rand(-100, 100);
echo "Проверка числа $n1";
if ($n1 < 0) {
    echo ': отрицательное';
} else {
    echo ' : неотрицательное';
}

if ($n1 % 2 == 0) {
    echo " и четное\n";
} else {
    echo " и нечетное\n";
}

$n2 = mt_rand();
$n2_arr = str_split($n2);
echo "\nРандомное число : $n2\n";
echo "Первая цифра : {$n2_arr[0]}\n";
echo "Последняя цифра числа : {$n2_arr[count($n2_arr) - 1]} \n";
echo 'Сумма первой и последней цифры числа : ' . $n2_arr[0] + $n2_arr[count($n2_arr) - 1] . "\n";
echo 'Количество цифр в числе :' . count($n2_arr) . "\n";

$n3 = "придуманная строка";
$n3_length = mb_strlen($n3);
echo "\nСтрока :" . ' "' . $n3 . '"' . "\n";
echo "Длина строки : $n3_length\n";
echo 'Последний символ строки : ' . '\'' . mb_substr($n3, -1) . '\'' . "\n";

echo 'Строка наоборот : "';
foreach (array_reverse(mb_str_split($n3)) as $char) {
    echo $char;
}

echo '"' . "\n\n";

$n4_1 = "привет";
$n4_2 = "пока";

echo "Общая строка : \"" . $n4_1 . ' & ' . $n4_2 . "\"\n";

echo 'Самая длинная строка из двух : ';
if (mb_strlen($n4_1) > mb_strlen($n4_2)) {
    echo '"' . $n4_1 . '"';
} elseif (mb_strlen($n4_2) > mb_strlen($n4_1)) {
    echo '"' . $n4_2 . '"';
} else {
    echo '--';
}

echo "\n\n";

$n5_1 = mt_rand(1, 100);
$n5_2 = mt_rand(1, 100);

echo "Первое число : $n5_1 \nВторое число : $n5_2 \n";

echo 'Большее число : ';
if ($n5_1 > $n5_2) {
    echo $n5_1;
} elseif ($n5_2 > $n5_1) {
    echo $n5_2;
} else {
    echo '--';
}

echo "\n";

echo 'Первое число без остатка делится на второе? :';
if ($n5_1 % $n5_2 == 0) {
    echo 'да';
} else {
    echo 'нет';
}

echo "\n";

echo 'Первые цифры этих чисел совпадают? :';

if (((string) $n5_1)[0] == ((string) $n5_2)[0]) {
    echo 'да';
} else {
    echo 'нет';
}

echo "\n\n";

$n6_1 = 200;
$n6_2 = 22;


echo "Первое число : $n6_1 \nВторое число : $n6_2 \n\n";
echo 'Остаток деления первого числа на второе : ' .$n6_1%$n6_2 ."\n";
echo 'Сумма чисел :' .$n6_1+$n6_2 ."\n";
echo 'Произведение чисел :' .$n6_1*$n6_2."\n\n";

$n7_1 = mt_rand(1,50);
$n7_2 = mt_rand(1,50);
$n7_3 = mt_rand(1,50);

echo "Первое число : $n7_1 \nВторое число : $n7_2\nТретье число : $n7_3 \n\n";

$n7_1_arr = str_split($n7_1);
$n7_2_arr = str_split($n7_2);   
$n7_3_arr = str_split($n7_3);

$avg1 = array_sum($n7_1_arr) / count($n7_1_arr);
$avg2 = array_sum($n7_2_arr) / count($n7_2_arr);
$avg3 = array_sum($n7_3_arr) / count($n7_3_arr);

echo 'Их среднее арифметическое :' . ($avg1 + $avg2 + $avg3)/3 ."\n";
echo 'Сумма квадратов :' . pow($n7_1,2)+pow($n7_2,2)+pow($n7_3,2) ."\n";

echo 'Максимальное число : ' .max($n7_1,$n7_2,$n7_3)."\n";
echo 'Минимальное число : ' .min($n7_1,$n7_2,$n7_3)."\n";