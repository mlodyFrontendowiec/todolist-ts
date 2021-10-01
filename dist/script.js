"use strict";
var ToDoList = /** @class */ (function () {
    function ToDoList(tasks) {
        this.tasks = tasks;
        this.sectionElement = document.getElementById("todolist");
        this.createTemplateInHTML();
    }
    ToDoList.prototype.addTask = function (id, title, date) {
        this.tasks.push({ id: id, title: title, date: date });
        this.createTemplateInHTML();
    };
    ToDoList.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (item) { return item.id !== id; });
    };
    ToDoList.prototype.createTemplateInHTML = function () {
        var _this = this;
        if (this.tasks.length > 0) {
            this.sectionElement.innerHTML = "";
            this.tasks.forEach(function (item) {
                var div = document.createElement("div");
                div.innerText = item.title;
                _this.sectionElement.appendChild(div);
            });
        }
    };
    return ToDoList;
}());
var todo = new ToDoList([]);
