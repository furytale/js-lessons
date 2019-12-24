## Повторение материала

1. ##### Написать функцию, которая принимает неопределенное количество аргументов и возврашает массив, принятых аргументов в обратном порядке:
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code

            Write function reverseArguments
            Call function: reverseArguments("a", [1,2], 0, 22, [3,4])
            Expected Result: [[3,4], 22, 0, [1,2], "a"] 
            
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            function reverseArguments() {
             var r = [];
             for(var i = arguments.length-1; i >= 0; i--) {
                r.push(arguments[i]);
             }
             return r;
            }

             var resultRevers = reverseArguments("a", [1,2], 0, 22, [3,4]);
             console.log(resultRevers);
            // End of the code

2. ##### Написать функцию, которая возврашает каждый второй аргумент(каждый четный индекс), в виде массива:
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code

            Write function getEvenIndexedValues()
            Call function: getEvenIndexedValues("a", "b", "c", "d", "e", "f", "g")
            Expected Result: ["a", "c", "e", "g"] 
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here

            function getEvenIndexedValues(values) {
             var even = [];
             for(var i = 0; i < values.length; i++) {
                if (i % 2 === 0) {
                  even.push(values[i]);
                 }
              }
         return even;
        }

         var resultEven = getEvenIndexedValues("a", "b", "c", "d", "e", "f", "g");
         console.log(resultEven);

            
            // End of the code
3. ##### Написать функцию которая принимает массив чисел и возврашает результат последовательного умножения каждого элемента числового ряда на следутыщий элемент :
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            Given: const arr = [1,2,3,4]
            Write function calculateSequenceArray
            Execute calculateSequenceArray(arr)
            Expected Result: 24
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            function calculateSequenceArray (values){
              var w = 1;
              for(var i = 0; i < values.length; i++){
                 w *= values[i];
                }
              return w;
           }

           const arr = [1,2,3,4];
           var ss = calculateSequenceArray(arr);
           console.log(ss);

            // End of the code
4. ##### Написать функцию, которая принимает массив чисел и возврашает новый массив, в котором числа больше нуля и меньше 10:
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [-1, 16, 3, 0, 22, 8, 2, 10, 7];
            filterArrayRangeValues(arr);
            Expected Result: [3, 8, 2, 7]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            function filterArrayRangeValues(values){
              var e = [];
             for(var i = 0; i > values.length; i++){
                  if(values[i] >= 0 && values[i]<= 10){
                       e.filter(values[i]);  }
                      }
              return e;
            }

           var ar = [-1, 16, 3, 0, 22, 8, 2, 10, 7];
           var tt = filterArrayRangeValues(ar);
           console.log(tt);
            
            // End of the code
5. ##### Написать функцию, которая принимает массив чисел, проверяет, является ли элемент массива четным или не четным и возврашает массив булевых значений. При условии, если элемент принимаемого массива четный - значение элемента возврашаемого массива будет равно ```true```
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [1,10,11,12,7,6,8]
            transformArrayToOddEvenConditions()
            Expected Result: [false, true, false, true, false, true, true]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here

                 function transformArrayToOddEvenConditions(values){
                     var ss = [];
                     for (var i = 0; i < values.length; i++) {
                          if(values[i] % 2 === 0){
                             ss.push(true);
                           } else {
                              ss.push(false);
                          }
                      }
                        return ss;
                      }

                     var arr22 = [1,10,11,12,7,6,8]; 
                     var ppp = transformArrayToOddEvenConditions(arr22);
                     console.log(ppp);


            
            // End of the code
6. ##### Написать функцию, которая принимает массивы, в качестве аргументов(количество принимаемых аргументов не ограничено), и возврашает массив с наибольшим числом эелементов.
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr1 = [1,2,3,4,5];
            var arr2 = [1,2,3,4,5,6,7];
            var arr3 = [1,2,3,4,5,6,7,8,9];
            
            getMaxLengthArray(arr1, arr2, arr3);
            Expected Result: [1,2,3,4,5,6,7,8,9]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
               function getMaxLengthArray(){
               var num = 0;
                  for (var i = 0; i < arguments.length; i++) {
                     if(arguments[i].length > num){
                         num = arguments[i].length;
                     } else if (num in arr) {
                      return arr;

                     }
                    }
              return num;
              }
             var arr01 = [1,2,3,4,5];
             var arr02 = [1,2,3,4,5,6,7];
             var arr03 = [1,2,3,4,5,6,7,8,9];
             var result444 = getMaxLengthArray(arr01, arr02, arr03);
             console.log(result444);
            
            // End of the code

7. ##### Написать функцию, которая возврашает минимальное значение элементов массива
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [2, 4, 1, 9,3, 5, 8];
            arrayMinValue(arr);
            Expected Result: 1
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code her

             function arrayMaxValue(values) {
             var y = 0;
             for(var i = 0; i < values.length; i++);
               if(values[i] < y){
                  y = values[i];
               }
             return y;
             }

            var arrMax = [2, 4, 1, 9, 3, 5, 8];
            var resultMax = arrayMaxValue(arrMax);
            console.log(resultMax);

            
            // End of the code


8. ##### Написать функцию, которая принимает строку, и возврашает ```true```, если строка не содержит ни одного числового символа, в противном случае - ```false```
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var str = 'abcd8efgg'';
            hasNoStrSymbols(str);
            Expected Result: false

   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

          // Start your code here
          function hasNoStrSymbols(sentence, limit){

            var words = sentence.split('');
             for(var i = 0; i < words.length; i++){
              var num = parseInt(words[i]);
               if(!isNaN(num)){
                   return num;
                      }

              }
           }
           var strq = 'abcd8efgg';
           var resultS = hasNoStrSymbols(strq);
           console.log(resultS);
          
          // End of the code
9. ##### Написать функцию, которая принимает 2 массива и возврашает значения, которые присутствуют в обоих массивах
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr1 = [1,2,3,4,5,6,7];
            var arr2 = [1,2,7,55,66,77,88,99];
            getCommonValues(arr1, arr2)
            Expected Result: [1,2,7];
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution     
      
            // Start your code here
            
            
            // End of the code
9. ##### Напиши функцию, которая принимает 3 массива и возврашает значения, которые не повторяются в массивах
    * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr1 = [1,2,3,4,5,6,7];
            var arr2 = [1,2,3,4,5,6,7,8];
            var arr3 = [1,2,3,4,5,6,7,9,10];
            getUniqueValues(arr1, arr2, arr3)
            Expected Result: [8,9,10];
    * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            // End of the code
10. ##### Написать функцию, которая принимает строку, и символ для поиска в строке. Функция должна выводить количество повторений символа в строке.
    * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var str = 'hello world';
            var symb = 'l';
            countSymbolInStr(str, symb);
            Expected Result: 3
    * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            // End of the code
