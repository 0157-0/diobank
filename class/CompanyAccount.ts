import { Account } from "./Account"

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('You got a loan')
    }

    deposit = (): void => {
        console.log('The company deposited')
    }
}