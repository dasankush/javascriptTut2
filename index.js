let count = 0;
let preCount = -1;


function increment(){
    count++;
    document.getElementById("count-el").innerText = count;
}



function decrement(){
    if(count >0){
        count--;
        document.getElementById("count-el").innerText = count;
    }
    else{
        alert('Minimum count is 0')
    } 
}



function reset(){
    alert("Confirm to reset count.");
    document.getElementById("count-el").innerText = count = 0;
}

function save(){
    countStr = (" " + count + " - ");
    if(count != preCount){
        document.getElementById("save-el").innerText += countStr;
    }
    else{
        alert("Current log should not be equal to previous log.")
    }
    preCount = count;
}




function clear_log(){
    alert("Confirm to clear logs.");
    document.getElementById("save-el").innerText = "Previous entries: ";
}