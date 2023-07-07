
let resultField = document.getElementById("result");
let currentExpression = "";

 function appendNumber(num){
    currentExpression += num;
    //The number entered is display in the input field
    resultField.value = currentExpression;
 }

 function appendOperator(operator){
    currentExpression += operator;
    //The operator the user clicked on will be display alongside the number 
    //previously entered.
    resultField.value = currentExpression;
 }

 function appendDecimal(){
    if(currentExpression.indexOf(".") === -1 ){
        currentExpression += "."
        resultField.value = currentExpression;
    }
    //The number entered is display in the input field
    resultField.value = currentExpression;
 }

 //Clears the input field and prepares it for new inputs for the user
 function clearResult(){
     currentExpression = "";
     resultField.value = "";
 }

 //The eval() method used below evaluates the current  expression in the input field
 //and produces an answer
 //so if the expression is 4+2 the eval() methods produces 6 and displays it
 function calculate(){
    try{
        currentExpression = eval(currentExpression);
        resultField.value = currentExpression;
    }catch(error){
        resultField.value = "Error";
    }
 }