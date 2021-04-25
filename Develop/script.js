//sets title time to current time
document.getElementById("currentDay").textContent= moment().format("dddd, MMMM Do YYYY");
console.log("test");

//sets background color based on time
document.getElementById("i0").style.backgroundColor = "red";
for (let index = 0; index < 9; index++) {
    if(index+9 > 10){
        document.getElementById("i"+index).style.backgroundColor = "green"; 
    } else if(index+9 == 10){
        document.getElementById("i"+index).style.backgroundColor = "red"; 
    } else if(index+9 < 10){
        document.getElementById("i"+index).style.backgroundColor = "grey"; 
    } 
}