/*jshint esversion: 6 */
{
  let x = 5;
  console.log("1: " + (x++));
  console.log("1: " + x);
  console.log("1: " + "Прибавление единицы происходит уже после вывода 5");
}


console.log("2: " + ([] + false - null + true));
console.log("2: " + "Выводится NaN так как происходит попытка выполнить вычитание. Если бы его не было, то всё выражение просто будет преобразовано и объединено в строку");

{
  let y = 1;
  console.log("3: у = " + y);
  let x = y = 2;
  console.log("3: х = " + x);
  console.log("3: у = " + y);
  console.log("3: " + "х не принял первое значение у потому, что присвоение  в данном случае выполняется с право на лево");

}


console.log("4: " + ([] + 1 + 2));
console.log("4: " + "Выводится 12 потому, что пустой массив хранит в себе строчную пустоту=) и поэтому все остальные элементы преобразуются в строчные)");



console.log("5: " + ("1" [0]));
console.log("5: " + "Данное действие выводит первый элемент строки, в данном случае это 1");


console.log("6: " + (2 && 1 && null && 0 && undefined));
console.log("6: " + "Логический оператор И останавливается при первом ложном значении и выводит его, в данном случае это null");

{
  let
    a = 3,
    b = 5;
  console.log("7: " + (!!(a && b)));
  console.log("7: " + (a && b));
  console.log("В первом случае логический оператор Не выполняет преобразование в булевый тип, а именно в False, потом опять в true. А во втором случае выражение истинно и поэтому выводится последнее правдивое значение");
}

console.log("8: " + (null || 2 && 3 || 4));
console.log("Сначала выполняется И, которое выводит 3, потом ИЛИ, которое видит 3 - истину, а значит останавливает дальнейшее  выполнение");


a = [1, 2, 3];
b = [1, 2, 3];
console.log("9: " + (a == b));
console.log("Выводится ложь, так как сравниваются ссылки на эти массивы, а они разные потому, что массивы разные");


console.log("10: " + (+"Infinity"));
console.log("10: " + "В данном случае происходит явное преобразование строки в число и выведется Infinity в числовом типе");


console.log("11: " + ("ёжик" > "яблоко"));
console.log("11: " + "По юникоду кодировка ё больше чем я, поэтому выражение правдиво)");



console.log("12: " + (0 || "" || undefined || true || false));
console.log("12: " + "Здесь все значения выводят ложь, кроме true, и так как используется логический оператор ИЛИ, то нам достаточно, чтобы только один элемент был правдой и именно первый такой элемент и выведется");
