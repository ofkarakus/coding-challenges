//? using recursion

function fibonacci (n) {
    if (n===1 || n===2) {
        return 1
    } else if (n>2) {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(7));


//?  using for loop

function fiboNum (n) {
    let fibo = 1, twoFormer = 0, oneFormer = 1;
    for (let i=1; i<n; i++) {
        fibo = oneFormer + twoFormer
        twoFormer = oneFormer
        oneFormer = fibo
    }
    return fibo
}

console.log(fiboNum(13))