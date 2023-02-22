export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getStatus = (): boolean => {
        return this.validateStatus()
    }

    getBalance = (): number => {
        return this.balance
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setBalance = (value: number): number => {
        return this.balance += value
    }
    
    public deposit = (value: number): void => {
        if(this.validateStatus()) {
            this.balance += value
            console.log('You have successfully deposited', `[${value}]`)
            console.log('Current balance: ', this.balance)
            console.log('\n-----------------------------')
        }
    }

    public withDrawn = (value: number): void => {
        if(this.validateStatus() && this.balanceVerify(value)) {
            this.balance -= value
            console.log('You have successfuly withdrawn', `[${value}]`)
            console.log('Current balance: ', this.balance)
            console.log('\n-----------------------------')
        } else {
            console.log('You cannot withdrawn an amount greater than your balance')
        }
    }

    private balanceVerify = (value: number): boolean => {
        if(this.balance < value) {
            return false
        }

        return true
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Your account is inactive')
    }
}