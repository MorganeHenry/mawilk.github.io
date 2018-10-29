function greet() {
    window.alert("Hello everyone!")
}

function init(){

/*TASK 1*/
	document.getElementById("first").src = "flower2.png";

/*TASK 2*/	
	document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";

/*TASK 3*/	
	let images = document.getElementById("container").getElementsByTagName("img");
	images[1].src="flower2.png";
	images[3].src="flower2.png";

	document.getElementById("inner").innerHTML="Morgane";

/*TASK 4*/
	let image = document.createElement("img");
	document.getElementById("new_element").appendChild(image).src="flower2.png";

/*TASK 5*/
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];
	
	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}

/*TASK 6*/

	var changeSrc = function(event) {
	  if (event.target.src) {
	  	let filename = event.target.src.replace(/^.*[\\\/]/, '');
		  if(filename=="flower2.png"){
		  	event.target.src = "flower1.png";
		  }
		  else{
		  	event.target.src = "flower2.png";
		  }
		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc); 
	

}