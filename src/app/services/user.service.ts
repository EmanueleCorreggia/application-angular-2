import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';

@Injectable()

export class UserService {
  users: UserInterface[] = [
    {
      id:1,
      name: 'Emanuele',
      lastname: 'Correggia',
      email: 'pippo@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Crotone',
      phone: '3333333333',
      age: 34
  } ,
  {
      id:2,
      name: 'Giovanni',
      lastname: 'Correggia',
      email: 'topolino@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Cosenza',
      phone: '3335698745',
      age: 30
  },
  {
      id:3,
      name: 'Marco',
      lastname: 'Correggia',
      email: 'pluto@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Reggio Calabria',
      phone: '3336521444',
      age: 28
  },
  {
      id:4,
      name: 'Andrea',
      lastname: 'Correggia',
      email: 'paperino@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Rende',
      phone: '3336555896',
      age: 25
  }
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {

    this.users.splice(0, 0, user);

  }
}

