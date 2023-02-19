//first card button click
document.getElementById("first-card").addEventListener("click", function() {
//console.log("clicked");

//get data from html
const componantName = document.getElementById("first-name").innerText;
//console.log(componantName);
const firstInput = document.getElementById("first-input").value;
//console.log(firstInput)
const secondInput = document.getElementById("second-input").value;
//console.log(componantName,firstInput,secondInput)
const area = 0.5 * (firstInput) * (secondInput)
console.log(area,componantName,firstInput,secondInput);

const container = document.getElementById("table-container");
const tr = document.createElement("tr")
tr.innerHTML = `
<td>${1}</td>
<td>${componantName}</td>
<td>${area}</td>





`;
container.appendChild(tr);
});