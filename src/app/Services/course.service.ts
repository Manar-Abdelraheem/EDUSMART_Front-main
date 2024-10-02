import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly DB_URL ="http://localhost:5299/api/course" //"https://jsonplaceholder.typicode.com/users";

  constructor(private readonly http:HttpClient) { }
  //fetch(url,{headers:{}, body:{}, method:"post"})
  
  //Handle All Requests ==> use HTTP[Methods]
  getCourses(){
    var result = this.http.get(this.DB_URL);
    console.log(result);
    return result;
  }
  GetCourseByID(id:any){
    return this.http.get(this.DB_URL+"/"+id);
  }
  getImages(imageUrl: string){
    return this.http.get(this.DB_URL+"/images");
  }

}
