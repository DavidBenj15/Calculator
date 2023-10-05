let num = '0';
//let decimalPressed = 0;
let stored = '0'
let currentOperation = '';

const calcContainer = document.getElementsByClassName('calc__container');
const currentNum = document.getElementById('current__num');
const storedNum = document.getElementById('stored__num');


const numButtonsArray = document.getElementsByClassName('num__button');
for (let i = 0; i < 10; i++) {
    numButtonsArray[i].addEventListener('click', e => {
        let newNum = numButtonsArray[i].value;
        /*if(decimalPressed > 0) {
            console.log(num);
            console.log('DP Value:' + decimalPressed);
            num = (num + (newNum / Math.pow(10,decimalPressed))).toFixed(decimalPressed);
            decimalPressed ++;
            currentNum.innerText = num;
            
        }
        else {
            num = num * 10 + newNum;
            currentNum.innerText = num;
            console.log(num);
        }*/
        if (num === '0') {
            num = newNum;
        }
        else {
            num = num + newNum;
        }
        currentNum.innerText = num;
    })
}

const acButton = document.getElementById('AC__button');
acButton.addEventListener('click', e => {
    num = '0';
    stored = ' ';
    displayNum('current');
    displayNum('stored');

})

const decimalButton = document.getElementById('decimal__button');
decimalButton.addEventListener('click', e=> {
    num = num + '.';
    displayNum('current');

})

const operatorButtonsArray = document.getElementsByClassName('operator__button');
for (let i = 0; i < 4; i++) {
    operatorButtonsArray[i].addEventListener('click', e => {
        stored = num;
        displayNum('stored');
        num = '0';
        displayNum('current');
        currentOperation = operatorButtonsArray[i].value;
    })
}

const equalsButton = document.getElementById('equals__button');
equalsButton.addEventListener('click', e => {
    stored = Number(stored);
    num = Number(num);

    if (currentOperation === '*') {
        num = stored * num;
    }
    else if (currentOperation === '/') {
        num = stored / num;
    }
    else if (currentOperation === '+') {
        num = stored + num;
    }
    else if (currentOperation === '-') {
        num = stored - num;
    }
    else {
        console.log('no operation');
    }

    displayNum('current');
    displayNum('stored');
})

function displayNum(a) {
    if (a === 'current') {
        currentNum.innerText = num;
        console.log('CURRENT');
    }
    else if (a === 'stored') {
        storedNum.innerText = stored;
        console.log('STORED');
    }
}