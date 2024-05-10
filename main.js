//calculte the addition

function  calculate_add() {
	event.preventDefault();
	var done = parseInt(document.getElementById('one_add').value);
	var dtwo = parseInt(document.getElementById('two_add').value); 
	var dis = document.getElementById('dis_add');
	var results = (done + dtwo);
	dis.innerHTML = results;
};
//calculate the subtraction
function calculate_sub() {
	event.preventDefault();
	var subone = parseInt(document.getElementById('one_sub').value);
	var subtwo = parseInt(document.getElementById('two_sub').value);
	var subdis = document.getElementById('dis_sub');
	var sub_results = (subone - subtwo);
	subdis.innerHTML = sub_results;
};
//calculte the multiplication
function calculate_mult() {
	event.preventDefault();
	var multone = parseInt(document.getElementById('one_mult').value);
	var multtwo = parseInt(document.getElementById('two_mult').value);
	var multdis = document.getElementById('dis_mult');
	var mult_results = (multone * multtwo);
	multdis.innerHTML = mult_results;
};
// calculate the square root
function calculate_squ() {
	event.preventDefault();
	var squa_value = parseInt(document.getElementById("square_one").value);
	var dis_squa = document.getElementById("disquare");
	var square_results = Math.sqrt(squa_value);
	dis_squa.innerHTML = square_results;
};
//calculate the power
function calculate_pow() {
	event.preventDefault();
	var pow_one = parseInt(document.getElementById('one_pow').value);
	var pow_two = parseInt(document.getElementById('two_pow').value);
	var powdis = document.getElementById('dis_pow');
	var pow_results = (pow_one ** pow_two);
	powdis.innerHTML = pow_results;
};
//calculate the division
function calculatediv() {
	event.preventDefault();
	var divone = parseInt(document.getElementById('one_div').value);
	var divtwo = parseInt(document.getElementById('two_div').value);
	var disdiv = document.getElementById('dis_divi');
	var divresults = (divone / divtwo);
	disdiv.innerHTML = divresults;
};
//get select and form elements
const theselect = document.getElementById("typeofcalculation");
const add = document.getElementById("addition");
const subtract = document.getElementById("subtraction");
const multiply = document.getElementById("multiplication");
const divide = document.getElementById("division");
const powered = document.getElementById("power");
const square = document.getElementById("square");
//manipulate the calculator
theselect.addEventListener("change", function (event) {
	event.preventDefault();
	if (event.target.value == "addition") {
		add.style.display = "block"
		subtract.style.display = "none"
		divide.style.display = "none"
		multiply.style.display = "none"
		powered.style.display = "none"
		square.style.display = "none"
	}
	else if (event.target.value == "subtraction") {
		subtract.style.display = "block"
		add.style.display = "none"
		divide.style.display = "none"
		multiply.style.display = "none"
		powered.style.display ="none"
		square.style.display = "none"
	}
	else if (event.target.value == "multiplication") {
		multiply.style.display = "block"
		subtract.style.display = "none"
		divide.style.display = "none"
		add.style.display = "none"
		powered.style.display = "none"
		square.style.display = "none"

}
	else if (event.target.value == "division") {
		divide.style.display = "block"
		subtract.style.display = "none"
		add.style.display = "none"
		multiply.style.display = "none"
		powered.style.display = "none"
		square.style.display = "none"

}
	else if (event.target.value == "power") {
		powered.style.display = "block";
		add.style.display = "none";
		subtract.style.display = "none";
		multiply.style.display = "none";
		divide.style.display = "none";
		square.style.display = "none"
	}
	else if (event.target.value == "root") {
		square.style.display = "block";
		add.style.display = "none";
		subtract.style.display = "none";
		multiply.style.display = "none";
		divide.style.display = "none";
		powered.style.display = "none"
	}
	else {
		add.style.display = "none"
		subtract.style.display = "none"
		multiply.style.display = "none"
		divide.style.display = "none"
		powered.style.display = "none"
		square.style.display = "none"
	}
})

