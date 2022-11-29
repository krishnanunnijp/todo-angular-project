import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { TodoNavbarComponent } from './todo-navbar/todo-navbar.component';
import { FormsModule } from '@angular/forms';
const  myRoute : Routes= [
  {
    path :"",
    component: AddTodoComponent
  },
  {
    path :"view",
    component: ViewTodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ViewTodoComponent,
    TodoNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
