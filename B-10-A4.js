
// problem-1

function calculateTax(income, expenses) {

         if(expenses > income || expenses < 0 || income < 0){
             return "Invalid Input"
         }

      let earn = income - expenses ;
       let tex = earn * 0.2
      return tex
      
}

const inputTotal = calculateTax(10000, 3000);
const inputTotal1 = calculateTax(34000, 1753);
const inputTotal2 = calculateTax(5000,1500);

const inputTotal3 = calculateTax(-5000,1500);
const inputTotal4 = calculateTax(5000,-1500);
const inputTotal5 = calculateTax(5000,5000);
const inputTotal6 = calculateTax(-500,-400);
console.log(inputTotal,inputTotal1,inputTotal2,inputTotal3,inputTotal4,inputTotal5,inputTotal6);

// Problem 02 : Notification Generator
console.log("--------------------------------")

function sendNotification(email) {

      let invalidCheck = email.split("@").toString();
    if(email === invalidCheck ){
        return  "Invalid Email"  
    }
      
     let notification = email.split("@").join(" sent you an email from ");
     return notification;
}

// ///
 const inputFornotification = sendNotification('zihad.ph@gmail.com');
 const inputFornotification1 = sendNotification('farhan34@yahoo.com');
 const inputFornotification2 = sendNotification('nadim.naem5@outlook.com');
 const inputFornotification3 = sendNotification('fahim234.hotmail.com');
 const inputFornotification4 = sendNotification('sadia8icloud.com');
 console.log(inputFornotification,inputFornotification1,inputFornotification2,inputFornotification3,inputFornotification4);

//  Problem-03: Checking Digits Inside a Name
console.log("--------------------------------")


 function checkDigitsInName(name) {
       
     if(typeof name !== 'string'){
            return 'Invalid Input'
     }

        for(const char of name ){
               if(!isNaN(char) && char !== ""){
                   return true
               }
        }
        return false
 }

 const inForName = checkDigitsInName("rdoy12323");
 const inForName2 = checkDigitsInName(["rdoy12323"]);
 const inForName3 = checkDigitsInName("ridoy" );
 console.log(inForName,inForName2,inForName3);





 console.log("--------------------------------")
 //problem-4

 function calculateFinalScore(obj) {


     if(typeof obj !== "object"){
         return  "Invalid Input"
     }

     let onlyMedha = obj.testScore + obj.schoolGrade 
     let jobConfirm ;

     if(obj.isFFamily === true){
        jobConfirm = onlyMedha+ 20
     }
     else{
         jobConfirm = onlyMedha
     }

   
    if(jobConfirm >= 80 ){
        return true
    }
return false

}


// /////////////////

 const  person1 = {
    name :'rajibx ',
    testScore:40 ,
    schoolGrade:25,
    isFFamily :true
 }
 const  person2 = {
    name :'rajiby ',
    testScore:30 ,
    schoolGrade:20,
    isFFamily :true
 }

 const  person3 = {
    name :'rajibz ',
    testScore:49 ,
    schoolGrade:30,
    isFFamily :false
 }
 const  person4 = "rajib"

let inputObj = calculateFinalScore(person1);
let inputObj1 = calculateFinalScore(person2);
let inputObj2 = calculateFinalScore(person3);
let inputObj3 = calculateFinalScore(person4);
console.log(inputObj,inputObj1, inputObj2, inputObj3);

// problems -5
console.log("--------------------------------")

function  waitingTime(waitingTimes  , serialNumber) {
    
        let arrayCheck = [];
        if(typeof waitingTimes !== typeof arrayCheck || typeof serialNumber !== 'number'){
             return 'Invalid Input'  
        }


       let completedInterview = waitingTimes.length;
       let sum = 0;
        for(let i = 0; i <= completedInterview -1 ; i++ ){
           sum += waitingTimes[i]
        }
        let avarage = Math.round(sum / completedInterview);
        let serialForIsrat =( serialNumber - 1 - completedInterview ) * avarage;
    return serialForIsrat
   
}


const array = [ 3, 5, 7, 11, 6 ];
const serialNumber = 10;
const array1 = [ 13, 2 ];
const serialNumber1 = 6;
const array2 = [ 13, 2,6,7,10 ];
const serialNumber2 = 6;
const array3 = [ 6 ];
const serialNumber3 = 4;
const array4 = '[6,2]';
const serialNumber4 =9;

const inputOfCal = waitingTime(array,serialNumber);
const inputOfCal1 = waitingTime(array1,serialNumber1);
const inputOfCal2 = waitingTime(array2,serialNumber2);
const inputOfCal3 = waitingTime(array3,serialNumber3);
const inputOfCal4 = waitingTime(array4,serialNumber4);
console.log(inputOfCal,inputOfCal1,inputOfCal2,inputOfCal3,inputOfCal4);

