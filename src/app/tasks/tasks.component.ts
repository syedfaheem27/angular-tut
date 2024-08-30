import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { Dummy_Tasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddTask = false;

  tasks: Task[] = Dummy_Tasks;

  get selectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  openAddTask() {
    this.isAddTask = true;
  }
  closeAddTask(event: Event) {
    const el = event.target as HTMLElement;
    if (el.closest('#dialog-form')) return;

    this.isAddTask = false;
  }
}
