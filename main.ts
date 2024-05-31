#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber : number = Math.floor(100000 + Math.random() * 90000)

let balance : number = 0;

let answer = await inquirer.prompt ( [

    {
        name: "students",
        type: "input",
        message: "Enter student name",
        validate: function (value) {

            if (value.trim() !== "") {

                return true;
            }
            return "Please enter a non-empty value.";

        },

    },

    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["MS Word" , "MS Excel", "Python" , "HTML" , "CSS" ]
    }

]

);

const tutionFee : {[key: string]: number} = {

    "MS Word": 5000,
    "MS Excel": 7000,
    "Python": 15000,
    "HTML" : 10000,
    "CSS": 8000

};

console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n)`);

console.log(`Balance: ${balance} \n`);

let paymentType = await inquirer.prompt([

    {
        name: "payment",
        type: "list",
        message: "Select payment Method",
        choices: ["Bank Tranfer", "Easypaisa" , "Jazzcash"]
    },

    {

        name: "amount",
        type: "input",
        message:"Tranfer Money",
        validate: function(value) {

            if (value.trim() !== "") {

                return true;
            }
            return "Please enter a non-empty value.";
        }
    }
    
]);

console.log(`\nYou select payment method ${paymentType.payment}\n`);


const tutionFees = tutionFee[answer.courses];

const paymentAmount = parseFloat(paymentType.amount);

if(tutionFees === paymentAmount) {

    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.`) }

let ans = await inquirer.prompt([
    
    {


    name: "Select",
    type: "list",
    message: "What would you like to do next?",
    choices: ["View Status" , "Exit"]

}
])




if (ans.Select === "View Status") {

 
    if (  Number(paymentAmount) !=  tutionFee[answer.courses])
        {
        
            console.log("Invalid Amount due to wrong fees\n");
        }

            else 
        {
    console.log("\n********Status********\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees Paid: ${paymentAmount}`);
    console.log(`Balance: ${balance += paymentAmount}`);
}
 
} 
else
 {
        console.log("\nExiting Student Management System\n");
    }

 
        
  
 