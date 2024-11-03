<?php

// Функция для массивов равной длины
function merge_arrays($array1, $array2)
{
    $array_res = [];

    for ($i = 0; $i < count($array1); $i++) {
        array_push($array_res, $array1[$i]);
        array_push($array_res, $array2[$i]);
    }

    return $array_res;
}
