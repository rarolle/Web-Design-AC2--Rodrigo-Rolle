import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  role: string;
}

const usersMock = [
  {
    name: 'Jose Antonio',
    email: 'Jotonio@gmail.com',
    role: 'Analista de dados',
  },
  {
    name: 'Isabela leles',
    email: 'Isabebelis@email.com',
    role: 'Engenheiro de BE',
  },
  {
    name: 'Josevaldo Aparecido de Almeida',
    email: 'Josevaldoaparecido@gmail.com',
    role: 'Analista de dados',
  },
  {
    name: 'Vinicius Milanez',
    email: 'Milanezvini@gmail.com',
    role: 'Líder Técnico',
  }
]

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = usersMock;

  constructor(private router: Router) {}

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
  }

  editUser(user: User) {
    console.log('Editando usuário', user);
    this.router.navigate(['app', 'edit-user']);
  }

  addUser() {
    console.log('Adicionando usuário');
    this.router.navigate(['app', 'add-user']);
  }
}
