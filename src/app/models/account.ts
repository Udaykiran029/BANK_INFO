
export class Account {
  accountId: number=0;
  balance: number=0;
  interestRate:number=0;
  nextCheckNumber:number=0;

  constructor(accountId: number=0,
      balance: number=0,
      interestRate:number=0,
      nextCheckNumber:number=0){
          this.accountId=accountId;
          this.balance=balance;
          this.interestRate=interestRate;
          this.nextCheckNumber=nextCheckNumber;
  }
}
