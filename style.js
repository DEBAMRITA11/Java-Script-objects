//Javascripts Object:
//Array Example:
//const userArray = [
//    "Amrita",
//   "Rani",
//    "1993"];
//    console.log(userArray);
//   console.log(userArray[2]);
// Object Example:
//const userObject = {
//    firstName: "Amrita",
//    lastName: "Deb",
//    birthYear: "1993",
// };
//console.log(userObject);
//we can use 2 notation for showing object in console.
//1. Dot notation: Example
//console.log(userObject.firstName);
//console.log(userObject.birthYear);
//2. Bracket notation is another way to access a property of an object.
//console.log(userObject["firstName"]);

//Add new items with userobjects.
//Example: dot notation.
//userObject.hobby = "Reading";
//console.log(userObject);
//console.log(userObject.hobby);
//Example: Bracket notation
//userObject["birthPlace"] = "Dhaka";
//console.log(userObject["birthPlace"]);

//example:Bollean 
//const userObjectTwo = {
    //firstName: "Amrita",
    //lastName: "Deb",
    //isJob: true,
    //calculateAge: function (birthYear) {
    //    return 2022 - birthYear;
    //}
 //};
//console.log(userObjectTwo.isJob);
//console.log(userObjectTwo.calculateAge(1993));

//Call this object with bracket notation:
//console.log(userObjectTwo["calculateAge"](1985));

//This keywork 
//const userObjectTwo = {
//    firstName: "Amrita",
//    lastName: "Deb",
//   birthYear: 1993,
//    isJob: true,
 //   calculateAge: function () {
//        console.log(this.birthYear);
//        return 2022 - this.birthYear;
//    },
//    userDetails: function() {
//        return `This is user ${this.firstName} ${this.lastName}, born in ${this.birthYear}!`;
        
//    }
// };
// console.log(userObjectTwo.calculateAge());
 ////This is user Amrita Deb, born in 1993!
 //console.log(userObjectTwo.userDetails());

 //Javascript loop
 //For loop
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");

//for(let task = 1; task<=4; task = task++){
// console.log(`Task ${task}`); 
// } 
//Basically programmer doesn't use task. they used "i". 

// for(let i = 1; i<=4; i++) {
//    console.log(`Task ${i}`); 
//    } 

//while loop:
//let task = 1; 
//while(task<= 4) {
//console.log(`task ${task}`);
//task++;
//}
// using "i" while loop: 
//let i = 1; 
//while(i<= 4) {
//console.log(`task ${i}`);
//i++;
//}

//Array
//const newArray = [
//    "Data 1",
//    "Data 2",
//    "Data 3",
//    "Data 4",
//    "Data 5",
//];
//console.log(newArray);
//console.log(newArray[0]);
//console.log(newArray[1]);
//console.log(newArray[2]);
//console.log(newArray[3]);
//console.log(newArray[4]);

//console.log(newArray.length);

//write loop 
//for (let i=0; i<newArray.length; i++) {
//   console.log(newArray[i]);
//}

//backword loop: 
//for(let i= newArray.length -1) 
//for(let i= newArray.length - 1; i>=0; i--) {
//    console.log(newArray[i]); 
//} 

// loop break:
//for (let i=0; i<newArray.length; i++) {
//    if (i==4) break;
//      console.log(newArray[i]);
//    }

// loop continue or skip.
//for (let i=0; i<newArray.length; i++) {
//    if (i==4) continue;
//      console.log(newArray[i]);
//    }

//Array
const newArray = [
    "Data 1",
    "Data 2",
    "Data 3",
    "Data 4",
    "Data 5",
    "Data 6",
    "Data 8",
    "Data 9",
];
console.log(newArray);
//Indexof: ( finding any data;s index number)
console.log(newArray.indexof("Data 7"));
console.log(newArray.indexof("Data 2"));

//includes ( using to find any data)
console.log(newArray.includes("Data 5"));
console.log(newArray.includes("Data 11"));