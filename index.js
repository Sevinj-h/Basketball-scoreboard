let homeDigit0 = document.getElementById("homeDigit")
let guestDigit0 = document.getElementById("guestDigit")



let countHome = 0;
let countGuest = 0;

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
     countGuest += 1;
    guestDigit0.textContent = countGuest
}
function guestTwo (){
     countGuest += 2;
    guestDigit0.textContent = countGuest
}

function guestThree (){
     countGuest += 3;
    guestDigit0.textContent = countGuest
}
