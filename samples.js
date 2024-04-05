var bad_coc = 5;
var cric_bat = 7;
var cric_ball = 5;
var basketball = 2;
var football = 3;
var tt_bat = 4;
var tt_ball = 2;
var volley = 1;

document.getElementById("badmintonBtn").addEventListener("click", function() {
    if (bad_coc>0){
        bad_coc = bad_coc - 1;
        alert("There is sufficient material.\nEnjoy your game:)")
    }
    else{
        alert("Not sufficient material to play:(")
    }
    // Add your code to handle Badminton registration here
});

document.getElementById("cricketBtn").addEventListener("click", function() {
    if (cric_bat>0 && cric_ball>0){
        cric_ball = cric_ball - 1;
        cric_bat = cric_bat - 2;
        alert("There is sufficient material.\nEnjoy your game:)")
    }
    else{
        alert("Not sufficient material to play:(")
    }
    // Add your code to handle Cricket registration here
});

document.getElementById("tableTennisBtn").addEventListener("click", function() {
    if (tt_bat>0 && tt_ball>0){
        tt_ball = tt_ball - 1;
        tt_bat = tt_bat - 2;
        alert("There is sufficient material.\nEnjoy your game:)")
    }
    else{
        alert("Not sufficient material to play:(")
    }
    // Add your code to handle Table Tennis registration here
});

document.getElementById("footballBtn").addEventListener("click", function() {
    if (football>0){
        football = football - 1;
        alert("There is sufficient material.\nEnjoy your game:)")
    }
    else{
        alert("Not sufficient material to play:(")
    }
    // Add your code to handle Football registration here
});

document.getElementById("basketballBtn").addEventListener("click", function() {
    if (basketball>0){
        basketball = basketball - 1;
        alert("There is sufficient material.\nEnjoy your game:)")
    }
    else{
        alert("Not sufficient material to play:(")
    }
    // Add your code to handle Basketball registration here
});
