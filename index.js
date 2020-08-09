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