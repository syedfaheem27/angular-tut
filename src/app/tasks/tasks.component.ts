import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedTasks() {
    return this.tasksService.selectedTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onOpenAddTask() {
    this.isAddTask = true;
  }
  onCancelAddTask() {
    this.isAddTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasksService.addNewTask(taskData, this.userId);
    this.isAddTask = false;
  }
}
