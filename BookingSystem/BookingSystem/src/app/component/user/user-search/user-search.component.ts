import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent implements OnInit {
  username: string | undefined;

 constructor(public route : Router, public activateRoute : ActivatedRoute) { }



   ngOnInit(): void {
  this.activateRoute.paramMap.subscribe(()=>this.search())
  }

search(){

   this.route.navigateByUrl("/search/"+this.username);
  }

}
