//2 html add
document.getElementById("blog").addEventListener("click", function(){
    window.location.href = 'http://127.0.0.1:5500/blog.html'
})
//random hover colour
const backgroundHoverOne = document.getElementById("hover-one");
backgroundHoverOne.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

const backgroundHoverTwo = document.getElementById("hover-two");
backgroundHoverTwo.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

const backgroundHoverThree = document.getElementById("hover-three");
backgroundHoverThree.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

const backgroundHoverFour = document.getElementById("hover-four");
backgroundHoverFour.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

const backgroundHoverFive = document.getElementById("hover-five");
backgroundHoverFive.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

const backgroundHoverSix = document.getElementById("hover-six");
backgroundHoverSix.addEventListener("mouseover", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.backgroundColor = randomColor;
});







//first card
//first card button click
let serial = 0;
document.getElementById("first-card").addEventListener("click", function() {
//console.log("clicked");

//get data from html
serial =+ 1;
const firstComponantName = document.getElementById("first-name").innerText;
//console.log(componantName);
const firstInput = document.getElementById("first-input").value;





//console.log(firstInput)
const secondInput = document.getElementById("second-input").value;
//console.log(componantName,firstInput,secondInput)
const areaOne = 0.5 * parseFloat(firstInput) * parseFloat(secondInput)
const firstTwoDecimel = areaOne.toFixed(2)
const Convart = (areaOne) / 10000

console.log(firstComponantName,firstInput,secondInput,firstTwoDecimel,Convart);

displaydata(firstComponantName,firstTwoDecimel,Convart);


});


//second card
serial += 2;
document.getElementById("second-card").addEventListener("click", function(e){
//console.log(e.target);
const secondComponantName = document.getElementById("second-name").innerText;
console.log(secondComponantName)
 const thirdInput = document.getElementById("third-input").value;
 console.log(thirdInput)
 const fourthInput = document.getElementById("fourth-input").value;
 console.log(fourthInput)

 const areaTwo = parseFloat(thirdInput) * parseFloat(fourthInput)
 const twoDecimel = areaTwo.toFixed(2)
 const convart = (areaTwo) / 10000
 

 console.log(secondComponantName,thirdInput,thirdInput,twoDecimel,convart);
 displaydata(secondComponantName,twoDecimel,convart);


});




//common function to display data
function displaydata(componantName,area,convart){
    //table show the data
const container = document.getElementById("table-container");
const tr = document.createElement("tr")
tr.innerHTML = `
<td>${serial}</td>
<td>${componantName}</td>
<td>${area}</td>
<td>${convart}</td>

`;
container.appendChild(tr);
}