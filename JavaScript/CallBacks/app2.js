function xyz(){
    console.log("I am inside xyz")
}

console.log("Hello")
// setTimeout(xyz,1000)
console.log("Hi")
// setInterval(xyz,1000)
let interval = setInterval(xyz,1000)
function clear(){
    clearInterval(interval)
}
setTimeout(clear, 4000)