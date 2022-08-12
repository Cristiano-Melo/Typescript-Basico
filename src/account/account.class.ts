export class Account {
    account_number: string;
    agency: string;
    balance: number;

    constructor(account_number: string, agency: string, balance: number){
        this.account_number = account_number;
        this.agency = agency;
        this.balance = 0;
    };

    // public deposit(value: number): void{
    //     this.balance += value;
    // }

    // public whithdraw (value: number): void {
    //     this.balance -= value;
    // }
    
};