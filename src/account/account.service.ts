import { Account } from './account.class';
import { Cp } from "./cp.class";
import { Cc } from "./cc.class";
import { Accounts } from "./accounts.interface";


let accounts: Accounts = {
    1: {
        account_number: '01',
        agency: '01',
        balance: 0,
     },

    2:{
        account_number: '02',
        agency: '02',
        balance: 0,
     },
};

export const findAll = async(): Promise<Accounts> => Object.values(accounts);
export const find = async(id:number): Promise<Account> => accounts[id];
