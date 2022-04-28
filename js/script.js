const $text = document.getElementById("text");
const $sortedtext = document.getElementById("sortedtext");
const $deletedtext = document.getElementById("deletedtext");

let names = prompt("Type list of name separated by comma and space")
let deleted = prompt("Type the number of the name to be deleted")

let arrayOfNames = names.split(", ");
$text.innerHTML = "All: " + arrayOfNames; 

let deletedName = arrayOfNames[deleted-1];

let deletedArrayOfNames = arrayOfNames;
let finalDeleted = deleted - 1
deletedArrayOfNames.splice(finalDeleted,1)


let sortedArrayOfNames = arrayOfNames.sort();
$sortedtext.innerHTML = "Sorted: " + sortedArrayOfNames;

$deletedtext.innerHTML = "Deleted: " + deletedName;
