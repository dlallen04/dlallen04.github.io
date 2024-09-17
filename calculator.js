
let x;
let y;
let operator;
let result;
let error;
let compute = true;

let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let total = 0;
let successfulComputations = 0;

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

while (compute) {
	
	// Get Numbers
	x = prompt("What is the first number of the operation?");
	y = prompt("What is the second number of the operation?");
	
	
	// Variable Reset
	result = "";
	error = false;
	
	// Number Error Check
	if (isNaN(x)|| isNaN(y))
		error = true;
	
	// Get Operation
	operation = prompt("What is the operation?\naddition (+)\nsubtraction (-)\nmultiplication (*)\ndivision (/)\nmodulus (%)");
	
	// Compute Operation
	if (operation == "+")
		result = !error ? (Number(x) + Number(y)) : "Non-Numeric Error";
	else if (operation == "-")
		result = !error ? (Number(x) - Number(y)) : "Non-Numeric Error";		
	else if (operation == "*")
		result = !error ? (Number(x) * Number(y)) : "Non-Numeric Error";	
	else if (operation == "/")
		result = !error ? (Number(x) / Number(y)) : "Non-Numeric Error";	
	else if (operation == "%")
		result = !error ? (Number(x) % Number(y)) : "Non-Numeric Error";
	else
	{
		result = "Operation Error";
		error = true;
	}
	
	// Display Computation Result
	alert("The result of the computation was: " + result);
	
	// Add To Table
	document.write("<tr><td>" + x + "</td><td>" + operation + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
	
	// Update Overall Information
	if (!error) {
		min = result < min ? result : min;
		max = result > max ? result : max;
		total += result;
		successfulComputations++;
	}
	
	// Decide Whether To Compute More Numbers
	compute = confirm("Would you like to compute more numbers?");
	
}

document.write("</table><br><br>");

// Summary Table
document.write("<table>");
document.write("<th>Min</th><th>Max</th><th>Average</th><th>Total</th>");
if (successfulComputations > 0)
	document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + (total / successfulComputations) + "</td><td>" + total + "</td></tr>");
else
	document.write("<tr><td>None</td><td>None</td><td>None</td><td>None</td></tr>");
document.write("</table>");

// Link Back To Home Page
document.write("<a href=\"index.html\"><h1>Home</h1></a>")
