function fibo(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fibo(n-1) + fibo(n-2)
    }
}


console.log(`fibo n = 10 : ${fibo(10)}`)

function addition(a, b) {
    return a + b
}

console.log(`Add 5 & 10 : ${addition(5, 10)}`)

function division(a, b) {
    return a / b
}

console.log(`Division 10 par 2 : ${division(10, 2)}`)
