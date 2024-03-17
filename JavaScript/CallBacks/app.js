function callbackTest(){
    console.log("Hello World")
}

function add(x1, x2, func){
    console.log(x1+x2)
    func()
}

add(4,5, callbackTest)