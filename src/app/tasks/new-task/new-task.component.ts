import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() addNew = new EventEmitter<NewTask>();

  //Using signals

  // title = signal('');
  // summary = signal('');
  // dueDate = signal('');

  title = '';
  summary = '';
  dueDate = '';

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

    this.addNew.emit(newTask);
  }
}
