import { DioAccount } from "./DioAccount"

export class PremiumAccount extends DioAccount {
    constructor(name: string, accountNumber: number, doc_id: number) {
        super(name, accountNumber)
    }

    public showAccountDetails = (): void => {
        console.log('Account number: ', this.getAccountNumber())
        console.log('Name: ', this.getName())
        console.log('Current balance: ', this.getBalance())
        console.log('\n-----------------------------')
    }

    public deposit = (value: number): void => {
        if(this.getStatus()) {
            console.log('You have successfuly deposited', `[${value}]`)
            value += 10
            this.setBalance(value)
            console.log('Current balance: ', this.getBalance())
            console.log('\n-----------------------------')
        }
    }
}