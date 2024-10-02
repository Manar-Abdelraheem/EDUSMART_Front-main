import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private readonly http:HttpClient) { }
  GetAllLessonsByModuleID(id:any){
    return this.http.get("http://localhost:5299/api/lesson/"+id);
  }
  GetLessonByID(id:any){
    return this.http.get("http://localhost:5299/api/lesson/"+id);
  }
  GetLessonByCourseID(id:any){
    return this.http.get("http://localhost:5299/api/lesson/course/"+id);
  }


}
