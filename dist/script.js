"use strict";
var ToDoList = /** @class */ (function () {
    function ToDoList(tasks) {
        this.tasks = tasks;
        this.sectionElement = document.getElementById("todolist");
        this.form = document.querySelector(".form-addTask");
        this.input = document.querySelector(".input-addTask");
        this.handleForm();
        this.createTemplateInHTML();
        var buttons = document.querySelectorAll("button");
    }
    ToDoList.prototype.addTask = function (id, title, date) {
        this.tasks.push({ id: id, title: title, date: date });
        this.createTemplateInHTML();
    };
    ToDoList.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (item) { return item.id !== id; });
        this.createTemplateInHTML();
    };
    ToDoList.prototype.handleForm = function () {
        var _this = this;
        this.form.addEventListener("submit", function (e) {
            e.preventDefault();
            _this.addTask(Math.floor(Math.random() * 100000), _this.input.value, new Date(Date.now()));
            _this.input.value = "";
        });
    };
    ToDoList.prototype.createTemplateInHTML = function () {
        var _this = this;
        if (this.tasks.length > 0) {
            this.sectionElement.innerHTML = "";
            this.tasks.forEach(function (item) {
                var div = document.createElement("div");
                div.innerText = item.title + " " + item.date.toDateString();
                var button = document.createElement("button");
                button.innerText = "Remove";
                button.setAttribute("data-id", String(item.id));
                div.appendChild(button);
                button.addEventListener("click", function (e) {
                    var _a, _b;
                    _this.removeTask(item.id);
                    (_b = (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(div);
                });
                _this.sectionElement.appendChild(div);
            });
        }
    };
    return ToDoList;
}());
var todo = new ToDoList([]);
