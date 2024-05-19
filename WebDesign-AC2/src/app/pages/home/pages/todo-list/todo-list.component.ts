import { Component } from '@angular/core';

interface Task {
  done: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskList: Task[] = []

  constructor() {
    this.taskList = [
      {done: false, description: "Desenvolver App"},
      {done: false, description: "Otimizar App"},
      {done: true, description: "Conseguir parcerias"},
      {done: false, description: "Consertar bugs"},
      {done: false, description: "Realizar Melhorias"},
      {done: true, description: "Otimizar interface"},
      {done: false, description: "Finalizar App"},
    ]
  }

  changeTask(task: Task) {
    task.done = !task.done
  }
}
