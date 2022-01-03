// Leap Year Checker 
function resetYearChecker(){
    document.getElementById('leapYrForm').reset();
    document.getElementById('leapYrOutput').style.display = 'none';
    document.getElementById('refreshButton').style.display = 'none';
}


function Calculate(){
    const yearInput = document.getElementById("userYearInput").value;
    let yearOutput = "";
    if (yearInput.length < 1){
        yearOutput = "You must enter a year!"
    }else if(yearInput <= 0){
        yearOutput = "Year must be greater than 0!"
    }else if(yearInput % 4 === 0 && yearInput % 100 !== 0 || yearInput % 400 === 0){
        yearOutput = `${yearInput} is a leap year`;       
    }else{
        yearOutput = `${yearInput} is not a leap year`;        
    };
document.getElementById("leapYrOutput").innerHTML= yearOutput;
document.getElementById("leapYrOutput").style.display = 'block';
}




// D-day Counter
function resetDateCounter(){
    document.getElementById('dateCounterForm').reset();
    document.getElementById('dayCounterOutput').style.display = 'none';
    document.getElementById("dayCounterrefreshBtn").style.display='none';
}

function Countdown(){
    const dateInput = document.getElementById("userDateInput").value;    
    let dateInputString = dateInput.toString();
    let yearExtract = dateInputString.slice(0, 4);
    // var yearextracttoInt = parseInt(yearExtract);
    let monthExtract = dateInputString.slice(4,6);
    let monthExtractToInt = parseInt(monthExtract);
    let dayExtract = dateInputString.slice(6, 8);
    let dayExtractToInt = parseInt(dayExtract);
    let dateOutput = "";
    if(dateInput.length < 8){
        dateOutput = "Date format should be YYYYMMDD. Try again!"
    }else if(monthExtractToInt > 12  || monthExtractToInt < 1 ){
        dateOutput = "Month cannot be less than 1 or greater than 12!";
    }else if (dayExtractToInt > 31 || dayExtractToInt < 1){
        dateOutput = 'Day cannot be less than 1 or greater than 31!';
    }else if((monthExtractToInt == 4 || monthExtractToInt ==6 || monthExtractToInt == 9 || monthExtractToInt == 11) && dayExtractToInt > 30 ){
        dateOutput = 'Day of the month selected cannot be greater than 30!';
    }else{
        var newDate = (`${yearExtract}-${monthExtract}-${dayExtract}`);
        var date1 = newDate.split('-');
        date1 = new Date(date1[0], date1[1]-1, date1[2]);
        date2 = new Date();
        date1_unixtime = parseInt(date1.getTime() / 1000);
        date2_unixtime = parseInt(date2.getTime() / 1000);
        var timeDifference = date1_unixtime - date2_unixtime;
        var timeDifferenceInHours = timeDifference / 60 / 60;
        var message = Math.ceil((timeDifferenceInHours  / 24)) + 1;
        if(message > 0){
            dateOutput = `${message} days left`;
        }else{
            dateOutput = "Date is in the past, please enter a new date!"
        }
    }         
 
document.getElementById("dayCounterOutput").innerHTML = dateOutput ;
document.getElementById("dayCounterOutput").style.display = 'block';          
}
    
  
// Lotto 649 Generator 
function RandomNumber(){ 
    let maxNumber = 49;
    let minNumber = 1;
    let arrayLength = 6  
    let lottoArray = [];
    for (let i = 0; lottoArray.length < arrayLength; i++){
        let newNumber =(Math.floor(Math.random() * maxNumber) + minNumber);
        if (!lottoArray.includes(newNumber)){
            lottoArray.push(newNumber);
        }
    };
    lottoArray.sort((a,b) => a-b);
    lottoAr = lottoArray.join(" ")
    document.getElementById("randomNumberOutput").innerHTML = lottoAr ;  
    document.getElementById("randomNumberOutput").style.display = 'block';  
}

function lotto649Counter(){
    document.getElementById("randomNumberOutput").style.display='none';
}



// Height Converter

function resetHeightCounter(){
    document.getElementById('heightConverterForm').reset();
    document.getElementById('heightOutput').style.display = 'none';
    document.getElementById("heightRefreshBtn").style.display='none';
}

function ConvertHeight(){
    const heightInput = document.getElementById("inputHeight").value; 
    const cmPerInches = 2.54;
    const inchesPerFoot = 12;
    let cmToInches = heightInput / cmPerInches;
    let heightConverted = "";
    if(heightInput.length < 1) {
       heightConverted = "Enter a valid number!"; 
    }else if(heightInput.length >= 1) {
        let heightInFeet = Math.floor(cmToInches / inchesPerFoot);
        let heightInInches= Math.round(cmToInches - (heightInFeet * inchesPerFoot));
        heightConverted = `${heightInFeet} ft and ${heightInInches} in`
    }
         
document.getElementById("heightOutput").innerHTML = heightConverted ;
document.getElementById("heightOutput").style.display = 'block';    
}



// Weight Converter

function resetWeightCounter(){
    document.getElementById('weightConverterForm').reset();
    document.getElementById('weightOutput').style.display = 'none';
    document.getElementById("weightRefreshBtn").style.display='none';
}

function ConvertWeight(){
    const weightKg = document.getElementById("inputWeight").value; 
    let convertedWeight = "";
    let lbsWeightPerKg = 2.20462262;
    if(weightKg.length < 1){
        convertedWeight = "Enter a valid number!"; 
    }else{
        let kgToLbsWeight = Math.round(weightKg * lbsWeightPerKg);
        convertedWeight = `${kgToLbsWeight} lb`
    }    
   
document.getElementById("weightOutput").innerHTML = convertedWeight ;
document.getElementById("weightOutput").style.display = 'block';    
}


