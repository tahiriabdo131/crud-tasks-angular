import { Component, OnInit } from '@angular/core';
import { ServiceTaskService } from 'src/app/services/service-task.service';
import { from } from 'rxjs';
import { Task } from '../models/task';

//import swal from 'swal'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
//i will put all tasks in this list
tasks: Task[] = [];

//create new task
addTask: Task = {
  label: '',
  completed: false
}
//hide or show the form/
showForm = false;
showBtnAdd = false;
showBtnUpdate = false;
  constructor(private taskService:ServiceTaskService) { }

  ngOnInit() {
    this.doGetAllTasks();
  }

  doGetAllTasks(){
    this.taskService.getAllTasks().subscribe(
      (data)=>{
      this.tasks = data;
      console.log(this.tasks);
    },
    err=>{
      console.log(err);
    });
  }


  addNewTask(){
    this.taskService.NewTask(this.addTask).subscribe(
      (data)=> {
        this.tasks = [data, ...this.tasks];
        console.log(data);
        console.log(this.tasks);
        this.emptyAddTask();
      },
      err=>{console.log(err);}
    );
  }

  emptyAddTask(){
    this.addTask = '';
    this.addTask = false;
  }

  showNewTask(){
    this.showForm   = !this.showForm;
    this.showBtnAdd = true; 
    this.showBtnUpdate = false;
  }
  /*
  doGetUpdate(){
    this.showForm       = !this.showForm;
    this.showBtnAdd     = false;
    this.showBtnUpdate = true;
  }
*/
  doDeleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(
    ()=>{
      //console.log(data);
      this.tasks = this.tasks.filter(data => data.id !=id);
      console.log(this.tasks);
      alert("delete successfully");
    },
    err=>{
      console.log(err);
    }
    );
  }
 
}
