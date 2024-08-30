import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userId!: string;

  //Using signals

  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  title = '';
  summary = '';
  dueDate = '';

  constructor(private tasksService: TasksService) {}

  closeAddTask() {
    this.close.emit();
  }

  onAddNewTask() {
    //using signals
    // const newTask = {
    //   title: this.title(),
    //   summary: this.summary(),
    //   dueDate: this.dueDate(),
    // };

    const newTask = {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    };
    this.tasksService.addNewTask(newTask, this.userId);
    this.closeAddTask();
  }
}
