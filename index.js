document.getElementById("blog").addEventListener("click", function(){
    window.location.href = 'http://127.0.0.1:5500/blog.html'
})

//first card button click
document.getElementById("first-card").addEventListener("click", function() {
//console.log("clicked");

//get data from html
const firstComponantName = document.getElementById("first-name").innerText;
//console.log(componantName);
const firstInput = document.getElementById("first-input").value;
//console.log(firstInput)
const secondInput = document.getElementById("second-input").value;
//console.log(componantName,firstInput,secondInput)
const areaOne = 0.5 * parseFloat(firstInput) * parseFloat(secondInput)
const convart = (areaOne) / 10000

console.log(firstComponantName,firstInput,secondInput,areaOne,convart);

displaydata(firstComponantName,areaOne,convart);
});

// ...........................


document.getElementById("second-card").addEventListener("click", function(e){
//console.log(e.target);
const secondComponantName = document.getElementById("second-name").innerText;
console.log(secondComponantName)
 const thirdInput = document.getElementById("third-input").value;
 console.log(thirdInput)
 const fourthInput = document.getElementById("fourth-input").value;
 console.log(fourthInput)

 const areaTwo = parseFloat(thirdInput) * parseFloat(fourthInput)
 const convart = (areaTwo) / 10000

 console.log(secondComponantName,thirdInput,thirdInput,areaTwo,convart);
 displaydata(secondComponantName,areaTwo,convart);


});












//common function to display data
function displaydata(componantName,area,convart){
    //table show the data
const container = document.getElementById("table-container");
const tr = document.createElement("tr")
tr.innerHTML = `
<td>${1}</td>
<td>${componantName}</td>
<td>${area}</td>
<td>${convart}</td>

`;
container.appendChild(tr);
}