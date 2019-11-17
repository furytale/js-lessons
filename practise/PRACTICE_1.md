## Повторение материала

#### Задачи на повторение пройденного материала. Тема: массивы.
1. ##### Напиши функцию, которая возврашает индексы элементов данного массива, в виде массива:
        // Given, var arr = ["a", "b", "c", "d", "e"];
        // Call function: getIndexes(arr)
        // Expected Result: [0,1,2,3,4] 
        Write function getIndexes
2. ##### Вернуть принятые функцией аргументы, в виде строки из обратно отсортированных значений:
        Write function: getFunctionArgumentsReverse("a", "b", "c", "d", "e")
        Expected Result: "edcba" 
3. ##### Return an array of string values
        var arr = ["a", 2, 4, 1, "e", 3, 5];
        getStringValues(arr);
        Expected Result: ["a", "e"]
4. ##### Напиши функцию, которая возврашает массив целых чисел от ```0 до 20ти```
        generateEvenNumbers()
        Expected Result: [0,2,4 ...]
5. ##### Напиши функцию, которая возврашает сумму всех элементов массива
        var arr = [2, 4, 1, 3, 5];
        arraySum(arr);
6. ##### Напиши функцию, которая возврашает максимальное значение элементов массива
        var arr = [2, 4, 1, 9,3, 5, 8];
        arrayMaxValue(arr);
7. ##### Напиши функцию, котарая возврашает ```true```, если все элементы принимаемого массива нечетные, в другом случае - ```false```
        var arr = [1, 3, 5, 7, 9, 11];
        isAllOdd(arr);
        Expected Result: true
        
        var arr = [1, 3, 5, 7, 9, 11, 8];
        isAllOdd(arr);
        Expected Result: false
        
8. ##### Напиши функцию, которая сортирует элементы массива, по четным значениям.
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        sortArrayByEven(arr);
        Expected Result: [2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11]
        
9. ##### Напиши функцию, которая возврашает массив из первых символов каждого слова предложения, при условии, что символы входят в массив - ```['s', 'i', 'w']```
        var sentence = 'Soon i will become a good developer, but now i need to train hard'
        var allowedSymbols = ['s', 'i', 'w']
        parseString(sentence, allowedSymbols)
        Expected Result: ['s', 'i', 'w', 'i' ];
10. ##### Напиши функцию, которая возврашает массив чисел, найденных в строке, при условии, что ```значение числа меньше 10```. Возврашаемый массив, отсортирую в порядке убывания.
        var letter = 'A 44 long8 time ago1 in 9a galaxy  5 far, 10 far 22away...';
        getNumbersOutOfString(letter);
