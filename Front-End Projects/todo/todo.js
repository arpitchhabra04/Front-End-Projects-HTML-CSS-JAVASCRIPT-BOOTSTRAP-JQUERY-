var x = prompt(	"what would  you like to do?");
var arr = [];

while(x !== "quit")
{
if (x==="new") {
  var y = prompt("enter todo");
   items = arr.push(y);
  console.log(arr);
 
}

else if (x === "list") {
	arr.forEach(function (todo, i){
		console.log(i + ": " + todo);
	});
}

else if(x === "delete"){
	var del = prompt("which index you want to delete");
	arr.splice(del,1);
	console.log("deleted todo");
}

var x = prompt(	"what would  you like to do?");
}



 	console.log("quit");