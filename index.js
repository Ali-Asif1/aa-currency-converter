#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
while (condition) {
    console.log('\n******Welcome To Currency Converter******\n');
    let userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'currency',
            message: 'Select Your Currency:',
            choices: ['PKR - Pakistani Rupee', 'USD - US Dollar', 'SAR - Saudi Riyal', 'GBP - British Pound']
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter Your Amount'
        },
        {
            type: 'list',
            name: 'converted',
            message: 'Select Conversion Currency:',
            choices: ['PKR - Pakistani Rupee', 'USD - US Dollar', 'SAR - Saudi Riyal', 'GBP - British Pound']
        }
    ]);
    const input = userInput.currency;
    const output = userInput.converted;
    const amount = userInput.amount;
    if (input === "PKR - Pakistani Rupee") {
        if (output === "USD - US Dollar") {
            console.log(`\nThe ${amount} Pakistani Rupee is equal to ${amount / 278.46} US Dollar`);
        }
        else if (output === "SAR - Saudi Riyal") {
            console.log(`\nThe ${amount} Pakistani Rupee is equal to ${amount / 74.25} Saudi Riyal`);
        }
        else if (output === "GBP - British Pound") {
            console.log(`\nThe ${amount} Pakistani Rupee is equal to ${amount / 347} British Pound`);
        }
    }
    else if (input === "USD - US Dollar") {
        if (output === "PKR - Pakistani Rupee") {
            console.log(`\nThe ${amount} US Dollar is equal to ${amount * 278.46} Pakistani Rupee`);
        }
        else if (output === "SAR - Saudi Riyal") {
            console.log(`\nThe ${amount} US Dollar is equal to ${amount * 3.750} Saudi Riyal`);
        }
        else if (output === "GBP - British Pound") {
            console.log(`\nThe ${amount} US Dollar is equal to ${amount * 0.802} British Pound`);
        }
    }
    else if (input === "SAR - Saudi Riyal") {
        if (output === "PKR - Pakistani Rupee") {
            console.log(`\nThe ${amount} Saudi Riyal is equal to ${amount * 74.25} Pakistani Rupee`);
        }
        else if (output === "USD - US Dollar") {
            console.log(`\nThe ${amount} Saudi Riyal is equal to ${amount / 3.75} US Dollar`);
        }
        else if (output === "GBP - British Pound") {
            console.log(`\nThe ${amount} Saudi Riyal is equal to ${amount / 4.67} British Pound`);
        }
    }
    else if (input === "GBP - British Pound") {
        if (output === "PKR - Pakistani Rupee") {
            console.log(`\nThe ${amount} British Pound is equal to ${amount * 345.46} Pakistani Rupee`);
        }
        else if (output === "USD - US Dollar") {
            console.log(`\nThe ${amount} British Pound is equal to ${amount * 1.24} US Dollar`);
        }
        else if (output === "SAR - Saudi Riyal") {
            console.log(`\nThe ${amount} British Pound is equal to ${amount * 4.65} Saudi Riyal`);
        }
    }
    const exchangeAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'again',
        message: '\nDo You Want More Exchange',
        default: false
    });
    if (!exchangeAgain.again) {
        condition = false;
        console.log('\n*===Thankyou For Using APP Bye===*\n');
    }
}
