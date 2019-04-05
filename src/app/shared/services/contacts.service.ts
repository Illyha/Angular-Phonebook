import { Injectable } from '@angular/core';

export interface IContact {
  name: string;
  surname: string;
  date: string;
  Nik: string;
  number: string;
  popular: boolean;
}

@Injectable()
export class ContactsService {

  private readonly contacts: IContact[] = [
    { name: 'Anet',surname: 'Lizko' ,date: '21.09.2001' ,Nik: 'GarnaDevochka', number: '097-319-56-90', popular: true },
    { name: 'Vika',surname: 'Natashyn' ,date: '12.09.1998' ,Nik: 'Poni', number: '068-098-90-10', popular: false },
    { name: 'Nazar',surname: 'Benyshyn' ,date: '03.02.1995' ,Nik: 'Nicker', number: '099-908-21-76', popular: true },
    { name: 'Sanya',surname: 'Starzev' ,date: '08.05.1996' ,Nik: 'Hacker', number: '050-224-98-56', popular: false }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

}
