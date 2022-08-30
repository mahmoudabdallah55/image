// get Elements from html file 
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayScale = document.getElementById("grayScale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");


let reset = document.querySelector("span");
let download = document.getElementById("download");
let upload = document.getElementById("upload");
let imgBox = document.querySelector(".img-box");
let img =document.querySelector("img")



function resetvalues()
{
    img.style.filter= "";
    saturate.value= "100"
    contrast.value= "100"
    brightness.value= "100"
    sepia.value= "0"
    grayScale.value= "0"
    blur.value= "0"
    hueRotate.value= "0"


}
reset.onclick =function()
{
    resetvalues();
}



window.onload=function()
{
    reset.style.display="none"
    download.style.display="none"
    imgBox.style.display="none"
}
upload.onchange=function()// input type file js acte with it as a array of files of all indes
{
    resetvalues();
    reset.style.display="block"
    download.style.display="block"
    imgBox.style.display="block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);// file must be onload to take your action

  file.onload = function()
  {
    img.src = file.result;
  }
}


let filters = document.querySelectorAll("ul li input");

console.log(filters)
filters.forEach((filter22) =>{

filter22.addEventListener("input",function(){
    img.style.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayScale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)

    `

})




})





// after style must css property

























// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
// Review of function section implemention 
let person = {
    age:25,
    name :"ali"
};


// selfe invoked function 
(function(){
console.log(` your name is    ${person.name} your age is      ${person.age}`)
})(person)




// Expersion function  anonymous function is a function withoutname to invoke it pass it to variable namt to call by this variable 
 let show =function()
{
console.log("555555555555555")
} 
// show()




// statment function have a name so you can invoke it by it is name like this
function play()
{
    
console.log("88888888888888888")
}
// play()



// arrow function =>
// becouse js is a functional programming  language so you can pass funtion as a paramter to anthor function 
// setInterval (function(){
//     console.log("7777777777777777")
// },4000)


//setTimeout() //one excution of code 
//setInterval ( play,2000) // excution every period of time 

//anonymous function 
 let arrow = function ()
{

}

// arrow function  
// to pass functtion to anthor one you must pass it without () 
// like this 
//setInterval(play,5000)

//paramter in the declaretion block but argument in invoktion block or the value of pramter 
// function addNum(num,num2) // declare with pramater
// {
//     let r = num+num2
//     console.log(r)
// }
// addNum(2,5)// calling by argument 
// return word stop excution of function imedatly

// function add(a,b)
// {
//     return a+b ;
// }

// function average(a,b,add)
// {
//     return add(a,b)/2
// }


// let r = average(10,20,add)
// console.log(r)



let mmyf = function()
{
    
}

let myf =(a,b) => {return a*b};
console.log(myf(5,2));