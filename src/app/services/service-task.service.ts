import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    return this.http.get<Task[]>("http://localhost:5000/tasks");
  }

  deleteTask(id){
    return this.http.delete<Task[]>("http://localhost:5000/tasks/"+id);
  }

  NewTask(addTask){
    return this.http.post<Task[]>("http://localhost:5000/tasks", addTask)
  }

}
