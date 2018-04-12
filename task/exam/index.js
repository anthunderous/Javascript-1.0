/*jshint esversion: 6 */
function getFriendlyNumbers(start, end) {
    if ((!isNaN(start)) && (!isNaN(end)) && (start <= end) && (start > 0) && (end > 0) && (parseInt(start) == start) && (parseInt(end) == end)&&(typeof(start)=='number') && (typeof(end)=='number')) {
        let sum1 = 0,
            sum2 = 0,
            result = [],
            r1 = 0,
            r2 = 0;
        for (let j = start; j <= end; j++) {    //Берём поочерёдно числа в заданном диапазоне...
            sum1 = 0;
            for (let i = 0; i < j; i++) { //Для взятого числа находим сумму всех его делителей...
                if (j % i == 0) {
                    sum1 += i;
                }
            }
            for (let c = start; c <= end; c++) { //В каждой итерации главного цикла с главным числом пробуем ему в пару каждое число из заданного диапазона...
                sum2 = 0;
                for (let i = 0; i < c; i++) { //Находим сумму всех делителей для второго числа...
                    if (c % i == 0) {
                        sum2 += i;
                    }
                }
                if ((sum1 == c) && (sum2 == j) && (sum2 < sum1)) {  //Для каждой итерации цикла со вторым числом делаем проверку, и пара чисел и суммы их делителей соответствуют условию, производим запись пары чисел в итоговый массив
                    result[r1] = [];
                    result[r1][r2] = j;
                    result[r1][r2 + 1] = c;
                    r1++;
                }
            }
        }
        return result;
    } else {
        return false;
    }
}

module.exports = {
    firstName: 'Anatoliy',
    secondName: 'Gromovoy',
    task: getFriendlyNumbers
}