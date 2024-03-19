const array = [1,2,5,8,7,3]

function abc(value){
    console.log(value)
}

let average_value = 0
function average(ele){
  average_value = average_value + ele
}

function avg(ele){
    average(ele)
}
array.forEach(abc)
array.forEach(avg)
console.log(average_value/5)