import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import imagesData from '../../assets/images.json';
import {SharedService } from '../shared/shared.service';

interface Image {
  id: Number;
  photo: String;
  author: String;
  text: String;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  searchedKeyword: string;
  im : Image;
  message: string;
  
  LikeButtonClick(id :Number, photo: String){
    var imga= {
      id: id,
      photo: photo
    }
    var favs =  new Array
    if(localStorage.getItem('favs')){

      favs = JSON.parse(localStorage.getItem("favs"));
      favs.push(imga);
    }else{
      favs.push(imga);
    };
    localStorage.setItem('favs', JSON.stringify(favs));
    // this.favourites=localStorage.getItem('favs');
    console.log('fav:', favs);

    // this.shared.setMessage(this.im);
    console.log('item:', localStorage.getItem('favs'));
    
    
  }
  // message = "like this";
  constructor(private shared:SharedService) { }
  ngOnInit(): void {

  }
  likes :number =0;


   searchText:any;
  images: Image[] = imagesData;
  

}
