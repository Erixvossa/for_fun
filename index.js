//1. Задача. Посчитать сумму чисел до n//
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(5));

//2 задача. Исправить фунцию//
function repair() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
repair();

//3 задача. Развернуть строку//
function reverse(str) {
    console.log(str.split('').reverse().join(''));
}
reverse('soon');

//4 задача. Почитал про каррирование. Нихрена не понял, но видоизменил функцию, которую нашел//
const _sum2 = (x, y) => x + y;

function curry(fn) {
    const N = fn.length;
    function innerFn(n, args) {
        return function actualInnerFn(a) {
            if(n <= 1) {
                return fn(...args, a);
            }
            return innerFn(n - 1, [...args, a]);
        }
    }
    return innerFn(N, [])
}

const sum2 = curry(_sum2);

console.log(sum2(20)(5));

//5 задача. метод аналогичен 1й задаче.//
const isPalindrome = str => {
    console.log(str === str.split('').reverse().join(''));
}

isPalindrome('topot');
isPalindrome('topop');