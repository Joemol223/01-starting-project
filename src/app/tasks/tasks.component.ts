import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //@Input() selectedUserName: string | undefined;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) selectedUserName!: string;
  isAddingTask = false;
  // private taskService: TaskService;

  // constructor(taskService: TaskService){
  //   this.taskService = taskService;
  // }

  constructor(private taskService: TaskService){}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.taskService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}