import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  isComplete: boolean = false;

  toDo: Todo[] = [
    { task: "Water plants", completed: false },
    { task: "sweep leaves", completed: true },
    { task: "go to bed", completed: false },
    { task: "order dinner", completed: true },
    { task: "mow lawn", completed: false },
    { task: "Make Bed", completed: false }
  ];
  constructor() {}
  // completeTask() {
  //   this.isComplete = !this.isComplete
  // }
  ngOnInit(): void {}
  completeTask() {
    this.isComplete = this.isComplete;
  }
}
