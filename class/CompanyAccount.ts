import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {    
    private company_id: number

    constructor(name: string, accountNumber: number, company_id: number) {
        super(name, accountNumber)
        this.company_id = company_id
    }

    public getLoan = (value: number): void => {
        if(this.getStatus()) {
            this.setBalance(value)
            console.log('You got a loan successfuly', `[${value}]`)
            console.log('Current balance: ', this.getBalance())
            console.log('\n-----------------------------')
        }
    }

    public showAccountDetails = (): void => {
        console.log('Account number: ', this.getAccountNumber())
        console.log('Company number: ', this.company_id)
        console.log('Company Name: ', this.getName())
        console.log('Current balance: ', this.getBalance())
        console.log('\n-----------------------------')
    }
}