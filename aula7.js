function abs() {
    if (3 >= 8) {
        return true;
    }
    else {
        return -3
    }
}

console.log(abs())


function factorial(n) {
    var product = 1;
    while(n > 1) {
        product *= n;
        n--; // n = n -1
    }
    return product;
}
    console.log(factorial(4)) // 24: 1*4*3*2 




    function factorial2(n) {
        var i, product = 1;
        for(i=2; i <= n; i++)
            product *= i;

        return product;
    }
    console.log(factorial2(5))  //120: 1*2*3*4*5