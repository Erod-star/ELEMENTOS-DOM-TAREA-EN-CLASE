var inpNum1 = document.querySelector('#numero1')
var inpNum2 = document.querySelector('#numero2')
var inpRes = document.querySelector ('#resultado')
var btnSumar = document.querySelector('#btnSumar')
var btnRestar = document.querySelector('#btnRestar')
var btnMulti = document.querySelector ('#btnMultiplicar')
var btnDivi = document.querySelector ('#btnDividir')
var btnBorr = document.querySelector('#btnBorrar')
var btnProb = document.querySelector ('#btnProbar')

//Lista de eventos 

btnSumar.addEventListener('click', () => {
    let num1 = Number (inpNum1.value)
    let num2 = Number (inpNum2.value)
    
    inpRes.value = num1 + num2
})

btnRestar.addEventListener('click', () => {
    let num1 = Number (inpNum1.value)
    let num2 = Number (inpNum2.value)
    
    inpRes.value = num1 - num2
})

btnMulti.addEventListener('click', () => {
    let num1 = Number (inpNum1.value)
    let num2 = Number (inpNum2.value)
    
    inpRes.value = num1 * num2
})

btnDivi.addEventListener('click', () => {
    let num1 = Number (inpNum1.value)
    let num2 = Number (inpNum2.value)
    
    inpRes.value = num1 / num2
})

btnProb.addEventListener('click', () => {
let num = Number(inpNum1.value)
    if(num < 10){
       inpRes.value = 'Unidades'
    }
    else if (num < 100) {
        inpRes.value = 'Decenas'
    } 
    else if (num < 1000) {
        inpRes.value = 'Centenas'
    } 
    else if (num < 10000) {
        inpRes.value = 'Millar'
    } 
    else {
        inpRes.value = 'Furea de rango'
    }
})

btnBorr.addEventListener('click', () => {
    let num1 = Number (inpNum1.value)
    let num2 = Number (inpNum2.value)
    inpNum1.value = ""
    inpNum2.value = ""
    inpRes.value = ""
})