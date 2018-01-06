var students = [ "John", "Ida", "Karin", "Hank", "Bobby" ];

for(var i = 0; i < students.length; i++)
{
    console.log("Welcome to class, " + students[i] + "!");
}

/* Solve the following:

1) Write a JavaScript for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, 
and display a message to the screen. */
for(var n = 0; n < 15; n++)
{
    console.log(n + " is " + ((n % 2 == 0) ? "even" : "odd"));
}

/* 
2) Using loops, create a Javascript program that prints out the following:

*  
* *  
* * *  
* * * *  
* * * * *               */
for(var i = 1; i <= 5; i++)
{
    var stars = "";

    for(var j = 1; j <= i; j++)
    {
        stars += "* ";    
    }
    
    console.log(stars);
}

/* 
3) Write a JavaScript program which iterates the integers 
from 1 to 100. But for multiples of three print 'Code' instead 
of the number and for the multiples of five print 'Monkey'. 
For numbers which are multiples of both three and five print 'CodeMonkey' */
for(var n = 0; n < 100; n++)
{
    var printNumber = true;
    var string = "";
    
    if(!(n % 3))
    {
        string += "Code";
        printNumber = false;
    }
    
    if(!(n % 5))
    {
        string += "Monkey";
        printNumber = false;
    }
    
    console.log(printNumber ? n : string);
}