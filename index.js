let homeDigit0 = document.getElementById("homeDigit")
let guestDigit0 = document.getElementById("guestDigit")



let countHome = 0;
let conutGuest = 0;

// home score

function homeOne(){
 
    countHome += 1;
    homeDigit0.textContent = countHome
}

function homeTwo(){
    countHome += 2;
    homeDigit0.textContent = countHome
}

function homeThree(){
     countHome += 3;
    homeDigit0.textContent = countHome
}

//guest score
function guestOne (){
     countHome += 1;
    homeDigit0.textContent = countHome
}
function guestTwo (){
     countHome += 2;
    homeDigit0.textContent = countHome
}

function guestThree (){
     countHome += 3;
    homeDigit0.textContent = countHome
}