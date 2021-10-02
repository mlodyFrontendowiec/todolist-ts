interface Task {
  id: number;
  title: string;
  date: Date;
}
class ToDoList {
  private sectionElement: HTMLElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  constructor(private tasks: Task[]) {
    this.sectionElement = document.getElementById("todolist") as HTMLElement;
    this.form = document.querySelector(".form-addTask") as HTMLFormElement;
    this.input = document.querySelector(".input-addTask") as HTMLInputElement;
    this.handleForm();
    this.createTemplateInHTML();
    const buttons = document.querySelectorAll<HTMLElement>("button");
  }
  addTask(id: number, title: string, date: Date) {
    this.tasks.push({ id, title, date });
    this.createTemplateInHTML();
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
    this.createTemplateInHTML();
  }
  handleForm() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTask(
        Math.floor(Math.random() * 100000),
        this.input.value,
        new Date(Date.now())
      );
      this.input.value = "";
    });
  }
  createTemplateInHTML() {
    if (this.tasks.length > 0) {
      this.sectionElement.innerHTML = "";
      this.tasks.forEach((item: Task): void => {
        const div: HTMLElement = document.createElement("div");
        div.innerText = `${item.title} ${item.date.toDateString()}`;
        const button: HTMLElement = document.createElement("button");
        button.innerText = "Remove";
        button.setAttribute("data-id", String(item.id));
        div.appendChild(button);
        button.addEventListener("click", (e) => {
          this.removeTask(item.id);
          button.parentNode?.parentNode?.removeChild(div);
        });
        this.sectionElement.appendChild(div);
      });
    }
  }
}

const todo: ToDoList = new ToDoList([]);
