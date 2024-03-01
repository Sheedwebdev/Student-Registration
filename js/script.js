//Part1: Declare all variables that are selecting elements on your page
const notRegistered = document.querySelector(".not-registered");  //step1: Create a variable that selects the ul element with class not-registered

//Part2: Create an asyncronous function (main function) for retrieving, interpreting, and making use of data
const registrationData = async function () {  // step2: Declare a variable for your asyncronous fucntion
  const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"); //step3: Retrieve the data from the json file
  const data = await request.json(); // step4: Parse or interpret the json data into js data (array of student objects)
  displayContactList(data);  //step11:  Call or run the display function using the array of objects as an argument
};

//Part3: Create a function that displays the data you want displayed (supporting function)  
const displayContactList = function (data) {  //step5: Create a function expression using the array of objects as the parameter 
  for (const student of data) {  //step6: Loop over each object in the array of objects
    if (student.registered === "no") {  //step7: Write a condition statement that determines whether a student has registered or not
          const li = document.createElement("li"); //step8: Create a list item element
          li.innerText = student.name;  //step9: Use the students name for the list item 
          notRegistered.append(li); //step10: Add the created list item to the ul element
    }
  }
};

//Part4: Call or run the async function
registrationData(); //step12: Call or run the async function