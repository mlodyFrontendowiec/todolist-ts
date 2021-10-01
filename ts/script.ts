interface Task {
  id: number;
  title: string;
  date: Date;
}
class ToDoList {
  private sectionElement: HTMLElement;
  constructor(private tasks: Task[]) {
    this.sectionElement = document.getElementById("todolist") as HTMLElement;
    this.createTemplateInHTML();
  }
  addTask(id: number, title: string, date: Date) {
    this.tasks.push({ id, title, date });
    this.createTemplateInHTML();
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
  createTemplateInHTML() {
    if (this.tasks.length > 0) {
      this.sectionElement.innerHTML = "";
      this.tasks.forEach((item: Task): void => {
        const div: HTMLElement = document.createElement("div");
        div.innerText = item.title;
        this.sectionElement.appendChild(div);
      });
    }
  }
}

const todo: ToDoList = new ToDoList([]);
