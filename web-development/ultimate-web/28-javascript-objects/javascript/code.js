/* Object constructor */
function Student(firstName, lastName, age) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function() 
    {
        return  "Hi, I'm " + this.firstName + 
                " and I'm " + this.age + " years old!";
    }
}


/* Objects "on the fly" */
var student0 = {
    firstName: "John",
    lastName: "Parker",
    age: 7,
    greeting: function() 
    {
        return  "Hi, I'm " + this.firstName + 
                " and I'm " + this.age + " years old!";
    }
};

var student1 = new Object();
student1.firstName = "Ida";
student1.lastName = "Karlsson";
student1.age = 8;

var student2 = {};
student2.firstName = "Karin";
student2.firstName = "Svensson";
student2.age = 12;

console.log(student0.firstName);
console.log(student0.lastName);
console.log(student0["age"]);
console.log(student0.greeting());

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

/* Objects using constructor */
var student3 = new Student("Billy", "Ronaldsson", 8);
console.log(student3.greeting());
students.push(student3);

/* Add object to array using constructor */
students.push(new Student("Kalle", "Holm", 10));
students.push(new Student("Anna", "Holm", 12));

for(var i = 0; i < students.length; i++)
{
    console.log(students[i]);
}

/* Loop through object keys */
for(var key in student0)
{
    console.log(key + ": " + student0[key]);
}