function sumOfNumber(number){
    let sum = 0;
    for(let i = 1; i <=number; i++){
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}
const result = sumOfNumber(7)
console.log(result);