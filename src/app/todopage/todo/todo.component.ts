import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  input: any;
  items: any[] = [];
  itemIndex: any;
  isEdit = false;

  constructor() { }

  ngOnInit() {
    this.items = (localStorage.getItem("ToDo")) ? JSON.parse(localStorage.getItem("ToDo")) : [];
  }

  AddLocally(){
    let list = JSON.stringify(this.items);
    localStorage.setItem("ToDo", list);
  }

  AddInput(){
    this.items.push(this.input);
    this.input = "";
    this.AddLocally();
  }

  Edit(inputtext){
    this.input = inputtext;
    this.itemIndex = this.items.indexOf(this.input);
    this.isEdit = true;
  }

  Update(){
    this.items[this.itemIndex] = this.input;
    this.isEdit = false;
    this.input = "";
    this.AddLocally();
  }

  Remove(item){
    this.itemIndex = this.items.indexOf(item);
    this.items.splice(this.itemIndex, 1);
    this.AddLocally();
  }

  CancelUpdate(){
    this.isEdit = false;
    this.input = "";
  }

}
