//2 html add
document.getElementById("blog").addEventListener("click", function(){
    window.location.href = 'file:///E:/assignment5-main/blog.html'
})




//first card
//first card button click
let serial =+ 0;
document.getElementById("first-card").addEventListener("click", function() {
//console.log("clicked");

//get data from html
serial += 1;
const firstComponantName = document.getElementById("first-name").innerText;
//console.log(componantName);



    const firstInput = document.getElementById("first-input").value; 
    if (typeof firstInput !== "number") {
      // Display an error message to the user
      alert("Please enter a number.");
    }



    const secondInput = document.getElementById("second-input").value;
    if (typeof secondInput !== "number") {
      // Display an error message to the user
      alert("Please enter a number.");
    }



//console.log(componantName,firstInput,secondInput)
const areaOne = 0.5 * parseFloat(firstInput) * parseFloat(secondInput)
const firstTwoDecimel = areaOne.toFixed(2)
const Convart = (areaOne) / 100

console.log(firstComponantName,firstInput,secondInput,firstTwoDecimel,Convart);

displaydata(firstComponantName,firstTwoDecimel,Convart);


});


//second card
 serial += 0;
document.getElementById("second-card").addEventListener("click", function(e){
//console.log(e.target);
serial += 1;
const secondComponantName = document.getElementById("second-name").innerText;
console.log(secondComponantName)
 const thirdInput = document.getElementById("third-input").value;
 console.log(thirdInput)
 if (typeof thirdInput !== "number") {
   // Display an error message to the user
   alert("Please enter a number.");
 }
 const fourthInput = document.getElementById("fourth-input").value;
 console.log(fourthInput)
 if (typeof fourthInput !== "number") {
  // Display an error message to the user
  alert("Please enter a number.");
}

 const areaTwo = parseFloat(thirdInput) * parseFloat(fourthInput)
 const twoDecimel = areaTwo.toFixed(2)
 const convart = (areaTwo) / 100
 

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




