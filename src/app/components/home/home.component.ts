import { Component, OnInit } from '@angular/core';   
import { Homeservice } from '../../services/home.service';
import { Feature } from '../../model/feature.interface' ;
import { Project } from '../../model/project.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [Homeservice]
})
export class HomeComponent implements OnInit {
   CompanyName = 'SoftXpert Development';
   posts:any=[];
   advanceds:any=[];
     features:Feature[] = [
     { icon: 'assets/imgs/1.png' , description: 'mobile application development' , title: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s' },
     { icon: 'assets/imgs/2.png' , description: 'web application development' , title: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s' },
     { icon: 'assets/imgs/3.png' , description: 'Technical Support development' , title: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s' },
     { icon: 'assets/imgs/4.png' , description: 'software development' , title: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s' }
   ];
   project:Project[] = [
     { background: 'assets/imgs/1.jpg ' },
     { background: 'assets/imgs/10.jpg ' },
     { background: 'assets/imgs/3.jpg ' },
     { background: 'assets/imgs/4.jpg ' },
     { background: 'assets/imgs/2.jpg ' },
     { background: 'assets/imgs/6.jpg ' },
     { background: 'assets/imgs/7.jpg ' },
     { background: 'assets/imgs/8.jpg ' },
     { background: 'assets/imgs/9.jpg ' },
   ];

  
   constructor(public homeservice:Homeservice ) { 
     this.homeservice.getData().subscribe(
      data =>{ 
          this.posts.push(data[1]) 
      }
     ) ;
     this.homeservice.getAdvanceds().subscribe(
      data =>{
        for (var i=0; i <6 ; i++) {
          this.advanceds.push(data[i])
        }
      }
     ) ;
   }

   ngOnInit() {
   }
 
 }
 