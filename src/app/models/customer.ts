
import { Address } from './address';
import { Account } from './account';

export class Customer {
    customerId: number=0;
    name: string='';
    address: Address;
    accounts: Account[]=[];
    dateOfBirth: string='';
    registrationNumber:string='';

    constructor(customerId: number=0,
        name: string='',
        address: Address= new Address(),
        accounts: Account[]=[],
        dateOfBirth: string='',
        registrationNumber:string=''){
            this.name=name;
            this.address=address;
            this.accounts=accounts;
            this.dateOfBirth=dateOfBirth;
            this.registrationNumber=registrationNumber;
        }
}
