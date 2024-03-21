let numbers = [1, 5, 8, 9, 15, 6]
let largest = [0]
for( let i = 1;i = numbers.length;  i++){

    if( numbers[i] > largest){
        largest = numbers[i]
    }
}
console.log(largest)