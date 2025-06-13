import {Component, inject, Input} from '@angular/core';
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [
  //   TaskComponent,
  //   NewTaskComponent
  // ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  //dependency injection
  private tasksService =  inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
