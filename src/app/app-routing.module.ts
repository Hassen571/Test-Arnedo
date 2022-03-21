import { NgModule } from '@angular/core';
import {FeedComponent} from './feed/feed.component';
import {FavoritelistComponent} from './favoritelist/favoritelist.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes =[
  {path : 'home', component: FeedComponent},
  {path : 'favorites', component: FavoritelistComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
