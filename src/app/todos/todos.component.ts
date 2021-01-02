import { Component, OnInit } from '@angular/core';

export class todo{
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done:boolean
  ){

  }
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  constructor() { }

  // todos = {id:1, description:'my learning1'}
  todos = [
    new todo(1, 'my learning1', new Date(), false),
    new todo(2, 'become expert in anugular', new Date(), false),
    new todo(3, 'visit australia', new Date(), false),

    // {id:1, description:'my learning1'},
    // {id:2, description:'become expert in anugular'},
    // {id:3, description:'visit australia'},
    // {id:4, description:'my learning4'}
  ]
  

  ngOnInit(): void {
  }

}
