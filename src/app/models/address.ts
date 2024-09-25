
export class Address {
  addressId:number=0;
  streetNumber: string='';
  city: string='';
  province: string='';
  postalCode: string='';

  constructor(addressId:number=0,
      streetNumber: string='',
      city: string='',
      province: string='',
      postalCode: string=''){

          this.addressId=addressId;
          this.streetNumber=streetNumber;
          this.city=city;
          this.province=province;
          this.postalCode=postalCode;
  }
}
