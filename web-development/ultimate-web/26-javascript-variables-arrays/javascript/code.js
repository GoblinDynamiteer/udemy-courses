var students = ["Timmy", "John", "Billy"];
console.log("Students: " + students);

/* Empty array */
var naughtyList = [];

/* Add student at index 0 to array */
naughtyList.push(students[0]);
console.log("Adding " + students[0] + " to naughtyList");

/* Find index of "Timmy" */
var index = naughtyList.indexOf("Timmy");

console.log("Timmy is at index: " + index + " of naughtyList");
console.log("naughtyList: " + naughtyList);


if (index > -1) {
    /* Remove index(es) */
    console.log("Removing index: " + index + " from naughtyList");
    naughtyList.splice(index, 1);
}

console.log("naughtyList: " + naughtyList);