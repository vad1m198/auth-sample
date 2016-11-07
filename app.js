function calculate(e) {
  e.preventDefault();
  let dobValue = document.getElementById("DoB").value;  
  let nameValue = document.getElementById("user_name").value;
  if ( !isValidDate(new Date(dobValue)) ) {
    alert("Birthdate is incorrect")
    document.getElementById("DoB").value = "";
  } else {
    let userDoB = new Date(dobValue);
    let currentDate = new Date();
    let sixtiesDate = new Date(dobValue).setFullYear(userDoB.getFullYear() + 60);
    let spentWeeks = getDistinguishWeeks(currentDate, userDoB)
    let leftWeeks = getDistinguishWeeks(sixtiesDate, currentDate)
    console.log(spentWeeks, leftWeeks)
    animateNumberIncrease(document.getElementById("left"), 0, leftWeeks, 3000);
    animateNumberIncrease(document.getElementById("spent"), 0, spentWeeks, 2000);
  }  
}

function isValidDate(date) {
  if(!date instanceof Date ) return false;
  if( isNaN(date.getTime()) ) return false;
  return true;
}

function getDistinguishWeeks(dateFrom, dateTo) {
  if(!dateFrom instanceof Date || !dateTo instanceof Date ) 
    throw Error(`some of input not of Date type ${dateFrom} ${dateTo}`);

  return Math.floor((dateFrom - dateTo) / ( 1000 * 60 * 60 * 24 * 7 ));
}

function animateNumberIncrease(element, numberFrom, numberTo, timeout) {
  if( !element instanceof HTMLElement ) {throw Error("passed in value is not a valid HTML element")}
  if( typeof numberFrom !== 'number' || !isFinite(numberFrom) ) {throw Error("numberFrom parameter is not a valid number")}
  if( typeof numberTo !== 'number' || !isFinite(numberTo) ) {throw Error("numberTo parameter is not a valid number")}
  if( numberTo < numberFrom ) {throw Error("numberFrom is greater that numberTo")}
  if( typeof timeout !== 'number' ) {throw Error("timeout parameter is not a valid number")}
  let stepInterval = 100;
  
  let stepsNumber = timeout / stepInterval;
  if( stepsNumber < 1 ) stepsNumber = 1;

  let step = Math.ceil((numberTo - numberFrom) / stepsNumber);
  if(step < 1) step = 1;
  let counter = numberFrom;
  element.innerHTML = counter;  
  let timerId = setInterval(function(){    
    if(counter + step < numberTo) {
      counter += step
    } else if(counter < numberTo){
      counter = numberTo;
    } else {
      clearInterval(timerId);
    }
    element.innerHTML = counter;  
  },stepInterval)



  // while(counter <= numberTo ) {
  //   element.innerHTML = counter;
  //   if(counter + step < numberTo) {
  //     counter += step
  //   } else if(counter < numberTo){
  //     counter = numberTo;      
  //   } else {
  //     break;
  //   }      
  // }
}