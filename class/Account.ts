export abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = false

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }
    
    setName = (name: string): void => {
        this.name = name
        console.log('Name changed successfuly')
    }

    deposit = (): void => {
        if(this.validateStatus()) {
            console.log('You deposited')
        }
    }

    withDraw = (): void => {
        console.log('You withdrew')
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Your account is inactive')
    }
}