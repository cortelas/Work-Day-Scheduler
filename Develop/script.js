//sets title time to current time
document.getElementById("currentDay").textContent= moment().format("dddd, MMMM Do YYYY");
console.log("title time set");

//sets background color based on time
document.getElementById("i0").style.backgroundColor = "red";
for (let index = 0; index < 9; index++) {
    if(index+9 > moment().format("H")){
        document.getElementById("i"+index).style.backgroundColor = "green"; 
    } else if(index+9 == moment().format("H")){
        document.getElementById("i"+index).style.backgroundColor = "red"; 
    } else if(index+9 < moment().format("H")){
        document.getElementById("i"+index).style.backgroundColor = "grey"; 
    } 
}
console.log("current hour is: " + moment().format("H"));

//lets button store input locally
$("#saveBtn0").on("click", function(event){
    console.log("button 0 was clicked!");
    var timeBlockText = $("#timeBlockInput0")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText0", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText0"));
    
});

$("#saveBtn1").on("click", function(event){
    console.log("button 1 was clicked!");
    var timeBlockText = $("#timeBlockInput1")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText1", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText1"));
    
});

$("#saveBtn2").on("click", function(event){
    console.log("button 2 was clicked!");
    var timeBlockText = $("#timeBlockInput2")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText2", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText2"));
    
});

$("#saveBtn3").on("click", function(event){
    console.log("button 3 was clicked!");
    var timeBlockText = $("#timeBlockInput3")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText3", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText3"));
    
});

$("#saveBtn4").on("click", function(event){
    console.log("button 4 was clicked!");
    var timeBlockText = $("#timeBlockInput4")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText4", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText4"));
    
});

$("#saveBtn5").on("click", function(event){
    console.log("button 5 was clicked!");
    var timeBlockText = $("#timeBlockInput5")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText5", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText5"));
    
});

$("#saveBtn6").on("click", function(event){
    console.log("button 6 was clicked!");
    var timeBlockText = $("#timeBlockInput6")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText6", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText6"));
    
});

$("#saveBtn7").on("click", function(event){
    console.log("button 7 was clicked!");
    var timeBlockText = $("#timeBlockInput7")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText7", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText7"));
    
});

$("#saveBtn8").on("click", function(event){
    console.log("button 8 was clicked!");
    var timeBlockText = $("#timeBlockInput8")
    .val()
    .trim();

    console.log("saved value is: " + timeBlockText);

    localStorage.setItem("savedText8", timeBlockText);

    console.log("stored value is: " + localStorage.getItem("savedText8"));
    
});

//sets textfield to stored value on page load
for (let i = 0; i < 9; i++) {
    document.getElementById("timeBlockInput" +i).value = localStorage.getItem("savedText"+i);
    console.log("Changing text of "+ "timeBlockInput" + i + " to " + localStorage.getItem("savedText"+i));
    
}