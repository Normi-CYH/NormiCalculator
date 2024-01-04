var ans = 0;
var disFlag = false;
var preSyt = '';

function ac() {
    ans = 0;
    disFlag = false;
    document.getElementById("ans").innerHTML = '0';
}

function back() {
    var currAns = document.getElementById("ans").innerHTML;
    if (currAns.length == 1) {
        disFlag = false;
        document.getElementById("ans").innerHTML = '0';
    }
    else {
        document.getElementById("ans").innerHTML = currAns.slice(0, -1);
    }
}

function zero() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '0');
    }
    else {
        document.getElementById("ans").innerHTML = '0';
    }
}

function one() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '1');
    }
    else {
        document.getElementById("ans").innerHTML = '1';
        disFlag = true;
    }
}

function two() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '2');
    }
    else {
        document.getElementById("ans").innerHTML = '2';
        disFlag = true;
    }
}

function three() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '3');
    }
    else {
        document.getElementById("ans").innerHTML = '3';
        disFlag = true;
    }
}

function four() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '4');
    }
    else {
        document.getElementById("ans").innerHTML = '4';
        disFlag = true;
    }
}

function five() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '5');
    }
    else {
        document.getElementById("ans").innerHTML = '5';
        disFlag = true;
    }
}

function six() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '6');
    }
    else {
        document.getElementById("ans").innerHTML = '6';
        disFlag = true;
    }
}

function seven() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '7');
    }
    else {
        document.getElementById("ans").innerHTML = '7';
        disFlag = true;
    }
}

function eight() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '8');
    }
    else {
        document.getElementById("ans").innerHTML = '8';
        disFlag = true;
    }
}

function nine() {
    var currAns = String(Number(document.getElementById("ans").innerHTML));
    if (disFlag) {
        document.getElementById("ans").innerHTML = displayLongNumber(currAns + '9');
    }
    else {
        document.getElementById("ans").innerHTML = '9';
        disFlag = true;
    }
}

function dot() {
    var currAns = document.getElementById("ans").innerHTML;
    if (currAns.slice(-1) != '.') {
        document.getElementById("ans").innerHTML = currAns + '.';
        disFlag = true;
    }
}

function divide() {
    equal();
    disFlag = false;
    preSyt = '/';
}
function multiply() {
    equal();
    disFlag = false;
    preSyt = '*';
}
function minus() {
    equal();
    disFlag = false;
    preSyt = '-';
}
function add() {
    equal();
    disFlag = false;
    preSyt = '+';
}

function equal() {
    var currAns = Number(document.getElementById("ans").innerHTML);
    switch(preSyt) {
        case '/':
            ans = ans / currAns;
            break;
        case '*':
            ans = ans * currAns;
            break;
        case '-':
            ans = ans - currAns;
            break;
        case '+':
            ans = ans + currAns;
            break;
        case '':
            ans = currAns;
            break;
    }
    
    document.getElementById("ans").innerHTML = displayLongNumber(String(ans));
    preSyt = '';
    // console.log(ans);
}

function displayLongNumber(numString) {
    if (numString.length > 15) {
        numString = String(Number(numString).toExponential(8));
    }
    return numString;
}


// Light dark mode
var mode = 'dark'
function lightDark() {
    if (mode == 'dark') {
        document.documentElement.style.setProperty('--bgColor', '#E5E1DA');
        document.documentElement.style.setProperty('--buttonColor1', '#AAD7D9');
        document.documentElement.style.setProperty('--buttonColor2', '#80BCBD');
        document.documentElement.style.setProperty('--displayColor', '#FBF9F1');
        document.documentElement.style.setProperty('--textColor1', 'black');
        document.documentElement.style.setProperty('--textColor2', 'black');
        document.getElementById('lightDark').innerHTML = '<i class="fa-solid fa-sun"></i>';
        mode = 'light';
    }
    else {
        document.documentElement.style.setProperty('--bgColor', '#0F1035');
        document.documentElement.style.setProperty('--buttonColor1', '#365486');
        document.documentElement.style.setProperty('--buttonColor2', '#7FC7D9');
        document.documentElement.style.setProperty('--displayColor', '#DCF2F1');
        document.documentElement.style.setProperty('--textColor1', 'white');
        document.documentElement.style.setProperty('--textColor2', 'black');
        document.getElementById('lightDark').innerHTML = '<i class="fa-solid fa-moon"></i>';
        mode = 'dark';
    }
}

