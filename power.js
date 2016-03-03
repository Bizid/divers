function multiplyDigital(x, y){
    return parseFloat(x)* parseFloat(y);
}
function power(a,b){
    var res = a;
    var i = b-1;
    while (i > 0) {
        res = multiplyDigital(res, a);
        i--;
    }
    console.log(res);
    return res;
}

power(2,2); 
power(2,95);
power(2,12);
