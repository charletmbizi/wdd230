// Defines variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLenght(){
	return input.value.length;
}

//Creates the list element, creates a delete button and appends it to list element.
//Defines click, mouseover, mouseout functions.
function createListElement(){
	var deleteBtn = document.createElement('button');
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + "   "));
	ul.appendChild(li);
	input.value = "";

	li.appendChild(deleteBtn)
    deleteBtn.innerHTML = "Remove";

    deleteBtn.addEventListener("click", function(event) {
    this.parentNode.parentNode.removeChild(this.parentNode);
    })

	li.addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	li.addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	li.addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

//If the length of the input in the box is greater than 0, create a text node in li.
function addListAfterClick(){
	if(inputLenght() > 0) {
		createListElement();
	}	
}

//If the length of the input in the box is greater than 0, create a text node in li.
function addListAfterKeyPress(event) {
	if(inputLenght() > 0 && event.keyCode === 13) {
			createListElement();
	}
}

//Adds an event listener for "click", if anyone clicks run this function.
button.addEventListener("click", addListAfterClick)
	
//If anyone ever presses this key run this function.
input.addEventListener("keypress", addListAfterKeyPress);
