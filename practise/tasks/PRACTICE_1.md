## Повторение материала

#### Ответы по задачам. Тема: массивы.
1. ##### Напиши функцию, которая возврашает индексы элементов данного массива, в виде массива:
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code

            // Call function: getIndexes("a", "b", "c", "d", "e")
            // Expected Result: [0,1,2,3,4] 
            Write function getIndexes
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function getIndexes() {
                const stack = [];
                for(let i = 0; i < arguments.length; i += 1) {
                    stack.push(i);
                }
                return stack;
            }
            
            const indexes =  getIndexes("a", "b", "c", "d", "e");
            console.log(indexes);
            
            // End of the code

2. ##### Вернуть принятые функцией аргументы, в виде строки из обратно отсортированных значений:
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            Write function: getFunctionArgumentsReverse("a", "b", "c", "d", "e")
            Expected Result: "edcba" 
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function getFunctionArgumentsReverse() {
                let result = "";
                for(let i = (arguments.length - 1); i >= 0; i -= 1) {
                    result += arguments[i];
                }
                return result;
            }
            
            const resultString =  getFunctionArgumentsReverse("a", "b", "c", "d", "e");
            console.log(resultString);
            
            
            
            // End of the code
3. ##### Return an array of string values
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = ["a", 2, 4, 1, "e", 3, 5];
            getStringValues(arr);
            Expected Result: ["a", "e"]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function getStringValues(values) {
                const stack = [];
                for(let i = 0; i < values.length; i += 1) {
                    if (typeof values[i] === "string") {
                        stack.push(values[i]);
                    }
                }
                return stack;
            }
            
            const arr = ["a", 2, 4, 1, "e", 3, 5];
            const stringArray =  getStringValues(arr);
            console.log(stringArray);
            
            
            
            // End of the code
4. ##### Напиши функцию, которая возврашает массив целых чисел от ```0 до 20ти```
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            generateEvenNumbers()
            Expected Result: [0,2,4 ...]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function generateEvenNumbers() {
                const stack = [];
                for(let i = 0; i < 21; i += 1) {
                    if (i % 2 === 0) {
                        stack.push(i);
                    }
                }
                return stack;
            }
            
            const evenArray =  generateEvenNumbers();
            console.log(evenArray);
            
            
            
            // End of the code
5. ##### Напиши функцию, которая возврашает сумму всех элементов массива
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [2, 4, 1, 3, 5];
            arraySum(arr);
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function arraySum(values) {
                let sum = 0;
                for(let i = 0; i < values.length; i += 1) {
                    sum += values[i];
                }
                return sum;
            }
            
            const arr = [2, 4, 1, 3, 5];
            const sum =  arraySum(arr);
            console.log(sum);
            
            
            
            // End of the code
6. ##### Напиши функцию, которая возврашает максимальное значение элементов массива
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [2, 4, 1, 9,3, 5, 8];
            arrayMaxValue(arr);
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function arrayMaxValue(values) {
                let maxValue = 0;
                for(let i = 0; i < values.length; i += 1) {
                    if (values[i] > maxValue) {
                        maxValue = values[i];
                    }
                }
                return maxValue;
            }
            
            const arr = [2, 4, 7, 1, 3, 5];
            const maxValue =  arrayMaxValue(arr);
            console.log(maxValue);
            
            
            
            // End of the code
7. ##### Напиши функцию, котарая возврашает ```true```, если все элементы принимаемого массива нечетные, в другом случае - ```false```
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
            var arr = [1, 3, 5, 7, 9, 11];
            isAllOdd(arr);
            Expected Result: true
            
            var arr = [1, 3, 5, 7, 9, 11, 8];
            isAllOdd(arr);
            Expected Result: false
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

          // Start your code here
          
          
          function isAllOdd(values) {
              for(let i = 0; i < values.length; i += 1) {
                  if (values[i] % 2 === 0) {
                      return false;
                  }
              }
              return true;
          }
          
          const arr = [2, 4, 7, 1, 3, 5];
          const arr2 = [9, 7, 1, 3, 5];
          
          const areOddValues =  isAllOdd(arr);
          console.log(areOddValues); // false
          
          const areOddValues2 =  isAllOdd(arr2);
          console.log(areOddValues2); // true
          
          
          
          // End of the code
8. ##### Напиши функцию, которая сортирует элементы массива, по четным значениям.
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            sortArrayByEven(arr);
            Expected Result: [2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11]
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution     
      
            // Start your code here
            
            
              function sortArrayByEven(values) {
                  const oddStack = [];
                  const evenStack = [];
                  for(let i = 0; i < values.length; i += 1) {
                      if (values[i] % 2 === 0) {
                          evenStack.push(values[i]);
                      } else {
                          oddStack.push(values[i]);
                      }
                  }
                  
                  const evenStackSorted = evenStack.sort((a, b) => a - b);
                  const oddStackSorted = oddStack.sort(a, b) => a - b);
                  return evenStackSorted.concat(oddStack);
              }
              
              const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
              const sortedEvenOdd = sortArrayByEven(arr);
              console.log(sortedEvenOdd);
            
            
            
            // End of the code
9. ##### Напиши функцию, которая возврашает массив из первых символов каждого слова предложения, при условии, что символы входят в массив - ```['s', 'i', 'w']```
   * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var sentence = 'Soon i will become a good developer, but now i need to train hard'
            var allowedSymbols = ['s', 'i', 'w']
            parseString(sentence, allowedSymbols)
            Expected Result: ['s', 'i', 'w', 'i' ];
   * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function parseString(sentence, asym) {
                const resultStack = [];
                const words = sentence.split(' ');
                for(let i = 0; i < words.length; i += 1) {
                    if (words[i] && words[i].length) {
                        const firstSymbolInWord = words[i][0];
                        const firstSymbolInWordLowwerCase = firstSymbolInWord.toLowerCase();
                        if (asym.indexOf(firstSymbolInWordLowwerCase) !== -1) {
                            resultStack.push(firstSymbolInWordLowwerCase);
                        }
                    }
                }
                
                return resultStack;
            }
            
            const sentence = 'Soon i will become a good developer, but now i need to train hard';
            const allowedSymbols = ['s', 'i', 'w']
            const resultStack = parseString(sentence, allowedSymbols);
            console.log(resultStack);
            
            
            
            // End of the code
10. ##### Напиши функцию, которая возврашает массив чисел, найденных в строке, при условии, что ```значение числа меньше 10```. Возврашаемый массив, отсортирую в порядке убывания.
    * ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Code
   
            var letter = 'A 44 long8 time ago1 in 9a galaxy  5 far, 10 far 22away...';
            getNumbersOutOfString(letter);
    * ![#1589F0](https://placehold.it/15/1589F0/000000?text=+) Solution        

            // Start your code here
            
            
            function getNumbersOutOfString(sentence, limit) {
                const resultStack = [];
                const words = sentence.split(' ');
                for(let i = 0; i < words.length; i += 1) {
                    const intWord = parseInt(words[i]);
                    if (!isNaN(intWord)) {
                        if (intWord < limit) {
                            resultStack.push(intWord);
                        }
                    } else {
                        for(let k = 0; k < words[i].length; k += 1) {
                            const intSymbol = parseInt(words[i][k]);
                            if (!isNaN(intSymbol)) {
                                if (intSymbol < limit) {
                                    resultStack.push(intSymbol);
                                }
                            }
                        }
                    }
                }
                
                return resultStack;
            }
            
            const sentence = 'A 44 long8 time ago1 in 9a galaxy  5 far, 10 far 22away...';
            const limit = 10;
            const resultStack = getNumbersOutOfString(sentence, limit);
            console.log(resultStack);
            
            
            
            // End of the code
