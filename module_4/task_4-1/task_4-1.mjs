"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};
printOut(AccountType.Normal + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount {
    #type;
    constructor(initialType) {
        this.#type = initialType
    }

    toString() {
        return this.#type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.#type + " to " + newType);
        this.#type = newType;
    }
}

const myAccount = new TAccount("Brukskonto");
printOut("myAccount = " + myAccount.toString());
myAccount.setType("Sparekonto");
printOut("myAccount = " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount1 {
    #type;
    #balance;
    constructor(initialType){
        this.#type = initialType;
        this.#balance = 0;
    }

    toString() {
        return this.#type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.#type + " to " + newType);
        this.#type = newType;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
        printOut("Deposit of " + amount + ", new balance is " + this.#balance);
    }

    withdraw(amount) {
        this.#balance -= amount;
        printOut("Withdrawal of " + amount + ", new balance is " + this.#balance);
    }
}
const myAccount1 = new TAccount1("Brukskonto");
myAccount1.deposit(100);
myAccount1.withdraw(25);
printOut("My account balance is " + myAccount1.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount2 {
    #type;
    #balance;
    #withdrawalCounter 

    constructor(initialType) {
        this.#type = initialType;
        this.#balance = 0;
        this.withdrawalCounter = 0;
    }

    toString() {
        return this.#type;
    }

    setType(newType) {
        printOut("account is changed from " + this.#type.toLowerCase() + " to " + newType.toLowerCase());
        this.#type = newType; 
        this.#withdrawalCounter = 0;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
        this.#withdrawalCounter = 0;
        printOut("deposit of " + amount + ", new balance is " + this.#balance);
    }

    withdraw(amount) {
        switch (this.#type) {
            case "Pensionskonto":
                printOut("you can't withdraw from a pensionskonto!");
                break;
            
            case "Sparekonto":
                if (this.#withdrawalCounter >= 3) {
                    printOut("You can't withdraw from a Sparekonto more than three times!");
                } else {
                    this.#balance -= amount;
                    this.#withdrawalCounter++;
                    printOut("Withdrawal of " + amount + ", new balance is " + this.#balance);
                }
                break;
            default:
                this.#balance -= amount;
                printOut("Withdrawal of " + amount + ", new balance is " + this.#balance);
        }
    }
}
const myAccount2 = new TAccount2("Sparekonto");
myAccount2.deposit(25);
myAccount2.deposit(75);
myAccount2.withdraw(30);
myAccount2.withdraw(30);
myAccount2.withdraw(30);
myAccount2.withdraw(30);
myAccount2.setType("Pensionskonto");
myAccount2.withdraw(30);
myAccount2.setType("Sparekonto");
myAccount2.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TAccount3 {
    #type;
    #balance;
    #withdrawalCounter;
    #currency;
    constructor(initialType) {
        this.#type = initialType;
        this.#balance = 0;
        this.#withdrawalCounter = 0;
        this.#currency = "NOK";
    }
    toString() {
        return this.#type;
    }
    setType(newType) {
        printOut("account is changed from " + this.#type.toLowerCase() + " to " + newType.toLowerCase());
        this.#type = newType;
        this.#withdrawalCounter = 0;
    }
    getBalance() {
        return this.#balance;
    }
    deposit(amount) {
        this.#balance += amount;
        this.#withdrawalCounter = 0;
        printOut("deposit of " + this.#currency.toLowerCase() + ", new balance is " + this.#balance + this.#currency.toLowerCase());
    }
    withdraw(amount) {
        switch (this.#type) {
            case "Pensionskonto":
                printOut("You can't withdraw from a pensionskonto!");
                break;
            case "Sparekonto":
                if (this.#withdrawalCounter >= 3) {
                    printOut("You can't withdraw from a Sparekonto more than three times!");
                } else {
                    this.#balance -= amount
                    this.#withdrawalCounter++;
                    printOut("Withdrawal of " + amount + this.#currency.toLowerCase() + ", new balance is " + this.#balance + this.#currency.toLowerCase());
                }
                break;
            default:
                this.#balance -= amount;
                printOut("Withdrawal of " + amount + this.#currency.toLowerCase() + ", new balance is " + this.#balance + this.#currency.toLowerCase());

        }
    }
    setCurrencyType(newCurrency) {
        if (this.#currency === newCurrency) {
            return;
        }
        this.#currency = newCurrency;
        printOut("Currency is changed to " + this.#currency);
    }
}
const myAccount3 = new TAccount3("Sparekonto");
myAccount3.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
