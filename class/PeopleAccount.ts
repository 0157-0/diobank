import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  public showAccountDetails = (): void => {
    console.log("Account number: ", this.getAccountNumber());
    console.log("Document number: ", this.doc_id);
    console.log("Name: ", this.getName());
    console.log("Current balance: ", this.getBalance());
    console.log("\n-----------------------------");
  };
}
