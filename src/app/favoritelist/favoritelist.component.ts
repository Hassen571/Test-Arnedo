import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.css']
})
export class FavoritelistComponent implements OnInit {
  message : any;
  Delete(){}
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.message=this.shared.getMessage();
  }
  /**Delete(){
    this.message="";
  }**/

}
