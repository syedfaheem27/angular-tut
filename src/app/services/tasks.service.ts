import { Injectable } from '@angular/core';
import { Dummy_Tasks } from '../dummy-tasks';
import { NewTask, Task } from '../tasks/task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks!: Task[];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    console.log(tasks);

    if (tasks) this.tasks = JSON.parse(tasks);
    else {
      this.tasks = Dummy_Tasks;
      this.saveTasks();
    }
  }

  addNewTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      ...taskData,
    });

    console.log(this.tasks);

    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  selectedTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
