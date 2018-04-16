import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx'; 
import "rxjs/add/operator/map"; 

@Injectable()
export class Homeservice {

    constructor( private http: Http ){ 
    }
    getData(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
        .map(res => res.json());
    }
    
    getAdvanceds(){
        return this.http.get("https://jsonplaceholder.typicode.com/photos")
        .map(res => res.json());
    }
}