import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //@Input() selectedUserName: string | undefined;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) selectedUserName!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular',
      dueDate: '2026-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build a Project',
      summary: 'Create a sample project using Angular',
      dueDate: '2026-01-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Deploy Application',
      summary: 'Deploy the application to a production environment',
      dueDate: '2026-02-28'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}