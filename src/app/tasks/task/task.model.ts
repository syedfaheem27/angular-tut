export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}

export interface Task extends NewTask, AdditionalTask {}

interface AdditionalTask {
  id: string;
  userId: string;
}
